import React from "react";
import Hero from "@/components/home/Hero";
import EcommercePriority from "@/components/home/EcommercePriority";
import GrowthAdsMarketing from "@/components/home/GrowthAdsMarketing";
import AISEOAndBranding from "@/components/home/AISEOAndBranding";
import AppsAndAutomation from "@/components/home/AppsAndAutomation";
import HomePackagesGrid from "@/components/home/HomePackagesGrid";
import SelectedWork from "@/components/home/SelectedWork";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-[#FAF7F6]">
      {/* 1. Hero Section — UNTOUCHED ABOVE FOLD */}
      <Hero />

      {/* 2. Priority 1: eCommerce Storefronts — UNTOUCHED NEAR FOLD */}
      <EcommercePriority />

      {/* 3. Priority 2 & 3: TikTok Shop, Meta Ads & Google Marketing */}
      <div className="cv-contain-ads">
        <GrowthAdsMarketing />
      </div>

      {/* 4. Priority 4 & 5: AI SEO (AEO/GEO) & Branding */}
      <div className="cv-contain-seo">
        <AISEOAndBranding />
      </div>

      {/* 5. Priority 6 & 7: Mobile App Engineering & AI CRM */}
      <div className="cv-contain-apps">
        <AppsAndAutomation />
      </div>

      {/* 6. Commercial Packages Directory Grid */}
      <div className="cv-contain-packages">
        <HomePackagesGrid />
      </div>

      {/* 7. Selected Case Studies & Proven Results */}
      <div className="cv-contain-work">
        <SelectedWork />
      </div>

      {/* 8. Verified Client Reviews & Trust Badges */}
      <div className="cv-contain-testimonials">
        <TestimonialsSection />
      </div>

      {/* 9. Final High-Contrast Conversion Banner */}
      <div className="cv-contain-cta">
        <FinalCTA />
      </div>
    </div>
  );
}
