/**
 * generate-og-pages.mjs
 *
 * Run after `vite build`. For each blog post it:
 *  1. Reads dist/index.html
 *  2. Strips the generic OG/twitter/title/description/canonical tags
 *  3. Injects post-specific tags
 *  4. Writes to dist/blog/<slug>/index.html
 *
 * Netlify (and any static host) serves the real file before any redirect rule,
 * so social bots see the correct OG tags without needing JavaScript.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");

// trijalmotors.com.np is still under DNS config — use Netlify URL for images
// so that Facebook/WhatsApp bots can actually fetch them.
// Update IMG_BASE to trijalmotors.com.np once DNS is live.
const SITE     = "https://trijalmotors.com.np";   // canonical URL (fine even before DNS)
const IMG_BASE = "https://trijalmotors.netlify.app"; // images must be reachable NOW


// ── Keep in sync with src/app/pages/Blog.tsx ──────────────────────────────────
const posts = [
  {
    slug: "wada-auto-show-pokhara-2024",
    title: "Trijal Motors at Wada Auto Show Pokhara 2024",
    excerpt:
      "We showcased the full Chery Wanda lineup at the first-ever WADA Auto Show — a major automobile exhibition in Gandaki Province. Here's what happened.",
    img: "/images/blogs/wadashow.jpeg",
    date: "2025-03-30",
    category: "Events",
  },
  {
    slug: "first-chery-wanda-delivery-baglung",
    title: "First Chery Wanda Delivery in Baglung District",
    excerpt:
      "A historic moment: the first Chery Wanda electric microbus delivered to a Baglung-based route operator, marking EV adoption in hill districts of Gandaki Province.",
    img: "/images/customer/customer1.jpeg",
    date: "2024-09-05",
    category: "Deliveries",
  },
  {
    slug: "why-chery-wanda-beats-diesel-nepal",
    title: "Why the Chery Wanda Beats Diesel for Nepal Route Operators",
    excerpt:
      "A detailed cost breakdown comparing the Chery Wanda electric microbus against equivalent diesel microbuses on a typical Gandaki Province route.",
    img: "/images/og-image.png",
    date: "2024-08-12",
    category: "Insights",
  },
  {
    slug: "catl-battery-technology-explained",
    title: "CATL Battery Technology: What It Means for Your Chery Wanda",
    excerpt:
      "A plain-language explanation of CATL's lithium iron phosphate battery chemistry — the same cells that power the Chery Wanda — and why it matters for Nepal's climate.",
    img: "/images/vehicles/12seater/12_seater_chery_wanda2.jpeg",
    date: "2024-07-20",
    category: "Technology",
  },
  {
    slug: "gandaki-ev-policy-2024",
    title: "Nepal EV Policy 2024: What It Means for Bus Operators in Gandaki",
    excerpt:
      "A summary of the Nepal government's 2024 EV incentives and how they apply to commercial microbus operators purchasing through Trijal Motors.",
    img: "/images/pokhara.webp",
    date: "2024-06-10",
    category: "Policy",
  },
  {
    slug: "trijal-motors-showroom-pokhara",
    title: "Visit Our Showroom in Pokhara-14, Chauthe",
    excerpt:
      "Our Pokhara showroom has the Chery Wanda on display year-round. Here's what to expect when you visit and how to get here.",
    img: "/images/showroom.jpeg",
    date: "2024-05-02",
    category: "About Us",
  },
];

// ── Read base HTML ─────────────────────────────────────────────────────────────
const baseHtml = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");

for (const post of posts) {
  const pageUrl   = `${SITE}/blog/${post.slug}`;
  const imgUrl    = `${IMG_BASE}${post.img}`;
  const fullTitle = `${post.title} | Trijal Motors Blog`;
  const published = new Date(post.date).toISOString();

  // Strip existing generic tags so we can replace them cleanly
  let html = baseHtml
    .replace(/<title>[^<]*<\/title>/i, "")
    .replace(/<meta\s+name=["']description["'][^>]*>/gi, "")
    .replace(/<link\s+rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<meta\s+property=["']og:[^"']*["'][^>]*>/gi, "")
    .replace(/<meta\s+property=["']article:[^"']*["'][^>]*>/gi, "")
    .replace(/<meta\s+name=["']twitter:[^"']*["'][^>]*>/gi, "");

  // Build replacement block
  const ogTags = `
    <title>${fullTitle}</title>
    <meta name="description" content="${post.excerpt.replace(/"/g, "&quot;")}" />
    <link rel="canonical" href="${pageUrl}" />

    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${pageUrl}" />
    <meta property="og:title" content="${fullTitle}" />
    <meta property="og:description" content="${post.excerpt.replace(/"/g, "&quot;")}" />
    <meta property="og:image" content="${imgUrl}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="Trijal Motors Pvt. Ltd." />
    <meta property="og:locale" content="en_NP" />

    <!-- Article tags -->
    <meta property="article:published_time" content="${published}" />
    <meta property="article:author" content="Trijal Motors Pvt. Ltd." />
    <meta property="article:section" content="${post.category}" />

    <!-- Twitter / X Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${fullTitle}" />
    <meta name="twitter:description" content="${post.excerpt.replace(/"/g, "&quot;")}" />
    <meta name="twitter:image" content="${imgUrl}" />`;

  // Inject right after <head>
  html = html.replace("<head>", `<head>${ogTags}`);

  // Write to dist/blog/<slug>/index.html
  const outDir = path.join(DIST, "blog", post.slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");

  console.log(`✓  /blog/${post.slug}`);
}

console.log(`\n✅ OG pages generated for ${posts.length} blog posts.`);
