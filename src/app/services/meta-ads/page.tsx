import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import ServiceDetailView from "@/components/services/ServiceDetailView";

export const metadata: Metadata = {
  title: "Meta Ads (Facebook & Instagram Acquisition)",
  description:
    "Direct-response visual advertising and Conversions API (CAPI) funnels engineered to convert social scrollers into high-LTV customers.",
};

export default function MetaAdsServicePage() {
  const service = getServiceBySlug("meta-ads");
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
