import { MetadataRoute } from "next";
import { ALL_SERVICES } from "@/data/services";
import { FEATURED_PROJECTS } from "@/data/projects";
import { INSIGHTS } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://unifiedbrandingexperts.com";
  const now = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/packages`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/work`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },

    // Dedicated Requested Service Routes
    { url: `${baseUrl}/best-logo-design-agency`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/professional-web-design-services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/best-website-development-agency`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/digital-marketing-services-agency`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/custom-web-development`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/professional-content-writing-services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },

    // Dedicated Requested Package Routes
    { url: `${baseUrl}/logo-design-packages`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/web-design-packages`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/our-website-development-packages`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/our-digital-marketing-packages`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/our-custom-web-design-development-packages`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/our-content-writing-packages`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/branding-packages`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/ai-seo-packages`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/ai-automation-packages`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/tiktok-marketing-packages`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/mobile-app-packages`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  // Dynamic Service routes
  const serviceRoutes: MetadataRoute.Sitemap = ALL_SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Project routes
  const projectRoutes: MetadataRoute.Sitemap = FEATURED_PROJECTS.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Dynamic Insight routes
  const insightRoutes: MetadataRoute.Sitemap = INSIGHTS.map((i) => ({
    url: `${baseUrl}/insights/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...insightRoutes];
}
