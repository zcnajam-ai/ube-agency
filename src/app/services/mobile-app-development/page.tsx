import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import ServiceDetailView from "@/components/services/ServiceDetailView";

export const metadata: Metadata = {
  title: "Mobile App Development (iOS & Android)",
  description:
    "Native and cross-platform mobile application engineering with intuitive UX, real-time cloud synchronization, and sub-second startup times.",
};

export default function MobileAppServicePage() {
  const service = getServiceBySlug("mobile-app-development");
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
