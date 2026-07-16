import { useEffect, useState, useCallback } from "react";
import { C, IMG } from "../shared";
import PageMeta, { pageMeta } from "../components/PageMeta";
import { BreadcrumbSchema, ImageGallerySchema, VideoObjectSchema } from "../components/SeoSchemas";
const SITE_URL = "https://trijalmotors.com.np";
const absImg = (src: string) => (src.startsWith("http") ? src : `${SITE_URL}${src.startsWith("/") ? "" : "/"}${src}`);
type MediaItem =
  | { kind: "photo"; img: string; alt: string; caption: string; description?: string }
  | { kind: "youtube"; src: string; thumb?: string; caption: string; description?: string; uploadDate: string; duration?: string }
  | { kind: "local"; src: string; thumb?: string; caption: string; description?: string; uploadDate: string; duration?: string };
const media: MediaItem[] = [
  { kind: "photo", img: IMG.seater_12_b, alt: "Chery Wanda 12-seater electric microbus at Trijal Motors showroom, Pokhara", caption: "Chery Wanda 12-Seater · EV Pokhara Showroom", description: "Chery Wanda 12-seater electric microbus on display at Trijal Motors, the authorized Jagadamba Motors EV dealer in Pokhara, Gandaki Province." },
  { kind: "photo", img: IMG.customer12, alt: "Customer handover of Chery Wanda 14-seater electric van in Pokhara, Nepal", caption: "Chery Wanda Pokhara · 14-Seater Handover", description: "Trijal Motors customer handover ceremony for a Chery Wanda 14-seater electric microbus in Pokhara." },
  { kind: "photo", img: IMG.ecustomer1, alt: "Chery Wanda 14-seater EV delivered to Mr Bharat Karki", caption: "Trijal Motors · Chery Wanda Delivery", description: "Chery Wanda 14-seater electric van delivered by Trijal Motors in Gandaki Province." },
  { kind: "photo", img: IMG.ecustomer3, alt: "Chery Wanda 14-seater EV delivered to Mr Khim Bahadur Thapa", caption: "Trijal Motors · Chery Wanda 14-Seater Handover", description: "Trijal Motors sales team with customers at a Chery Wanda 14-seater handover in Pokhara." },
  { kind: "photo", img: IMG.seater_11_a, alt: "Chery Wanda 11-seater electric microbus with customers, Pokhara", caption: "Chery Wanda 11-Seater · Pokhara", description: "Chery Wanda 11-seater electric microbus shown with customers at Trijal Motors, Pokhara." },
  { kind: "photo", img: IMG.ecustomer4, alt: "Chery Wanda 14-seater EV delivered to Mr Madan Sunar", caption: "Handover · Chery Wanda 14-Seater", description: "Inside the Trijal Motors EV showroom in Pokhara during a Chery Wanda 14-seater handover." },
  { kind: "photo", img: IMG.opengraph, alt: "Chery Wanda 14-seater electric microbus front view, Pokhara, Nepal", caption: "Chery Wanda 14-Seater · Front View", description: "Front view of the Chery Wanda 14-seater electric microbus sold by Trijal Motors in Pokhara." },
  { kind: "photo", img: IMG.seater_16_j, alt: "Chery Wanda 16-seater electric microbus at Trijal Motors showroom, Pokhara", caption: "Chery Wanda 16-Seater · Side Profile View", description: "Side Profile view of the Chery Wanda 16-seater electric microbus sold by Trijal Motors in Pokhara." },
  { kind: "photo", img: IMG.seater_14_d, alt: "Chery Wanda 14 seater, Pokhara-14, Chauthe, Kaski", caption: "Pokhara · Chery Wanda 16 seater", description: "Trijal Motors Chery Wanda 14 seater" },
  { kind: "photo", img: IMG.ecustomer5, alt: "Chery Wanda 14-seater handover ceremony to Mr. Narayan Sunar in Gandaki Province, Nepal", caption: "EV Pokhara · Chery Wanda 14-Seater Handover", description: "Handover ceremony for a Chery Wanda 14-seater electric microbus, Gandaki Province, Nepal." },
  { kind: "photo", img: IMG.ecustomer9, alt: "Chery Wanda 16-seater handover ceremony to Mr Nirmal Parajuli and 14 seater to Mr Purushottam Lamsal in Gandaki Province, Nepal", caption: "Chery Wanda Pokhara · Vehile Handover ", description: "Trijal Motors team celebrating a Chery Wanda electric microbus handover in Pokhara." },
  { kind: "photo", img: IMG.ecustomer7, alt: "Customer Mr. Sher Bahadur Gurung receiving keys to a Chery Wanda 16-seater EV in Pokhara", caption: "Key Handover · Chery Wanda 16-Seater EV", description: "Customer receiving the keys to a Chery Wanda 16-seater electric microbus at Trijal Motors, Pokhara." },
  { kind: "photo", img: IMG.ecustomer2, alt: "Chery Wanda 11-seater electric microbus handover event, Pokhara to Mrs. Dhan Kumari", caption: "Trijal Motors · Chery Wanda 11-Seater Event", description: "Chery Wanda 11-seater electric microbus handover event hosted by Trijal Motors in Pokhara." },
  { kind: "photo", img: IMG.seater_16_a, alt: "Chery Wanda 14-seater electric microbus at Trijal Motors showroom, Pokhara", caption: "Chery Wanda 16-Seater · Side View", description: "Side View of the Chery Wanda 16-seater electric microbus sold by Trijal Motors in Pokhara." },
  { kind: "photo", img: IMG.seater_16_e, alt: "Chery Wanda 16-seater electric microbus at Trijal Motors showroom, Pokhara", caption: "Chery Wanda 16-Seater · Rear View", description: "Rear View of the Chery Wanda 16-seater electric microbus sold by Trijal Motors in Pokhara." },
  { kind: "photo", img: IMG.pokhara, alt: "Mountain route in Gandaki Province served by Chery Wanda EV operators", caption: "Gandaki Province · Chery Wanda Service Routes", description: "A scenic Gandaki Province route served by Chery Wanda electric microbus operators." },
  { kind: "photo", img: IMG.ecustomer6, alt: "Customer handover of Chery Wanda 16-seater electric microbus, Pokhara, Nepal to  Mr. Raju Makhim", caption: "Chery Wanda 16-Seater Handover · Pokhara", description: "Customer receiving a Chery Wanda 16-seater electric microbus from Trijal Motors in Pokhara." },
  { kind: "photo", img: IMG.ecustomer8, alt: "Chery Wanda 14-seater electric van handover group photo, Pokhara", caption: "Chery Wanda 14-Seater · Group Handover Photo", description: "Group photo at a Chery Wanda 16-seater electric van handover event in Pokhara." },
  { kind: "photo", img: IMG.ecustomer4, alt: "Chery Wanda 14-seater EV delivered to Mr Madan Sunar", caption: "Handover · Chery Wanda 14-Seater", description: "Inside the Trijal Motors EV showroom in Pokhara during a Chery Wanda 14-seater handover." },
  { kind: "photo", img: IMG.ecustomer10, alt: "Customer Mr. Prakash Tripathi receiving keys to a Chery Wanda 16-seater EV in Pokhara", caption: "Key Handover · Chery Wanda 16-Seater EV", description: "Customer receiving the keys to a Chery Wanda 16-seater electric microbus at Trijal Motors, Pokhara." },
  { kind: "photo", img: IMG.ecustomer11, alt: "Chery Wanda 14-seater electric microbus at Trijal Motors showroom Handover", caption: "Chery Wanda 14-Seater · Delivered ", description: "Delivery of the Chery Wanda 14-seater electric microbus" },
  { kind: "photo", img: IMG.seater_16_g, alt: "Chery Wanda 16-seater electric microbus at Trijal Motors showroom, Pokhara", caption: "Chery Wanda 16-Seater · Interior", description: "Interior of the Chery Wanda 16-seater electric microbus sold by Trijal Motors in Pokhara." },
  { kind: "photo", img: IMG.customer13, alt: "Chery Wanda 14-seater electric microbus at Trijal Motors showroom, Pokhara", caption: "Chery Wanda 14-Seater · Delivered to Rainbow Academic Homes", description: "Delivery of the Chery Wanda 14-seater electric microbus to Rainbow Academic Homes in Pokhara" },


  { kind: "local", src: "/videos/trijal-promo.mp4", caption: "Trijal Motors · Chery Wanda EV Pokhara Promo", description: "Official promo video for Trijal Motors, the authorized Jagadamba Motors Chery Wanda electric microbus dealer in Pokhara, Gandaki Province.", uploadDate: "2026-01-01" },
];
const ytThumb = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
const ytEmbed = (id: string) => `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
function thumbFor(item: MediaItem): string {
  if (item.kind === "photo") return item.img;
  if (item.kind === "youtube") return item.thumb ?? ytThumb(item.src);
  return item.thumb ?? "";
}
function LightboxControls({ onClose, onPrev, onNext }: { onClose: () => void; onPrev: () => void; onNext: () => void }) {
  const btn: React.CSSProperties = { background: "transparent", border: "none", cursor: "pointer", color: "#fff", lineHeight: 1, position: "absolute" };
  return (
    <>
      <button type="button" onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="Close"
        className="transition-opacity hover:opacity-50"
        style={{ ...btn, top: 20, right: 20, fontSize: 34 }}>×</button>
      <button type="button" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous"
        className="transition-opacity hover:opacity-50"
        style={{ ...btn, left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 44 }}>‹</button>
      <button type="button" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next"
        className="transition-opacity hover:opacity-50"
        style={{ ...btn, right: 14, top: "50%", transform: "translateY(-50%)", fontSize: 44 }}>›</button>
    </>
  );
}
function Lightbox({ item, onClose, onPrev, onNext }: { item: MediaItem; onClose: () => void; onPrev: () => void; onNext: () => void }) {
  return (
    <div
      role="dialog" aria-modal="true" onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: "rgba(10,10,10,0.92)", backdropFilter: "blur(6px)" }}
    >
      {item.kind === "photo" && (
        <img
          src={item.img} alt={item.alt}
          onClick={(e) => e.stopPropagation()}
          className="object-contain"
          style={{ maxWidth: "92vw", maxHeight: "86vh", borderRadius: 8 }}
        />
      )}
      {(item.kind === "youtube" || item.kind === "local") && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ width: "min(90vw, 960px)", aspectRatio: "16/9", borderRadius: 12, overflow: "hidden", background: "#000", boxShadow: "0 32px 80px rgba(0,0,0,0.7)" }}
        >
          {item.kind === "youtube" ? (
            <iframe
              src={ytEmbed(item.src)} title={item.caption}
              allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          ) : (
            <video src={item.src} controls autoPlay style={{ width: "100%", height: "100%", objectFit: "contain", background: "#000" }} title={item.caption} />
          )}
        </div>
      )}
      <p
        onClick={(e) => e.stopPropagation()}
        className="absolute left-1/2 -translate-x-1/2 px-4 text-center"
        style={{ bottom: 26, fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "rgba(255,255,255,0.45)", letterSpacing: "0.14em", textTransform: "uppercase" }}
      >
        {item.caption}
      </p>
      <LightboxControls onClose={onClose} onPrev={onPrev} onNext={onNext} />
    </div>
  );
}
function PlayBadge() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div style={{
        width: 56, height: 56, borderRadius: "50%",
        background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)",
        border: "2px solid rgba(255,255,255,0.4)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg viewBox="0 0 24 24" fill="white" width={22} height={22} style={{ marginLeft: 3 }}>
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}
export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const close = useCallback(() => setActiveIdx(null), []);
  const prev = useCallback(() => setActiveIdx((i) => (i === null ? null : (i - 1 + media.length) % media.length)), []);
  const next = useCallback(() => setActiveIdx((i) => (i === null ? null : (i + 1) % media.length)), []);
  useEffect(() => {
    if (activeIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIdx, close, prev, next]);
  useEffect(() => {
    document.body.style.overflow = activeIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeIdx]);
  const videoSchemaData = media
    .filter((m): m is Extract<MediaItem, { kind: "local" | "youtube" }> => m.kind === "local" || m.kind === "youtube")
    .map((v) => ({
      name: v.caption,
      description: v.description ?? v.caption,
      thumbnailUrl: absImg(thumbFor(v) || IMG.opengraph),
      uploadDate: v.uploadDate,
      duration: v.duration,
      ...(v.kind === "local" ? { contentUrl: absImg(v.src) } : { embedUrl: ytEmbed(v.src) }),
    }));
  return (
    <>
      <PageMeta {...pageMeta.gallery} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://trijalmotors.com.np/" },
          { name: "Gallery", url: "https://trijalmotors.com.np/gallery" },
        ]}
      />
      <ImageGallerySchema
        name="Chery Wanda EV Pokhara — Customer Handovers & Showroom Gallery | Trijal Motors"
        images={media
          .filter((m): m is Extract<MediaItem, { kind: "photo" }> => m.kind === "photo")
          .map((p) => ({ url: absImg(p.img), caption: p.caption, description: p.description }))}
      />
      {videoSchemaData.length > 0 && <VideoObjectSchema videos={videoSchemaData} />}
      <div style={{ background: C.black, paddingTop: 36, paddingBottom: 28 }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: C.red, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>
            — Gallery
          </p>
          <h1 className="uppercase font-bold leading-none" style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(22px, 3.5vw, 44px)", color: C.white }}>
            <span style={{ color: C.red }}>Chery Wanda</span>
            <br />
            <span style={{ fontSize: "0.55em", color: "rgba(255,255,255,0.7)", letterSpacing: "0.06em" }}>
              EV Pokhara · Customer handovers &amp; showroom gallery
            </span>
          </h1>
        </div>
      </div>
      <section style={{ background: C.white }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="columns-2 md:columns-3 gap-4">
            {media.map((item, i) => {
              const thumb = thumbFor(item);
              const isVideo = item.kind !== "photo";
              const useAutoVideoCover = item.kind === "local" && !item.thumb;
              return (
                <figure
                  key={i}
                  className="relative overflow-hidden group mb-4 break-inside-avoid w-full"
                  style={{ borderRadius: 16 }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    aria-label={`Open ${item.kind === "photo" ? "photo" : "video"}: ${item.caption}`}
                    className="relative overflow-hidden block w-full text-left cursor-pointer"
                    style={{
                      aspectRatio: i % 5 === 0 ? "16/10" : "4/3",
                      padding: 0, border: "none",
                    }}
                  >
                    {useAutoVideoCover ? (
                      <video
                        src={(item as Extract<MediaItem, { kind: "local" }>).src}
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ opacity: 0.7 }}
                      />
                    ) : thumb ? (
                      <img
                        src={thumb} alt={item.kind === "photo" ? item.alt : item.caption}
                        loading={i < 3 ? "eager" : "lazy"}
                        {...(i === 0 ? { fetchPriority: "high" } : {})}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ opacity: isVideo ? 0.7 : 0.85 }}
                      />
                    ) : (
                      <div className="w-full h-full" style={{ background: "#111" }} />
                    )}
                    {isVideo && <PlayBadge />}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(to top, rgba(20,20,20,0.55) 0%, transparent 55%)" }}
                    />
                  </button>
                  <figcaption
                    className="px-4 py-3"
                    style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: "rgba(0, 0, 0, 0.75)", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1.6 }}
                  >
                    {isVideo && <span style={{ color: C.red, marginRight: 6 }}>▶</span>}
                    {item.caption}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>
      {activeIdx !== null && (
        <Lightbox
          item={media[activeIdx]}
          onClose={close} onPrev={prev} onNext={next}
        />
      )}
    </>
  );
}