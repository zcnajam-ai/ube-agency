import React from "react";
import { COMPANY_INFO } from "@/data/company";
import { FAQS } from "@/data/faqs";
import { ALL_SERVICES } from "@/data/services";

export default function SchemaOrg() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://unifiedbrandingexperts.com/#organization",
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.shortName,
    url: "https://unifiedbrandingexperts.com",
    logo: "https://unifiedbrandingexperts.com/images/logo/ube-logo.svg",
    image: "https://unifiedbrandingexperts.com/images/logo/ube-png-black.png",
    description: COMPANY_INFO.subheadline,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      addressCountry: COMPANY_INFO.address.country,
    },
    sameAs: [
      COMPANY_INFO.socials.linkedin,
      COMPANY_INFO.socials.facebook,
      COMPANY_INFO.socials.instagram,
      COMPANY_INFO.socials.threads,
      COMPANY_INFO.socials.pinterest,
      COMPANY_INFO.ratings.trustpilot.url,
      COMPANY_INFO.ratings.google.url,
      COMPANY_INFO.ratings.crunchbase.url,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY_INFO.phone,
      contactType: "customer service",
      email: COMPANY_INFO.email,
      availableLanguage: ["English"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://unifiedbrandingexperts.com/#website",
    url: "https://unifiedbrandingexperts.com",
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.tagline,
    publisher: {
      "@id": "https://unifiedbrandingexperts.com/#organization",
    },
    inLanguage: "en-US",
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: ALL_SERVICES.map((service, index) => ({
      "@type": "Service",
      position: index + 1,
      name: service.title,
      description: service.summary,
      provider: {
        "@id": "https://unifiedbrandingexperts.com/#organization",
      },
      url: `https://unifiedbrandingexperts.com/services/${service.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
