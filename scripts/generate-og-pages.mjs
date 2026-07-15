import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const CONTENT_DIR = path.join(ROOT, "content", "blog");

const SITE = "https://trijalmotors.com.np";
const IMG_BASE = "https://trijalmotors.netlify.app";

function loadPosts() {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { data } = matter(fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8"));
      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        img: data.image,
        date: data.date,
        category: data.category,
        draft: data.draft ?? false,
      };
    })
    .filter((p) => !p.draft);
}

const posts = loadPosts();
const baseHtml = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");

for (const post of posts) {
  const pageUrl = `${SITE}/blog/${post.slug}`;
  const imgUrl = `${IMG_BASE}${post.img}`;
  const fullTitle = `${post.title} | Trijal Motors Blog`;
  const published = new Date(post.date).toISOString();

  let html = baseHtml
    .replace(/<title>[^<]*<\/title>/i, "")
    .replace(/<meta\s+name=["']description["'][^>]*>/gi, "")
    .replace(/<link\s+rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<meta\s+property=["']og:[^"']*["'][^>]*>/gi, "")
    .replace(/<meta\s+property=["']article:[^"']*["'][^>]*>/gi, "")
    .replace(/<meta\s+name=["']twitter:[^"']*["'][^>]*>/gi, "");

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
    <meta property="og:image:secure_url" content="${imgUrl}" />
    <meta property="og:image:type" content="image/jpeg" />
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

  html = html.replace("<head>", `<head>${ogTags}`);

  const outDir = path.join(DIST, "blog", post.slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");

  console.log(`✓  /blog/${post.slug}`);
}

console.log(`\n✅ OG pages generated for ${posts.length} blog posts.`);
