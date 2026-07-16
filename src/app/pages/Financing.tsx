import { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  CheckCircle,
  AlertCircle,
  CreditCard,
  Phone,
  FileText,
  Users,
  Settings2,
  MessageCircle,
} from "lucide-react";
import {
  C,
  wa,
  IMG,
  EMAIL,
  BtnRed,
  BtnOutline,
  SectionHead,
} from "../shared";
import PageMeta, { pageMeta } from "../components/PageMeta";
import { BreadcrumbSchema, OrganizationSchema } from "../components/SeoSchemas";
function FinancingHero() {
  return (
    <div
      style={{
        background: C.black,
        paddingTop: 40,
        paddingBottom: 36,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 10,
            color: C.red,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          — EV financing
        </p>
        <h1
          className="uppercase font-bold leading-none mb-6"
          style={{
            fontFamily: "Oswald, sans-serif",
            fontSize: "clamp(24px, 4vw, 48px)",
            color: C.white,
          }}
        >
          Own a{" "}
          <span style={{ color: C.red }}>Chery Wanda</span>
          <br />
          <span
            style={{
              fontSize: "0.48em",
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.06em",
            }}
          >
            with 40% down payment
          </span>
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.75,
            maxWidth: 520,
            marginBottom: 24,
          }}
        >
          We've guided dozens of operators across Gandaki Province through
          the EV financing process. Our team handles the paperwork — you
          focus on your business.
        </p>
        <div className="flex flex-wrap gap-3">
          <BtnRed href={wa("Hi, I'd like to know more about EV financing at Trijal Motors.")}>
            Ask about financing <ChevronRight size={13} />
          </BtnRed>
          <BtnOutline href={`mailto:${EMAIL}`} dark>
            Email us
          </BtnOutline>
        </div>
      </div>
    </div>
  );
}
function FinancingOverview() {
  const eyebrowLabel: React.CSSProperties = {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: 10,
    color: C.grayLight,
    textTransform: "uppercase",
    letterSpacing: "0.14em",
  };
  const priceFactors = [
    { icon: <Settings2 size={15} color={C.red} />, title: "Seating capacity", body: "11, 12, 14, and 16-seater variants are priced differently based on chassis size and battery capacity." },
    { icon: <CreditCard size={15} color={C.red} />, title: "Bank & loan terms", body: "Tenure and interest rate are set by the bank at approval — this changes your monthly instalment, not the vehicle price." },
    { icon: <FileText size={15} color={C.red} />, title: "Registration & permits", body: "Registration, route permit, insurance, and taxes sit on top of the ex-showroom price and vary by use case." },
  ];
  return (
    <section style={{ background: C.white, borderTop: `1px solid ${C.border}` }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <SectionHead eyebrow="How financing works" title="A simple 40 / 60 structure" />
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 13.5,
            color: C.gray,
            lineHeight: 1.7,
            maxWidth: 560,
            marginBottom: 32,
          }}
        >
          Every Chery Wanda variant follows the same 40% down, 60%
          bank-financed structure. Tell us your seat count and we'll send a
          written quote the same day.
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-5"
          style={{
            border: `1px solid ${C.border}`,
            borderRadius: 6,
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
          }}
        >
          <div
            className="md:col-span-2 flex flex-col"
            style={{ background: C.offWhite, padding: "36px 32px", borderRight: `1px solid ${C.border}` }}
          >
            <p style={eyebrowLabel}>The structure</p>
            <div className="flex items-end gap-4" style={{ marginTop: 14, marginBottom: 20 }}>
              <div>
                <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 40, fontWeight: 600, color: C.red, lineHeight: 1 }}>
                  40%
                </p>
                <p style={{ ...eyebrowLabel, marginTop: 6 }}>Paid by you</p>
              </div>
              <p style={{ fontFamily: "Oswald, sans-serif", fontSize: 22, color: C.grayLight, paddingBottom: 6 }}>+</p>
              <div>
                <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 40, fontWeight: 600, color: C.black, lineHeight: 1 }}>
                  60%
                </p>
                <p style={{ ...eyebrowLabel, marginTop: 6 }}>Bank financed</p>
              </div>
            </div>
            <div style={{ height: 8, background: C.border, display: "flex", marginBottom: 24, borderRadius: 4, overflow: "hidden" }}>
              <div style={{ width: "40%", background: C.red }} />
              <div style={{ width: "60%", background: C.grayLight }} />
            </div>
            <div className="flex flex-col gap-3">
              {[
                "The 40/60 split is fixed — it applies regardless of variant or price",
                "Loan tenure and interest rate are set by the bank at approval, not by us",
                "We work with multiple partner banks in Pokhara to find you the best terms",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2.5">
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: C.red, marginTop: 6, flexShrink: 0 }} />
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: C.gray, lineHeight: 1.6 }}>
                    {t}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <BtnRed href={wa("Hi, I'd like to know the exact price and financing terms for a Chery Wanda EV.")}>
                Get an exact quote <ChevronRight size={13} />
              </BtnRed>
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col" style={{ background: C.white, padding: "36px 32px" }}>
            <p style={eyebrowLabel}>What determines your price</p>
            <div className="flex flex-col gap-5 mb-6" style={{ marginTop: 20 }}>
              {priceFactors.map((f) => (
                <div key={f.title} className="flex items-start gap-3.5">
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{ width: 34, height: 34, borderRadius: 6, background: C.offWhite, border: `1px solid ${C.border}` }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: "Oswald, sans-serif", fontSize: 14.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.03em", color: C.black, marginBottom: 3 }}>
                      {f.title}
                    </p>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12.5, color: C.gray, lineHeight: 1.6 }}>
                      {f.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="flex items-start gap-3 mt-auto"
              style={{ padding: "16px 18px", borderRadius: 6, background: C.offWhite, border: `1px solid ${C.border}` }}
            >
              <MessageCircle size={16} color={C.red} style={{ flexShrink: 0, marginTop: 2 }} />
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12.5, color: C.gray, lineHeight: 1.65 }}>
                Because of these factors, we quote every customer
                individually rather than publishing a price list. WhatsApp
                your seat requirement and route, and we'll reply with an
                exact figure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function HowItWorks() {
  const steps = [
    { n: "01", icon: <Phone size={18} color={C.red} />, title: "Contact us", body: "Call or WhatsApp our sales team. We'll walk you through vehicle options, availability, and pricing." },
    { n: "02", icon: <FileText size={18} color={C.red} />, title: "Prepare documents", body: "Citizenship card, PAN, income proof, and bank statements. Our team tells you exactly what's needed for your bank." },
    { n: "03", icon: <Users size={18} color={C.red} />, title: "Bank loan application", body: "We coordinate with our banking partners in Pokhara on your behalf. Most approvals take 7-14 working days." },
    { n: "04", icon: <CreditCard size={18} color={C.red} />, title: "Pay 40% down", body: "Once loan is approved, pay your 40% down payment and the bank disburses the remaining 60% directly to us." },
    { n: "05", icon: <CheckCircle size={18} color={C.red} />, title: "Take delivery", body: "Your vehicle is delivered with a formal handover ceremony at our Pokhara-14 showroom. Registration support included." },
  ];
  return (
    <section className="relative overflow-hidden" style={{ borderTop: `1px solid ${C.border}` }}>
      <img
        src={IMG.pokhara}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.35, filter: "saturate(0.5)" }}
      />
      <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.62)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
        <SectionHead eyebrow="How it works" title="5 steps to your EV" />
        <div className="relative mt-4">
          <div className="hidden md:block absolute" style={{ left: 24, top: 24, bottom: 24, width: 2, background: C.border }} />
          <div className="flex flex-col gap-10">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-6 relative">
                <div
                  className="flex-shrink-0 flex items-center justify-center relative z-10"
                  style={{ width: 48, height: 48, borderRadius: "50%", background: C.white, border: `2px solid ${C.red}` }}
                >
                  {step.icon}
                </div>
                <div className="flex flex-col gap-1.5 pt-1">
                  <div className="flex items-baseline gap-3">
                    <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: C.red, letterSpacing: "0.1em" }}>{step.n}</span>
                    <p style={{ fontFamily: "Oswald, sans-serif", fontSize: 19, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: C.black }}>
                      {step.title}
                    </p>
                  </div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13.5, color: C.gray, lineHeight: 1.7, maxWidth: 540 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function WhatYouNeed() {
  const docs = [
    "Citizenship certificate (original + photocopy)",
    "PAN card",
    "Passport-size photographs (2-4 copies)",
    "3-6 months bank statement",
    "Income proof (salary slip or business income documentation)",
    "Route permit (if applying for commercial vehicle loan)",
    "Vehicle quotation from Trijal Motors (we provide this)",
  ];
  const notes = [
    "Finance is subject to bank approval — not all applicants will qualify",
    "Down payment becomes non-refundable only after loan approval and formal vehicle reservation — refunded in full if the loan is declined",
    "Interest rates and loan tenure vary by bank — we work with multiple partners",
    "Ex-showroom price does not include registration, route permit, insurance, or taxes",
  ];
  return (
    <section style={{ background: C.white, borderTop: `1px solid ${C.border}` }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <SectionHead eyebrow="Documents needed" title="What to prepare" />
          <div className="flex flex-col gap-3 mt-2">
            {docs.map((d, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={15} color={C.red} style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: C.gray, lineHeight: 1.6 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionHead eyebrow="Important notes" title="Before you apply" />
          <div className="flex flex-col gap-3 mt-2">
            {notes.map((n, i) => (
              <div key={i} className="flex items-start gap-3">
                <AlertCircle size={15} color={C.grayLight} style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: C.gray, lineHeight: 1.6 }}>{n}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 overflow-hidden" style={{ borderRadius: 8, background: C.offWhite, border: `1px solid ${C.border}` }}>
            <div style={{ height: 3, background: `linear-gradient(to right, ${C.red}, ${C.maroon})` }} />
            <div className="p-6">
              <p style={{ fontFamily: "Oswald, sans-serif", fontSize: 16, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: C.black, marginBottom: 8 }}>
                Questions about financing?
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: C.gray, lineHeight: 1.6, marginBottom: 16 }}>
                Our team has guided operators across Gandaki Province through the process. WhatsApp us — we reply fast.
              </p>
              <BtnRed href={wa("Hi, I have questions about EV financing at Trijal Motors.")}>
                Ask on WhatsApp <ChevronRight size={13} />
              </BtnRed>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const faqs = [
  {
    q: "What is an EV microbus and is the Chery Wanda a good option in Pokhara?",
    a: "An EV microbus is an electric passenger van used for routes, shuttles, and tourism transport instead of a diesel van. The Chery Wanda is the electric microbus sold in Nepal by Jagadamba Motors, available in 11, 12, 14, and 16-seater configurations with a CATL battery and roughly 280–300 km NEDC range — suited to Pokhara valley routes, hotel shuttles, school vans, and hill routes across Gandaki Province. Trijal Motors is the authorized Jagadamba dealer for the province, based in Pokhara-14, Chauthe.",
  },
  {
    q: "How much does a Chery Wanda EV microbus cost?",
    a: "Price depends on seating capacity, battery configuration, and any add-ons, so we don't publish a fixed price list — it varies enough between variants and use cases that a published figure would be misleading. WhatsApp or email us your seat requirement and we'll send a written ex-showroom quote the same day.",
  },
  {
    q: "Do I need to know the exact vehicle price before applying for EV financing?",
    a: "No. Every Chery Wanda variant follows the same 40% down, 60% bank-financed structure, so you can start the financing conversation before you've settled on an exact variant or price. Our team confirms the exact price and prepares your quotation once you decide on seating capacity, and that quotation is what goes to the bank.",
  },
  {
    q: "How much down payment is needed to buy an electric microbus in Nepal?",
    a: "Standard down payment across our partner banks is 40% of the ex-showroom price, with the remaining 60% financed as a bank loan. The exact rupee amount depends on which Chery Wanda variant you choose and the configuration — we confirm this in your written quote.",
  },
  {
    q: "Which banks offer loans for EVs in Pokhara and Gandaki Province?",
    a: "We work with multiple partner banks operating in Pokhara that offer commercial and personal vehicle loans for electric microbuses. Interest rate, tenure, and whether the rate is fixed or floating vary by bank, and our team helps match your application to the partner most likely to approve it.",
  },
  {
    q: "How long does bank loan approval take for an EV purchase?",
    a: "Most of our partner banks in Pokhara return a decision within 7 to 14 working days of receiving a complete document set. Incomplete paperwork is the most common cause of delay, which is why our team reviews your documents before submission.",
  },
  {
    q: "What happens if my EV loan application is rejected?",
    a: "If one bank declines, we can resubmit to another partner bank, since approval criteria differ slightly between them. Any down payment collected before a rejection is refunded — it only becomes non-refundable once a loan is approved and the vehicle is formally reserved.",
  },
  {
    q: "Can tourism operators, hotels, or schools finance an EV microbus for commercial use?",
    a: "Yes. Several of our customers are tourism operators running Pokhara valley circuits, hotels running airport and guest shuttles, and schools replacing diesel vans — all financed through the same 40% down, bank-financed structure, sometimes under a commercial vehicle loan that also requires a route permit.",
  },
  {
    q: "Where is Trijal Motors located, and do you sell across all of Gandaki Province?",
    a: "Trijal Motors' showroom is in Pokhara-14, Chauthe, and we are the officially authorized Jagadamba Motors dealer for the entire Gandaki Province, covering districts including Kaski, Baglung, Lamjung, and Parbat.",
  },
];
function FinancingFaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section style={{ background: C.offWhite, borderTop: `1px solid ${C.border}` }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <SectionHead eyebrow="Financing FAQ" title="Common questions" />
        <div className="flex flex-col gap-3 mt-2 max-w-3xl">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                style={{
                  borderRadius: 10,
                  background: C.white,
                  border: `1px solid ${isOpen ? C.red : C.border}`,
                  boxShadow: isOpen ? "0 8px 24px rgba(0,0,0,0.08)" : "none",
                  transition: "border-color 0.15s, box-shadow 0.15s",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start gap-4 px-6 py-5 text-left"
                  style={{ cursor: "pointer", background: "transparent", border: "none" }}
                >
                  <ChevronDown
                    size={18}
                    color={isOpen ? C.red : C.grayLight}
                    style={{
                      flexShrink: 0,
                      marginTop: 3,
                      transition: "transform 0.2s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 15,
                      fontWeight: 600,
                      lineHeight: 1.5,
                      color: C.black,
                    }}
                  >
                    {item.q}
                  </span>
                </button>
                {isOpen && (
                  <div className="pl-[46px] pr-6 pb-6" style={{ marginTop: -4 }}>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13.5, color: C.gray, lineHeight: 1.75 }}>
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default function Financing() {
  return (
    <>
      <PageMeta {...pageMeta.financing} />
      <FinancingFaqSchema />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://trijalmotors.com.np/" },
          { name: "Financing", url: "https://trijalmotors.com.np/financing" },
        ]}
      />
      <FinancingHero />
      <FinancingOverview />
      <HowItWorks />
      <WhatYouNeed />
      <FAQ />
    </>
  );
}