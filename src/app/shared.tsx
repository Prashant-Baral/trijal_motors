import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
export const C = {
  red: "#E40303",
  redDark: "#B70202",
  maroon: "#720207",
  black: "#141414",
  white: "#FFFFFF",
  offWhite: "#F7F7F7",
  gray: "#5A5B5E",
  grayLight: "#8B8C8E",
  border: "rgba(0,0,0,0.08)",
  blue: "rgb(20, 97, 146)"
};
export const WA = "9779856058195";
export const EMAIL = "trijalmotorspvtltd@gmail.com";
export const wa = (msg: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
export const IMG = {
  logoFull: "/images/logo-full.png",
  logoEagle: "/images/logo-eagle.png",
  opengraph: "/images/og-image.png",

  wandaGolden: "/images/wanda-golden.jpg",
  jagadamba: "/images/jagadamba.png",
  cherywandalogo: "/images/cherywandalogo.png",

  three_types: "images/vehicles/chery_wanda_fleet.png",

  wadashow: "/images/blogs/wadashow.webp",
  wandaBus: "/images/wanda-action.jpg",
  pokhara: "/images/pokhara.webp",


  customer1: "images/customer/customer_bharat.webp",
  customer2: "images/customer/customer_thirmati.webp",
  customer3: "images/customer/customer_khim.webp",
  customer4: "images/customer/customer_bharat_group.webp",
  customer5: "images/customer/customer5.webp",
  customer6: "images/customer/customer_raju.webp",
  customer7: "images/customer/customer_narayan.webp",
  customer8: "images/customer/customer_madan.webp",
  customer9: "images/customer/customer_sher_bahadur.webp",
  customer10: "images/customer/customer_dhan_kumari.webp",
  customer11: "images/customer/customer_narayan_group.webp",
  customer12: "images/customer/customer12.webp",
  customer13: "images/customer/customer_rainbow.png",
  customer14: "images/customer/customer_prakash.png",


  //customer images with graphics
  ecustomer1: "images/customer/chery_wanda_customer_bharat_karki.webp",
  ecustomer2: "images/customer/chery_wanda_customer_dhan_kumari.webp",
  ecustomer3: "images/customer/chery_wanda_customer_khim_thapa.webp",
  ecustomer4: "images/customer/chery_wanda_customer_madan_sunar.webp",
  ecustomer5: "images/customer/chery_wanda_customer_narayan_sunar.webp",
  ecustomer6: "images/customer/chery_wanda_customer_raju_makhim.webp",
  ecustomer7: "images/customer/chery_wanda_customer_sher_bahadur_gurung.webp",
  ecustomer8: "images/customer/chery_wanda_customer_thirmati_gurung.webp",
  ecustomer9: "images/customer/chery_wanda_customer_nirmal_parajuli_purushottam_lamsal.webp",
  ecustomer10: "images/customer/chery_wanda_customer_prakash_tripathi.png",
  ecustomer11: "images/customer/chery_wanda_customer_14_seater.png",


  showroom: "/images/showroom.webp",
  showroom2: "https://images.unsplash.com/photo-1771284848859-12f150fa1637?w=900&h=600&fit=crop&auto=format",
  sm: "/images/sm.jpg",

  // 11 seater
  seater_11_a: "/images/vehicles/11seater/11_seater_chery_wanda1.webp",
  seater_11_b: "/images/vehicles/11seater/11_seater_chery_wanda2.webp",
  seater_11_c: "/images/vehicles/11seater/11_seater_chery_wanda3.webp",
  seater_11_d: "/images/vehicles/11seater/11_seater_chery_wanda4.webp",
  // 12 seater
  seater_12_a: "/images/vehicles/12seater/12_seater_chery_wanda1.webp",
  seater_12_b: "/images/vehicles/12seater/12_seater_chery_wanda2.webp",
  // 14 seater
  seater_14_a: "/images/vehicles/14seater/14_seater_chery_wanda1.webp",
  seater_14_b: "/images/vehicles/14seater/14_seater_chery_wanda2.webp",
  seater_14_c: "/images/vehicles/14seater/14_seater_chery_wanda3.webp",
  seater_14_d: "/images/vehicles/14seater/14_seater_chery_wanda4.webp",
  seater_14_e: "/images/vehicles/14seater/14_seater_chery_wanda5.webp",
  seater_14_f: "/images/vehicles/14seater/14_seater_chery_wanda6.webp",
  seater_14_g: "/images/vehicles/14seater/14_seater_chery_wanda7.webp",
  seater_14_h: "/images/vehicles/14seater/14_seater_chery_wanda8.webp",
  seater_14_i: "/images/vehicles/14seater/14_seater_chery_wanda9.webp",
  // 16 seater
  seater_16_a: "/images/vehicles/16seater/16_seater_chery_wanda1.webp",
  seater_16_b: "/images/vehicles/16seater/16_seater_chery_wanda2.webp",
  seater_16_c: "/images/vehicles/16seater/16_seater_chery_wanda3.webp",
  seater_16_d: "/images/vehicles/16seater/16_seater_chery_wanda4.webp",
  seater_16_e: "/images/vehicles/16seater/16_seater_chery_wanda5.webp",
  seater_16_f: "/images/vehicles/16seater/16_seater_chery_wanda6.webp",
  seater_16_g: "/images/vehicles/16seater/16_seater_chery_wanda7.webp",
  seater_16_h: "/images/vehicles/16seater/16_seater_chery_wanda8.webp",
  seater_16_i: "/images/vehicles/16seater/16_seater_chery_wanda9.webp",
  seater_16_j: "/images/vehicles/16seater/16_seater_chery_wanda10.webp",
  seater_16_k: "/images/vehicles/16seater/16_seater_chery_wanda11.webp",
};
export function Emblem({ size = 44, mono }: { size?: number; mono?: string }) {
  const gc = mono ?? C.black;
  const tc = mono ?? C.red;
  return (
    <svg width={size} height={size * 0.56} viewBox="0 0 200 112" fill="none">
      <g fill={gc}>
        <path d="M92 44 C80 44 60 36 30 18 C20 13 8 9 0 8 C12 14 22 22 28 30 C42 48 60 52 80 52 L92 52 Z" />
        <path d="M92 48 C78 48 58 41 32 25 C22 19 12 14 4 12 C14 17 24 24 30 32 C44 50 62 54 82 54 L92 54 Z" fill="white" opacity="0.9" />
        <path d="M92 50 C76 50 55 42 28 26 C18 20 8 14 2 12 C12 18 22 25 28 33 C42 51 61 55 81 55 L92 55 Z" fill={gc} />
        <path d="M92 44 C82 43 65 37 42 26 C30 20 16 13 6 9 L10 8 C22 12 36 18 48 25 C68 36 82 42 92 42 Z" fill={gc} />
      </g>
      <g fill={gc} transform="translate(200,0) scale(-1,1)">
        <path d="M92 44 C80 44 60 36 30 18 C20 13 8 9 0 8 C12 14 22 22 28 30 C42 48 60 52 80 52 L92 52 Z" />
        <path d="M92 48 C78 48 58 41 32 25 C22 19 12 14 4 12 C14 17 24 24 30 32 C44 50 62 54 82 54 L92 54 Z" fill="white" opacity="0.9" />
        <path d="M92 50 C76 50 55 42 28 26 C18 20 8 14 2 12 C12 18 22 25 28 33 C42 51 61 55 81 55 L92 55 Z" fill={gc} />
        <path d="M92 44 C82 43 65 37 42 26 C30 20 16 13 6 9 L10 8 C22 12 36 18 48 25 C68 36 82 42 92 42 Z" fill={gc} />
      </g>
      <g transform="translate(100,50)">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 * Math.PI) / 180;
          const [cx, cy] = [Math.cos(a), Math.sin(a)];
          const [ax, ay] = [-Math.sin(a) * 4, Math.cos(a) * 4];
          return (
            <polygon key={i}
              points={`${cx * 22 + ax},${cy * 22 + ay} ${cx * 22 - ax},${cy * 22 - ay} ${cx * 28 - ax},${cy * 28 - ay} ${cx * 28 + ax},${cy * 28 + ay}`}
              fill={gc} />
          );
        })}
        <circle r="22" fill={gc} />
        <circle r="16" fill="white" />
        <circle r="14" fill={gc} />
        <circle r="11" fill="white" />
        <g fill={tc}>
          <rect x="-1.5" y="-12" width="3" height="20" rx="0.5" />
          <path d="M-2.5,-12 L0,-17 L2.5,-12 Z" />
          <rect x="-7" y="-8" width="2.5" height="12" rx="0.5" />
          <path d="M-8.5,-8 L-5.75,-12 L-3,-8 Z" />
          <rect x="4.5" y="-8" width="2.5" height="12" rx="0.5" />
          <path d="M3,-8 L5.75,-12 L8.5,-8 Z" />
          <rect x="-7.5" y="-4" width="15" height="2" rx="0.5" />
          <rect x="-2" y="6" width="4" height="4" rx="0.5" />
        </g>
      </g>
    </svg>
  );
}
export function BtnRed({ href, children, className = "", block = false }: {
  href: string; children: React.ReactNode; className?: string; block?: boolean;
}) {
  const isWa = href.startsWith("https://") || href.startsWith("mailto:");
  const style = {
    background: C.red, borderRadius: 8, fontFamily: "Inter, sans-serif",
    display: block ? "block" : "inline-flex", textAlign: block ? "center" as const : undefined,
  };
  const cls = `items-center gap-2 px-6 py-3 text-white text-[11px] font-semibold uppercase tracking-widest transition-colors ${className}`;
  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.background = C.redDark);
  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.background = C.red);
  return isWa ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}
      onMouseEnter={handleEnter} onMouseLeave={handleLeave}>{children}</a>
  ) : (
    <Link to={href} className={cls} style={style}
      onMouseEnter={handleEnter} onMouseLeave={handleLeave}>{children}</Link>
  );
}
export function BtnOutline({ href, dark = false, children, className = "" }: {
  href: string; dark?: boolean; children: React.ReactNode; className?: string;
}) {
  const col = dark ? C.white : C.black;
  const isExt = href.startsWith("https://") || href.startsWith("mailto:");
  const style = { borderColor: col, color: col, borderRadius: 8, fontFamily: "Inter, sans-serif" };
  const cls = `inline-flex items-center gap-2 px-6 py-3 text-[11px] font-semibold uppercase tracking-widest border transition-colors ${className}`;
  const enter = (e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.background = dark ? "rgba(255,255,255,0.1)" : C.offWhite);
  const leave = (e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.background = "transparent");
  return isExt ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style} onMouseEnter={enter} onMouseLeave={leave}>{children}</a>
  ) : (
    <Link to={href} className={cls} style={style} onMouseEnter={enter} onMouseLeave={leave}>{children}</Link>
  );
}
export function SpecChip({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div className="flex flex-col px-4 py-3" style={{ background: C.offWhite, borderRadius: 10, minWidth: 90 }}>
      <span className="flex items-center gap-1.5" style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: C.grayLight, textTransform: "uppercase", letterSpacing: "0.12em" }}>{icon}{label}</span>
      <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 14, fontWeight: 600, color: C.black, lineHeight: 1.2, marginTop: 3 }}>{value}</span>
    </div>
  );
}
export function SectionHead({ eyebrow, title, dark = false }: { eyebrow: string; title: string; dark?: boolean }) {
  return (
    <div className="mb-10">
      <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: C.red, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 10 }}>— {eyebrow}</p>
      <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, color: dark ? C.white : C.black, textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1.05 }}>{title}</h2>
    </div>
  );
}
function FooterStripe() {
  return (
    <div className="absolute bottom-0 left-0 pointer-events-none overflow-hidden" style={{ width: 320, height: 60, zIndex: 10 }}>
      <svg viewBox="0 0 320 60" width={320} height={60} fill="none">
        <path d="M0,60 L0,14 Q0,4 10,2 L100,0 L108,60 Z" fill={C.black} />
        <path d="M88,0 L160,2 L168,60 L108,60 Z" fill={C.maroon} />
        <path d="M152,2 L240,18 L228,60 L168,60 Z" fill={C.red} />
      </svg>
    </div>
  );
}
const navVehicles = [
  { label: "Chery Wanda", sub: "11 to 16 Seater EV Bus", to: "/vehicles/chery-wanda" },
];
const navMain = [
  { label: "Home", to: "/" },
  { label: "Financing", to: "/financing" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];
export function Nav() {
  const [open, setOpen] = useState(false);
  const [vehiclesOpen, setVehiclesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();
  useEffect(() => {
    setOpen(false);
    setVehiclesOpen(false);
  }, [loc.pathname]);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const linkStyle = (active: boolean) => ({
    fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600,
    color: active ? C.red : C.gray, textTransform: "uppercase" as const,
    letterSpacing: "0.14em", background: "none", border: "none", cursor: "pointer",
  });
  return (
    <header className="sticky top-0 z-50" style={{
      background: C.white, borderBottom: `1px solid ${C.border}`,
      boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
    }}>
      <div className="flex items-center h-18">
        {/* Logo */}
        <Link to="/" className="flex items-center px-4 md:px-8 flex-shrink-0" style={{ height: "100%" }}>
          <img src={IMG.logoFull} alt="Trijal Motors Pvt. Ltd." style={{ height: 50, width: "auto", objectFit: "contain" }} />
          <span style={{ width: 1, height: 48, background: "rgba(199, 40, 40, 0.15)", margin: "0 14px", display: "block", flexShrink: 0 }} />
          <img src={IMG.cherywandalogo} alt="Chery Wanda Logo" style={{ height: 39, width: "auto", objectFit: "contain" }} />
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 mx-auto">
          <Link to="/" style={linkStyle(loc.pathname === "/")}>Home</Link>
          {/* Vehicles dropdown */}
          <div className="relative" onMouseEnter={() => setVehiclesOpen(true)} onMouseLeave={() => setVehiclesOpen(false)}>
            <button
              style={{ ...linkStyle(loc.pathname.startsWith("/vehicles")), display: "flex", alignItems: "center", gap: 4 }}
            >
              Vehicles <ChevronDown size={12} />
            </button>
            {vehiclesOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
                style={{ minWidth: 220 }}
              >
                <div className="flex flex-col overflow-hidden" style={{ background: C.white, borderRadius: 14, boxShadow: "0 8px 32px rgba(0,0,0,0.12)", border: `1px solid ${C.border}` }}>
                  {navVehicles.map(v => (
                    <Link key={v.to} to={v.to} className="flex flex-col px-5 py-4 transition-colors hover:bg-gray-50">
                      <span style={{ fontFamily: "Oswald, sans-serif", fontSize: 14, fontWeight: 600, color: C.red, textTransform: "uppercase", letterSpacing: "0.06em" }}>{v.label}</span>
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: C.grayLight, marginTop: 1 }}>{v.sub}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {navMain.slice(1).map(l => (
            <Link key={l.to} to={l.to} style={linkStyle(loc.pathname === l.to)}>{l.label}</Link>
          ))}
        </nav>
        {/* Buy Now */}
        <div className="hidden md:flex items-center ml-auto h-full flex-shrink-0">
          <a
            href={wa("Hi, I'd like to buy an EV from Trijal Motors. Please contact me.")}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center h-full px-6 text-white text-[11px] font-semibold uppercase tracking-widest transition-colors"
            style={{ background: C.red, fontFamily: "Inter, sans-serif" }}
            onMouseEnter={e => (e.currentTarget.style.background = C.redDark)}
            onMouseLeave={e => (e.currentTarget.style.background = C.red)}
          >
            Buy Now
          </a>
        </div>
        {/* Mobile hamburger */}
        <button className="md:hidden ml-auto mr-5" onClick={() => setOpen(o => !o)}
          style={{ background: "none", border: "none", cursor: "pointer", color: C.black }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div style={{ background: C.white, borderTop: `1px solid ${C.border}` }}>
          <Link to="/" className="block px-6 py-4 text-[11px] font-semibold uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif", color: C.gray, borderBottom: `1px solid ${C.border}` }}>Home</Link>
          {/* Vehicles expandable */}
          <button
            onClick={() => setVehiclesOpen(o => !o)}
            className="w-full flex items-center justify-between px-6 py-4 text-[11px] font-semibold uppercase tracking-widest"
            style={{ fontFamily: "Inter, sans-serif", color: C.gray, borderBottom: `1px solid ${C.border}`, background: "none", cursor: "pointer" }}
          >
            Vehicles <ChevronDown size={13} style={{ transform: vehiclesOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
          </button>
          {vehiclesOpen && navVehicles.map(v => (
            <Link key={v.to} to={v.to} className="block pl-10 pr-6 py-3.5 text-[11px] font-semibold uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif", color: C.red, borderBottom: `1px solid ${C.border}` }}>{v.label}</Link>
          ))}
          {navMain.slice(1).map(l => (
            <Link key={l.to} to={l.to} className="block px-6 py-4 text-[11px] font-semibold uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif", color: loc.pathname === l.to ? C.red : C.gray, borderBottom: `1px solid ${C.border}` }}>{l.label}</Link>
          ))}
          <div className="px-6 py-4">
            <a href={wa("Hi, I'd like to buy an EV from Trijal Motors.")} target="_blank" rel="noopener noreferrer"
              className="block text-center py-3 text-white text-[11px] font-semibold uppercase tracking-widest"
              style={{ background: C.red, borderRadius: 8, fontFamily: "Inter, sans-serif" }}>
              Buy Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: C.black }}>
      <FooterStripe />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="mb-5 flex items-center">
            <div className="flex items-center justify-center flex-shrink-0" style={{ width: 140, height: 92, borderRadius: 16, background: C.white, boxShadow: "0 4px 20px rgba(0,0,0,0.35)" }}>
              <img src={IMG.logoFull} alt="Trijal Motors Pvt. Ltd." style={{ maxHeight: 60, maxWidth: 110, width: "auto", height: "auto", objectFit: "contain", display: "block" }} />
            </div>
          </div>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>
            Official authorized dealer of Jagadamba Motors for Gandaki Province. Showroom at Pokhara-14, Chauthe.
          </p>
          {/* TikTok link */}
          <a href="https://www.tiktok.com/@chery.wanda.pokha" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-[10px] font-semibold uppercase tracking-widest transition-opacity hover:opacity-70"
            style={{ fontFamily: "Inter, sans-serif", color: C.red }}>
            Follow us on TikTok →
          </a>
        </div>
        <div>
          <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: C.red, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 16 }}>— Vehicles</p>
          {[
            { label: "Chery Wanda — 11 to 16-Seater EV Bus", to: "/vehicles/chery-wanda" },
            { label: "Financing — 40% down payment", to: "/financing" },
            { label: "Gallery", to: "/gallery" },
            { label: "About Us", to: "/about" },
          ].map(l => (
            <Link key={l.to} to={l.to} className="block text-[11px] mb-2.5 transition-colors uppercase tracking-wide"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={e => (e.currentTarget.style.color = C.white)}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
              {l.label}
            </Link>
          ))}
        </div>
        <div>
          <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: C.red, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 16 }}>— Contact</p>
          <div className="space-y-2.5">
            {[
              { icon: <Phone size={11} color={C.red} />, text: "061-586524 · 9856058195" },
              { icon: <Mail size={11} color={C.red} />, text: EMAIL },
              { icon: <MapPin size={11} color={C.red} />, text: "Pokhara-14, Chauthe, Nepal" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex-shrink-0">{icon}</span>
                <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-wrap gap-3 justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "rgba(255,255,255,0.2)", paddingLeft: 100 }}>© {new Date().getFullYear()} Trijal Motors Pvt. Ltd.</p>
        <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "rgba(255,255,255,0.2)", paddingRight: 40 }}> Authorized dealer of Jagadamba Motors</p>
      </div>
    </footer>
  );
}
export function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <a
      href={wa("Hi, I found Trijal Motors online and I'd like to enquire about your electric vehicles.")}
      target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 text-white text-[11px] font-semibold uppercase tracking-widest shadow-lg transition-all duration-300"
      style={{
        background: "#25D366", borderRadius: 50, fontFamily: "Inter, sans-serif",
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)",
        pointerEvents: visible ? "auto" : "none", boxShadow: "0 8px 32px rgba(37,211,102,0.35)",
      }}
      onMouseEnter={e => (e.currentTarget.style.background = "#1ebe5d")}
      onMouseLeave={e => (e.currentTarget.style.background = "#25D366")}
    >
      <MessageCircle size={18} /> WhatsApp Us
    </a>
  );
}