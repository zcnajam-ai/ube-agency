import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import ServiceDetailView from "@/components/services/ServiceDetailView";

export const metadata: Metadata = {
  title: "Social Media Management & Omnichannel Content",
  description:
    "End-to-end social media strategy, custom branded assets, and community engagement across LinkedIn, Instagram, Facebook, and Threads.",
};

export default function SocialMediaServicePage() {
  const service = getServiceBySlug("social-media-management");
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
