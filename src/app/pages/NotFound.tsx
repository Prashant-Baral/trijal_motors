import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { C } from "../shared/brand";
import { Emblem } from "../shared/Emblem";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6" style={{ minHeight: "70vh", background: C.offWhite }}>
      <Emblem size={72} />
      <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 80, fontWeight: 700, color: C.red, lineHeight: 1, marginTop: 24 }}>404</p>
      <p style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(20px, 3vw, 32px)", color: C.black, textTransform: "uppercase", marginTop: 8 }}>Page not found</p>
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: C.gray, marginTop: 10, maxWidth: 380, lineHeight: 1.8 }}>
        The page you're looking for doesn't exist. Head back to find the Chery Wanda electric vehicles.
      </p>
      <Link to="/" className="mt-8 inline-flex items-center gap-2 px-7 py-3 text-white text-[11px] font-semibold uppercase tracking-widest"
        style={{ background: C.red, borderRadius: 8, fontFamily: "Inter, sans-serif", textDecoration: "none" }}
      >
        Back to home <ArrowRight size={13} />
      </Link>
    </div>
  );
}
