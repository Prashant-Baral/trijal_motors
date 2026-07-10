import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { ChevronRight, Award, Shield, CreditCard, Zap, Facebook, ArrowRight, Star, Quote, ChevronDown, ChevronLeft } from "lucide-react";
import { C, wa, IMG, BtnRed, BtnOutline, SectionHead } from "../shared";
import { FaqSchema, LocalBusinessSchema } from "../components/SeoSchemas";
import PageMeta, { pageMeta } from "../components/PageMeta";

// ─── Hero — white bg, exact v9 layout ────────────────────────────────────────
function Hero() {
  const scrollToSlideshow = () => {
    document.getElementById("hero-slideshow")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden" style={{ background: C.white }}>
      {/* Real logo watermark */}
      <div className="absolute right-0 top-1/2 pointer-events-none select-none hidden md:block"
        style={{ opacity: 0.05, transform: "translateY(-60%) translateX(0%)" }}>
        <img src={IMG.logoEmblem} alt="" style={{ width: 460, height: "auto" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 py-16 md:py-20">
        <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: C.red, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 20 }}>
          — Official Jagadamba EV Dealer · Gandaki Province
        </p>

        <h1 className="uppercase font-bold leading-none" style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.01em", marginBottom: 8 }}>
          <span style={{ display: "block", fontSize: "clamp(48px, 7.5vw, 88px)", color: C.red, lineHeight: 0.95 }}>Chery Wanda</span>
        </h1>

        <p className="uppercase font-bold" style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(18px, 2.5vw, 30px)", color: C.black, letterSpacing: "0.06em", marginBottom: 20, marginTop: 11 }}>
          Electric Vehicles in Gandaki Province
        </p>

        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: C.gray, lineHeight: 1.75, maxWidth: 520, marginBottom: 28 }}>
          Trijal Motors is the authorized dealer of Jagadamba Motors for Gandaki Province — bringing the Chery Wanda electric microbus (11, 12, 14 &amp; 16 seater) to western Nepal.
        </p>

        <div className="flex flex-wrap gap-3 mb-9">
          <BtnRed href={wa("Hi, I'd like to enquire about buying an EV from Trijal Motors.")}>
            Enquire on WhatsApp <ChevronRight size={13} />
          </BtnRed>
          <BtnOutline href="/vehicles/chery-wanda">See Vehicles</BtnOutline>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-2">
          {[
            { icon: <Award size={13} color={C.red} />, text: "Official Jagadamba dealer" },
            { icon: <CreditCard size={13} color={C.red} />, text: "40% down · 60% financed" },
            { icon: <Shield size={13} color={C.red} />, text: "Pokhara-14, Chauthe" },
          ].map(t => (
            <div key={t.text} className="flex items-center gap-2">
              {t.icon}
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500, color: C.gray }}>{t.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Clickable scroll cue — nudges visitor toward the slideshow below */}
      <button
        onClick={scrollToSlideshow}
        className="flex flex-col items-center w-full pb-6 md:pb-8"
        style={{ background: "transparent", border: "none", cursor: "pointer", opacity: 0.55, transition: "opacity 0.2s" }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "0.55")}
      >
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: C.gray, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 4 }}>
          Please Scroll Down
        </span>
        <ChevronDown size={16} color={C.gray} style={{ animation: "heroScrollBounce 1.8s ease-in-out infinite" }} />
      </button>

      <style>{`
        @keyframes heroScrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
      `}</style>
    </section>
  );
}

// ─── Full-width slideshow — unchanged ─────────────────────────────────────────
const heroSlides = [
  { img: IMG.seater_16_d, caption: "Chery Wanda · 16-Seater", loc: "Pokhara, Gandaki Province" },
  { img: IMG.seater_12_a, caption: "Chery Wanda · Chery Wanda 12-Seater", loc: "Pokhara, Gandaki Province" },
  { img: IMG.customer10, caption: "Handover · Chery Wanda 11-Seater", loc: "CATL Battery · 300 km NEDC range" },
  { img: IMG.customer4, caption: "Handover · Chery Wanda 16-seater", loc: "Gandaki Province" },
  { img: IMG.pokhara, caption: "Chery Wanda", loc: "Pokhara, Gandaki Province" },
];

function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const restart = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setActive(p => (p + 1) % heroSlides.length), 4200);
  };
  useEffect(() => { restart(); return () => { if (timer.current) clearInterval(timer.current); }; }, []);
  const go = (i: number) => { setActive(i); restart(); };
  const s = heroSlides[active];

  return (
    <div id="hero-slideshow" className="px-6 md:px-12 pb-2" style={{ background: C.white }}>
      <div className="relative overflow-hidden w-full max-w-7xl mx-auto" style={{ height: "clamp(280px, 42vw, 560px)", background: C.black, borderRadius: 20 }}>
        {heroSlides.map((sl, i) => (
          <img key={i} src={sl.img} alt={sl.caption}
            className="absolute inset-0 w-full h-full transition-opacity duration-700"
            style={{ objectFit: "cover", opacity: i === active ? 1 : 0 }} />
        ))}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,20,20,0.82) 0%, rgba(20,20,20,0.08) 55%, transparent 100%)", borderRadius: 20 }} />

        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-6 md:px-14 pb-6">
          <div>
            <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: "rgba(255,255,255,0.5)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 3 }}>{s.caption}</p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{s.loc}</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => go((active - 1 + heroSlides.length) % heroSlides.length)}
              style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.14)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
              <ChevronLeft size={16} color={C.white} />
            </button>
            <button onClick={() => go((active + 1) % heroSlides.length)}
              style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.14)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
              <ChevronRight size={16} color={C.white} />
            </button>
          </div>
        </div>

        <div className="absolute top-5 right-6 md:right-14 flex gap-1.5">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => go(i)}
              style={{ width: i === active ? 22 : 7, height: 7, borderRadius: 99, background: i === active ? C.red : "rgba(255,255,255,0.3)", border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
          ))}
        </div>

        <div className="absolute top-5 left-6 md:left-14 flex items-center gap-2 px-3 py-1.5"
          style={{ background: "rgba(20,20,20,0.6)", borderRadius: 20, backdropFilter: "blur(6px)" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.red, display: "inline-block" }} />
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 8, color: "rgba(255,255,255,0.75)", letterSpacing: "0.16em", textTransform: "uppercase" }}>Fleet and Customers · Gandaki Province</span>
        </div>
      </div>
    </div>
  );
}

// ─── Trust strip ──────────────────────────────────────────────────────────────
function TrustStrip() {
  const items = [
    { icon: <Award size={13} color={C.red} />, text: "Official Jagadamba dealer · Gandaki Province" },
    { icon: <Zap size={13} color={C.red} />, text: "Chery Wanda 11, 12, 14 & 16 seat variants" },
    { icon: <CreditCard size={13} color={C.red} />, text: "40% down · 60% financed*" },
    { icon: <Shield size={13} color={C.red} />, text: "Showroom · Pokhara-14, Chauthe" },
  ];
  return (
    <div style={{ background: C.offWhite, borderBottom: `1px solid ${C.border}` }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3.5 flex items-center justify-between gap-4 overflow-x-auto" style={{ flexWrap: "nowrap" }}>
        {items.map((item, i) => (
          <div key={item.text} className="flex items-center gap-2 flex-shrink-0">
            {i > 0 && <span style={{ width: 1, height: 14, background: C.border, marginRight: 4, display: "block" }} />}
            {item.icon}
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500, color: C.gray, whiteSpace: "nowrap" }}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Vehicle cards ────────────────────────────────────────────────────────────
const variants = [
  { seats: "11", tag: "Entry", price: "Rs 48,90,,000", img: IMG.seater_11_a, specs: "CATL 41.86 kWh · 300 km NEDC · 70 kW" },
  { seats: "12", tag: "Popular", price: "Rs 49,90,000", img: IMG.seater_12_a, specs: "CATL 41.86 kWh · 300 km NEDC · 70 kW" },
  { seats: "14", tag: "Popular", price: "Rs 59,50,000", img: IMG.seater_14_a, specs: "CATL 53.58 kWh · 300 km NEDC · 80 kW" },
  { seats: "16", tag: "Best Seller", price: "Rs 68,50,000", img: IMG.seater_16_a, specs: "CATL 53.58 kWh · 280 km NEDC · 80 kW" },
];

function VehiclePreview() {
  return (
    <section className="relative overflow-hidden">
      {/* Pokhara watermark background */}
      <img src={IMG.pokhara} alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.35, filter: "saturate(0.5)" }} />
      <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.60)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
        <SectionHead eyebrow="Our line-up" title="Chery Wanda — 4 variants" />
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: C.gray, marginBottom: 32, maxWidth: 500, lineHeight: 1.7 }}>
          Choose the seating capacity that fits your route. All variants share the same CATL battery, 300 km NEDC range, and fast-charge capability.
        </p>

        {/* 4-up variant grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          {variants.map(v => (
            <div key={v.seats} className="group flex flex-col overflow-hidden"
              style={{ borderRadius: 18, background: "rgba(255,255,255,0.92)", border: `1px solid ${C.border}`, boxShadow: "0 4px 20px rgba(0,0,0,0.08)", backdropFilter: "blur(6px)", transition: "transform 0.22s, box-shadow 0.22s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 40px rgba(0,0,0,0.13)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"; }}>
              {/* Top accent */}
              <div style={{ height: 3, background: `linear-gradient(to right, ${C.red}, ${C.maroon})` }} />
              {/* Photo */}
              <div className="relative overflow-hidden" style={{ height: 160 }}>
                <img src={v.img} alt={`Chery Wanda ${v.seats}-Seater Nepal`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,20,20,0.55) 0%, transparent 55%)" }} />
                {/* Seat count badge */}
                <div className="absolute bottom-3 left-3 flex items-end gap-1">
                  <span style={{ fontFamily: "Oswald, sans-serif", fontSize: 34, fontWeight: 700, color: C.white, lineHeight: 1 }}>{v.seats}</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "rgba(255,255,255,0.75)", fontWeight: 500, paddingBottom: 4 }}>seat</span>
                </div>
                <div className="absolute top-2.5 right-2.5 px-2.5 py-1"
                  style={{ background: C.red, borderRadius: 6, fontFamily: "JetBrains Mono, monospace", fontSize: 7, fontWeight: 600, color: C.white, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {v.tag}
                </div>
              </div>
              {/* Info */}
              <div className="flex flex-col gap-2 p-4 flex-1">
                <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 14, fontWeight: 700, color: C.red, lineHeight: 1 }}>{v.price}</p>
                <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 8, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase" }}
                  className="hidden">ex-showroom</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: C.grayLight, lineHeight: 1.5 }}>{v.specs}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap gap-3 items-center">
          <BtnRed href={wa("Hi, I'm interested in the Chery Wanda EV. Please tell me more about the variants.")}>
            Enquire on WhatsApp <ChevronRight size={13} />
          </BtnRed>
          <BtnOutline href="/vehicles/chery-wanda">Full specs & details</BtnOutline>
        </div>
      </div>
    </section>
  );
}

// ─── Financing teaser ─────────────────────────────────────────────────────────
function FinancingTeaser() {
  return (
    <section style={{ background: C.offWhite, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: C.red, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>— Easy financing</p>
          <h2 className="uppercase font-bold leading-none mb-4" style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(26px, 4vw, 48px)", color: C.black }}>
            Own an EV on<br />40% down payment
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: C.gray, lineHeight: 1.8, maxWidth: 420, marginBottom: 24 }}>
            We've helped dozens of operators across Gandaki Province finance their Chery Wanda EV. Pay 40% upfront, finance the rest through our bank partners.
          </p>
          <div className="flex flex-wrap gap-3">
            <BtnRed href="/financing">See financing details <ChevronRight size={13} /></BtnRed>
            <BtnOutline href={wa("Hi, I'd like to know about EV financing at Trijal Motors.")}>Ask on WhatsApp</BtnOutline>
          </div>
        </div>
        <div style={{ borderRadius: 18, border: `1px solid ${C.border}`, background: C.white, overflow: "hidden" }}>
          {[
            { label: "Down payment", value: "40%", accent: false },
            { label: "Financed amount", value: "60%", accent: false },
            { label: "Loan type", value: "Bank loan (Nepal)", accent: false },
            { label: "Chery Wanda 11-Seater from", value: "Rs 48,90,000", accent: true },
            { label: "Chery Wanda 16-Seater", value: "Rs 68,50,000", accent: true },
          ].map((row, i) => (
            <div key={row.label} className="flex items-center justify-between px-6 py-4" style={{ borderBottom: i < 4 ? `1px solid ${C.border}` : "none", background: i % 2 === 0 ? C.white : C.offWhite }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: C.gray }}>{row.label}</span>
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 15, fontWeight: 600, color: row.accent ? C.red : C.black }}>{row.value}</span>
            </div>
          ))}
          <div className="px-6 py-3" style={{ background: C.offWhite }}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: C.grayLight }}>*Finance subject to bank approval. Ex-showroom price, Kathmandu.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Handover photo grid ──────────────────────────────────────────────────────
const handoverPhotos = [
  { img: IMG.customer1, caption: "[ph] Handover · Chery Wanda 14-Seater · Pokhara" },
  { img: IMG.customer2, caption: "[ph] Handover · Chery Wanda 12-Seater · Baglung" },
  { img: IMG.customer3, caption: "[ph] Handover · Chery Wanda · Gandaki Province" },
  { img: IMG.customer4, caption: "[ph] Handover · Chery Wanda 16-Seater · Pokhara" },
  { img: IMG.showroom, caption: "[ph] Showroom · Pokhara-14, Chauthe" },
  { img: IMG.pokhara, caption: "[ph] Serving all of Gandaki Province" },
];

function HandoverSection() {
  return (
    <section style={{ background: C.white }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <SectionHead eyebrow="Customer handovers" title="Delivery & handover photos" />
          <Link to="/gallery" className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest mb-10 md:mb-0 self-start" style={{ fontFamily: "Inter, sans-serif", color: C.red }}>
            Full gallery <ArrowRight size={13} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {handoverPhotos.map((p, i) => (
            <Link to="/gallery" key={i} className="relative overflow-hidden block group" style={{ borderRadius: 16, aspectRatio: "4/3", background: C.black }}>
              <img src={p.img} alt={p.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ opacity: 0.85 }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4" style={{ background: "linear-gradient(to top, rgba(20,20,20,0.8) 0%, transparent 60%)" }}>
                <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: "rgba(255,255,255,0.75)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.caption}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Customer stories ─────────────────────────────────────────────────────────
const reviews = [
  { name: "Ram Bahadur Thapa", location: "Pokhara → Beni route", vehicle: "Chery Wanda 14-Seater", rating: 5, text: "हाम्रो यात्रा व्यवसाय पूर्णरूपमा बदलिएको छ। Chery Wanda को एक charge ले पूरा दिन चल्छ। Trijal Motors को team ले सबै documentation मा help गर्नुभयो।", photo: IMG.customer4 },
  { name: "Sushila Gurung", location: "Pokhara Tourism Operator", vehicle: "Chery Wanda 16-Seater", rating: 5, text: "Tourist guests हरू EV मा travel गर्न रमाइलो मान्नुहुन्छ — quiet, clean, professional. The Chery Wanda has enough range for all our Pokhara valley circuits without needing to recharge mid-day.", photo: IMG.customer7 },
  { name: "Bikram Shrestha", location: "Baglung School Route", vehicle: "Chery Wanda 12-Seater", rating: 5, text: "School van को लागि diesel बाट EV मा switch गरेपछि fuel cost 70% कम भयो। Trijal Motors ले loan process मा पनि राम्रो guidance दिनुभयो। Very happy.", photo: IMG.customer8 },
  { name: "Hari Prasad Adhikari", location: "Kaski District Operator", vehicle: "Chery Wanda 16-Seater", rating: 5, text: "16-seater लिएको धेरै राम्रो निर्णय भयो। Passengers comfortable छन्, maintenance cost diesel vanको तुलनामा धेरै कम छ। Highly recommend Trijal Motors.", photo: IMG.customer5 },
  { name: "Parbati Magar", location: "Pokhara Hotel Shuttle", vehicle: "Chery Wanda 14-Seater", rating: 5, text: "हाम्रो hotel को airport shuttle Chery Wanda ले गर्छ — smooth ride, zero emissions. Guests are impressed. Trijal's after-sale support has been excellent.", photo: IMG.customer9 },
  { name: "Dipak Oli", location: "Lamjung District", vehicle: "Chery Wanda 11-Seater", rating: 5, text: "Nepal ko pahad route मा पनि Chery Wanda राम्रोसँग चलेको छ। 300km range को कारण हाम्रो Besisahar route confident भएर गर्न सकेका छौं। Trijal को price पनि reasonable थियो।", photo: IMG.customer10 },
];

function CustomerStories() {
  const [start, setStart] = useState(0);
  const total = reviews.length;
  const shown = [0, 1, 2].map(i => reviews[(start + i) % total]);

  return (
    <section style={{ background: C.offWhite, borderTop: `1px solid ${C.border}` }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <SectionHead eyebrow="Customer stories" title="What our buyers say" />
          <div className="flex items-center gap-3 mb-10 md:mb-0">
            <button onClick={() => setStart(s => (s - 1 + total) % total)}
              style={{ width: 36, height: 36, borderRadius: "50%", border: `1.5px solid ${C.border}`, background: C.white, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ChevronLeft size={14} color={C.gray} />
            </button>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: C.grayLight, letterSpacing: "0.12em" }}>{(start % total) + 1}/{total}</span>
            <button onClick={() => setStart(s => (s + 1) % total)}
              style={{ width: 36, height: 36, borderRadius: "50%", border: `1.5px solid ${C.border}`, background: C.white, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ChevronRight size={14} color={C.gray} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {shown.map((r, i) => (
            <div key={i} className="flex flex-col overflow-hidden" style={{ borderRadius: 18, background: C.white, border: `1px solid ${C.border}`, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
              {/* Customer / delivery photo */}
              <div className="relative overflow-hidden" style={{ height: 200, background: C.black, flexShrink: 0 }}>
                <img src={r.photo} alt={`${r.name} — ${r.vehicle}`} className="w-full h-full object-cover" style={{ opacity: 0.82 }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,20,20,0.5) 0%, transparent 60%)" }} />
                <div className="absolute bottom-3 left-4 flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, j) => <Star key={j} size={12} fill={C.red} color={C.red} />)}
                </div>
                <div className="absolute top-3 right-3 px-3 py-1.5" style={{ background: "rgba(20,20,20,0.8)", borderRadius: 8, backdropFilter: "blur(4px)" }}>
                  <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 8, color: C.red, textTransform: "uppercase", letterSpacing: "0.1em" }}>{r.vehicle}</p>
                </div>
              </div>
              {/* Text */}
              <div className="flex flex-col gap-4 p-5 flex-1">
                <Quote size={18} color={C.red} style={{ opacity: 0.5 }} />
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: C.gray, lineHeight: 1.75, flex: 1 }}>"{r.text}"</p>
                <div className="flex flex-col pt-3" style={{ borderTop: `1px solid ${C.border}` }}>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: C.black, lineHeight: 1.2 }}>{r.name}</p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: C.grayLight, marginTop: 3 }}>{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: C.grayLight, textAlign: "center", marginTop: 20 }}>
          {total} customer stories — replace placeholder text &amp; photos with your real reviews
        </p>
      </div>
    </section>
  );
}

// TikTok icon (not in lucide)
function TikTokIcon({ size = 14, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

// ─── Follow along ─────────────────────────────────────────────────────────────

function FollowAlong() {
  return (
    <section className="relative overflow-hidden" style={{ borderTop: `1px solid ${C.border}` }}>
      <img src={IMG.pokhara} alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.35, filter: "saturate(0.5)" }} />
      <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.55)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left — text + buttons */}
        <div className="md:sticky md:top-24">
          <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: C.red, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>— Follow along</p>
          <h2 className="uppercase font-bold leading-none mb-4" style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(24px, 3.5vw, 44px)", color: C.black }}>
            See new arrivals<br />&amp; handovers live
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: C.gray, lineHeight: 1.8, marginBottom: 24, maxWidth: 380 }}>
            We post every vehicle arrival, customer handover, and EV update on Facebook and TikTok. Follow us to stay updated.
          </p>
          <div className="flex flex-col gap-3">
            <a href="https://www.facebook.com/p/Chery-Wanda-Pokhara-61575020432553/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-[11px] font-semibold uppercase tracking-widest"
              style={{ background: "#1877F2", borderRadius: 8, color: C.white, fontFamily: "Inter, sans-serif", width: "fit-content" }}>
              <Facebook size={14} /> Follow on Facebook
            </a>
            {/* PLACEHOLDER: replace href with your real TikTok profile URL */}
            <a href="https://www.tiktok.com/@chery.wanda.pokha" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-[11px] font-semibold uppercase tracking-widest"
              style={{ background: C.black, borderRadius: 8, color: C.white, fontFamily: "Inter, sans-serif", width: "fit-content" }}>
              <TikTokIcon size={14} color={C.white} /> Follow on TikTok
            </a>
            <a href={wa("Hi, I'd like WhatsApp updates on new EV arrivals from Trijal Motors.")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-[11px] font-semibold uppercase tracking-widest"
              style={{ background: "#25D366", borderRadius: 8, color: C.white, fontFamily: "Inter, sans-serif", width: "fit-content" }}>
              WhatsApp updates
            </a>
          </div>
        </div>

        {/* Right — Facebook Page Plugin placeholder */}
        <div style={{ borderRadius: 20, border: `1px solid ${C.border}`, overflow: "hidden", background: C.white, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>

          {/*
            ══════════════════════════════════════════════════════════════
            FACEBOOK PAGE PLUGIN — HOW TO REPLACE THIS PLACEHOLDER:

            1. Go to: https://developers.facebook.com/docs/plugins/page-plugin
            2. Enter your Facebook Page URL (e.g. https://www.facebook.com/trijalmotors)
            3. Set Width: 500, Height: 500, Tabs: timeline
            4. Click "Get Code"
            5. Step 1: paste the <div id="fb-root"> + <script> SDK snippet
               into index.html just before </body>
            6. Step 2: replace the <div> block below with the <div
               class="fb-page" data-href="..." ...> snippet Facebook gives you

            The iframe version (simpler) — just replace this entire div with:
            <iframe src="https://www.facebook.com/plugins/page.php?href=YOUR_PAGE_URL&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="100%" height="500" style="border:none;overflow:hidden"
              scrolling="no" frameborder="0" allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
            ══════════════════════════════════════════════════════════════
          */}

          {/* Placeholder UI shown until the real embed is added */}
          <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: `1px solid ${C.border}` }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.red, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
              <img src="images/og-image.png" alt="Trijal Motors" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: C.black, lineHeight: 1.2 }}>Trijal Motors Pvt. Ltd.</p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#1877F2" }}>facebook.com/Cherry Wanda Pokhara</p>
            </div>
            <a href="https://www.facebook.com/p/Chery-Wanda-Pokhara-61575020432553/" target="_blank" rel="noopener noreferrer"
              className="ml-auto flex items-center gap-1 px-3 py-1.5"
              style={{ background: "#1877F2", borderRadius: 6, textDecoration: "none" }}>
              <Facebook size={11} color={C.white} />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, color: C.white }}>Follow</span>
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 py-14 px-8 text-center"
            style={{ background: "#f0f2f5", minHeight: 340 }}>
            <Facebook size={40} color="#1877F2" />
            <div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: C.black, marginBottom: 6 }}>
                Facebook feed goes here
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: C.gray, lineHeight: 1.6, maxWidth: 280 }}>
                Replace this block with the Facebook Page Plugin embed code from{" "}
                <span style={{ color: "#1877F2" }}>developers.facebook.com/docs/plugins/page-plugin</span>
              </p>
            </div>
            <a href="https://www.facebook.com/p/Chery-Wanda-Pokhara-61575020432553/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-widest"
              style={{ background: "#1877F2", borderRadius: 8, color: C.white, fontFamily: "Inter, sans-serif", textDecoration: "none" }}>
              <Facebook size={13} /> View our Facebook page
            </a>
          </div>

          <div className="px-5 py-3 text-center" style={{ background: C.offWhite, borderTop: `1px solid ${C.border}` }}>
            <a href="https://www.facebook.com/p/Chery-Wanda-Pokhara-61575020432553/" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#1877F2", fontWeight: 500 }}>
              See all posts on Facebook →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About strip ──────────────────────────────────────────────────────────────
function AboutStrip() {
  return (
    <section style={{ background: C.offWhite, borderTop: `1px solid ${C.border}` }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="relative overflow-hidden flex-shrink-0" style={{ width: 180, height: 180, borderRadius: 18, background: C.black }}>
          <img src={IMG.showroom} alt="Trijal Motors showroom Pokhara" className="w-full h-full object-cover" style={{ opacity: 0.8 }} />
        </div>
        <div>
          <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: C.red, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 8 }}>— About Trijal Motors</p>
          <p style={{ fontFamily: "Oswald, sans-serif", fontSize: 22, fontWeight: 700, color: C.black, textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: 10 }}>Authorized dealer for Gandaki Province</p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: C.gray, lineHeight: 1.7, marginBottom: 16, maxWidth: 500 }}>
            Officially authorized by Jagadamba Motors to sell the Chery Wanda electric microbus across all of Gandaki Province. Showroom at Pokhara-14, Chauthe.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif", color: C.red }}>
            Learn more <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <PageMeta {...pageMeta.home} />
      <FaqSchema />
      <LocalBusinessSchema />
      <Hero />
      <HeroSlideshow />
      <TrustStrip />
      <VehiclePreview />
      <FinancingTeaser />
      <HandoverSection />
      <CustomerStories />
      <FollowAlong />
      <AboutStrip />
    </>
  );
}
