import {
  ChevronRight,
  CheckCircle,
  AlertCircle,
  CreditCard,
  Phone,
  FileText,
  Users,
} from "lucide-react";
import {
  C,
  wa,
  EMAIL,
  BtnRed,
  BtnOutline,
  SectionHead,
} from "../shared";
import PageMeta, { pageMeta } from "../components/PageMeta";

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
            marginBottom: 20,
          }}
        >
          We've guided dozens of operators across Gandaki
          Province through the EV financing process. Our team
          handles the paperwork — you focus on your business.
        </p>
        <div className="flex flex-wrap gap-3">
          <BtnRed
            href={wa(
              "Hi, I'd like to enquire about EV financing at Trijal Motors.",
            )}
          >
            Ask on WhatsApp <ChevronRight size={13} />
          </BtnRed>
          <BtnOutline href={`mailto:${EMAIL}`} dark>
            Email us
          </BtnOutline>
        </div>
      </div>
    </div>
  );
}

function PricingTable() {
  const vehicles = [
    {
      name: "Chery Wanda 11-Seater",
      price: 4890000,
      tag: "Entry",
    },
    {
      name: "Chery Wanda 12-Seater",
      price: 4990000,
      tag: "Popular",
    },
    {
      name: "Chery Wanda 14-Seater",
      price: 5950000,
      tag: "Best seller",
    },
    {
      name: "Chery Wanda 16-Seater",
      price: 6850000,
      tag: "Maximum",
    },
  ];

  const fmt = (n: number) => "Rs " + n.toLocaleString("en-IN");

  return (
    <section style={{ background: C.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <SectionHead
          eyebrow="Vehicle pricing"
          title="Down payment & finance breakdown"
        />
        <div
          style={{
            borderRadius: 18,
            border: `1px solid ${C.border}`,
            overflow: "hidden",
          }}
        >
          {/* Header row */}
          <div
            className="grid grid-cols-4 px-6 py-3"
            style={{ background: C.black }}
          >
            {[
              "Vehicle",
              "Ex-showroom",
              "40% down",
              "60% financed",
            ].map((h) => (
              <span
                key={h}
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 9,
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                {h}
              </span>
            ))}
          </div>
          {vehicles.map((v, i) => {
            const down = Math.round(v.price * 0.4);
            const loan = v.price - down;
            return (
              <div
                key={v.name}
                className="grid grid-cols-4 px-6 py-5 items-center"
                style={{
                  background:
                    i % 2 === 0 ? C.white : C.offWhite,
                  borderTop: `1px solid ${C.border}`,
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      color: C.black,
                      lineHeight: 1.2,
                    }}
                  >
                    {v.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 8,
                      color: C.red,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginTop: 3,
                    }}
                  >
                    {v.tag}
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 14,
                    color: C.black,
                    fontWeight: 600,
                  }}
                >
                  {fmt(v.price)}
                </span>
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 14,
                    color: C.red,
                    fontWeight: 600,
                  }}
                >
                  {fmt(down)}
                </span>
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 14,
                    color: C.gray,
                  }}
                >
                  {fmt(loan)}
                </span>
              </div>
            );
          })}
          <div
            className="px-6 py-4"
            style={{
              background: C.offWhite,
              borderTop: `1px solid ${C.border}`,
            }}
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                color: C.grayLight,
              }}
            >
              *Ex-showroom price Kathmandu. Registration,
              insurance, and route permit extra. Finance subject
              to bank approval.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: <Phone size={20} color={C.red} />,
      title: "Contact us",
      body: "Call or WhatsApp our sales team. We'll walk you through vehicle options, availability, and pricing.",
    },
    {
      n: "02",
      icon: <FileText size={20} color={C.red} />,
      title: "Prepare documents",
      body: "Citizenship card, PAN, income proof, and bank statements. Our team tells you exactly what's needed for your bank.",
    },
    {
      n: "03",
      icon: <Users size={20} color={C.red} />,
      title: "Bank loan application",
      body: "We coordinate with our banking partners in Pokhara on your behalf. Most approvals take 7–14 working days.",
    },
    {
      n: "04",
      icon: <CreditCard size={20} color={C.red} />,
      title: "Pay 40% down",
      body: "Once loan is approved, pay your 40% down payment and the bank disburses the remaining 60% directly to us.",
    },
    {
      n: "05",
      icon: <CheckCircle size={20} color={C.red} />,
      title: "Take delivery",
      body: "Your vehicle is delivered with a formal handover ceremony at our Pokhara-14 showroom. Registration support included.",
    },
  ];
  return (
    <section
      style={{
        background: C.offWhite,
        borderTop: `1px solid ${C.border}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <SectionHead
          eyebrow="How it works"
          title="5 steps to your EV"
        />
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className="flex gap-6 py-7"
              style={{
                borderBottom:
                  i < steps.length - 1
                    ? `1px solid ${C.border}`
                    : "none",
              }}
            >
              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: C.white,
                    border: `2px solid ${C.border}`,
                  }}
                >
                  {step.icon}
                </div>
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 9,
                    color: C.grayLight,
                    letterSpacing: "0.12em",
                  }}
                >
                  {step.n}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 pt-2">
                <p
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: C.black,
                  }}
                >
                  {step.title}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                    color: C.gray,
                    lineHeight: 1.7,
                    maxWidth: 540,
                  }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatYouNeed() {
  const docs = [
    "Citizenship certificate (original + photocopy)",
    "PAN card",
    "Passport-size photographs (2–4 copies)",
    "3–6 months bank statement",
    "Income proof (salary slip or business income documentation)",
    "Route permit (if applying for commercial vehicle loan)",
    "Vehicle quotation from Trijal Motors (we provide this)",
  ];
  const notes = [
    "Finance is subject to bank approval — not all applicants will qualify",
    "Down payment is non-refundable if loan is not approved after vehicle is reserved",
    "Interest rates and loan tenure vary by bank — we work with multiple partners",
    "Ex-showroom price does not include registration, route permit, insurance, or taxes",
  ];
  return (
    <section
      style={{
        background: C.white,
        borderTop: `1px solid ${C.border}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <SectionHead
            eyebrow="Documents needed"
            title="What to prepare"
          />
          <div className="flex flex-col gap-3 mt-2">
            {docs.map((d, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle
                  size={15}
                  color={C.red}
                  style={{ flexShrink: 0, marginTop: 2 }}
                />
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                    color: C.gray,
                    lineHeight: 1.6,
                  }}
                >
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionHead
            eyebrow="Important notes"
            title="Before you apply"
          />
          <div className="flex flex-col gap-3 mt-2">
            {notes.map((n, i) => (
              <div key={i} className="flex items-start gap-3">
                <AlertCircle
                  size={15}
                  color={C.grayLight}
                  style={{ flexShrink: 0, marginTop: 2 }}
                />
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                    color: C.gray,
                    lineHeight: 1.6,
                  }}
                >
                  {n}
                </p>
              </div>
            ))}
          </div>
          <div
            className="mt-8 p-6"
            style={{
              borderRadius: 16,
              background: C.offWhite,
              border: `1px solid ${C.border}`,
            }}
          >
            <p
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: 16,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: C.black,
                marginBottom: 8,
              }}
            >
              Questions about financing?
            </p>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                color: C.gray,
                lineHeight: 1.6,
                marginBottom: 16,
              }}
            >
              Our team has guided operators across Gandaki
              Province through the process. WhatsApp us — we
              reply fast.
            </p>
            <BtnRed
              href={wa(
                "Hi, I have questions about EV financing at Trijal Motors.",
              )}
            >
              Ask on WhatsApp <ChevronRight size={13} />
            </BtnRed>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Financing() {
  return (
    <>
      <PageMeta {...pageMeta.financing} />
      <FinancingHero />
      <PricingTable />
      <HowItWorks />
      <WhatYouNeed />
    </>
  );
}