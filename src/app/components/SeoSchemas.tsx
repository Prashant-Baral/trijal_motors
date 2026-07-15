import React from "react";

export const faqData = [
  { q: "What electric vehicles does Trijal Motors sell in Nepal?", a: "Trijal Motors Pvt. Ltd. sells the Chery Wanda electric microbus in 11, 12, 14, and 16-seater variants. Trijal Motors is the official authorized dealer of Jagadamba Motors for Gandaki Province, Nepal." },
  { q: "Where is Trijal Motors located?", a: "Trijal Motors is located at Pokhara-14, Chauthe, Kaski, Gandaki Province, Nepal. Open Sunday and Monday–Friday, 9 AM–5 PM. Closed Saturday." },
  { q: "What is the price of the Chery Wanda in Nepal?", a: "Chery Wanda pricing depends on seating capacity (11, 12, 14, or 16-seater), battery configuration, and registration costs, so Trijal Motors quotes each customer individually rather than publishing a fixed price list. Contact Trijal Motors for a same-day written quote." },
  { q: "What is the range of the Chery Wanda electric bus?", a: "The Chery Wanda has a range of approximately 300 km (NEDC) per charge. It uses a CATL battery, up to an 80 kW motor depending on variant, and supports DC fast charging." },
  { q: "Does Trijal Motors offer EV financing in Nepal?", a: "Yes. Trijal Motors offers financing with 40% down payment and 60% bank-financed through partner banks. Contact +977-985-605-8195 / +977-980-2858195 or visit the showroom for details." },
  { q: "How do I contact Trijal Motors Pokhara?", a: "Phone/WhatsApp: +977-985-605-8195 or +977-980-2858195. Landline: 061-586524. Email: trijalmotorspvtltd@gmail.com. Showroom: Pokhara-14, Chauthe, Kaski, Gandaki Province." },
  { q: "Is Trijal Motors an authorized EV dealer?", a: "Yes. Trijal Motors Pvt. Ltd. is the officially authorized Jagadamba Motors dealer for Gandaki Province, Nepal, selling the Chery Wanda electric microbus." },
  { q: "What battery does the Chery Wanda use?", a: "The Chery Wanda uses a CATL lithium iron phosphate battery — the same supplier used by Tesla and major global EV manufacturers, known for longevity and temperature resilience." },
  { q: "Can the Chery Wanda handle Nepal mountain routes?", a: "Yes. The Chery Wanda is deployed by operators across Gandaki Province on mountain, hill, and urban routes including Pokhara–Beni, Pokhara–Baglung, and Besisahar corridors." },
  { q: "Which Chery Wanda seater is the best seller?", a: "The 14-seater is the best seller at Trijal Motors, popular for tourism routes. The 12-seater is most popular for urban micro-bus and school routes in Gandaki Province." },
];

// Shared social profile links — reused by LocalBusinessSchema and OrganizationSchema
// so both entities point Google/AI crawlers to the same disambiguating profiles.
// NOTE: there is an unrelated "Trijal Motors" TVS motorcycle dealership in
// Whitefield, Bangalore — a different registered company. These sameAs links
// (Chery Wanda–specific Instagram/TikTok handles, not a generic brand handle)
// help search engines and AI answer engines tell the two apart. Keep NAP
// (name/address/phone) identical across the site, Google Business Profile,
// and these socials to reinforce that signal.
export const SOCIAL_LINKS = [
  "https://www.facebook.com/p/Chery-Wanda-Pokhara-61575020432553/",
  "https://www.instagram.com/cherywandapokhara/",
  "https://www.tiktok.com/@chery.wanda.pokha",
];

export function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoDealer"],
    name: "Trijal Motors Pvt. Ltd.",
    description: "Official authorized dealer of Jagadamba Motors for Gandaki Province, Nepal. Selling Chery Wanda electric microbuses (11, 12, 14, 16-seater).",
    url: "https://trijalmotors.com.np",
    telephone: "+977-985-605-8195",
    email: "trijalmotorspvtltd@gmail.com",
    contactPoint: [
      { "@type": "ContactPoint", telephone: "+977-985-605-8195", contactType: "sales", areaServed: "NP" },
      { "@type": "ContactPoint", telephone: "+977-980-2858195", contactType: "sales", areaServed: "NP" },
    ],
    image: "/images/logo-full.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Chauthe",
      addressLocality: "Pokhara-14",
      addressRegion: "Gandaki Province",
      postalCode: "33700",
      addressCountry: "NP",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Gandaki Province, Nepal",
    },
    geo: { "@type": "GeoCoordinates", latitude: 28.2096, longitude: 83.9856 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" },
    ],
    priceRange: "$$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Chery Wanda Electric Microbus",
      itemListElement: [
        { "@type": "Offer", name: "Chery Wanda 11-Seater", itemOffered: { "@type": "Product", name: "Chery Wanda 11-Seater Electric Microbus" } },
        { "@type": "Offer", name: "Chery Wanda 12-Seater", itemOffered: { "@type": "Product", name: "Chery Wanda 12-Seater Electric Microbus" } },
        { "@type": "Offer", name: "Chery Wanda 14-Seater", itemOffered: { "@type": "Product", name: "Chery Wanda 14-Seater Electric Microbus" } },
        { "@type": "Offer", name: "Chery Wanda 16-Seater", itemOffered: { "@type": "Product", name: "Chery Wanda 16-Seater Electric Microbus" } },
      ],
    },
    // NOTE: aggregateRating intentionally removed. Google's review-snippet
    // policy requires ratings/reviews to come through an actual review
    // mechanism (user-submitted, or a verifiable third-party platform) —
    // hardcoded homepage testimonials don't qualify even when the quotes
    // are genuine. The real Google Business Profile currently shows 1
    // review, not the "6" this used to claim. Re-add this once you have
    // enough real Google reviews to reflect accurately — pull the live
    // ratingValue/reviewCount from GBP rather than hardcoding them.
    sameAs: SOCIAL_LINKS,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Trijal Motors Pvt. Ltd.",
    url: "https://trijalmotors.com.np",
    logo: "https://trijalmotors.com.np/images/logo-full.png",
    telephone: "+977-985-605-8195",
    contactPoint: [
      { "@type": "ContactPoint", telephone: "+977-985-605-8195", contactType: "sales", areaServed: "NP" },
      { "@type": "ContactPoint", telephone: "+977-980-2858195", contactType: "sales", areaServed: "NP" },
    ],
    email: "trijalmotorspvtltd@gmail.com",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Gandaki Province, Nepal",
    },
    sameAs: SOCIAL_LINKS,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function PersonSchema({
  name,
  jobTitle,
  telephone,
  email,
  worksForName = "Trijal Motors Pvt. Ltd.",
  worksForUrl = "https://trijalmotors.com.np",
}: {
  name: string;
  jobTitle: string;
  telephone?: string;
  email?: string;
  worksForName?: string;
  worksForUrl?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    ...(telephone ? { telephone } : {}),
    ...(email ? { email } : {}),
    worksFor: { "@type": "Organization", name: worksForName, url: worksForUrl },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  image,
  url,
  author = "Trijal Motors Pvt. Ltd.",
  authorUrl = "https://trijalmotors.com.np",
  section,
  keywords,
}: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  url: string;
  author?: string;
  authorUrl?: string;
  section?: string;
  keywords?: string[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: { "@type": "Organization", name: author, url: authorUrl },
    publisher: {
      "@type": "Organization",
      name: "Trijal Motors Pvt. Ltd.",
      logo: { "@type": "ImageObject", url: "https://trijalmotors.com.np/images/logo-full.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    ...(section ? { articleSection: section } : {}),
    ...(keywords && keywords.length ? { keywords: keywords.join(", ") } : {}),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function BlogSchema({
  url,
  name,
  description,
  posts,
}: {
  url: string;
  name: string;
  description: string;
  posts: { headline: string; url: string; datePublished: string; image?: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": url,
    url,
    name,
    description,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.headline,
      url: p.url,
      datePublished: p.datePublished,
      ...(p.image ? { image: p.image } : {}),
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ImageGallerySchema({
  name,
  images,
}: {
  name: string;
  images: { url: string; caption: string; description?: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name,
    image: images.map((img) => ({
      "@type": "ImageObject",
      contentUrl: img.url,
      name: img.caption,
      caption: img.caption,
      description: img.description ?? img.caption,
      representativeOfPage: false,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function VideoObjectSchema({
  videos,
}: {
  videos: {
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    contentUrl?: string;
    embedUrl?: string;
    duration?: string;
  }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": videos.map((v) => ({
      "@type": "VideoObject",
      name: v.name,
      description: v.description,
      thumbnailUrl: v.thumbnailUrl,
      uploadDate: v.uploadDate,
      ...(v.contentUrl ? { contentUrl: v.contentUrl } : {}),
      ...(v.embedUrl ? { embedUrl: v.embedUrl } : {}),
      ...(v.duration ? { duration: v.duration } : {}),
      publisher: {
        "@type": "Organization",
        name: "Trijal Motors Pvt. Ltd.",
        logo: { "@type": "ImageObject", url: "https://trijalmotors.com.np/images/logo-full.png" },
      },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function VehicleSchema({
  variants,
}: {
  variants: { name: string; seats: string; batteryCapacity: string; range: string; power: string; image: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: variants.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Vehicle",
        name: v.name,
        brand: { "@type": "Brand", name: "Chery" },
        manufacturer: { "@type": "Organization", name: "Jagadamba Motors" },
        vehicleSeatingCapacity: v.seats,
        fuelType: "Electric",
        vehicleEngine: { "@type": "EngineSpecification", enginePower: v.power },
        image: v.image,
        description: `Chery Wanda electric microbus, ${v.seats}-seater, ${v.batteryCapacity} CATL battery, ${v.range} NEDC range.`,
      },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}