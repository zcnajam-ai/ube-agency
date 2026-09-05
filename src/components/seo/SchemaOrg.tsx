import React from "react";
import { COMPANY_INFO } from "@/data/company";

export default function SchemaOrg() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://unifiedbrandingexperts.com/#organization",
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.shortName,
    url: "https://unifiedbrandingexperts.com",
    logo: "https://unifiedbrandingexperts.com/web-app-manifest-512x512.png",
    image: "https://unifiedbrandingexperts.com/og-default.png",
    description: "Professional web design, branding, eCommerce development, and digital marketing agency.",
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
    description: "High-performance eCommerce, custom web development, brand identity systems, and search optimization.",
    publisher: {
      "@id": "https://unifiedbrandingexperts.com/#organization",
    },
    inLanguage: "en-US",
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
    </>
  );
}
