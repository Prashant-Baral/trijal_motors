import { Link } from "react-router";
import { ChevronRight, ArrowRight, Zap, Users, Battery, Gauge, Wind, Shield } from "lucide-react";
import { C, wa, IMG, BtnRed, BtnOutline, SectionHead, SpecChip } from "../shared";

export default function Farizon() {
  return (
    <>
      {/* Full-bleed hero */}
      <div className="relative overflow-hidden" style={{ minHeight: "clamp(320px, 58vh, 620px)", background: C.black, display: "flex", alignItems: "flex-end" }}>
        <img src={IMG.handover3} alt="Farizon 19-seater electric van Nepal Gandaki Province" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.6 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,20,20,0.95) 0%, rgba(20,20,20,0.2) 55%, transparent 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12 w-full">
          <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>— Official Jagadamba EV Dealer · Gandaki Province</p>
          <h1 className="uppercase font-bold leading-none mb-4" style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(36px, 6vw, 76px)", color: C.white }}>
            <span style={{ color: C.red }}>Farizon</span> 19-Seater
            <br />
            <span style={{ fontSize: "0.42em", letterSpacing: "0.06em", color: "rgba(255,255,255,0.75)" }}>Electric Super Van — Available in Gandaki Province</span>
          </h1>
          <div className="flex flex-wrap gap-3">
            <BtnRed href={wa("Hi, I'm interested in the Farizon 19-seater EV. Please contact me.")}>Enquire on WhatsApp <ChevronRight size={13} /></BtnRed>
            <BtnOutline href={wa("Hi, I'd like to book a test drive for the Farizon 19-Seater.")}>Book Test Drive</BtnOutline>
          </div>
        </div>
      </div>

      {/* Price + Spec Block */}
      <section style={{ background: C.white }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image + badge */}
          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden" style={{ borderRadius: 20, background: C.black, aspectRatio: "4/3" }}>
              <img src={IMG.handover3} alt="Farizon 19-seater electric van Pokhara Nepal" className="w-full h-full object-cover" style={{ opacity: 0.85 }} />
              <div className="absolute top-4 left-0 px-4 py-1.5" style={{ background: C.red, borderRadius: "0 20px 20px 0", fontFamily: "JetBrains Mono, monospace", fontSize: 9, fontWeight: 500, color: C.white, letterSpacing: "0.1em", textTransform: "uppercase" }}>19-Seater Super Van</div>
              <div className="absolute bottom-5 right-5 flex flex-col items-end px-4 py-3" style={{ background: "rgba(20,20,20,0.88)", borderRadius: 12, backdropFilter: "blur(4px)" }}>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 8, color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Ex-showroom price</span>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 26, fontWeight: 700, color: C.red, lineHeight: 1.1 }}>Rs 76,90,000</span>
              </div>
            </div>
            {/* Brochure image as a second photo */}
            <div className="relative overflow-hidden" style={{ borderRadius: 16, background: C.offWhite, aspectRatio: "16/6", border: `1px solid ${C.border}` }}>
              <img src={IMG.farizon} alt="Farizon 19-seater EV brochure specifications" className="w-full h-full object-contain" style={{ padding: "12px" }} />
            </div>
          </div>

          {/* Specs */}
          <div className="flex flex-col gap-6">
            <div>
              <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: C.red, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 6 }}>Farizon · 19-Seater</p>
              <h2 className="uppercase font-bold leading-none" style={{ fontFamily: "Oswald, sans-serif", fontSize: 38, color: C.black, letterSpacing: "0.04em" }}>
                <span style={{ color: C.red }}>Farizon</span> Super Van
              </h2>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: C.gray, lineHeight: 1.75, marginTop: 10 }}>
                Nepal's most capable electric commercial van — 19 seats, full airbag safety, and a range that covers the entire Gandaki Province and beyond. Built for tourism, resorts, and intercity operations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <SpecChip icon={<Users size={13} />} label="Seating" value="19 passengers" />
              <SpecChip icon={<Gauge size={13} />} label="Range" value="~400 km" />
              <SpecChip icon={<Zap size={13} />} label="Motor" value="170 kW" />
              <SpecChip icon={<Battery size={13} />} label="Battery" value="82.88 kWh" />
              <SpecChip icon={<Wind size={13} />} label="Drive Type" value="RWD" />
              <SpecChip icon={<Shield size={13} />} label="Safety" value="Airbag equipped" />
            </div>
            <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 16 }}>
              <p style={{ fontFamily: "Oswald, sans-serif", fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: C.black, marginBottom: 10 }}>Finance & Purchase</p>
              <div className="flex flex-col gap-2">
                {[
                  ["Down payment", "40% of ex-showroom"],
                  ["Financed amount", "60% via bank loan*"],
                  ["Delivery", "Ex-Kathmandu, Nepal"],
                  ["Registration", "Buyer's responsibility"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center py-2" style={{ borderBottom: `1px solid ${C.border}`, fontFamily: "Inter, sans-serif", fontSize: 13 }}>
                    <span style={{ color: C.grayLight }}>{k}</span>
                    <span style={{ color: C.black, fontWeight: 500 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <BtnRed href={wa("Hi, I'm interested in buying the Farizon 19-Seater EV. Please get in touch.")}>Buy Now <ChevronRight size={13} /></BtnRed>
              <BtnOutline href={wa("Hi, I'd like to know more about financing for the Farizon 19-Seater.")}>Finance Enquiry</BtnOutline>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section style={{ background: C.offWhite, borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
          <SectionHead eyebrow="Why Farizon" title="Designed for high-capacity routes" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            {[
              { title: "19-Seat Capacity", body: "Nepal's largest-capacity EV van. Maximise revenue per trip on resort transfers, school routes, and intercity travel." },
              { title: "170 kW Electric Motor", body: "Powerful rear-wheel drive with torque delivery that handles mountain grades better than diesel alternatives." },
              { title: "~400 km Real Range", body: "Covers Pokhara–Kathmandu or full Gandaki Province circuits without mid-route charging on most itineraries." },
              { title: "82.88 kWh Battery", body: "Larger pack compared to the Chery Wanda — built for long-haul daily operations with less frequent charging needed." },
              { title: "Airbag Safety System", body: "Full airbag complement as standard — a safety level not commonly found in competing commercial EVs at this price." },
              { title: "40% Down Finance", body: "Accessible purchase terms — 40% down, 60% financed. Our team guides you through the bank loan process." },
            ].map(f => (
              <div key={f.title} className="flex flex-col gap-2 p-6" style={{ borderRadius: 16, border: `1px solid ${C.border}`, background: C.white }}>
                <span style={{ fontFamily: "Oswald, sans-serif", fontSize: 15, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: C.black }}>{f.title}</span>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: C.gray, lineHeight: 1.65 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link to Chery Wanda */}
      <section style={{ background: C.black }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "rgba(255,255,255,0.45)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 6 }}>Also available</p>
            <p className="uppercase font-bold" style={{ fontFamily: "Oswald, sans-serif", fontSize: 24, color: C.white }}>
              <span style={{ color: C.red }}>Chery Wanda</span> 11–16 Seater
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 4 }}>105 kW · 73.1 kWh CATL · 300 km NEDC range</p>
          </div>
          <Link to="/vehicles/chery-wanda" className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-[11px] uppercase tracking-widest text-white"
            style={{ borderRadius: 10, border: `1.5px solid rgba(255,255,255,0.2)`, fontFamily: "Inter, sans-serif", flexShrink: 0 }}>
            View Chery Wanda <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
