import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";

const EcommercePriority = dynamic(() => import("@/components/home/EcommercePriority"));
const GrowthAdsMarketing = dynamic(() => import("@/components/home/GrowthAdsMarketing"));
const AISEOAndBranding = dynamic(() => import("@/components/home/AISEOAndBranding"));
const AppsAndAutomation = dynamic(() => import("@/components/home/AppsAndAutomation"));
const HomePackagesGrid = dynamic(() => import("@/components/home/HomePackagesGrid"));
const SelectedWork = dynamic(() => import("@/components/home/SelectedWork"));
const FinalCTA = dynamic(() => import("@/components/home/FinalCTA"));

export const metadata: Metadata = {
  title: {
    absolute: "Websites, Marketing, Automation & eCommerce Agency | UBE",
  },
  description:
    "Website development, digital marketing, AI automation, and eCommerce builds for U.S. businesses. Explore services and discuss your project with UBE.",
  openGraph: {
    title: "Websites, Marketing, Automation & eCommerce | UBE",
    description:
      "Websites and eCommerce stores connected with search, paid marketing, and automation. Explore how UBE scopes each service.",
    url: "https://unifiedbrandingexperts.com",
    siteName: "Unified Branding Experts",
  },
  twitter: {
    title: "Websites, Marketing, Automation & eCommerce | UBE",
    description:
      "Websites and eCommerce stores connected with search, paid marketing, and automation. Explore how UBE scopes each service.",
  },
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Priority 1: eCommerce Storefronts, Shopify & Dropshipping Automation */}
      <EcommercePriority />

      {/* 3. Priority 2 & 3: TikTok Shop, Meta Ads & Google Marketing */}
      <GrowthAdsMarketing />

      {/* 4. Priority 4 & 5: AI SEO (AEO/GEO) & Branding (Logo Design from $299) */}
      <AISEOAndBranding />

      {/* 5. Priority 6 & 7: Mobile App Engineering ($999+) & AI CRM Automation ($349+) */}
      <AppsAndAutomation />

      {/* 6. Commercial Packages Directory Grid */}
      <HomePackagesGrid />

      {/* 7. Selected Case Studies & Proven Results */}
      <SelectedWork />

      {/* 8. Verified Client Reviews & Trust Badges */}

      {/* 9. Final High-Contrast Conversion Banner */}
      <FinalCTA />
    </div>
  );
}
