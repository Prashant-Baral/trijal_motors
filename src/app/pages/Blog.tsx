import { Link, useParams } from "react-router";
import { useState } from "react";
import { Calendar, ArrowRight, ChevronRight, Share2, Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react";
import { C, wa, IMG, BtnRed, SectionHead } from "../shared";
import PageMeta, { pageMeta } from "../components/PageMeta";
import { BreadcrumbSchema, ArticleSchema, BlogSchema } from "../components/SeoSchemas";
import { posts } from "../../content/generated-posts";
import type { Post } from "../../content/types";
const SITE = "https://trijalmotors.com.np";
function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-NP", { year: "numeric", month: "long", day: "numeric" });
}
// Resolve a post image to an absolute URL for schema/og purposes.
function absImg(img: string) {
  return img.startsWith("http") ? img : `${SITE}${img.startsWith("/") ? "" : "/"}${img}`;
}
function ShareBar({ post }: { post: Post }) {
  const [copied, setCopied] = useState(false);
  // Use the real current URL — works on any domain (netlify.app, custom domain, etc.)
  const pageUrl = typeof window !== "undefined" ? window.location.href : `https://trijalmotors.com.np/blog/${post.slug}`;
  const shareText = encodeURIComponent(`${post.title} — Trijal Motors`);
  const shareUrl = encodeURIComponent(pageUrl);
  const platforms = [
    {
      id: "whatsapp",
      label: "WhatsApp",
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.551 4.103 1.513 5.83L.057 23.57a.5.5 0 0 0 .614.614l5.74-1.456A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.892 0-3.667-.5-5.2-1.376l-.372-.22-3.857.979.997-3.76-.242-.387A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>,
      href: `https://wa.me/?text=${shareText}%20${shareUrl}`,
      bg: "#25D366",
      color: "#fff",
    },
    {
      id: "facebook",
      label: "Facebook",
      icon: <Facebook size={15} />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      bg: "#1877F2",
      color: "#fff",
    },
    {
      id: "twitter",
      label: "X / Twitter",
      icon: <Twitter size={15} />,
      href: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
      bg: "#000",
      color: "#fff",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: <Linkedin size={15} />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      bg: "#0A66C2",
      color: "#fff",
    },
  ];
  function copyLink() {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  }
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 10,
        marginBottom: 32,
        paddingTop: 4,
      }}
    >
      {/* Label */}
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <Share2 size={13} color={C.grayLight} />
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 9,
            color: C.grayLight,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
          }}
        >
          Share
        </span>
      </div>
      {/* Platform buttons */}
      {platforms.map((p) => (
        <a
          key={p.id}
          id={`share-${p.id}`}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          title={`Share on ${p.label}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: p.bg,
            color: p.color,
            fontFamily: "Inter, sans-serif",
            fontSize: 11,
            fontWeight: 600,
            padding: "7px 14px",
            borderRadius: 100,
            textDecoration: "none",
            transition: "transform 0.15s, box-shadow 0.15s",
            boxShadow: "0 1px 6px rgba(0,0,0,0.15)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 14px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 6px rgba(0,0,0,0.15)";
          }}
        >
          {p.icon}
          {p.label}
        </a>
      ))}
      {/* Copy link button */}
      <button
        id="share-copy-link"
        onClick={copyLink}
        title="Copy link"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: copied ? "#22c55e" : "transparent",
          color: copied ? "#fff" : C.gray,
          fontFamily: "Inter, sans-serif",
          fontSize: 11,
          fontWeight: 600,
          padding: "7px 14px",
          borderRadius: 100,
          border: `1px solid ${copied ? "#22c55e" : C.border}`,
          cursor: "pointer",
          transition: "background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        {copied ? <Check size={13} /> : <Link2 size={13} />}
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}
function BlogHero() {
  return (
    <div
      style={{
        background: C.black,
        paddingTop: 36,
        paddingBottom: 28,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 10,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          — News & updates
        </p>
        <h1
          className="uppercase font-bold leading-none mb-5"
          style={{
            fontFamily: "Oswald, sans-serif",
            fontSize: "clamp(22px, 3.5vw, 44px)",
            color: C.white,
          }}
        >
          Trijal Motors{" "}
          <span style={{ color: "#ff6b6b" }}>Blog</span>
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.75,
            maxWidth: 500,
          }}
        >
          Events, customer deliveries, EV insights, and news from the official
          Jagadamba Motors dealer for Gandaki Province.
        </p>
      </div>
    </div>
  );
}
function PostCard({ post, featured }: { post: Post; featured?: boolean }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block"
      style={{
        borderRadius: 18,
        overflow: "hidden",
        background: C.white,
        border: `1px solid ${C.border}`,
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.2s, transform 0.2s",
        textDecoration: "none",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.12)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      <div
        style={{
          height: featured ? 260 : 200,
          overflow: "hidden",
          background: C.black,
          position: "relative",
        }}
      >
        <img
          src={post.img}
          alt={post.title}
          loading={featured ? "eager" : "lazy"}
          {...(featured ? { fetchPriority: "high" } : {})}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ opacity: 0.88 }}
        />
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            background: C.red,
            color: C.white,
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 8,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: 20,
          }}
        >
          {post.category}
        </div>
      </div>
      {/* Body */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <Calendar size={11} color={C.grayLight} />
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 9,
              color: C.grayLight,
              letterSpacing: "0.1em",
            }}
          >
            {fmtDate(post.date)}
          </span>
        </div>
        <h2
          style={{
            fontFamily: "Oswald, sans-serif",
            fontSize: featured ? 22 : 18,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            color: C.black,
            lineHeight: 1.25,
            marginBottom: 10,
          }}
        >
          {post.title}
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            color: C.gray,
            lineHeight: 1.7,
            marginBottom: 16,
          }}
        >
          {post.excerpt}
        </p>
        <div className="flex items-center gap-1.5">
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 9,
              color: C.red,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            Read more
          </span>
          <ArrowRight size={11} color={C.red} />
        </div>
      </div>
    </Link>
  );
}
export default function Blog() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageMeta {...pageMeta.blog} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE}/` },
          { name: "Blog", url: `${SITE}/blog` },
        ]}
      />
      {/* Tells crawlers this page IS a Blog containing these posts, not just
          an unstructured list of links. */}
      <BlogSchema
        url={`${SITE}/blog`}
        name="Trijal Motors Blog"
        description="Events, customer deliveries, EV insights, and news from the official Jagadamba Motors dealer for Gandaki Province."
        posts={posts.map((p) => ({
          headline: p.title,
          url: `${SITE}/blog/${p.slug}`,
          datePublished: new Date(p.date).toISOString(),
          image: absImg(p.img),
        }))}
      />
      <BlogHero />
      <section style={{ background: C.offWhite }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
          {featured && (
            <div className="mb-8">
              <PostCard post={featured} featured />
            </div>
          )}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map(p => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          )}
        </div>
      </section>
      {/* CTA strip */}
      <section
        style={{
          background: C.black,
          borderTop: `1px solid rgba(255,255,255,0.08)`,
          padding: "48px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "clamp(20px, 3vw, 30px)",
                fontWeight: 700,
                textTransform: "uppercase",
                color: C.white,
                letterSpacing: "0.06em",
                marginBottom: 6,
              }}
            >
              Interested in the Chery Wanda?
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
              Our team in Pokhara-14 is ready to help you choose the right variant.
            </p>
          </div>
          <BtnRed href={wa("Hi, I read your blog and would like to enquire about the Chery Wanda.")}>
            Ask on WhatsApp <ChevronRight size={13} />
          </BtnRed>
        </div>
      </section>
    </>
  );
}
export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);
  if (!post) {
    return (
      <div style={{ background: C.white, minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "Oswald, sans-serif", fontSize: 28, fontWeight: 700, color: C.black, textTransform: "uppercase", marginBottom: 12 }}>Post not found</p>
          <Link to="/blog" style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: C.red, textDecoration: "none", letterSpacing: "0.12em", textTransform: "uppercase" }}>← Back to blog</Link>
        </div>
      </div>
    );
  }
  const others = posts.filter(p => p.slug !== slug).slice(0, 3);
  const postUrl = `${SITE}/blog/${post.slug}`;
  return (
    <>
      <PageMeta
        title={post.title + " | Trijal Motors Blog"}
        description={post.excerpt}
        ogImage={post.img.startsWith("http") ? post.img : post.img}
        article={{
          publishedTime: new Date(post.date).toISOString(),
          author: "Trijal Motors Pvt. Ltd.",
          section: post.category,
        }}
      />
      {/* Structured data: lets Google, AI assistants, and other engines
          understand this as an article (not just a page of text), and
          shows the breadcrumb trail (Home › Blog › Post) in rich results. */}
      <ArticleSchema
        headline={post.title}
        description={post.excerpt}
        datePublished={new Date(post.date).toISOString()}
        dateModified={new Date(post.updated || post.date).toISOString()}
        image={absImg(post.img)}
        url={postUrl}
        section={post.category}
        keywords={[post.category, "Chery Wanda", "Trijal Motors", "EV Nepal", ...(post.keywords || [])]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE}/` },
          { name: "Blog", url: `${SITE}/blog` },
          { name: post.title, url: postUrl },
        ]}
      />
      {/* Post hero */}
      <div
        style={{
          background: C.black,
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 pt-10 pb-0">
          <Link
            to="/blog"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 9,
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              marginBottom: 20,
            }}
          >
            ← Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span
              style={{
                background: C.red,
                color: C.white,
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 8,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: 20,
              }}
            >
              {post.category}
            </span>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>
              {fmtDate(post.date)}
            </span>
          </div>
          <h1
            className="uppercase font-bold leading-tight mb-6"
            style={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "clamp(20px, 4vw, 52px)",
              color: C.white,
              letterSpacing: "0.04em",
            }}
          >
            {post.title}
          </h1>
        </div>
        {/* Hero image */}
        <div className="max-w-4xl mx-auto px-4 md:px-10">
          <div style={{ borderRadius: "18px 18px 0 0", overflow: "hidden", height: 320, background: C.black }}>
            <img src={post.img} alt={post.title} fetchPriority="high" loading="eager" className="w-full h-full object-cover" style={{ opacity: 0.9 }} />
          </div>
        </div>
      </div>
      {/* Post body */}
      <section style={{ background: C.white }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-14">
          {/* Excerpt */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 17,
              color: C.gray,
              lineHeight: 1.8,
              fontStyle: "italic",
              borderLeft: `3px solid ${C.red}`,
              paddingLeft: 20,
              marginBottom: 32,
            }}
          >
            {post.excerpt}
          </p>
          {/* Body — rendered from markdown */}
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
          />
          {/* Share bar */}
          <ShareBar post={post} />
          {/* Author / source note */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: `1px solid ${C.border}` }}
          >
            <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: C.grayLight, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Published by Trijal Motors Pvt. Ltd. · Pokhara-14, Chauthe, Kaski, Gandaki Province, Nepal
            </p>
          </div>
          {/* CTA */}
          <div
            className="mt-10 p-8"
            style={{
              borderRadius: 18,
              background: C.offWhite,
              border: `1px solid ${C.border}`,
              display: "flex",
              flexDirection: "column" as const,
              gap: 16,
            }}
          >
            <p style={{ fontFamily: "Oswald, sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: C.black }}>
              Questions? We're on WhatsApp.
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: C.gray, lineHeight: 1.7 }}>
              Our team at Trijal Motors Pokhara replies fast. Reach us on WhatsApp or call +977-985-605-8195.
            </p>
            <div>
              <BtnRed href={wa(`Hi, I read your post "${post.title}" and have a question.`)}>
                Ask on WhatsApp <ChevronRight size={13} />
              </BtnRed>
            </div>
          </div>
        </div>
      </section>
      {/* More posts */}
      {others.length > 0 && (
        <section style={{ background: C.offWhite, borderTop: `1px solid ${C.border}` }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
            <SectionHead eyebrow="More from the blog" title="Related posts" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {others.map(p => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}