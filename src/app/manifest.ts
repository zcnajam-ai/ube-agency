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
        src: "/icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
