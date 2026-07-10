// Netlify Edge Function — injects per-post Open Graph tags for social bots.
// Crawlers (Facebook, WhatsApp, Twitter, LinkedIn) don't run JS, so they only
// see what's in the HTML. This function rewrites the <head> for bot traffic.

const SITE = "https://trijalmotors.com.np";

// ── Mirror the post data from Blog.tsx (slugs, titles, excerpts, images) ──────
// Keep in sync with src/app/pages/Blog.tsx
const posts: Record<string, { title: string; excerpt: string; img: string; date: string; category: string }> = {
  "wada-auto-show-pokhara-2024": {
    title: "Trijal Motors at Wada Auto Show Pokhara 2024",
    excerpt:
      "We showcased the full Chery Wanda lineup at the first-ever WADA Auto Show — a major automobile exhibition in Gandaki Province. Here's what happened.",
    img: `${SITE}/images/blogs/wadashow.jpeg`,
    date: "2025-03-30",
    category: "Events",
  },
  "first-chery-wanda-delivery-baglung": {
    title: "First Chery Wanda Delivery in Baglung District",
    excerpt:
      "A historic moment: the first Chery Wanda electric microbus delivered to a Baglung-based route operator, marking EV adoption in hill districts of Gandaki Province.",
    img: `${SITE}/images/customer/customer1.jpeg`,
    date: "2024-09-05",
    category: "Deliveries",
  },
  "why-chery-wanda-beats-diesel-nepal": {
    title: "Why the Chery Wanda Beats Diesel for Nepal Route Operators",
    excerpt:
      "A detailed cost breakdown comparing the Chery Wanda electric microbus against equivalent diesel microbuses on a typical Gandaki Province route.",
    img: `${SITE}/images/og-image.png`,
    date: "2024-08-12",
    category: "Insights",
  },
  "catl-battery-technology-explained": {
    title: "CATL Battery Technology: What It Means for Your Chery Wanda",
    excerpt:
      "A plain-language explanation of CATL's lithium iron phosphate battery chemistry — the same cells that power the Chery Wanda — and why it matters for Nepal's climate.",
    img: `${SITE}/images/vehicles/12seater/12_seater_chery_wanda2.jpeg`,
    date: "2024-07-20",
    category: "Technology",
  },
  "gandaki-ev-policy-2024": {
    title: "Nepal EV Policy 2024: What It Means for Bus Operators in Gandaki",
    excerpt:
      "A summary of the Nepal government's 2024 EV incentives and how they apply to commercial microbus operators purchasing through Trijal Motors.",
    img: `${SITE}/images/pokhara.webp`,
    date: "2024-06-10",
    category: "Policy",
  },
  "trijal-motors-showroom-pokhara": {
    title: "Visit Our Showroom in Pokhara-14, Chauthe",
    excerpt:
      "Our Pokhara showroom has the Chery Wanda on display year-round. Here's what to expect when you visit and how to get here.",
    img: `${SITE}/images/showroom.jpeg`,
    date: "2024-05-02",
    category: "About Us",
  },
};

// ── Social-bot user-agent detector ────────────────────────────────────────────
function isSocialBot(ua: string): boolean {
  const bots = [
    "facebookexternalhit",
    "facebot",
    "twitterbot",
    "linkedinbot",
    "whatsapp",
    "slackbot",
    "telegrambot",
    "discordbot",
    "googlebot",
    "bingbot",
    "pinterest",
    "vkshare",
    "w3c_validator",
  ];
  const lower = ua.toLowerCase();
  return bots.some((b) => lower.includes(b));
}

// ── Edge function handler ──────────────────────────────────────────────────────
export default async function handler(request: Request): Promise<Response | undefined> {
  const url = new URL(request.url);
  const ua = request.headers.get("user-agent") ?? "";

  // Only intercept /blog/:slug paths
  const match = url.pathname.match(/^\/blog\/([^/]+)\/?$/);
  if (!match) return; // pass through for non-blog URLs

  // Only rewrite for social bots — regular users get normal SPA
  if (!isSocialBot(ua)) return;

  const slug = match[1];
  const post = posts[slug];

  // Unknown slug — fall through to SPA (will show 404 in app)
  if (!post) return;

  // Fetch the original index.html from the CDN
  const origin = new URL(request.url).origin;
  const res = await fetch(`${origin}/index.html`);
  let html = await res.text();

  const pageUrl = `${SITE}/blog/${slug}`;
  const fullTitle = `${post.title} | Trijal Motors Blog`;
  const publishedISO = new Date(post.date).toISOString();

  // Build the injected meta block
  const ogBlock = `
  <!-- injected by og-meta edge function -->
  <title>${fullTitle}</title>
  <meta name="description" content="${post.excerpt}" />
  <link rel="canonical" href="${pageUrl}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${pageUrl}" />
  <meta property="og:title" content="${fullTitle}" />
  <meta property="og:description" content="${post.excerpt}" />
  <meta property="og:image" content="${post.img}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="Trijal Motors Pvt. Ltd." />
  <meta property="article:published_time" content="${publishedISO}" />
  <meta property="article:author" content="Trijal Motors Pvt. Ltd." />
  <meta property="article:section" content="${post.category}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${fullTitle}" />
  <meta name="twitter:description" content="${post.excerpt}" />
  <meta name="twitter:image" content="${post.img}" />`;

  // Replace existing generic og tags + title with post-specific ones
  // We strip the generic OG tags first, then inject ours right before </head>
  html = html
    .replace(/<title>[^<]*<\/title>/, "")
    .replace(/<meta property="og:[^"]*"[^>]*>/g, "")
    .replace(/<meta name="twitter:[^"]*"[^>]*>/g, "")
    .replace(/<meta name="description"[^>]*>/g, "")
    .replace(/<link rel="canonical"[^>]*>/g, "")
    .replace("</head>", `${ogBlock}\n</head>`);

  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
      "cache-control": "public, max-age=3600",
    },
  });
}

export const config = { path: "/blog/*" };
