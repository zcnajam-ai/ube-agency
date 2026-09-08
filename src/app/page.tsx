import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import EcommercePriority from "@/components/home/EcommercePriority";
import GrowthAdsMarketing from "@/components/home/GrowthAdsMarketing";
import AISEOAndBranding from "@/components/home/AISEOAndBranding";
import AppsAndAutomation from "@/components/home/AppsAndAutomation";
import HomePackagesGrid from "@/components/home/HomePackagesGrid";
import SelectedWork from "@/components/home/SelectedWork";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: {
    absolute: "Web Design, Shopify, AI SEO & Digital Marketing Agency",
  },
  description:
    "Grow your business with expert Shopify development, eCommerce, AI SEO, branding, web design, Google Ads and digital marketing services across the U.S.",
  openGraph: {
    title: "Web Design, Shopify, AI SEO & Digital Marketing Agency",
    description:
      "Grow your business with expert Shopify development, eCommerce, AI SEO, branding, web design, Google Ads and digital marketing services across the U.S.",
    url: "https://unifiedbrandingexperts.com",
    siteName: "Unified Branding Experts",
  },
  twitter: {
    title: "Web Design, Shopify, AI SEO & Digital Marketing Agency",
    description:
      "Grow your business with expert Shopify development, eCommerce, AI SEO, branding, web design, Google Ads and digital marketing services across the U.S.",
  },
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-[#FAF7F6]">
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
      <TestimonialsSection />

      {/* 9. Final High-Contrast Conversion Banner */}
      <FinalCTA />
    </div>
  );
}
