import React from "react";
import { Metadata } from "next";
import ContactClient from "./ContactClient";
import { AI_SEO_PACKAGES } from "@/data/aiSeoPackages";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries",
  description:
    "Get in touch with Unified Branding Experts. Request a custom proposal for branding, web design, eCommerce development, or AI search optimization.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/contact",
  },
  openGraph: {
    title: "Contact & Project Inquiries",
    description:
      "Get in touch with Unified Branding Experts. Request a custom proposal for branding, web design, eCommerce development, or AI search optimization.",
    url: "https://unifiedbrandingexperts.com/contact",
    type: "website",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/contact/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contact Unified Branding Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Project Inquiries",
    description:
      "Get in touch with Unified Branding Experts. Request a custom proposal for branding, web design, eCommerce development, or AI search optimization.",
    images: ["https://unifiedbrandingexperts.com/contact/opengraph-image"],
  },
};

export default async function ContactPage({ searchParams }: {
  searchParams: Promise<{ package?: string | string[]; type?: string | string[] }>;
}) {
  const query = await searchParams;
  const selectedPackage = AI_SEO_PACKAGES.find((pkg) =>
    query.package === pkg.id || query.package === `aiseo-${pkg.id}`
  );
  const initialService = selectedPackage || query.type === "aiseo"
    ? "AISEO & Search Optimization"
    : undefined;
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Unified Branding Experts",
    url: "https://unifiedbrandingexperts.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Unified Branding Experts",
      telephone: "+1 224-266-8081",
      email: "info@unifiedbrandingexperts.com",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://unifiedbrandingexperts.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://unifiedbrandingexperts.com/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactClient
        key={selectedPackage?.id ?? initialService ?? "general"}
        initialService={initialService}
        selectedPackage={selectedPackage ? {
          name: selectedPackage.name,
          price: selectedPackage.price,
          pricePeriod: selectedPackage.pricePeriod,
        } : undefined}
      />
    </>
  );
}
