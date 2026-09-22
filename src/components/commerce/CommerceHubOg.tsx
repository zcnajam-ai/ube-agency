import { ImageResponse } from "next/og";
import type { MarketplaceHub } from "@/data/marketplace-hubs";

export const commerceOgSize = { width: 1200, height: 630 };

export function createCommerceHubOg(hub: MarketplaceHub) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#FAF7F6", color: "#161616", padding: "64px", fontFamily: "Arial, sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 24, fontWeight: 700 }}>Unified Branding Experts</div>
          <div style={{ display: "flex", border: "2px solid #9F8BE7", borderRadius: 999, padding: "12px 20px", fontSize: 18, fontWeight: 700 }}>{hub.eyebrow}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1040 }}>
          <div style={{ display: "flex", fontSize: 66, lineHeight: 1.02, letterSpacing: "-3px", fontWeight: 800 }}>{hub.title}</div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 25, lineHeight: 1.35, color: "#585858" }}>Setup, management, integration, and measurement—built as one accountable commerce system.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 20 }}><span>{hub.pricing.label}</span><span style={{ color: "#7c68ca", fontWeight: 700 }}>unifiedbrandingexperts.com/{hub.slug}</span></div>
      </div>
    ),
    commerceOgSize,
  );
}

