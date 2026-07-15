import { Link } from "react-router";
import { ChevronRight, MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import { C, wa, EMAIL, IMG, BtnRed, SectionHead } from "../shared";
import PageMeta, { pageMeta } from "../components/PageMeta";
import { BreadcrumbSchema, PersonSchema } from "../components/SeoSchemas";
export default function About() {
  return (
    <>
      <PageMeta {...pageMeta.about} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://trijalmotors.com.np/" },
          { name: "About", url: "https://trijalmotors.com.np/about" },
        ]}
      />

      <PersonSchema
        name="Ram Prasad Lamsal"
        jobTitle="Sales Manager"
        telephone="+977-985-605-8195"
        email={EMAIL}
      />
      {/* ── Header ── */}
      <div style={{ background: C.black, paddingTop: 64, paddingBottom: 52, position: "relative", overflow: "hidden" }}>
        {/* faint corner accent — quiet signature, not a highlight */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(199,40,40,0.16) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: C.red, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>
            — About the dealer
          </p>
          <h1 className="uppercase font-bold leading-none" style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(30px, 5vw, 60px)", color: C.white }}>
            Trijal Motors Pvt. Ltd.
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 400, color: "rgba(255,255,255,0.55)", letterSpacing: "0.01em", marginTop: 14, maxWidth: 480 }}>
            Electric microbus sales, documentation support &amp; after-sales care across Gandaki Province.
          </p>
        </div>
      </div>
      {/* ── Story ── */}
      <section style={{ background: C.white }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHead eyebrow="Our story" title="Bringing EVs to Western Nepal" />
            <div
              className="flex flex-col gap-4 mt-2"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 14.5, color: C.gray, lineHeight: 1.9, borderLeft: `2px solid ${C.border}`, paddingLeft: 22 }}
            >
              <p>Trijal Motors Pvt. Ltd. is the authorized dealer of Jagadamba Motors for Gandaki Province — Nepal's primary gateway to the Annapurna and Dhaulagiri regions.</p>
              <p>We specialize in the <strong style={{ color: C.black }}>Chery Wanda</strong> electric microbus (11, 12, 14 &amp; 16 seater) — one of Nepal's most capable commercial EVs for tourism, school routes, and intercity shuttle operations.</p>
              <p>Based at Pokhara-14, Chauthe, our team serves buyers across all of Gandaki Province with sales, documentation support, and post-sale assistance.</p>
            </div>
          </div>
          <div className="relative overflow-hidden group" style={{ borderRadius: 20, background: C.black, aspectRatio: "4/3", boxShadow: "0 20px 50px rgba(0,0,0,0.18)" }}>
            <img
              src={IMG.showroom}
              alt="Trijal Motors EV showroom Pokhara Nepal"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ opacity: 0.86 }}
            />
            <div
              className="absolute inset-0 flex items-end p-5"
              style={{ background: "linear-gradient(to top, rgba(10,10,10,0.55) 0%, transparent 45%)" }}
            >
              <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "rgba(255,255,255,0.85)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Our showroom · Pokhara-14, Chauthe
              </p>
            </div>
          </div>
        </div>
        {/* Brand lockup strip */}
        <div style={{ paddingTop: 4, paddingBottom: 56 }}>
          <div className="flex justify-center">
            <div
              className="flex items-center justify-center flex-shrink-0 flex-wrap"
              style={{ padding: "18px 28px", borderRadius: 16, background: C.white, border: `1px solid ${C.border}`, boxShadow: "0 12px 34px rgba(0,0,0,0.10)" }}
            >
              <img src={IMG.logoFull} alt="Trijal Motors Pvt. Ltd." style={{ maxHeight: 60, maxWidth: 110, width: "auto", height: "auto", objectFit: "contain", display: "block" }} />
              <span style={{ width: 1, height: 48, background: "rgba(199, 40, 40, 0.15)", margin: "0 14px", display: "block", flexShrink: 0 }} />
              <img src={IMG.cherywandalogo} alt="Chery Wanda Logo" style={{ height: 58, width: "auto", objectFit: "contain" }} />
              <span style={{ width: 1, height: 48, background: "rgba(199, 40, 40, 0.15)", margin: "0 14px", display: "block", flexShrink: 0 }} />
              <img src={IMG.jagadamba} alt="Jagadamba Motors logo" style={{ height: 58, width: "auto", objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </section>
      {/* ── Sales Manager Card ── */}
      <section style={{ background: C.offWhite, borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <SectionHead eyebrow="Get in touch" title="Talk directly with our sales team" />
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <div
              className="flex flex-col gap-5 p-8 flex-1 transition-shadow duration-300 hover:shadow-lg"
              style={{ borderRadius: 20, border: `1px solid ${C.border}`, background: C.white, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="overflow-hidden flex-shrink-0"
                  style={{ width: 80, height: 80, borderRadius: "50%", background: C.offWhite, border: `2px solid ${C.red}`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}
                >
                  <img src={IMG.sm} alt="Sales Manager — Trijal Motors" className="w-full h-full object-cover" style={{ opacity: 0.75 }} />
                </div>
                <div>
                  <p style={{ fontFamily: "Oswald, sans-serif", fontSize: 19, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: C.black, lineHeight: 1.1 }}>
                    Ram Prasad Lamsal
                  </p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: C.red, fontWeight: 500, marginTop: 3 }}>Sales Manager</p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: C.grayLight, marginTop: 1 }}>Trijal Motors Pvt. Ltd.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Phone size={14} color={C.red} />
                  <a href="tel:+9779856058195" style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 13, color: C.black }}>+977 985-605-8195</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={14} color={C.red} />
                  <a href={`mailto:${EMAIL}`} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 13, color: C.black }}>{EMAIL}</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={14} color={C.red} />
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: C.gray }}>Pokhara-14, Chauthe, Kaski, Gandaki Province</span>
                </div>
              </div>
              <BtnRed href={wa("Hi, I'd like to enquire about purchasing a Trijal Motors EV.")}>
                Message on WhatsApp <ChevronRight size={13} />
              </BtnRed>
            </div>
            <div
              className="flex flex-col gap-4 p-8 flex-1"
              style={{ borderRadius: 20, border: `1px solid ${C.border}`, background: C.white, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} color={C.red} />
                <p style={{ fontFamily: "Oswald, sans-serif", fontSize: 16, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: C.black }}>
                  Dealer details
                </p>
              </div>
              <div className="flex flex-col">
                {[
                  ["Authorized dealer", "Trijal Motors, Nepal"],
                  ["Vehicles", "Chery Wanda (11, 12, 14 & 16 seat)"],
                  ["Service area", "Gandaki Province, Nepal"],
                  ["Company type", "Private Limited"],
                  ["Location", "Pokhara-14, Chauthe, Kaski"],
                ].map(([k, v], idx, arr) => (
                  <div
                    key={k}
                    className="flex flex-col py-3 transition-colors duration-200 hover:bg-[rgba(199,40,40,0.03)]"
                    style={{ borderBottom: idx === arr.length - 1 ? "none" : `1px solid ${C.border}`, paddingLeft: 10, borderLeft: `2px solid transparent` }}
                  >
                    <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: C.grayLight, textTransform: "uppercase", letterSpacing: "0.12em" }}>{k}</span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: C.black, marginTop: 2 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── Showroom Photo Strip ── */}
      <section style={{ background: C.white, borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <SectionHead eyebrow="Visit us" title="Showroom & handover gallery" />
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { img: IMG.seater_11_b, alt: "Customer handover ceremony at Trijal Motors showroom, Pokhara", caption: "Cherry Wanda · 11-seater" },
              { img: IMG.three_types, alt: "Chery Wanda electric microbuses at Trijal Motors, Pokhara", caption: "Chery Wanda Fleet" },
              { img: IMG.seater_14_a, alt: "Chery Wanda 14-seater electric microbus at Trijal Motors, Pokhara", caption: "Chery Wanda · 14-Seater" },
            ].map((photo, i) => (
              <div
                key={i}
                className="relative overflow-hidden group"
                style={{ borderRadius: 14, aspectRatio: "4/3", background: C.black }}
              >
                <img
                  src={photo.img}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ opacity: 0.85 }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: "linear-gradient(to top, rgba(20,20,20,0.8) 0%, transparent 55%)" }}
                >
                  <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: "rgba(255,255,255,0.85)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 text-[10px] font-semibold uppercase tracking-widest transition-colors duration-200 hover:bg-[rgba(199,40,40,0.06)]"
              style={{ fontFamily: "Inter, sans-serif", color: C.red, border: `1.5px solid ${C.red}`, borderRadius: 10 }}
            >
              Full photo gallery <ChevronRight size={12} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}