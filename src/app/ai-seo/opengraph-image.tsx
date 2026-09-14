import { ImageResponse } from "next/og";

export const alt = "UBE AI SEO Agency guide for ChatGPT, Google AI Overviews, and Perplexity";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAF7F6",
          color: "#161616",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 26, fontWeight: 700 }}>Unified Branding Experts</div>
          <div style={{ display: "flex", border: "2px solid #E0DDDB", borderRadius: 999, padding: "12px 22px", fontSize: 20 }}>
            AI SEO · AEO · GEO
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1010 }}>
          <div style={{ display: "flex", color: "#715CC4", fontSize: 24, fontWeight: 700, letterSpacing: 3, marginBottom: 20 }}>
            THE COMPLETE AI SEARCH FRAMEWORK
          </div>
          <div style={{ display: "flex", fontSize: 64, lineHeight: 1.02, fontWeight: 800, letterSpacing: -3 }}>
            Get cited in ChatGPT, Google AI Overviews &amp; Perplexity
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 22, color: "#585858" }}>Schema-driven · Entity-first · Evidence-backed</div>
          <div style={{ display: "flex", background: "#9F8BE7", borderRadius: 999, padding: "14px 24px", fontSize: 20, fontWeight: 700 }}>
            100-site study included
          </div>
        </div>
      </div>
    ),
    size
  );
}
