import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import ServiceDetailView from "@/components/services/ServiceDetailView";

export const metadata: Metadata = {
  title: "Social Media Management & Omnichannel Content Strategy",
  description:
    "End-to-end social media strategy, custom branded assets, editorial content calendars, and community engagement across LinkedIn, Instagram, Facebook, and Threads.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/services/social-media-management",
  },
  openGraph: {
    title: "Social Media Management & Omnichannel Content Strategy",
    description:
      "End-to-end social media strategy, custom branded assets, and community engagement across LinkedIn, Instagram, Facebook, and Threads.",
    url: "https://unifiedbrandingexperts.com/services/social-media-management",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "Social Media Management - Unified Branding Experts",
      },
    ],
  },
};

export default function SocialMediaServicePage() {
  const service = getServiceBySlug("social-media-management");
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
