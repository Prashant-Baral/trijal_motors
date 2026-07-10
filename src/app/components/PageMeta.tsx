import { useEffect } from "react";
import { useLocation } from "react-router";

type PageMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
};

const SITE = "https://trijalmotors.com.np";
const DEFAULT_OG = `${SITE}/images/og-image.jpg`;

export default function PageMeta({ title, description, canonical, ogImage = DEFAULT_OG }: PageMetaProps) {
  const { pathname } = useLocation();
  const url = canonical ?? `${SITE}${pathname}`;

  useEffect(() => {
    // Title
    document.title = title;

    const set = (sel: string, attr: string, val: string) => {
      let el = document.querySelector(sel);
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      el.setAttribute(attr, val);
    };

    // Primary meta
    set('meta[name="description"]', "content", description);
    set('link[rel="canonical"]', "href", url);

    // Open Graph
    set('meta[property="og:title"]',       "content", title);
    set('meta[property="og:description"]', "content", description);
    set('meta[property="og:url"]',         "content", url);
    set('meta[property="og:image"]',       "content", ogImage);

    // Twitter
    set('meta[name="twitter:title"]',       "content", title);
    set('meta[name="twitter:description"]', "content", description);
    set('meta[name="twitter:image"]',       "content", ogImage);

    // Fix: ensure canonical link element exists
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link") as HTMLLinkElement;
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;
  }, [title, description, url, ogImage]);

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
