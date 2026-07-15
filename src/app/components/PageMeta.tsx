import { useEffect } from "react";
import { useLocation } from "react-router";

type PageMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
  };
  noindex?: boolean;
};

const SITE = "https://trijalmotors.com.np";
const DEFAULT_OG = `${SITE}/images/og-image.jpg`;
const DEFAULT_TITLE = "Trijal Motors Pvt. Ltd. | Chery Wanda EV Dealer, Nepal";
const DEFAULT_DESCRIPTION =
  "Trijal Motors is the official authorized Jagadamba Motors EV dealer for Gandaki Province, Nepal.";

export default function PageMeta({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = DEFAULT_OG,
  ogImageAlt = "Trijal Motors Pvt. Ltd. — Chery Wanda electric microbus dealer",
  article,
  noindex = false,
}: PageMetaProps) {
  const { pathname } = useLocation();
  const url = canonical ?? `${SITE}${pathname}`;
  const absOgImage = ogImage.startsWith("http") ? ogImage : `${SITE}${ogImage}`;

  useEffect(() => {
    document.title = title;

    const set = (sel: string, val: string) => {
      let el = document.querySelector(sel) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta") as HTMLMetaElement;
        const match = sel.match(/\[(\w+)=["']([^"']+)["']\]/);
        if (match) el.setAttribute(match[1], match[2]);
        document.head.appendChild(el);
      }
      el.setAttribute("content", val);
    };

    const remove = (sel: string) => {
      document.querySelector(sel)?.remove();
    };

    set('meta[name="description"]', description);

    if (noindex) {
      set('meta[name="robots"]', "noindex,nofollow");
    } else {
      remove('meta[name="robots"]');
    }

    set('meta[property="og:title"]', title);
    set('meta[property="og:description"]', description);
    set('meta[property="og:url"]', url);
    set('meta[property="og:image"]', absOgImage);
    set('meta[property="og:image:alt"]', ogImageAlt);
    set('meta[property="og:image:width"]', "1200");
    set('meta[property="og:image:height"]', "630");
    set('meta[property="og:site_name"]', "Trijal Motors Pvt. Ltd.");
    set('meta[property="og:locale"]', "en_NP");

    if (article) {
      set('meta[property="og:type"]', "article");
      set('meta[property="article:published_time"]', article.publishedTime);
      set('meta[property="article:author"]', article.author ?? "Trijal Motors Pvt. Ltd.");
      if (article.section) set('meta[property="article:section"]', article.section);
      else remove('meta[property="article:section"]');
      if (article.modifiedTime) set('meta[property="article:modified_time"]', article.modifiedTime);
      else remove('meta[property="article:modified_time"]');
    } else {
      set('meta[property="og:type"]', "website");
      remove('meta[property="article:published_time"]');
      remove('meta[property="article:author"]');
      remove('meta[property="article:section"]');
      remove('meta[property="article:modified_time"]');
    }

    set('meta[name="twitter:card"]', "summary_large_image");
    set('meta[name="twitter:title"]', title);
    set('meta[name="twitter:description"]', description);
    set('meta[name="twitter:image"]', absOgImage);
    set('meta[name="twitter:image:alt"]', ogImageAlt);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link") as HTMLLinkElement;
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;
  }, [title, description, url, absOgImage, ogImageAlt, article, noindex]);

  return null;
}

export const pageMeta = {
  home: {
    title: "Trijal Motors | Official Chery Wanda EV Dealer, Nepal",
    description:
      "Official authorized Jagadamba Motors EV dealer for Gandaki Province. Buy the Chery Wanda electric microbus — 11 to 16-seater — in Pokhara, Nepal.",
  },
  vehicles: {
    title: "Chery Wanda Electric Microbus | Trijal Motors Nepal",
    description:
      "Explore the Chery Wanda electric microbus lineup at Trijal Motors Pokhara — 11 to 16-seater, CATL battery, ~300 km NEDC range, DC fast charging.",
  },
  financing: {
    title: "EV Financing — 40% Down Payment | Trijal Motors",
    description:
      "Own a Chery Wanda with just 40% down payment, 60% bank-financed through partner banks in Gandaki Province. Contact Trijal Motors to get started.",
  },
  gallery: {
    title: "Chery Wanda Photos & Videos | EV Pokhara | Trijal Motors",
    description:
      "Chery Wanda EV Pokhara photo & video gallery — 11 to 16-seater electric microbus handovers, showroom tours, and Gandaki Province routes from Trijal Motors, the official Jagadamba dealer.",
  },
  about: {
    title: "About Trijal Motors | Authorized Jagadamba EV Dealer",
    description:
      "Trijal Motors Pvt. Ltd. is the officially authorized Jagadamba Motors EV dealer for Gandaki Province, Nepal. Showroom at Pokhara-14, Chauthe, Kaski.",
  },
  contact: {
    title: "Contact Trijal Motors | Pokhara EV Showroom",
    description:
      "Contact Trijal Motors: +977-985-605-8195 / +977-980-2858195. Showroom at Pokhara-14, Chauthe. Open Sun & Mon–Fri, 9 AM–5 PM. WhatsApp welcome.",
  },
  blog: {
    title: "Blog & News | EV Deliveries & Insights | Trijal Motors",
    description:
      "Chery Wanda delivery stories, EV expo coverage, CATL battery insights, and Nepal EV policy updates from Trijal Motors, Gandaki Province.",
  },
};