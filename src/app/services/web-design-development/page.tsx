import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import ServiceDetailView from "@/components/services/ServiceDetailView";

export const metadata: Metadata = {
  title: "Website Design & Custom Web Development",
  description:
    "Bespoke, high-performance web experiences built with Next.js App Router, GSAP motion design, and headless CMS integrations.",
};

export default function WebDesignServicePage() {
  const service = getServiceBySlug("web-design-development");
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
