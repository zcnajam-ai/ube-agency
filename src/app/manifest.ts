import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Unified Branding Experts",
    short_name: "UBE",
    description:
      "Grow your business with expert Shopify development, eCommerce, AI SEO, branding, web design, Google Ads and digital marketing services across the U.S.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F6",
    theme_color: "#161616",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
