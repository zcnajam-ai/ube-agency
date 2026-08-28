import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Target,
  BarChart3,
  Users,
} from "lucide-react";
import ServiceProjectModalTrigger from "@/components/services/ServiceProjectModalTrigger";

export const metadata: Metadata = {
  title: "Digital Marketing & Paid Ads Packages | Pricing & Plans",
  description:
    "Transparent Digital Marketing and Paid Ads packages starting at $299/mo. Compare Meta, TikTok, and Google ad management plans.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/digital-marketing-packages",
  },
};

export default function DigitalMarketingPackagesPage() {
  const packages = [
    {
      id: "starter",
      name: "Starter Ads Management",
      price: "$299",
      period: "month",
      description: "Essential paid advertising management for single-channel lead generation or eCommerce growth.",
      highlight: false,
      badge: "Single Channel",
      features: [
        "1 Platform (Meta Ads or TikTok Ads)",
        "Ad Copywriting & Angle Testing",
        "Target Audience & Pixel Tracking Setup",
        "Monthly Ad Spend Management (Up to $3,000/mo)",
        "Monthly Performance & ROAS Reporting",
        "Ad Creative Guidance & Briefs",
      ],
    },
    {
      id: "growth",
      name: "Growth Multi-Channel Ads",
      price: "$699",
      period: "month",
      description: "Multi-channel ad campaign scaling for brands targeting aggressive revenue & customer growth.",
      highlight: true,
      badge: "Most Popular",
      features: [
        "2 Platforms (Meta Ads + TikTok or Google Ads)",
        "Advanced A/B Creative Testing & Ad Angles",
        "Custom Conversion Tracking & Retargeting Funnels",
        "Monthly Ad Spend Management (Up to $10,000/mo)",
        "Bi-Weekly Performance Calls & Reporting",
        "Short-Form Video Hook & Copywriting Strategy",
      ],
    },
    {
      id: "scale",
      name: "Scale Commercial Marketing",
      price: "$1,499",
      period: "month",
      description: "Full multi-channel marketing & creative production for established brands scaling past 6-figures.",
      highlight: false,
      badge: "Full Scale",
      features: [
        "Full Multi-Channel Suite (Meta, TikTok & Google)",
        "In-House Video & Graphic Ad Creative Production",
        "Landing Page Conversion Rate Optimization (CRO)",
        "Unlimited Ad Spend Management Scope",
        "Weekly Strategy Calls & Live Performance Dashboard",
        "Dedicated Marketing Director & Lead Media Buyer",
      ],
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-20">
      {/* 1. Header Section */}
      <section className="text-center space-y-5 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-emerald-600 font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TRANSPARENT MARKETING PACKAGES</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616]">
          Digital Marketing &amp; Paid Ads Packages
        </h1>

        <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed max-w-2xl mx-auto">
          Scale your customer acquisition with data-backed paid ad campaigns across Meta, TikTok, and Google. Clear monthly management pricing with zero long-term lock-in contracts.
        </p>
      </section>

      {/* 2. Package Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`rounded-3xl p-7 space-y-6 flex flex-col justify-between transition-all duration-300 relative ${
              pkg.highlight
                ? "bg-[#161616] text-white border-2 border-[#9F8BE7] shadow-xl scale-102"
                : "bg-white text-[#161616] border border-[#E0DDDB] shadow-xs hover:border-[#9F8BE7]"
            }`}
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-[#E0DDDB]/30 pb-4">
                <span
                  className={`text-[10px] font-mono-num font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    pkg.highlight
                      ? "bg-[#9F8BE7] text-[#161616]"
                      : "bg-[#FAF7F6] text-[#585858] border border-[#E0DDDB]"
                  }`}
                >
                  {pkg.badge}
                </span>
                <span className={`text-xs font-mono-num font-bold ${pkg.highlight ? "text-[#9F8BE7]" : "text-emerald-600"}`}>
                  Monthly Retainer
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold">{pkg.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold tracking-tight">{pkg.price}</span>
                  <span className={`text-xs font-mono-num ${pkg.highlight ? "text-[#ACACAC]" : "text-[#585858]"}`}>
                    /{pkg.period}
                  </span>
                </div>
                <p className={`text-xs mt-3 leading-relaxed ${pkg.highlight ? "text-[#ACACAC]" : "text-[#585858]"}`}>
                  {pkg.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#E0DDDB]/30">
                <span className={`text-[11px] font-mono-num uppercase tracking-wider font-bold block ${pkg.highlight ? "text-[#9F8BE7]" : "text-[#161616]"}`}>
                  Included Deliverables:
                </span>
                <ul className="space-y-2.5 text-xs">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.highlight ? "text-[#9F8BE7]" : "text-emerald-600"}`} />
                      <span className={pkg.highlight ? "text-[#E0DDDB]" : "text-[#303030]"}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6">
              <ServiceProjectModalTrigger
                service={`Digital Marketing - ${pkg.name}`}
                label={`Select ${pkg.name}`}
                className={`w-full py-3.5 rounded-full font-display text-xs font-bold transition-all shadow-xs text-center justify-center ${
                  pkg.highlight
                    ? "bg-[#9F8BE7] text-[#161616] hover:bg-[#b4a3f7]"
                    : "bg-[#161616] text-white hover:bg-black"
                }`}
              />
            </div>
          </div>
        ))}
      </section>

      {/* 3. Marketing Standards */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-8 shadow-xs">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono-num text-emerald-600 font-bold uppercase tracking-wider block">
            CAMPAIGN PERFORMANCE STANDARDS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">
            Why Brands Scale Paid Marketing With UBE
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-white border border-[#E0DDDB] space-y-2">
            <Target className="w-6 h-6 text-emerald-600" />
            <h4 className="font-display font-bold text-sm text-[#161616]">Precision Audience Targeting</h4>
            <p className="text-xs text-[#585858]">Data-driven audience segmentation, lookalikes, and intent-based retargeting.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E0DDDB] space-y-2">
            <TrendingUp className="w-6 h-6 text-[#9F8BE7]" />
            <h4 className="font-display font-bold text-sm text-[#161616]">ROAS-Focused Optimization</h4>
            <p className="text-xs text-[#585858]">Continuous bid management, budget reallocation, and ROAS scaling strategies.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E0DDDB] space-y-2">
            <BarChart3 className="w-6 h-6 text-purple-600" />
            <h4 className="font-display font-bold text-sm text-[#161616]">Transparent Analytics</h4>
            <p className="text-xs text-[#585858]">Live dashboard reporting tracking true acquisition costs and revenue conversion.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E0DDDB] space-y-2">
            <Users className="w-6 h-6 text-blue-600" />
            <h4 className="font-display font-bold text-sm text-[#161616]">Dedicated Media Buyers</h4>
            <p className="text-xs text-[#585858]">Direct communication with senior media strategists managing your ad spend.</p>
          </div>
        </div>
      </section>

      {/* 4. Bottom Conversion Banner */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#161616] text-white text-center space-y-6 shadow-xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Ready to Scale Your Paid Ads Return?
        </h2>
        <p className="text-sm text-[#ACACAC] max-w-lg mx-auto">
          Schedule a strategy audit to review your current ad accounts, creative performance, and scale potential.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <ServiceProjectModalTrigger
            service="Digital Marketing & Paid Ads"
            label="Start Paid Ads Strategy"
            className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md"
          />
          <Link
            href="/services/meta-ads"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm transition-all"
          >
            Explore Meta &amp; Paid Ads Services
          </Link>
        </div>
      </section>
    </div>
  );
}
