import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://unifiedbrandingexperts.com";

  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
