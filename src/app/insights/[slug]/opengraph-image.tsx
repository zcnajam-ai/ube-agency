import { ImageResponse } from "next/og";
import { getInsightBySlug } from "@/data/insights";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  const title = article?.title ?? "Insights from Unified Branding Experts";

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 68, background: "linear-gradient(135deg, #FAF7F6 0%, #f5ebf8 52%, #d9d0fa 100%)", color: "#161616", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 29, fontWeight: 700 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 60, height: 60, borderRadius: 18, background: "#9F8BE7" }}>UBE</div>
        <span>Unified Branding Experts</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <span style={{ fontSize: 23, letterSpacing: 3, textTransform: "uppercase", color: "#4c397e", fontWeight: 700 }}>{article?.category ?? "Insights"}</span>
        <span style={{ fontSize: title.length > 65 ? 53 : 61, lineHeight: 1.12, letterSpacing: -2, fontWeight: 800, maxWidth: 1050 }}>{title}</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 23, color: "#585858" }}>
        <span>Practical guides for business owners</span>
        <span>unifiedbrandingexperts.com</span>
      </div>
    </div>,
    size
  );
}
