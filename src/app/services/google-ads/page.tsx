import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import ServiceDetailView from "@/components/services/ServiceDetailView";

export const metadata: Metadata = {
  title: "Google Ads & Performance Max Campaigns",
  description:
    "Intent-driven Google Search, Shopping, and Performance Max advertising engineered for profitable customer acquisition.",
};

export default function GoogleAdsServicePage() {
  const service = getServiceBySlug("google-ads");
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
