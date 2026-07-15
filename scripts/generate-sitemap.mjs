/**
 * generate-sitemap.mjs
 * Auto-generates public/sitemap.xml (with image sitemap extension) from:
 *   - Hard-coded static pages (with key vehicle/gallery images)
 *   - All published blog posts in content/blog/ (date + hero image from frontmatter)
 *
 * Google's Image Sitemap spec:
 *   https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
 *
 * Run automatically via the prebuild hook in package.json.
 * Run manually: node scripts/generate-sitemap.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SITE = "https://trijalmotors.com.np";
const BLOG_DIR = path.join(ROOT, "content", "blog");
const PUBLIC_DIR = path.join(ROOT, "public");
const OUT_FILE = path.join(ROOT, "public", "sitemap.xml");
const TODAY = new Date().toISOString().slice(0, 10);

// ─── Helper: scan a directory for images and return absolute URLs ─────────────
function scanImages(relDir, titlePrefix = "") {
  const absDir = path.join(PUBLIC_DIR, relDir);
  if (!fs.existsSync(absDir)) return [];
  return fs
    .readdirSync(absDir)
    .filter((f) => /\.(webp|jpg|jpeg|png|gif)$/i.test(f))
    .map((f) => ({
      loc: `${SITE}/${relDir}/${f}`.replace(/\/+/g, "/").replace(":/", "://"),
      title: titlePrefix
        ? `${titlePrefix} — ${f.replace(/\.[^.]+$/, "").replace(/_/g, " ")}`
        : f.replace(/\.[^.]+$/, "").replace(/_/g, " "),
    }));
}

// ─── Static pages with their key images ──────────────────────────────────────
const STATIC_PAGES = [
  {
    loc: "/",
    lastmod: TODAY,
    changefreq: "weekly",
    priority: "1.0",
    images: [
      { loc: `${SITE}/images/showroom.webp`,           title: "Trijal Motors Pvt Ltd showroom — Pokhara-14, Chauthe" },
      { loc: `${SITE}/images/logo-emblem-512x512.png`, title: "Trijal Motors official logo emblem" },
      { loc: `${SITE}/images/jagadamba.png`,            title: "Jagadamba Motors authorized dealer badge" },
      { loc: `${SITE}/images/cherywandalogo.png`,       title: "Chery Wanda electric microbus brand logo" },
    ],
  },
  {
    loc: "/vehicles/chery-wanda",
    lastmod: TODAY,
    changefreq: "monthly",
    priority: "0.9",
    images: [
      ...scanImages("images/vehicles/16seater", "Chery Wanda 16-seater EV microbus"),
      ...scanImages("images/vehicles/14seater", "Chery Wanda 14-seater EV microbus"),
      ...scanImages("images/vehicles/12seater", "Chery Wanda 12-seater EV microbus"),
      ...scanImages("images/vehicles/11seater", "Chery Wanda 11-seater EV microbus"),
      { loc: `${SITE}/images/vehicles/chery_wanda_fleet.png`, title: "Chery Wanda EV microbus full fleet — Trijal Motors Nepal" },
    ],
  },
  {
    loc: "/gallery",
    lastmod: TODAY,
    changefreq: "monthly",
    priority: "0.7",
    images: [
      ...scanImages("images/customer", "Chery Wanda customer delivery — Trijal Motors"),
      { loc: `${SITE}/images/showroom.webp`, title: "Trijal Motors showroom interior — Pokhara" },
    ],
  },
  {
    loc: "/financing",
    lastmod: TODAY,
    changefreq: "monthly",
    priority: "0.8",
    images: [],
  },
  {
    loc: "/blog",
    lastmod: TODAY,
    changefreq: "weekly",
    priority: "0.8",
    images: [],
  },
  {
    loc: "/contact",
    lastmod: TODAY,
    changefreq: "yearly",
    priority: "0.7",
    images: [
      { loc: `${SITE}/images/showroom.webp`, title: "Trijal Motors Pvt Ltd — Pokhara-14, Chauthe, Kaski" },
    ],
  },
  {
    loc: "/about",
    lastmod: TODAY,
    changefreq: "yearly",
    priority: "0.6",
    images: [
      { loc: `${SITE}/images/jagadamba.png`,      title: "Jagadamba Motors — authorized EV distributor Nepal" },
      { loc: `${SITE}/images/logo-eagle.png`,     title: "Trijal Motors Pvt Ltd logo" },
    ],
  },
];

// ─── Blog posts ───────────────────────────────────────────────────────────────
function normImage(img) {
  if (!img) return null;
  let s = String(img).trim();
  if (s.startsWith("public/")) s = s.slice("public".length);
  if (!s.startsWith("/") && !s.startsWith("http")) s = "/" + s;
  return s.startsWith("http") ? s : `${SITE}${s}`;
}

const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

const blogPages = files
  .map((f) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, f), "utf-8");
    const { data } = matter(raw);
    const slug = f.replace(/\.md$/, "");
    const lastmod = new Date(data.updated || data.date).toISOString().slice(0, 10);
    const imgLoc = normImage(data.image);
    return {
      slug,
      lastmod,
      draft: data.draft ?? false,
      images: imgLoc
        ? [{ loc: imgLoc, title: data.imageAlt || data.title }]
        : [],
    };
  })
  .filter((p) => !p.draft)
  .sort((a, b) => b.lastmod.localeCompare(a.lastmod))
  .map((p) => ({
    loc: `/blog/${p.slug}`,
    lastmod: p.lastmod,
    changefreq: "yearly",
    priority: "0.6",
    images: p.images,
  }));

// ─── Render XML entry ─────────────────────────────────────────────────────────
function renderUrl(page) {
  const imageXml = (page.images || [])
    .map(
      (img) => `
    <image:image>
      <image:loc>${img.loc}</image:loc>${img.title ? `\n      <image:title>${img.title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</image:title>` : ""}
    </image:image>`
    )
    .join("");

  return `
  <url>
    <loc>${SITE}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${imageXml}
  </url>`;
}

// ─── Combine & write ──────────────────────────────────────────────────────────
const allPages = [...STATIC_PAGES, ...blogPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages.map(renderUrl).join("")}
</urlset>
`;

fs.writeFileSync(OUT_FILE, xml, "utf-8");

const totalImages = allPages.reduce((n, p) => n + (p.images?.length ?? 0), 0);
console.log(`✓ Generated ${OUT_FILE}`);
console.log(`  ${STATIC_PAGES.length} static page(s) + ${blogPages.length} blog post(s) = ${allPages.length} total URLs`);
console.log(`  ${totalImages} image entries included for Google Image Search`);
