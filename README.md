# Trijal Motors

Official website for **Trijal Motors** — an authorized dealer of Chery Wanda vehicles in Nepal.

## Getting Started

This project uses **pnpm** (see `pnpm-workspace.yaml`) — not npm.

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm run dev
```

Build for production:

```bash
pnpm run build
```

> `pnpm run dev` and `pnpm run build` also regenerate the blog content automatically (see [Blog System](#blog-system) below) — you don't need to run anything extra by hand.

## Tech Stack

- **React** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **shadcn/ui** (UI components)
- **React Router** (navigation)

## Deployment

This project is configured for deployment on **Netlify**. See [`netlify.toml`](./netlify.toml) for build configuration.

---

## Blog System

Blog posts are written as **markdown files with frontmatter**, not hardcoded in `.tsx`. This is what makes adding post #7 through #100 a one-file change instead of a multi-file edit.

### How it works

```
content/blog/*.md               ← you write these
        │
        ▼  (pnpm predev / prebuild hook)
scripts/generate-blog-data.mjs  ← parses + validates frontmatter, converts markdown → HTML
        │
        ▼
src/content/generated-posts.ts  ← AUTO-GENERATED, gitignored, do not edit by hand
        │
        ▼
src/app/pages/Blog.tsx          ← imports { posts } from generated-posts.ts and renders them
```

Social/link-preview crawlers (Facebook, WhatsApp, X) don't execute JavaScript, so they can't see the client-side meta tags React sets. `scripts/generate-og-pages.mjs` solves this separately: after `vite build`, it reads the same `content/blog/*.md` files and writes a real static `dist/blog/<slug>/index.html` per post with the correct `<title>`/OG tags baked in. Both scripts read from the same markdown source — there is nothing to hand-copy or keep in sync between them.

### Adding a new post

1. Create a new file: `content/blog/your-post-slug.md`. The filename **is** the URL slug.
2. Add frontmatter + body:

   ```md
   ---
   title: "Your Post Title"
   excerpt: "One or two sentences, under 160 characters — used as the meta description."
   date: 2026-01-15
   category: Insights   # must be one of: Events, Deliveries, Insights, Technology, Policy, About Us
   image: /images/your-image.jpeg
   imageAlt: "Descriptive alt text for the image"
   keywords: ["optional", "extra", "seo terms"]
   ---

   Opening paragraph — no heading needed for the first section.

   ## A subheading

   More content. Use `##` for section headings; they become real `<h2>` tags,
   which matters both for readability and for how Google/AI parse the post's structure.
   ```

3. Run `pnpm run dev` to preview locally. If a required field is missing, the title/excerpt is too long, or the category is misspelled, the build **fails immediately** with a clear error — it won't let a broken post through silently.
4. Commit `content/blog/your-post-slug.md`, push, deploy. Nothing else needs editing.

### Editing an existing post

Edit the `.md` file directly. If you're updating a post that's already been live a while, add an `updated:` date to the frontmatter — it powers the `dateModified` field in the post's structured data (a freshness signal for search/AI).

### Optional frontmatter fields

| Field     | Purpose                                                              |
|-----------|-----------------------------------------------------------------------|
| `updated` | Date the post was last edited. Omit if never edited after publishing. |
| `keywords`| Extra terms added to the post's schema.org `keywords`. Category and brand terms (Chery Wanda, Trijal Motors, EV Nepal) are added automatically — only put post-specific terms here. |
| `draft`   | Set `true` to keep a post out of the site and sitemap while you're still writing it. |

### Files involved (don't edit `generated-posts.ts` by hand)

| File | Edit it? |
|---|---|
| `content/blog/*.md` | ✅ Yes — this is where all content lives |
| `scripts/generate-blog-data.mjs` | Only if changing validation rules or the markdown→HTML pipeline itself |
| `scripts/generate-og-pages.mjs` | Only if changing social-preview tag format |
| `src/content/types.ts` | Only if changing the `Post` shape |
| `src/content/generated-posts.ts` | ❌ Never — auto-generated, gitignored, regenerates on every `dev`/`build` |
| `src/app/pages/Blog.tsx` | Only for layout/UI changes — content itself never touches this file |

### pnpm-specific setup note

pnpm does **not** run `pre`/`post` npm lifecycle scripts by default (unlike npm). This repo's `.npmrc` has:

```
enable-pre-post-scripts=true
```

If that line is ever missing (e.g. someone regenerates `.npmrc`), the `predev`/`prebuild`/`postbuild` hooks silently stop running — the build will "succeed" but serve stale or missing blog content, with no error. If blog posts ever seem out of date after a build, check this first.

---
### For Videos

  // ── Videos ──────────────────────────────────────────────────────────────────
  // YouTube: replace VIDEO_ID with the part after ?v= in the YouTube URL
  // (thumbnail is fetched automatically from YouTube — no thumb needed)
  // { kind: "youtube", src: "VIDEO_ID", caption: "Chery Wanda · Launch Event · Pokhara 2026", description: "...", uploadDate: "2026-06-01" },
  //
  // Local:   drop the file in public/videos/ then reference it here
  // (cover image is auto-generated from the video's first frame — no thumb needed)
  // { kind: "local", src: "/videos/handover-baglung.mp4", caption: "Handover · Baglung · 2024", description: "...", uploadDate: "2024-05-01" },
  { kind: "local", src: "/videos/trijal-promo.mp4", caption: "Trijal Motors · Chery Wanda EV Pokhara Promo", description: "Official promo video for Trijal Motors, the authorized Jagadamba Motors Chery Wanda electric microbus dealer in Pokhara, Gandaki Province.", uploadDate: "2026-01-01" },
];
const ytThumb = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
const ytEmbed = (id: string) => `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
// Returns a static image thumb when one is available/applicable.
// Local videos without an explicit `thumb` return "" — those are rendered
// with a live <video> tag instead so the browser shows the first frame itself.

## SEO & Structured Data

JSON-LD schema components live in `src/app/components/SeoSchemas.tsx`:

| Component | Used on |
|---|---|
| `FaqSchema` / `LocalBusinessSchema` | Home page |
| `OrganizationSchema` | Pages that need standalone entity info |
| `PersonSchema` | About page (sales manager) |
| `BreadcrumbSchema` | All inner pages |
| `ArticleSchema` / `BlogSchema` | Blog post / blog index |
| `ImageGallerySchema` | Gallery page |
| `VehicleSchema` | Vehicles page |

A few facts are intentionally **not** hardcoded and should be kept consistent everywhere if they ever change: showroom hours, phone numbers, and the "prices are quoted individually, not published" policy. These appear in `SeoSchemas.tsx`, `Contact.tsx`, `PageMeta.tsx` (page descriptions), and `llms.txt` — if one changes, check all of them.

`llms.txt` (repo root) is a plain-text fact sheet for AI crawlers/answer engines. It should be updated whenever a fact it states (battery specs, hours, phone numbers, pricing policy) changes elsewhere on the site.