import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import ServiceDetailView from "@/components/services/ServiceDetailView";

export const metadata: Metadata = {
  title: "eCommerce Store Setup & Headless Architecture",
  description:
    "Custom Shopify Plus, WooCommerce, and Headless eCommerce development engineered for high checkout velocity and scalable global sales.",
};

export default function EcommerceServicePage() {
  const service = getServiceBySlug("ecommerce");
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
