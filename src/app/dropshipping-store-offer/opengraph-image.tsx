import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 75, background: "linear-gradient(120deg,#FAF7F6,#E7D9FA)", color: "#161616" }}>
      <div style={{ fontSize: 25, fontWeight: 700, color: "#6049B0", letterSpacing: 3 }}>UNIFIED BRANDING EXPERTS</div>
      <div style={{ fontSize: 75, fontWeight: 800, lineHeight: 1.08, maxWidth: 1000, marginTop: 34 }}>Build your dropshipping store</div>
      <div style={{ display: "flex", marginTop: 42, gap: 18, fontSize: 31, fontWeight: 700 }}><span>Launch $399</span><span>·</span><span>Growth $799</span><span>·</span><span>Scale $999</span></div>
    </div>, size,
  );
}
