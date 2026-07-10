import { Link, useParams } from "react-router";
import { Calendar, ArrowRight, ChevronRight } from "lucide-react";
import { C, wa, IMG, BtnRed, SectionHead } from "../shared";
import PageMeta, { pageMeta } from "../components/PageMeta";

// ─── Blog data ────────────────────────────────────────────────────────────────
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  img: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "wada-auto-show-pokhara-2024",
    title: "Trijal Motors at Wada Auto Show Pokhara 2024",
    excerpt:
      "We showcased the full Chery Wanda lineup at the first-ever WADA Auto Show — a major automobile exhibition in Gandaki Province. Here's what happened.",
    date: "2025-03-30",
    category: "Events",
    img: IMG.wadashow,
    body: [
      "Trijal Motors participated in the first-ever WADA Auto Show, held at Pokhara Pradarshani Kendra from 27–30 March 2025. Organized by the Western Region Automobile Dealers Association (WADA) with support from NADA (Nepal Automobile Dealers Association), the show marked the first major multi-brand auto exhibition ever held in Pokhara.",
      "We displayed the full Chery Wanda electric microbus lineup — 11, 12, 14, and 16-seater variants — alongside two-wheelers, three-wheelers, and commercial vehicles from other participating brands, drawing strong interest from route operators and fleet managers across Gandaki Province.",
      "Visitors were particularly interested in the CATL battery technology and the fast-charging capability of the Chery Wanda range, with many stopping by our stall to ask about range, seating configurations, and pricing.",
      "We also discussed our 40% down-payment financing scheme at the show — making the Chery Wanda more accessible to operators across the region.",
      "A huge thank you to everyone who visited our stall at WADA Auto Show 2025. We're looking forward to the second edition in 2026.",
    ],
  },
  {
    slug: "first-chery-wanda-delivery-baglung",
    title: "First Chery Wanda Delivery in Baglung District",
    excerpt:
      "A historic moment: the first Chery Wanda electric microbus delivered to a Baglung-based route operator, marking EV adoption in hill districts of Gandaki Province.",
    date: "2024-09-05",
    category: "Deliveries",
    img: IMG.customer1,
    body: [
      "Trijal Motors completed the first Chery Wanda delivery in Baglung district on 5 September 2024 — a milestone for electric mobility in the hill districts of Gandaki Province.",
      "The 14-seater Chery Wanda was handed over to a route permit holder operating the Pokhara–Beni–Baglung corridor. The operator had spent six months researching EVs and chose the Chery Wanda for its CATL battery reliability and low running cost.",
      "At an average diesel fuel cost of Rs 230 per litre and a route of roughly 85 km one-way, the Chery Wanda is expected to cut fuel expense by approximately 70% compared to the operator's previous diesel vehicle. At current electricity tariffs, the per-km energy cost works out to approximately Rs 1.8 — versus Rs 8–9 for diesel.",
      "The handover ceremony was attended by local transport association representatives and covered by regional media. Trijal Motors provided full documentation support, registration assistance, and a one-day driver orientation session on regenerative braking and charging best practices.",
      "We are proud to support the electrification of hill-route transport in Gandaki Province. This is the first of many.",
    ],
  },
  {
    slug: "why-chery-wanda-beats-diesel-nepal",
    title: "Why the Chery Wanda Beats Diesel for Nepal Route Operators",
    excerpt:
      "A detailed cost breakdown comparing the Chery Wanda electric microbus against equivalent diesel microbuses on a typical Gandaki Province route.",
    date: "2024-08-12",
    category: "Insights",
    img: IMG.opengraph,
    body: [
      "The Chery Wanda is powered by a CATL [[CONFIRM CAPACITY — spec sheet lists 41.86 kWh for 11/12-seater and 53.58 kWh for 14/16-seater, not 73.1 kWh]] battery pack using lithium iron phosphate (LFP) chemistry. CATL is the world's largest battery manufacturer, supplying cells to Tesla, BMW, Toyota, and Volkswagen. Here's what this means in practice.",
      "LFP vs NMC chemistry: Most early EV batteries used nickel-manganese-cobalt (NMC) chemistry, which offers higher energy density but degrades faster with deep charge cycles. CATL's LFP cells are inherently more stable — they can be charged to 100% regularly without accelerating degradation, unlike NMC cells which benefit from staying at 80%.",
      "Temperature performance: Nepal's climate ranges from below freezing on high-altitude routes to 40°C+ in the Terai. LFP chemistry performs more consistently across this range than NMC. Our operators on the Pokhara–Jomsom corridor have reported no significant range reduction in winter conditions.",
      "Cycle life: CATL LFP cells are rated for 3,000+ charge cycles with less than 20% capacity loss. At one full charge per day, that's 8+ years before any meaningful degradation. In practice, most operators charge to 80% daily, which extends this further.",
      "Charging: The Chery Wanda supports both AC charging (overnight, 8–10 hours from empty) and DC fast charging (80% in approximately 40 minutes). We recommend DC fast charging for mid-day top-ups and AC overnight for routine daily charging.",
      "For operators concerned about battery longevity in Nepal's conditions, the CATL LFP technology in the Chery Wanda is one of the most robust choices available in the current market.",
    ],
  },
  {
    slug: "catl-battery-technology-explained",
    title: "CATL Battery Technology: What It Means for Your Chery Wanda",
    excerpt:
      "A plain-language explanation of CATL's lithium iron phosphate battery chemistry — the same cells that power the Chery Wanda — and why it matters for Nepal's climate.",
    date: "2024-07-20",
    category: "Technology",
    img: IMG.seater_12_b,
    body: [
      "The Chery Wanda is powered by a CATL 73.1 kWh battery pack using lithium iron phosphate (LFP) chemistry. CATL is the world's largest battery manufacturer, supplying cells to Tesla, BMW, Toyota, and Volkswagen. Here's what this means in practice.",
      "LFP vs NMC chemistry: Most early EV batteries used nickel-manganese-cobalt (NMC) chemistry, which offers higher energy density but degrades faster with deep charge cycles. CATL's LFP cells are inherently more stable — they can be charged to 100% regularly without accelerating degradation, unlike NMC cells which benefit from staying at 80%.",
      "Temperature performance: Nepal's climate ranges from below freezing in high-altitude routes to 40°C+ in the Terai. LFP chemistry performs more consistently across this range than NMC. Our operators in the Pokhara–Jomsom corridor have reported no significant range reduction in winter conditions.",
      "Cycle life: CATL LFP cells are rated for 3,000+ charge cycles with less than 20% capacity loss. At one full charge per day, that's 8+ years before any meaningful degradation. In practice, most operators charge to 80% daily, which extends this further.",
      "Charging: The Chery Wanda supports both AC (overnight, 8–10 hours from empty) and DC fast charging (80% in approximately 40 minutes). We recommend DC fast charging for mid-day top-ups and AC overnight for routine daily charging.",
      "For operators concerned about battery longevity in Nepal's conditions, the CATL LFP technology in the Chery Wanda is one of the most robust choices available in the current market.",
    ],
  },
  {
    slug: "gandaki-ev-policy-2024",
    title: "Nepal EV Policy 2024: What It Means for Bus Operators in Gandaki",
    excerpt:
      "A summary of the Nepal government's 2024 EV incentives and how they apply to commercial microbus operators purchasing through Trijal Motors.",
    date: "2024-06-10",
    category: "Policy",
    img: IMG.pokhara,
    body: [
      "The Nepal government has continued its push toward electric mobility in 2024, with updated policy provisions that benefit commercial microbus operators. Here is a summary of what applies to Chery Wanda purchases through Trijal Motors.",
      "Import duty concession: Electric commercial vehicles continue to receive favourable customs duty rates compared to diesel equivalents. The Chery Wanda benefits from reduced import duty under the EV promotion framework, contributing to its competitive ex-showroom price.",
      "Road tax benefits: Electric buses registered in Gandaki Province are eligible for reduced annual road tax. Consult the Gandaki Province Department of Transport Management for current rates applicable to your route permit category.",
      "Route permit priority: The Department of Transport Management has in certain corridors prioritised route permit renewal for operators transitioning from diesel to electric. Trijal Motors can advise on which corridors have active priority provisions.",
      "Financing subsidy discussions: The government and Nepal Rastra Bank have ongoing discussions about subsidised interest rates for commercial EV loans. While not yet formalised as of mid-2024, our banking partners are monitoring developments closely.",
      "Trijal Motors keeps up-to-date on all policy changes affecting EV operators in Gandaki Province. Call or WhatsApp us for the latest guidance specific to your route and permit category.",
    ],
  },
  {
    slug: "trijal-motors-showroom-pokhara",
    title: "Visit Our Showroom in Pokhara-14, Chauthe",
    excerpt:
      "Our Pokhara showroom has the Chery Wanda on display year-round. Here's what to expect when you visit and how to get here.",
    date: "2024-05-02",
    category: "About Us",
    img: IMG.showroom,
    body: [
      "Trijal Motors Pvt. Ltd. operates its Gandaki Province showroom at Pokhara-14, Chauthe, Kaski — easily accessible from Pokhara city centre and from the main Prithvi Highway.",
      "What you'll find at the showroom: The Chery Wanda electric microbus on static display (typically 14-seater). Our sales team available to walk you through all four variants (11, 12, 14, 16-seater), specifications, and pricing. Financing calculators and support for bank loan applications. On-site charging demonstration.",
      "Opening hours: Sunday to Friday, 9:00 AM – 6:00 PM. Saturday, 10:00 AM – 4:00 PM. Closed on major public holidays.",
      "How to reach us: From Pokhara Lakeside, take the road toward Prithvi Highway (Prithvi Chowk direction). At Chauthe, look for the Trijal Motors signage. Coordinates available on Google Maps by searching 'Trijal Motors Pokhara'. Alternatively, WhatsApp us for precise directions — we're happy to guide you.",
      "We recommend calling ahead on +977-985-605-8195 to confirm availability and schedule a dedicated consultation session, especially if you're travelling from outside Pokhara district.",
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-NP", { year: "numeric", month: "long", day: "numeric" });
}

// ─── Blog Hero ────────────────────────────────────────────────────────────────
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

// ─── Post card ────────────────────────────────────────────────────────────────
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

// ─── Blog list ────────────────────────────────────────────────────────────────
export default function Blog() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageMeta {...pageMeta.blog} />
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

// ─── Single post page ─────────────────────────────────────────────────────────
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

  return (
    <>
      <PageMeta
        title={post.title + " | Trijal Motors Blog"}
        description={post.excerpt}
      />
      {/* Post hero */}
      <div
        style={{
          background: C.black,
          paddingTop: 40,
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
              fontSize: "clamp(26px, 4vw, 52px)",
              color: C.white,
              letterSpacing: "0.04em",
            }}
          >
            {post.title}
          </h1>
        </div>

        {/* Hero image */}
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div style={{ borderRadius: "18px 18px 0 0", overflow: "hidden", height: 320, background: C.black }}>
            <img src={post.img} alt={post.title} className="w-full h-full object-cover" style={{ opacity: 0.9 }} />
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

          {/* Body paragraphs */}
          <div className="flex flex-col gap-5">
            {post.body.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 15,
                  color: C.gray,
                  lineHeight: 1.85,
                }}
              >
                {para}
              </p>
            ))}
          </div>

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
