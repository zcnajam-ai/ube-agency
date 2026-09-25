import { ImageResponse } from "next/og";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

type BrandedOgConfig = {
  title: string;
  eyebrow: string;
  detail: string;
  badge?: string;
};

export function createBrandedOgImage({ title, eyebrow, detail, badge }: BrandedOgConfig) {
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
          padding: "58px 68px",
          fontFamily: "Arial, sans-serif",
          border: "18px solid #161616",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, borderRadius: 20, background: "#9F8BE7", fontSize: 24, fontWeight: 800 }}>UBE</div>
            <div style={{ display: "flex", fontSize: 25, fontWeight: 700 }}>Unified Branding Experts</div>
          </div>
          <div style={{ display: "flex", border: "2px solid #E0DDDB", borderRadius: 999, padding: "11px 20px", fontSize: 18 }}>Built together</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
          <div style={{ display: "flex", color: "#715CC4", fontSize: 22, fontWeight: 800, letterSpacing: 3, marginBottom: 18 }}>{eyebrow}</div>
          <div style={{ display: "flex", fontSize: 66, lineHeight: 1.02, fontWeight: 800, letterSpacing: -3 }}>{title}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 22, color: "#585858" }}>{detail}</div>
          {badge ? <div style={{ display: "flex", background: "#9F8BE7", borderRadius: 999, padding: "14px 24px", fontSize: 21, fontWeight: 800 }}>{badge}</div> : null}
        </div>
      </div>
    ),
    OG_IMAGE_SIZE
  );
}
