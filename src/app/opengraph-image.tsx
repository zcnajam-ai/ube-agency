import { ImageResponse } from "next/og";

export const alt = "Unified Branding Experts - Digital Growth Agency";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAF7F6",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Subtle Purple Ambient Glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            background: "rgba(159, 139, 231, 0.15)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            background: "rgba(221, 241, 96, 0.10)",
            borderRadius: "50%",
          }}
        />

        {/* Inner Card Container */}
        <div
          style={{
            width: "1120px",
            height: "550px",
            border: "1px solid #E0DDDB",
            borderRadius: "32px",
            background: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.03)",
          }}
        >
          {/* Top Pill Badge */}
          <div
            style={{
              padding: "8px 24px",
              borderRadius: "999px",
              background: "#FAF7F6",
              border: "1px solid #E0DDDB",
              fontSize: "13px",
              fontWeight: "700",
              color: "#9F8BE7",
              letterSpacing: "3px",
              marginBottom: "32px",
              textTransform: "uppercase",
            }}
          >
            DIGITAL GROWTH AGENCY
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "52px",
              fontWeight: "800",
              color: "#161616",
              letterSpacing: "-2px",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Unified Branding Experts
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "22px",
              fontWeight: "600",
              color: "#585858",
              letterSpacing: "0.5px",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            Web • eCommerce • Branding • SEO • AI • Growth
          </div>

          {/* Accent Line */}
          <div
            style={{
              width: "160px",
              height: "4px",
              borderRadius: "2px",
              background: "#9F8BE7",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
