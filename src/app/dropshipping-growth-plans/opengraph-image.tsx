import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 75, background: "linear-gradient(120deg,#161616,#59417F)", color: "#FFFFFF" }}>
      <div style={{ fontSize: 25, fontWeight: 700, color: "#C3B2FF", letterSpacing: 3 }}>UNIFIED BRANDING EXPERTS</div>
      <div style={{ fontSize: 73, fontWeight: 800, lineHeight: 1.08, maxWidth: 1000, marginTop: 34 }}>Growth after the store launch</div>
      <div style={{ display: "flex", marginTop: 42, gap: 18, fontSize: 29 }}>90 days · 6 months · 12 months</div>
    </div>, size,
  );
}
