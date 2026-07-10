import { ChevronRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { C, wa, EMAIL, BtnRed, SectionHead } from "../shared";
import PageMeta, { pageMeta } from "../components/PageMeta";

const MAPS_SRC = "https://maps.google.com/maps?width=600&height=400&hl=en&q=Trijal+Motors+Pvt+Ltd+Chauthe+Pokhara-14,+%E0%A4%AA%E0%A5%8B%E0%A4%96%E0%A4%B0%E0%A4%BE+33700,+Nepal&t=h&z=19&ie=UTF8&iwloc=B&output=embed";

export default function Contact() {
  return (
    <>
      <PageMeta {...pageMeta.contact} />
      {/* Header */}
      <div style={{ background: C.black, paddingTop: 36, paddingBottom: 28 }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: C.red, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>— Reach us</p>
          <h1 className="uppercase font-bold leading-none" style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(22px, 3.5vw, 44px)", color: C.white }}>
            Contact <span style={{ color: C.red }}>Trijal Motors</span>
            <br />
            <span style={{ fontSize: "0.48em", color: "rgba(255,255,255,0.65)", letterSpacing: "0.06em" }}>Pokhara-14, Chauthe — Gandaki Province</span>
          </h1>
        </div>
      </div>

      {/* Contact + Map */}
      <section style={{ background: C.white }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Info card */}
          <div className="flex flex-col gap-6">
            <SectionHead eyebrow="Contact information" title="Visit or call us" />

            {/* Info list */}
            <div className="flex flex-col gap-0" style={{ border: `1px solid ${C.border}`, borderRadius: 18, overflow: "hidden" }}>
              {[
                { icon: <MapPin size={16} color={C.red} />, label: "Address", value: "Pokhara-14, Chauthe, Kaski\nGandaki Province, Nepal 33700" },
                { icon: <Phone size={16} color={C.red} />, label: "Phone / WhatsApp", value: "+977 985-605-8195" },
                { icon: <Mail size={16} color={C.red} />, label: "Email", value: EMAIL },
                { icon: <Clock size={16} color={C.red} />, label: "Showroom hours", value: "Sun–Fri  9:00 AM – 6:00 PM\nSat  10:00 AM – 4:00 PM" },
              ].map((row, i, arr) => (
                <div key={row.label} className="flex items-start gap-4 px-6 py-5"
                  style={{ borderBottom: i < arr.length - 1 ? `1px solid ${C.border}` : "none", background: i % 2 === 0 ? C.white : C.offWhite }}>
                  <div className="flex-shrink-0 mt-0.5">{row.icon}</div>
                  <div>
                    <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.14em", color: C.grayLight, marginBottom: 4 }}>{row.label}</p>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: C.black, lineHeight: 1.7, whiteSpace: "pre-line" }}>{row.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3">
              <BtnRed href={wa("Hi, I'd like to contact Trijal Motors to enquire about an EV purchase.")}>
                <span className="flex items-center gap-2">Message us on WhatsApp <ChevronRight size={13} /></span>
              </BtnRed>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-widest"
                style={{ fontFamily: "Inter, sans-serif", color: C.black, border: `1.5px solid ${C.border}`, borderRadius: 10 }}>
                <Mail size={13} /> Email us
              </a>
              <a href="https://www.google.com/maps/dir/?api=1&destination=Trijal+Motors+Pvt+Ltd+Chauthe+Pokhara-14+Nepal"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-widest"
                style={{ fontFamily: "Inter, sans-serif", color: C.black, border: `1.5px solid ${C.border}`, borderRadius: 10 }}>
                <MapPin size={13} /> Get directions
              </a>
            </div>
          </div>

          {/* Right: Map embed */}
          <div className="flex flex-col gap-4">
            <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: C.grayLight, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 2 }}>Showroom location</p>
            <div style={{ borderRadius: 18, overflow: "hidden", border: `1px solid ${C.border}`, flex: 1, minHeight: 380 }}>
              <iframe
                src={MAPS_SRC}
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", minHeight: 380 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Trijal Motors location map Pokhara Nepal"
              />
            </div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: C.grayLight, lineHeight: 1.5 }}>
              Trijal Motors Pvt. Ltd. · Pokhara-14, Chauthe · Kaski, Gandaki Province · Nepal 33700
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Banner */}
      <section style={{ background: C.maroon }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="uppercase font-bold" style={{ fontFamily: "Oswald, sans-serif", fontSize: 22, color: C.white }}>Ready to buy a Chery Wanda EV?</p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>
              WhatsApp us — our team responds quickly with pricing, availability, and test drive scheduling.
            </p>
          </div>
          <a href={wa("Hi, I'm interested in buying an EV from Trijal Motors. Can you help me?")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-[11px] font-semibold uppercase tracking-widest flex-shrink-0"
            style={{ background: C.white, color: C.red, borderRadius: 10, fontFamily: "Inter, sans-serif" }}>
            Chat on WhatsApp <ChevronRight size={13} />
          </a>
        </div>
      </section>
    </>
  );
}
