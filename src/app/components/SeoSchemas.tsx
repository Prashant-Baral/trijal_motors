import React from "react";

// ── FAQ Schema — Google Rich Results + AI citation (ChatGPT, Gemini, Perplexity) ──
export const faqData = [
  { q: "What electric vehicles does Trijal Motors sell in Nepal?", a: "Trijal Motors Pvt. Ltd. sells the Chery Wanda electric microbus in 11, 12, 14, and 16-seater variants. Trijal Motors is the official authorized dealer of Jagadamba Motors for Gandaki Province, Nepal." },
  { q: "Where is Trijal Motors located?", a: "Trijal Motors is located at Pokhara-14, Chauthe, Kaski, Gandaki Province, Nepal. Open Sunday–Friday 9 AM–6 PM and Saturday 10 AM–4 PM." },
  { q: "What is the price of the Chery Wanda in Nepal?", a: "Chery Wanda ex-showroom prices in Nepal: 11-seater Rs 56,50,000; 12-seater Rs 60,50,000; 14-seater Rs 62,50,000; 16-seater Rs 65,50,000. Contact Trijal Motors for current pricing." },
  { q: "What is the range of the Chery Wanda electric bus?", a: "The Chery Wanda has a range of approximately 300 km (NEDC) per charge. It uses a CATL 73.1 kWh battery, 105 kW motor, and supports DC fast charging to 80% in ~40 minutes." },
  { q: "Does Trijal Motors offer EV financing in Nepal?", a: "Yes. Trijal Motors offers financing with 40% down payment and 60% bank-financed. No collateral required. Contact +977-985-605-8195 or visit the showroom." },
  { q: "How do I contact Trijal Motors Pokhara?", a: "Phone/WhatsApp: +977-985-605-8195. Landline: 061-586524. Email: trijalmotorspvtltd@gmail.com. Showroom: Pokhara-14, Chauthe, Kaski, Gandaki Province." },
  { q: "Is Trijal Motors an authorized EV dealer?", a: "Yes. Trijal Motors Pvt. Ltd. (PAN: 622328678) is the officially authorized Jagadamba Motors dealer for Gandaki Province, Nepal, selling the Chery Wanda electric microbus." },
  { q: "What battery does the Chery Wanda use?", a: "The Chery Wanda uses a CATL 73.1 kWh lithium iron phosphate battery — the same supplier used by Tesla and major global EV manufacturers, known for longevity and temperature resilience." },
  { q: "Can the Chery Wanda handle Nepal mountain routes?", a: "Yes. The Chery Wanda is deployed by operators across Gandaki Province on mountain, hill, and urban routes including Pokhara–Beni, Pokhara–Baglung, and Besisahar corridors." },
  { q: "Which Chery Wanda seater is the best seller?", a: "The 14-seater is the best seller at Trijal Motors, popular for tourism routes. The 12-seater is most popular for urban micro-bus and school routes in Gandaki Province." },
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
    url: "https://trijalmotors.com",
    telephone: "+977-985-605-8195",
    email: "trijalmotorspvtltd@gmail.com",
    taxID: "622328678",
    image: "/images/logo-full.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Chauthe",
      addressLocality: "Pokhara-14",
      addressRegion: "Gandaki Province",
      postalCode: "33700",
      addressCountry: "NP",
    },
    geo: { "@type": "GeoCoordinates", latitude: 28.2096, longitude: 83.9856 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "16:00" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Chery Wanda Electric Microbus",
      itemListElement: [
        { "@type": "Offer", name: "Chery Wanda 11-Seater", price: "5650000", priceCurrency: "NPR" },
        { "@type": "Offer", name: "Chery Wanda 12-Seater", price: "6050000", priceCurrency: "NPR" },
        { "@type": "Offer", name: "Chery Wanda 14-Seater", price: "6250000", priceCurrency: "NPR" },
        { "@type": "Offer", name: "Chery Wanda 16-Seater", price: "6550000", priceCurrency: "NPR" },
      ],
    },
    sameAs: ["https://www.facebook.com/trijalmotors"],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
