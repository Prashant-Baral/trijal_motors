import { useEffect } from "react";
import { useLocation } from "react-router";

type PageMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  /** Pass for blog/article pages to get rich article OG tags */
  article?: {
    publishedTime: string; // ISO date string
    author?: string;
    section?: string;
  };
};

const SITE = "https://trijalmotors.com.np";
const DEFAULT_OG = `${SITE}/images/og-image.jpg`;

export default function PageMeta({ title, description, canonical, ogImage = DEFAULT_OG, article }: PageMetaProps) {
  const { pathname } = useLocation();
  const url = canonical ?? `${SITE}${pathname}`;

  // Resolve og:image — if it starts with '/' treat as relative to SITE, else use as-is
  const absOgImage = ogImage.startsWith("http") ? ogImage : `${SITE}${ogImage}`;

  useEffect(() => {
    // Title
    document.title = title;

    const setMeta = (sel: string, attr: string, val: string) => {
      let el = document.querySelector(sel);
      if (!el) {
        el = document.createElement("meta");
        // For property attributes we need to set the selector attribute first
        if (attr !== "content") {
          el.setAttribute(attr === "content" ? "name" : attr.split("[")[0], "");
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, val);
    };

    const set = (sel: string, val: string) => {
      // sel is like 'meta[property="og:title"]' or 'meta[name="description"]'
      let el = document.querySelector(sel) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta") as HTMLMetaElement;
        // Extract attribute name and value from selector
        const match = sel.match(/\[(\w+)=["']([^"']+)["']\]/);
        if (match) el.setAttribute(match[1], match[2]);
        document.head.appendChild(el);
      }
      el.setAttribute("content", val);
    };

    // Primary meta
    set('meta[name="description"]', description);

    // Open Graph base
    set('meta[property="og:title"]', title);
    set('meta[property="og:description"]', description);
    set('meta[property="og:url"]', url);
    set('meta[property="og:image"]', absOgImage);
    set('meta[property="og:image:width"]', "1200");
    set('meta[property="og:image:height"]', "630");
    set('meta[property="og:site_name"]', "Trijal Motors Pvt. Ltd.");

    // Article-specific OG
    if (article) {
      set('meta[property="og:type"]', "article");
      set('meta[property="article:published_time"]', article.publishedTime);
      set('meta[property="article:author"]', article.author ?? "Trijal Motors Pvt. Ltd.");
      if (article.section) set('meta[property="article:section"]', article.section);
    } else {
      set('meta[property="og:type"]', "website");
    }

    // Twitter Card
    set('meta[name="twitter:card"]', "summary_large_image");
    set('meta[name="twitter:title"]', title);
    set('meta[name="twitter:description"]', description);
    set('meta[name="twitter:image"]', absOgImage);

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link") as HTMLLinkElement;
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;
  }, [title, description, url, absOgImage, article]);

  return null;
}

// ── Per-page SEO data ──────────────────────────────────────────────────────────
export const pageMeta = {
  home: {
    title: "Trijal Motors | Official Chery Wanda EV Dealer — Gandaki Province, Nepal",
    description: "Trijal Motors Pvt. Ltd. is the official authorized Jagadamba Motors EV dealer for Gandaki Province. Buy the Chery Wanda electric microbus — 11, 12, 14 & 16-seater — in Pokhara, Nepal.",
  },
  vehicles: {
    title: "Chery Wanda Electric Microbus — 11, 12, 14 & 16-Seater | Trijal Motors Nepal",
    description: "Explore the Chery Wanda electric microbus lineup at Trijal Motors Pokhara. CATL 73.1 kWh battery, 300 km NEDC range, DC fast charging. Official dealer for Gandaki Province.",
  },
  financing: {
    title: "EV Financing — 40% Down Payment | Trijal Motors Pokhara",
    description: "Own a Chery Wanda with just 40% down payment. Trijal Motors guides you through the bank loan process in Gandaki Province. No collateral required. Contact us today.",
  },
  gallery: {
    title: "Photo Gallery — Customer Handovers & Showroom | Trijal Motors Nepal",
    description: "See real customer handover ceremonies and showroom photos of the Chery Wanda electric microbus at Trijal Motors, Pokhara-14, Gandaki Province.",
  },
  about: {
    title: "About Trijal Motors — Authorized Jagadamba Motors EV Dealer, Gandaki Province",
    description: "Trijal Motors Pvt. Ltd. (PAN: 622328678) is the officially authorized Jagadamba Motors dealer for Gandaki Province, Nepal. Showroom at Pokhara-14, Chauthe, Kaski.",
  },
  contact: {
    title: "Contact Trijal Motors — Pokhara Showroom, WhatsApp & Phone",
    description: "Contact Trijal Motors at +977-985-605-8195 or visit our showroom at Pokhara-14, Chauthe. Open Sunday–Friday 9 AM–6 PM. WhatsApp enquiries welcome.",
  },
  blog: {
    title: "Blog & News — EV Events, Deliveries & Insights | Trijal Motors Nepal",
    description: "Trijal Motors blog: Chery Wanda delivery stories, EV expo coverage, CATL battery insights, Nepal EV policy updates, and news from Gandaki Province.",
  },
};
