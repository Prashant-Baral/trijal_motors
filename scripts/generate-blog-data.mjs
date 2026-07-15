import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";
import { marked } from "marked";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(ROOT, "content", "blog");
const OUT_FILE = path.join(ROOT, "src", "content", "generated-posts.ts");

const REQUIRED_FIELDS = ["title", "excerpt", "date", "category", "image", "imageAlt"];
const VALID_CATEGORIES = ["Events", "Deliveries", "Insights", "Technology", "Policy", "About Us"];

function slugFromFilename(filename) {
  return filename.replace(/\.md$/, "");
}

function validate(slug, data) {
  const errors = [];
  for (const field of REQUIRED_FIELDS) {
    if (!data[field]) errors.push(`missing required field "${field}"`);
  }
  if (data.title && data.title.length > 70) {
    errors.push(`title is ${data.title.length} chars — keep under ~70 so Google doesn't truncate it`);
  }
  if (data.excerpt && data.excerpt.length > 160) {
    errors.push(`excerpt is ${data.excerpt.length} chars — keep under ~160 for meta description use`);
  }
  if (data.category && !VALID_CATEGORIES.includes(data.category)) {
    errors.push(`category "${data.category}" is not one of: ${VALID_CATEGORIES.join(", ")}`);
  }
  if (errors.length) {
    throw new Error(`Post "${slug}" has invalid frontmatter:\n  - ${errors.join("\n  - ")}`);
  }
}

if (!fs.existsSync(CONTENT_DIR)) {
  console.error(`✗ content directory not found: ${CONTENT_DIR}`);
  process.exit(1);
}

const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));

if (files.length === 0) {
  console.warn(`⚠ No .md files found in ${CONTENT_DIR}`);
}

const posts = [];
const seenSlugs = new Set();

for (const file of files) {
  const slug = slugFromFilename(file);
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
  const { data, content } = matter(raw);

  validate(slug, data);

  if (seenSlugs.has(slug)) {
    throw new Error(`Duplicate slug "${slug}" — two files produce the same URL.`);
  }
  seenSlugs.add(slug);

  const bodyHtml = marked.parse(content.trim());

  // Normalize image path: strip "public/" prefix, ensure leading "/"
  let img = String(data.image ?? "").trim();
  if (img.startsWith("public/")) img = img.slice("public".length);
  if (img && !img.startsWith("/") && !img.startsWith("http")) img = "/" + img;

  posts.push({
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date: new Date(data.date).toISOString().slice(0, 10),
    updated: data.updated ? new Date(data.updated).toISOString().slice(0, 10) : undefined,
    category: data.category,
    keywords: data.keywords ?? [],
    img,
    imageAlt: data.imageAlt,
    draft: data.draft ?? false,
    bodyHtml,
  });
}

posts.sort((a, b) => new Date(b.date) - new Date(a.date));

const published = posts.filter((p) => !p.draft);
const drafts = posts.filter((p) => p.draft);

const fileContents = `// AUTO-GENERATED — do not edit. Edit content/blog/*.md files instead.

import type { Post } from "./types";

export const posts: Post[] = ${JSON.stringify(published, null, 2)};
`;

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, fileContents, "utf-8");

console.log(`✓ Generated ${OUT_FILE}`);
console.log(`  ${published.length} published post(s)${drafts.length ? `, ${drafts.length} draft(s) skipped` : ""}`);
