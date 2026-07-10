import { C, IMG } from "../shared";
import PageMeta, { pageMeta } from "../components/PageMeta";

const photos: { img: string; alt: string; caption: string }[] = [
  { img: IMG.seater_12_b, alt: "Chery Wanda 12 seater Best EV microbus pokhara ", caption: "[ph] Chery Wanda · Chery Wanda 12-Seater · Pokhara" },
  { img: IMG.customer12, alt: "Chery Wanda electric microbus Nepal", caption: "[ph] Handover  · Chery Wanda 16-Seater · Pokhara" },
  { img: IMG.customer11, alt: "Chery Wanda delivery Baglung Gandaki", caption: "[ph] Handover · Chery Wanda 16-Seater · Pokhara" },
  { img: IMG.customer7, alt: "Chery Wanda handover Gandaki Province", caption: "[ph] Handover · Chery Wanda 16-Seater· Gandaki Province" },
  { img: IMG.customer6, alt: "Chery Wanda 16-seater customers Pokhara", caption: "[ph] Handover · Chery Wanda 16-Seater · Pokhara" },
  { img: IMG.seater_11_a, alt: "Chery Wanda 11-seater customers Pokhara", caption: "[ph] Chery Wanda · Chery Wanda 11-Seater · Pokhara" },
  { img: IMG.customer3, alt: "Trijal Motors EV showroom Pokhara", caption: "[ph]  Handover · Chery Wanda 14-Seater · Pokhara" },
  { img: IMG.customer1, alt: "Chery Wanda electric microbus Nepal", caption: "[ph] Handover · Chery Wanda 14-Seater · Pokhara" },
  { img: IMG.seater_11_a, alt: "Trijal Motors showroom display Pokhara", caption: "[ph] Chery Wanda · Chery Wanda 11-Seater · Pokhara-14, Chauthe" },
  { img: IMG.customer2, alt: "Trijal Motors EV Chery Wanda Pokhara", caption: "[ph] Handover · Chery Wanda 16-Seater · Pokhara" },
  { img: IMG.customer4, alt: "Chery Wanda electric microbus Nepal", caption: "[ph] Handover · Chery Wanda 14-Seater · Pokhara" },
  { img: IMG.customer5, alt: "Chery Wanda electric microbus Nepal", caption: "[ph] Handover · Chery Wanda 16-Seater · Pokhara" },
  { img: IMG.customer8, alt: "Chery Wanda electric microbus Nepal", caption: "[ph] Handover · Chery Wanda 14-Seater · Pokhara" },
  { img: IMG.customer9, alt: "Chery Wanda electric microbus Nepal", caption: "[ph] Handover  · Chery Wanda 16-Seater · Pokhara" },
  { img: IMG.opengraph, alt: "Chery Wanda electric microbus Nepal", caption: "[ph] Chery Wanda · Chery Wanda 14-Seater · Pokhara" },
  { img: IMG.pokhara, alt: "Gandaki Province scenic mountain route Nepal", caption: "[ph] Gandaki Province · Service area" },
];

export default function Gallery() {
  return (
    <>
      <PageMeta {...pageMeta.gallery} />
      <div style={{ background: C.black, paddingTop: 36, paddingBottom: 28 }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: C.red, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>— Photo gallery</p>
          <h1 className="uppercase font-bold leading-none" style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(22px, 3.5vw, 44px)", color: C.white }}>
            <span style={{ color: C.red }}>Chery Wanda</span>
            <br />
            <span style={{ fontSize: "0.55em", color: "rgba(255,255,255,0.7)", letterSpacing: "0.06em" }}>Customer handovers & showroom gallery</span>
          </h1>
        </div>
      </div>

      <section style={{ background: C.white }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="columns-2 md:columns-3 gap-4">
            {photos.map((p, i) => (
              <div key={i} className="relative overflow-hidden group mb-4 break-inside-avoid" style={{
                borderRadius: 16,
                background: C.black,
                aspectRatio: i % 5 === 0 ? "16/10" : "4/3",
              }}>
                <img src={p.img} alt={p.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ opacity: 0.85 }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5" style={{ background: "linear-gradient(to top, rgba(20,20,20,0.85) 0%, transparent 55%)" }}>
                  <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: "rgba(255,255,255,0.8)", letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1.6 }}>{p.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}