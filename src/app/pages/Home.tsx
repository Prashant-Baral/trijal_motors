import { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router";
import { ChevronRight, Award, Shield, CreditCard, Zap, Facebook, ArrowRight, Star, Quote, ChevronDown, ChevronLeft } from "lucide-react";
import { C, wa, IMG, BtnRed, BtnOutline, SectionHead } from "../shared";
import { FaqSchema, LocalBusinessSchema, BreadcrumbSchema } from "../components/SeoSchemas";
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
        <img src={IMG.logoEagle} alt="" style={{ width: 460, height: "auto" }} />
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
        aria-label="Scroll down to see vehicles"
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

  { img: IMG.seater_14_d, caption: "Chery Wanda · 14-Seater", loc: "Pokhara, Gandaki Province" },
  { img: IMG.seater_12_a, caption: "Chery Wanda · Chery Wanda 12-Seater", loc: "Pokhara, Gandaki Province" },
  { img: IMG.seater_14_i, caption: "Chery Wanda · Chery Wanda 14-Seater", loc: "Pokhara, Gandaki Province" },
  { img: IMG.seater_16_d, caption: "Chery Wanda · 16-Seater", loc: "Pokhara, Gandaki Province" },
  { img: IMG.seater_16_i, caption: "Chery Wanda · Chery Wanda 16-Seater", loc: "Pokhara, Gandaki Province" },
  { img: IMG.customer10, caption: "Handover · Chery Wanda 11-Seater", loc: "CATL Battery · 300 km NEDC range" },
  { img: IMG.customer8, caption: "Handover · Chery Wanda 14-seater", loc: "Gandaki Province" },
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
  { seats: "11", tag: "Entry", price: "11 seater", img: IMG.seater_11_a, specs: "CATL 41.86 kWh · 300 km NEDC · 70 kW" },
  { seats: "12", tag: "Popular", price: "12 seater", img: IMG.seater_12_a, specs: "CATL 41.86 kWh · 300 km NEDC · 70 kW" },
  { seats: "14", tag: "Popular", price: "14 seater", img: IMG.seater_14_a, specs: "CATL 53.58 kWh · 300 km NEDC · 80 kW" },
  { seats: "16", tag: "Best Seller", price: "16 seater", img: IMG.seater_16_a, specs: "CATL 53.58 kWh · 280 km NEDC · 80 kW" },
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
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: C.black, lineHeight: 1.5 }}>{v.specs}</p>
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
          ].map((row, i) => (
            <div key={row.label} className="flex items-center justify-between px-6 py-4" style={{ borderBottom: `1px solid ${C.border}`, background: i % 2 === 0 ? C.white : C.offWhite }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: C.gray }}>{row.label}</span>
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 15, fontWeight: 600, color: row.accent ? C.red : C.black }}>{row.value}</span>
            </div>
          ))}
          <div className="px-6 py-3" style={{ background: C.offWhite }}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: C.grayLight }}>*Finance subject to bank approval. Exact price quoted per variant on request.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Handover photo grid ──────────────────────────────────────────────────────
const handoverPhotos = [
  { img: IMG.ecustomer9, caption: "[ph] Handover · Chery Wanda 14-Seater · Pokhara" },
  { img: IMG.customer2, caption: "[ph] Handover · Chery Wanda 12-Seater · Baglung" },
  { img: IMG.customer3, caption: "[ph] Handover · Chery Wanda · Gandaki Province" },
  { img: IMG.ecustomer11, caption: "[ph] Handover · Chery Wanda 16-Seater · Pokhara" },
  { img: IMG.customer12, caption: "[ph] Handover · Chery Wanda 16-Seater · Pokhara" },
  { img: IMG.customer6, caption: "[ph] Handover · Chery Wanda 16-Seater · Pokhara" },
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
  {
    name: "Bharat B. Karki",
    location: "Gandaki Province",
    vehicle: "Chery Wanda 14-Seater",
    rating: 5,
    text: "हाम्रो व्यवसायका लागि Chery Wanda 14-seater उत्कृष्ट साबित भएको छ। Trijal Motors को delivery र support एकदमै भरपर्दो छ।",
    photo: IMG.customer4
  },
  {
    name: "Prakash Tripathi",
    location: "Pokhara Hotel Operator",
    vehicle: "Chery Wanda 16-Seater",
    rating: 5,
    text: "Hotel operator को रूपमा guests हरूलाई smooth र premium ride दिन 16-seater EV निकै सहयोगी बन्यो। Quiet, clean, र efficient छ।",
    photo: IMG.customer14,
  },
  {
    name: "Narayan Sunar",
    location: "Pokhara, Gandaki Province",
    vehicle: "Chery Wanda 14-Seater",
    rating: 5,
    text: "Trijal Motors बाट 14-seater EV खरिद गरेपछि हाम्रो travel operations धेरै सहज भएको छ। गाडीको space र performance दुवै दमदार छ।",
    photo: IMG.customer7
  },
  {
    name: "Madan Sunar",
    location: "Pokhara, Kaski",
    vehicle: "Chery Wanda 14-Seater",
    rating: 5,
    text: "Trijal Motors को showroom मा handover ceremony देखि नै उत्कृष्ट अनुभव रह्यो। EV मा switch गरेपछि खर्च धेरै कम भएको छ।",
    photo: IMG.customer8
  },

  {
    name: "Sher Bahadur Gurung",
    location: "Pokhara, Kaski",
    vehicle: "Chery Wanda 16-Seater",
    rating: 5,
    text: "लामो दूरी र बढी क्षमताका लागि 16-seater EV एकदमै भरपर्दो छ। Trijal Motors बाट गाडी बुझेदेखि अहिलेसम्म यसको travel comfort र running cost बाट म पूर्ण रूपमा सन्तुष्ट छु।",
    photo: IMG.customer9
  },
  {
    name: "Mrs. Dhan Kumari",
    location: "Pokhara, Kaski",
    vehicle: "Chery Wanda 11-Seater",
    rating: 5,
    text: "हाम्रो फ्यामिली र लोकल रूटका लागि 11-seater electric microbus एकदमै उपयुक्त छ। यसको low operating cost र Trijal Motors को आत्मीय सेवा एकदमै प्रशंसनीय छ।",
    photo: IMG.customer10
  },

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

// ─── TikTok inline video feed ─────────────────────────────────────────────────
const tiktokVideoUrls = [
  "https://www.tiktok.com/@chery.wanda.pokha/video/7571849708042325265",
  "https://www.tiktok.com/@chery.wanda.pokha/video/7639010093064867073",
  "https://www.tiktok.com/@chery.wanda.pokha/video/7655694781577841937",
  "https://www.tiktok.com/@chery.wanda.pokha/video/7654953973484440848",
  "https://www.tiktok.com/@chery.wanda.pokha/video/7660511819383065873",
  "https://www.tiktok.com/@chery.wanda.pokha/video/7641802207272144144",
];


// ─── TikTok inline video feed (click-to-load facade) ────────────────────────
function TikTokFeed() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % tiktokVideoUrls.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + tiktokVideoUrls.length) % tiktokVideoUrls.length);
  }, []);

  useEffect(() => {
    const handlePlayerMessage = (event: MessageEvent) => {
      if (event.data && event.data['x-tiktok-player']) {
        if (event.data.type === 'onStateChange' && event.data.value === 0) {
          handleNext();
        }
      }
    };
    window.addEventListener('message', handlePlayerMessage);
    return () => window.removeEventListener('message', handlePlayerMessage);
  }, [handleNext]);

  const activeUrl = tiktokVideoUrls[activeIndex];
  const activeVideoId = activeUrl.split("/video/")[1]?.split("?")[0] ?? "";

  return (
    <div style={{ width: "100%", maxWidth: 325, margin: "0 auto", borderRadius: 20, border: `1px solid ${C.border}`, overflow: "hidden", background: C.white, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>
      {/* Account Profile Header */}
      <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: `1px solid ${C.border}`, background: C.white }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.black, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <TikTokIcon size={17} color={C.white} />
        </div>
        <div>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: C.black, lineHeight: 1.2 }}>Chery Wanda Pokhara</p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: C.gray }}>tiktok.com/@chery.wanda.pokha</p>
        </div>
        <a href="https://www.tiktok.com/@chery.wanda.pokha" target="_blank" rel="noopener noreferrer"
          className="ml-auto flex items-center gap-1 px-3 py-1.5"
          style={{ background: C.black, borderRadius: 6, textDecoration: "none" }}>
          <TikTokIcon size={11} color={C.white} />
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, color: C.white }}>Follow</span>
        </a>
      </div>

      {/* Main Video Viewport */}
      <div style={{ position: "relative", background: "#f8f8f8", display: "flex", justifyContent: "center", alignItems: "center", padding: "16px", overflow: "hidden", flexGrow: 1 }}>
        <div
          key={activeVideoId}
          style={{ width: "100%", maxWidth: "325px", aspectRatio: "325 / 555", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", position: "relative" }}
        >
          {!loaded ? (
            /* Facade: shows a static placeholder until user clicks — avoids loading ~1.2MB TikTok JS on page load */
            <button
              onClick={() => setLoaded(true)}
              aria-label="Load TikTok video from Chery Wanda Pokhara"
              style={{
                width: "100%", height: "100%", border: "none", cursor: "pointer",
                background: C.black, display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 12,
                borderRadius: 12,
              }}
            >
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: C.red, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width={24} height={24} viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>Tap to play TikTok video</span>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "rgba(255,255,255,0.4)", textAlign: "center", maxWidth: 180 }}>@chery.wanda.pokha</span>
            </button>
          ) : (
            <iframe
              src={`https://www.tiktok.com/player/v1/${activeVideoId}?autoplay=1&loop=0&controls=1&music_info=0&description=0&rel=0`}
              allow="autoplay; fullscreen"
              title="Chery Wanda Pokhara — TikTok Video"
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          )}
        </div>

        <button
          onClick={handlePrev}
          aria-label="Previous video"
          style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", width: 38, height: 38, borderRadius: "50%", background: "rgba(255, 255, 255, 0.95)", border: `1px solid ${C.border}`, boxShadow: "0 4px 14px rgba(0,0,0,0.15)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, transition: "background 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = C.white)}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)")}
        >
          <ChevronLeft size={18} color={C.black} />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next video"
          style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", width: 38, height: 38, borderRadius: "50%", background: "rgba(255, 255, 255, 0.95)", border: `1px solid ${C.border}`, boxShadow: "0 4px 14px rgba(0,0,0,0.15)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, transition: "background 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = C.white)}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)")}
        >
          <ChevronRight size={18} color={C.black} />
        </button>
      </div>
    </div>
  );
}

// ─── Follow along section wrapper ─────────────────────────────────────────────
function FollowAlong() {
  // Facebook's Page Plugin needs its JS SDK to render responsively (fill the
  // actual column width instead of a fixed pixel size) and to re-render if
  // this component remounts during client-side navigation.
  useEffect(() => {
    const w = window as any;
    const loadOrParse = () => {
      if (w.FB) {
        w.FB.XFBML.parse();
        return;
      }
      if (document.getElementById("facebook-jssdk")) return;
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0";
      script.async = true;
      document.body.appendChild(script);
    };
    loadOrParse();

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => w.FB?.XFBML.parse(), 300);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ borderTop: `1px solid ${C.border}` }}>
      <div id="fb-root" />
      <img src={IMG.pokhara} alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.35, filter: "saturate(0.5)" }} />
      <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.55)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)_minmax(0,1fr)] gap-8 items-stretch">
        <div className="flex flex-col justify-center">
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
            <a href="https://www.tiktok.com/@chery.wanda.pokha" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-[11px] font-semibold uppercase tracking-widest"
              style={{ background: C.black, borderRadius: 8, color: C.white, fontFamily: "Inter, sans-serif", width: "fit-content" }}>
              <TikTokIcon size={14} color={C.white} /> Follow on TikTok
            </a>
          </div>
        </div>

        {/* Facebook Page Plugin Card */}
        <div className="w-full flex justify-center">
          <div
            className="w-full"
            style={{
              maxWidth: 325, // Capped to 325 to match the TikTok card identically
              borderRadius: 20,
              border: `1px solid ${C.border}`,
              overflow: "hidden",
              background: C.white,
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              height: 639
            }}
          >
            <div style={{ width: "100%", height: "100%", overflowY: "auto" }}>
              <div
                className="fb-page"
                data-href="https://www.facebook.com/p/Chery-Wanda-Pokhara-61575020432553/"
                data-tabs="timeline"
                data-height="639"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="false"
                style={{ width: "100%" }}
              >
                <blockquote cite="https://www.facebook.com/p/Chery-Wanda-Pokhara-61575020432553/" className="fb-xfbml-parse-ignore">
                  <a href="https://www.facebook.com/p/Chery-Wanda-Pokhara-61575020432553/">Trijal Motors Pvt. Ltd.</a>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* TikTok embed */}
        <TikTokFeed />
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
      <BreadcrumbSchema items={[{ name: "Home", url: "https://trijalmotors.com.np/" }]} />
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