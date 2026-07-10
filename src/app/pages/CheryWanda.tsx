import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { ChevronRight, ArrowRight, Zap, Users, Battery, Gauge, ChevronLeft, ChevronDown } from "lucide-react";
import { C, wa, IMG, BtnRed, BtnOutline, SectionHead, SpecChip } from "../shared";
import PageMeta, { pageMeta } from "../components/PageMeta";

type FullSpec = {
  sourceSheet: string;
  motorType: string;
  ratedPower: string;
  batteryBrand: string;
  batteryType: string;
  batteryCapacity: string;
  rangeNedc: string;
  seatCapacity: string;
  wheelBase: string;
  dimensions: string;
  groundClearance: string;
  curbWeight: string;
  gvw: string;
  tyre: string;
  suspension: string;
  steering: string;
  brakeSystem: string;
  chargingStandard: string;
  audioVisual: string;
  warrantyBattery: string;
  warrantyMotor: string;
  configs: { label: string; value: boolean }[];
};

const configLabels = ["ABS", "EBD", "EPB", "Front Airbags", "A/C (Front & Rear Outlet)", "Power Steering", "Power Window", "Dual Screen", "Rear Parking Radar", "Reversing Image"];

function makeConfigs(flags: boolean[]) {
  return configLabels.map((label, i) => ({ label, value: flags[i] }));
}

const variants: Record<string, { seats: number; price: string; images: string[]; note: string; spec: FullSpec }> = {
  "11": {
    seats: 11,
    price: "Rs 48,00,000",
    images: [IMG.seater_11_a, IMG.seater_11_b, IMG.seater_11_c, IMG.seater_11_d],
    note: "Ideal for school routes, corporate shuttles, and small-group transfers.",
    spec: {
      sourceSheet: "11-Seater Passenger Van",
      motorType: "Permanent magnet synchronous motor",
      ratedPower: "70 kW",
      batteryBrand: "CATL",
      batteryType: "Lithium Iron Phosphate",
      batteryCapacity: "41.86 kWh",
      rangeNedc: "300 km",
      seatCapacity: "11",
      wheelBase: "3050 mm",
      dimensions: "4865 x 1715 x 2065 mm",
      groundClearance: "180 mm",
      curbWeight: "1620 kg",
      gvw: "2720 kg",
      tyre: "195R14LT",
      suspension: "Front-Independent Suspension / Rear-Leaf Spring",
      steering: "Power Steering",
      brakeSystem: "Front Disc / Rear Drum",
      chargingStandard: "GBT",
      audioVisual: "MP5, Reverse Video",
      warrantyBattery: "5 years or 3 lacs km (whichever comes first)",
      warrantyMotor: "5 years or 200,000 km (whichever comes first)",
      configs: makeConfigs([true, false, true, true, true, true, true, true, true, true]),
    },
  },
  "12": {
    seats: 12,
    price: "Rs 49,90,000",
    images: [IMG.seater_12_a, IMG.seater_12_b],
    note: "Most popular configuration. Balanced for urban micro-bus operations.",
    spec: {
      sourceSheet: "14-Seater Micro Bus (Low Roof)",
      motorType: "Permanent magnet synchronous motor",
      ratedPower: "70 kW",
      batteryBrand: "CATL",
      batteryType: "Lithium Iron Phosphate",
      batteryCapacity: "41.86 kWh",
      rangeNedc: "280 km",
      seatCapacity: "14 (chassis rating)",
      wheelBase: "3450 mm",
      dimensions: "5265 × 1715 × 2065 mm",
      groundClearance: "180 mm",
      curbWeight: "1660 kg",
      gvw: "3150 kg",
      tyre: "195R14LT",
      suspension: "Front-Independent Suspension / Rear-Leaf Spring",
      steering: "Power Steering",
      brakeSystem: "Front Disc / Rear Drum",
      chargingStandard: "GBT",
      audioVisual: "MP5, Reverse Video",
      warrantyBattery: "5 years or 3 lacs km (whichever comes first)",
      warrantyMotor: "5 years or 200,000 km (whichever comes first)",
      configs: makeConfigs([true, false, true, true, true, true, true, true, true, true]),
    },
  },
  "14": {
    seats: 14,
    price: "Rs 59,50,000",
    images: [IMG.seater_14_a, IMG.seater_14_b],
    note: "Best seller for tourism routes between Pokhara and Kathmandu Valley.",
    spec: {
      sourceSheet: "14-Seater Micro Bus (High Roof)",
      motorType: "Permanent magnet synchronous motor",
      ratedPower: "80 kW",
      batteryBrand: "CATL",
      batteryType: "Lithium Iron Phosphate",
      batteryCapacity: "53.58 kWh",
      rangeNedc: "300 km",
      seatCapacity: "14",
      wheelBase: "2890 mm",
      dimensions: "5330 × 1700 × 2260 mm",
      groundClearance: "200 mm",
      curbWeight: "1820 kg",
      gvw: "3490 kg",
      tyre: "195R15LT + Aluminium Rims",
      suspension: "Front-Independent Suspension / Rear-Leaf Spring",
      steering: "Power Steering",
      brakeSystem: "Front Disc / Rear Drum",
      chargingStandard: "GBT",
      audioVisual: "MP5, Reverse Video",
      warrantyBattery: "7 years or 4 lacs km (whichever comes first)",
      warrantyMotor: "5 years or 200,000 km (whichever comes first)",
      configs: makeConfigs([true, true, false, false, true, true, true, true, true, true]),
    },
  },
  "16": {
    seats: 16,
    price: "Rs 68,50,000",
    images: [IMG.seater_16_a, IMG.seater_16_b, IMG.seater_16_c, IMG.seater_16_d, IMG.seater_16_e, IMG.seater_16_f, IMG.seater_16_g],
    note: "Maximum passenger capacity — ideal for resorts and mountain route operators.",
    spec: {
      sourceSheet: "16-Seater Minibus",
      motorType: "Permanent magnet synchronous motor",
      ratedPower: "80 kW",
      batteryBrand: "CATL",
      batteryType: "Lithium Iron Phosphate",
      batteryCapacity: "53.58 kWh",
      rangeNedc: "260 km",
      seatCapacity: "16",
      wheelBase: "3110 mm",
      dimensions: "5470 × 1885 × 2300 mm",
      groundClearance: "210 mm",
      curbWeight: "2420 kg",
      gvw: "3800 kg",
      tyre: "215/75R16LT + Aluminium Rims",
      suspension: "Double Wishbone Torsion Bar Spring, Independent Suspension / Rear-Longitudinal Leaf Spring",
      steering: "Power Steering",
      brakeSystem: "Front Disc / Rear Drum",
      chargingStandard: "GBT",
      audioVisual: "MP5, Reverse Video",
      warrantyBattery: "7 years or 4 lacs km (whichever comes first)",
      warrantyMotor: "5 years or 200,000 km (whichever comes first)",
      configs: makeConfigs([true, true, false, false, true, true, true, true, true, true]),
    },
  },
};

const tabs = ["11", "12", "14", "16"] as const;
type Tab = typeof tabs[number];

function Slideshow({ images, alt }: { images: string[]; alt: string }) {
  // Guard against undefined/empty entries — a bad IMG key here previously
  // produced `key={src + i}` → NaN (undefined + number = NaN in JS), which
  // caused duplicate React keys AND the broken-image icon in the corner.
  const safeImages = images.filter(Boolean);

  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Reset to first slide whenever the image set changes (e.g. variant tab switch)
  useEffect(() => {
    setIndex(0);
  }, [safeImages.length]);

  useEffect(() => {
    if (safeImages.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex(i => (i + 1) % safeImages.length);
    }, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [safeImages.length]);

  const restartTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (safeImages.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex(i => (i + 1) % safeImages.length);
    }, 4000);
  };

  const goTo = (i: number) => {
    setIndex(((i % safeImages.length) + safeImages.length) % safeImages.length);
    restartTimer();
  };

  if (safeImages.length === 0) {
    return (
      <div className="relative overflow-hidden flex items-center justify-center" style={{ borderRadius: 20, background: C.black, aspectRatio: "4/3" }}>
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Image unavailable</span>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden" style={{ borderRadius: 20, background: C.black, aspectRatio: "4/3" }}>
      {safeImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${alt} — view ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === index ? 0.82 : 0 }}
        />
      ))}

      {safeImages.length > 1 && (
        <>
          {/* Prev / Next arrows */}
          <button
            onClick={() => goTo(index - 1)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(20,20,20,0.55)", border: "none", cursor: "pointer", backdropFilter: "blur(3px)" }}
          >
            <ChevronLeft size={16} color={C.white} />
          </button>
          <button
            onClick={() => goTo(index + 1)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(20,20,20,0.55)", border: "none", cursor: "pointer", backdropFilter: "blur(3px)" }}
          >
            <ChevronRight size={16} color={C.white} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {safeImages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
                style={{
                  width: i === index ? 18 : 6,
                  height: 6,
                  borderRadius: 999,
                  background: i === index ? C.red : "rgba(255,255,255,0.5)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function CheryWanda() {
  const [active, setActive] = useState<Tab>("14");
  const v = variants[active];
  const heroImage = IMG.seater_16_a;

  const scrollToSpecs = () => {
    document.getElementById("full-specs")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Floating scroll cue — only shown while the visitor is still on the first screen
  const [showScrollCue, setShowScrollCue] = useState(true);
  useEffect(() => {
    const onScroll = () => setShowScrollCue(window.scrollY < window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <PageMeta {...pageMeta.vehicles} />

      {/* Floating scroll-down cue — visible only on the first screen */}
      <button
        onClick={scrollToSpecs}
        aria-label="Scroll to full specifications"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 flex items-center justify-center"
        style={{
          zIndex: 50,
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: C.red,
          border: "none",
          cursor: "pointer",
          boxShadow: "0 6px 18px rgba(211,47,47,0.35)",
          opacity: showScrollCue ? 1 : 0,
          transform: showScrollCue ? "translateY(0) scale(1)" : "translateY(12px) scale(0.9)",
          pointerEvents: showScrollCue ? "auto" : "none",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <ChevronDown size={22} color={C.white} style={{ animation: "floatingScrollBounce 1.4s ease-in-out infinite" }} />
      </button>

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ height: "clamp(100px, 20vh, 280px)", background: C.black }}>
        {heroImage && (
          <img src={heroImage} alt="Chery Wanda electric microbus Nepal" className="w-full h-full object-cover transition-opacity duration-500" style={{ objectFit: "cover", opacity: 0.65 }} />
        )}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,20,20,0.9) 0%, transparent 60%)" }} />
        <div className="absolute bottom-6 left-6 md:left-12">
          <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: "rgba(255,255,255,0.5)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 6 }}>— Official Jagadamba EV Dealer · Gandaki Province</p>
          <h1 className="uppercase font-bold leading-none" style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(24px, 4vw, 44px)", color: C.white }}>
            <span style={{ color: C.red }}>Chery Wanda</span> Electric Microbus
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 4 }}>11 · 12 · 14 · 16 Seater Variants — Available in Gandaki Province</p>
        </div>
      </div>

      {/* Variant Tab Selector */}
      <div style={{ background: C.offWhite, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex gap-0.5 overflow-x-auto py-3">
            {tabs.map(t => (
              <button key={t} onClick={() => setActive(t)}
                className="px-6 py-3 text-[11px] font-semibold uppercase tracking-widest transition-all flex-shrink-0"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  borderRadius: "10px 10px 0 0",
                  background: active === t ? C.red : "transparent",
                  color: active === t ? C.white : C.gray,
                  border: "none",
                  cursor: "pointer",
                }}>
                {t}-Seater
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Spec + Info Block */}
      <section style={{ background: C.white }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <Slideshow images={v.images} alt={`Chery Wanda ${active}-seater Nepal`} />
            <div className="absolute bottom-5 right-5 flex flex-col items-end px-4 py-3" style={{ background: "rgba(20,20,20,0.88)", borderRadius: 12, backdropFilter: "blur(4px)", zIndex: 2 }}>
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 8, color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Ex-showroom</span>
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 22, fontWeight: 700, color: C.red, lineHeight: 1.1 }}>{v.price}</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: C.red, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 5 }}>Chery Wanda · {active}-Seater</p>
              <h2 className="uppercase font-bold" style={{ fontFamily: "Oswald, sans-serif", fontSize: 30, color: C.black, letterSpacing: "0.04em", lineHeight: 1 }}>
                <span style={{ color: C.red }}>Chery Wanda</span> {active}-Seater
              </h2>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13.5, color: C.gray, lineHeight: 1.6, marginTop: 8, marginBottom: 2 }}>{v.note}</p>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <SpecChip icon={<Users size={13} />} label="Seats" value={`${v.seats} passengers`} />
              <SpecChip icon={<Gauge size={13} />} label="Range (NEDC)" value={v.spec.rangeNedc} />
              <SpecChip icon={<Zap size={13} />} label="Rated Power" value={v.spec.ratedPower} />
              <SpecChip icon={<Battery size={13} />} label="Battery" value={`${v.spec.batteryCapacity} (${v.spec.batteryBrand})`} />
              <SpecChip icon={<Zap size={13} />} label="Charging Standard" value={v.spec.chargingStandard} />
              <SpecChip icon={<Gauge size={13} />} label="GVW" value={v.spec.gvw} />
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              <BtnRed href={wa(`Hi, I'm interested in the Chery Wanda ${active}-Seater. Please contact me.`)}>Enquire on WhatsApp <ChevronRight size={13} /></BtnRed>
              <BtnOutline href={wa(`Hi, I'd like to book a test drive for the Chery Wanda ${active}-Seater.`)}>Book Test Drive</BtnOutline>
            </div>

            {/* Nudge toward full spec comparison */}
            <button
              onClick={scrollToSpecs}
              className="flex items-center gap-2 self-start"
              style={{ background: "transparent", border: "none", cursor: "pointer", padding: 0 }}
            >
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: C.red, letterSpacing: "0.1em", textTransform: "uppercase", borderBottom: `1px solid ${C.red}`, paddingBottom: 2 }}>
                Compare all 4 variants — full spec sheet
              </span>
              <ChevronRight size={12} color={C.red} style={{ animation: "specNudge 1.6s ease-in-out infinite" }} />
            </button>
          </div>
        </div>
      </section>

      {/* Full Specifications Comparison */}
      <section id="full-specs" style={{ background: C.offWhite, borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: C.red, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 8 }}>— Official Spec Sheet</p>
              <h2 className="uppercase font-bold" style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(26px, 3.5vw, 40px)", color: C.black, letterSpacing: "0.02em", lineHeight: 1.05 }}>
                Full <span style={{ color: C.red }}>Technical Specifications</span>
              </h2>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: C.gray, lineHeight: 1.7, marginTop: 10, maxWidth: 600 }}>
                Manufacturer specifications for the Chery Wanda electric microbus range, as published by Shanker / Jagdamba Motors Pvt. Ltd. — the official Nepal distributor.
              </p>
            </div>

            {/* Variant quick-jump pills */}
            <div className="flex gap-2">
              {tabs.map(t => (
                <button key={t} onClick={() => setActive(t)}
                  style={{
                    fontFamily: "JetBrains Mono, monospace", fontSize: 11, fontWeight: 700,
                    padding: "8px 14px", borderRadius: 999,
                    background: t === active ? C.red : C.white,
                    color: t === active ? C.white : C.gray,
                    border: `1px solid ${t === active ? C.red : C.border}`,
                    cursor: "pointer", transition: "all 0.15s",
                  }}>
                  {t}-Seater
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-auto" style={{ borderRadius: 16, border: `1px solid ${C.border}`, background: C.white, maxHeight: "72vh" }}>
            <table className="w-full" style={{ borderCollapse: "separate", borderSpacing: 0, minWidth: 780 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "16px 18px", fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: C.grayLight, background: C.offWhite, borderBottom: `1px solid ${C.border}`, position: "sticky", top: 0, left: 0, zIndex: 3 }}>
                    Chery Wanda
                  </th>
                  {tabs.map(t => (
                    <th key={t} onClick={() => setActive(t)} style={{ textAlign: "left", padding: "16px 18px", fontFamily: "Oswald, sans-serif", fontSize: 15, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.03em", color: t === active ? C.red : C.black, background: t === active ? C.white : C.offWhite, borderBottom: t === active ? `2px solid ${C.red}` : `1px solid ${C.border}`, whiteSpace: "nowrap", cursor: "pointer", position: "sticky", top: 0, zIndex: 2 }}>
                      {t}-Seater
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {([
                  ["Motor Type", (s: FullSpec) => s.motorType],
                  ["Rated / Peak Power", (s: FullSpec) => s.ratedPower],
                  ["Battery Brand", (s: FullSpec) => s.batteryBrand],
                  ["Battery Type", (s: FullSpec) => s.batteryType],
                  ["Battery Capacity", (s: FullSpec) => s.batteryCapacity],
                  ["Range (NEDC)", (s: FullSpec) => s.rangeNedc],
                  ["Seat Capacity", (s: FullSpec) => s.seatCapacity],
                  ["Wheel Base", (s: FullSpec) => s.wheelBase],
                  ["Overall Dimensions", (s: FullSpec) => s.dimensions],
                  ["Ground Clearance", (s: FullSpec) => s.groundClearance],
                  ["Curb Weight", (s: FullSpec) => s.curbWeight],
                  ["Gross Vehicle Weight (GVW)", (s: FullSpec) => s.gvw],
                  ["Tyre", (s: FullSpec) => s.tyre],
                  ["Suspension", (s: FullSpec) => s.suspension],
                  ["Steering", (s: FullSpec) => s.steering],
                  ["Brake System", (s: FullSpec) => s.brakeSystem],
                  ["Charging Standard", (s: FullSpec) => s.chargingStandard],
                  ["Audio Visual System", (s: FullSpec) => s.audioVisual],
                  ["Battery Warranty", (s: FullSpec) => s.warrantyBattery],
                  ["Motor Warranty", (s: FullSpec) => s.warrantyMotor],
                ] as [string, (s: FullSpec) => string][]).map(([label, get], i) => (
                  <tr key={label} style={{ background: i % 2 === 0 ? C.white : C.offWhite }}>
                    <td style={{ padding: "13px 18px", fontFamily: "Inter, sans-serif", fontSize: 12, color: C.grayLight, borderBottom: `1px solid ${C.border}`, whiteSpace: "nowrap" }}>{label}</td>
                    {tabs.map(t => (
                      <td key={t} style={{ padding: "13px 18px", fontFamily: "Inter, sans-serif", fontSize: 12.5, color: t === active ? C.black : C.gray, background: t === active ? "rgba(211,47,47,0.045)" : "transparent", borderBottom: `1px solid ${C.border}` }}>
                        {get(variants[t].spec)}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Configuration rows */}
                <tr>
                  <td colSpan={tabs.length + 1} style={{ padding: "18px 18px 10px", fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.red, background: C.offWhite, borderBottom: `1px solid ${C.border}` }}>
                    Configurations
                  </td>
                </tr>
                {configLabels.map((label, ci) => (
                  <tr key={label} style={{ background: ci % 2 === 0 ? C.white : C.offWhite }}>
                    <td style={{ padding: "13px 18px", fontFamily: "Inter, sans-serif", fontSize: 12, color: C.grayLight, borderBottom: `1px solid ${C.border}`, whiteSpace: "nowrap" }}>{label}</td>
                    {tabs.map(t => {
                      const has = variants[t].spec.configs[ci]?.value;
                      return (
                        <td key={t} style={{ padding: "13px 18px", borderBottom: `1px solid ${C.border}`, background: t === active ? "rgba(211,47,47,0.045)" : "transparent" }}>
                          <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 20, height: 20, borderRadius: "50%", fontSize: 11, fontWeight: 700, background: has ? "rgba(211,47,47,0.12)" : C.offWhite, color: has ? C.red : C.grayLight, border: has ? "none" : `1px solid ${C.border}` }}>
                            {has ? "✓" : "—"}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Key Features */}
      <section style={{ background: C.white, borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
          <SectionHead eyebrow="Why Chery Wanda" title="Built for Nepal's conditions" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            {[
              { title: "CATL Battery Cells", body: "The same battery supplier powering Tesla and global OEMs — industry-proven for longevity and temperature resilience." },
              { title: "Up to 300 km NEDC Range", body: "Depending on variant, covers Pokhara to Kathmandu on a single charge. Ideal for intercity tourism and daily shuttle routes." },
              { title: "GBT Fast Charging", body: "Standard GBT charging interface, compatible with commercial DC fast-charging infrastructure across Nepal." },
              { title: "Multiple Seating", body: "11 through 16 seat configurations let you match the vehicle exactly to your route size and passenger requirements." },
              { title: "Proven in Nepal", body: "Already deployed by operators across Gandaki Province — mountain, hill, and urban terrain tested." },
              { title: "40% Down Finance", body: "Flexible finance arrangement: 40% down payment, 60% financed through bank loan partners." },
            ].map(f => (
              <div key={f.title} className="flex flex-col gap-2 p-6" style={{ borderRadius: 16, border: `1px solid ${C.border}`, background: C.offWhite }}>
                <span style={{ fontFamily: "Oswald, sans-serif", fontSize: 15, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: C.black }}>{f.title}</span>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: C.gray, lineHeight: 1.65 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes specNudge {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        @keyframes floatingScrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
      `}</style>

    </>
  );
}