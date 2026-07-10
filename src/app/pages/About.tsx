import { Link } from "react-router";
import { ChevronRight, MapPin, Phone, Mail } from "lucide-react";
import { C, wa, EMAIL, IMG, BtnRed, SectionHead } from "../shared";
import PageMeta, { pageMeta } from "../components/PageMeta";

export default function About() {
  return (
    <>
      <PageMeta {...pageMeta.about} />
      {/* Header */}
      <div style={{ background: C.black, paddingTop: 64, paddingBottom: 48 }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: C.red, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>— About the dealer</p>
          <h1 className="uppercase font-bold leading-none" style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(30px, 5vw, 60px)", color: C.white }}>
            Trijal Motors Pvt. Ltd.<br />
            <span style={{ color: C.red, fontSize: "0.52em", letterSpacing: "0.06em" }}>Official Jagadamba EV Dealer — Gandaki Province</span>
          </h1>
        </div>
      </div>

      {/* Story */}
      <section style={{ background: C.white }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHead eyebrow="Our story" title="Bringing EVs to Western Nepal" />
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: C.gray, lineHeight: 1.85 }} className="flex flex-col gap-4">
              <p>Trijal Motors Pvt. Ltd. is the official authorized dealer of Jagadamba Motors for Gandaki Province — Nepal's primary gateway to the Annapurna and Dhaulagiri regions.</p>
              <p>We specialize in the <strong style={{ color: C.black }}>Chery Wanda</strong> electric microbus (11, 12, 14 & 16 seater) — one of Nepal's most capable commercial EVs for tourism, school routes, and intercity shuttle operations.</p>
              <p>Based at Pokhara-14, Chauthe, our team serves buyers across all of Gandaki Province with sales, documentation support, and post-sale assistance.</p>
            </div>
          </div>
          <div className="relative overflow-hidden" style={{ borderRadius: 20, background: C.black, aspectRatio: "4/3" }}>
            <img src={IMG.showroom} alt="Trijal Motors EV showroom Pokhara Nepal" className="w-full h-full object-cover" style={{ opacity: 0.82 }} />
          </div>
        </div>
      </section>

      {/* Sales Manager Card */}
      <section style={{ background: C.offWhite, borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
          <SectionHead eyebrow="Get in touch" title="Talk directly with our sales team" />
          <div className="flex flex-col md:flex-row gap-6 mt-4">
            <div className="flex flex-col gap-4 p-8 flex-1" style={{ borderRadius: 20, border: `1px solid ${C.border}`, background: C.white, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div className="flex items-center gap-4">

                <div className="overflow-hidden flex-shrink-0" style={{ width: 80, height: 80, borderRadius: "50%", background: C.offWhite, border: `2px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <img src={IMG.sm} alt="Sales Manager — Trijal Motors" className="w-full h-full object-cover" style={{ opacity: 0.7 }} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(20,20,20,0.35)" }}>

                  </div>
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
                  <a href={`tel:+9779856058195`} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 13, color: C.black }}>+977 985-605-8195</a>
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
              <BtnRed href={wa("Hi, I'd like to enquire about purchasing a Trijal Motors EV.")}>Message on WhatsApp <ChevronRight size={13} /></BtnRed>
            </div>

            <div className="flex flex-col gap-4 p-8 flex-1" style={{ borderRadius: 20, border: `1px solid ${C.border}`, background: C.white, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <p style={{ fontFamily: "Oswald, sans-serif", fontSize: 16, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: C.black }}>Our authorizations</p>
              <div className="flex flex-col gap-3">
                {[
                  ["Authorized dealer", "Jagadamba Motors, Nepal"],
                  ["Vehicles", "Chery Wanda (11, 12, 14 & 16 seat)"],
                  ["Service area", "Gandaki Province, Nepal"],
                  ["Company Type", "Private Limited"],
                  ["Location", "Pokhara-14, Chauthe, Kaski"],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-col py-2" style={{ borderBottom: `1px solid ${C.border}` }}>
                    <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: C.grayLight, textTransform: "uppercase", letterSpacing: "0.12em" }}>{k}</span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: C.black, marginTop: 2 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Photo Strip */}
      <section style={{ background: C.white, borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
          <SectionHead eyebrow="Visit us" title="Showroom & handover gallery" />
          <div className="grid grid-cols-3 gap-4 mt-4">
            {[IMG.customer11, IMG.seater_16_d, IMG.seater_14_a].map((img, i) => (
              <div key={i} className="relative overflow-hidden" style={{ borderRadius: 14, aspectRatio: "4/3", background: C.black }}>
                <img src={img} alt="Trijal Motors showroom Nepal EV" className="w-full h-full object-cover" style={{ opacity: 0.82 }} />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Link to="/gallery" className="inline-flex items-center gap-2 px-6 py-3 text-[10px] font-semibold uppercase tracking-widest"
              style={{ fontFamily: "Inter, sans-serif", color: C.red, border: `1.5px solid ${C.red}`, borderRadius: 10 }}>
              Full photo gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
