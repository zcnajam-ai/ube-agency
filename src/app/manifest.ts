import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Unified Branding Experts",
    short_name: "UBE",
    description:
      "Unified Branding Experts provides professional web design, branding, eCommerce development, AI SEO, paid advertising, mobile apps and digital growth services.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F6",
    theme_color: "#161616",
    icons: [
      {
        src: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
