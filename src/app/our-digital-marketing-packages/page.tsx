import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, Check, ArrowUpRight, ShieldCheck, TrendingUp, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Packages & Pricing | Paid Ads & Growth Plans | Unified Branding Experts",
  description:
    "Explore our digital marketing packages. Multi-channel advertising management across Google, Meta, and TikTok. Transparent monthly tiers starting from $299/mo.",
  alternates: {
    canonical: "/our-digital-marketing-packages",
  },
};

export default function OurDigitalMarketingPackagesPage() {
  const tiers = [
    {
      name: "Starter Marketing",
      price: "$299",
      period: "month",
      badge: "SOCIAL & AD SETUP",
      desc: "For small brands starting with consistent social media management and foundational paid ad funnels.",
      features: [
        "1 Primary Ad Channel (Meta or Google)",
        "Social Media Management (12 Custom Posts/Mo)",
        "Ad Campaign Strategy & Keyword Setup",
        "Pixel & Conversions API Setup",
        "Targeting & Audience Research",
        "Bi-Weekly Performance Reporting",
        "Ad Spend Up to $2,500/mo Managed",
      ],
      popular: false,
    },
    {
      name: "Growth Marketing",
      price: "$699",
      period: "month",
      badge: "MOST POPULAR",
      desc: "Multi-channel paid media and conversion optimization designed to aggressively scale lead flow and eCom sales.",
      features: [
        "2 Ad Channels (Google Ads + Meta FB/IG)",
        "20 Custom Social Posts & Reels/Mo",
        "A/B Ad Creative & Copy Testing Matrix",
        "Dynamic Product Retargeting & Catalog Setup",
        "Weekly Optimization & Bid Adjustments",
        "Conversion Rate Optimization Recommendations",
        "Ad Spend Up to $7,500/mo Managed",
        "Dedicated Account Strategist",
      ],
      popular: true,
    },
    {
      name: "Authority Marketing",
      price: "$1,499",
      period: "month",
      badge: "OMNI-CHANNEL DOMINANCE",
      desc: "Omnichannel paid advertising across Google, Meta, and TikTok with high-velocity UGC creative refreshes.",
      features: [
        "3 Channels (Google Search/Shopping, Meta, TikTok)",
        "30 Custom Posts, Graphics & Short Videos/Mo",
        "Short-Form Video Scripting & Creator Sourcing",
        "Full-Funnel Retargeting & Lookalike Audiences",
        "Landing Page Conversion Rate Audits",
        "Weekly Live Strategy Calls & Real-Time Dashboard",
        "Ad Spend Up to $25,000/mo Managed",
      ],
      popular: false,
    },
    {
      name: "Enterprise Scaling",
      price: "$2,999",
      period: "month",
      badge: "HIGH-VOLUME SCALE",
      desc: "Enterprise-grade media buying with dedicated creative director, full CRO engineering, and omni-channel scaling.",
      features: [
        "Unlimited Channel Scaling (Google, Meta, TikTok, YouTube)",
        "Daily Campaign Calibration & Bid Engineering",
        "Custom Direct-Response Landing Page Development",
        "Creator Whitelisting & Spark Ads Scaling",
        "Dedicated Senior Media Buyer & Copywriter",
        "Custom Real-Time Revenue & Profit Dashboard",
        "Ad Spend Above $25,000/mo Managed",
      ],
      popular: false,
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-20">
      {/* 1. Header */}
      <div className="space-y-4 max-w-3xl border-b border-[#E0DDDB] pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PERFORMANCE MARKETING PACKAGES</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
          Our Digital Marketing Packages
        </h1>
        <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed">
          Transparent monthly management fees. We build and scale revenue-driven advertising systems across Google, Meta, and TikTok.
        </p>
      </div>

      {/* 2. Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`p-7 rounded-3xl flex flex-col justify-between space-y-6 transition-all duration-300 relative ${
              tier.popular
                ? "bg-[#161616] text-white border-2 border-[#9F8BE7] shadow-xl scale-[1.02]"
                : "bg-white text-[#161616] border border-[#E0DDDB] shadow-xs hover:border-[#9F8BE7]"
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#9F8BE7] text-[#161616] text-[10px] font-mono-num font-bold uppercase tracking-wider shadow-sm">
                Recommended
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span
                  className={`text-[10px] font-mono-num font-bold uppercase tracking-wider ${
                    tier.popular ? "text-[#DDF160]" : "text-[#9F8BE7]"
                  }`}
                >
                  {tier.badge}
                </span>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold">{tier.name}</h3>
                <p
                  className={`text-xs mt-1 leading-relaxed ${
                    tier.popular ? "text-[#ACACAC]" : "text-[#585858]"
                  }`}
                >
                  {tier.desc}
                </p>
              </div>

              <div className="pt-2 pb-3 border-b border-[#E0DDDB]/30">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-3xl font-black">{tier.price}</span>
                  <span
                    className={`text-xs font-mono-num ${
                      tier.popular ? "text-[#ACACAC]" : "text-[#585858]"
                    }`}
                  >
                    /{tier.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 text-xs">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <Check
                      className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                        tier.popular ? "text-[#9F8BE7]" : "text-emerald-600"
                      }`}
                    />
                    <span className={tier.popular ? "text-gray-200" : "text-[#303030]"}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E0DDDB]/30">
              <Link
                href={`/contact?type=marketing&tier=${encodeURIComponent(tier.name)}`}
                className={`w-full py-3 rounded-full font-display font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  tier.popular
                    ? "bg-[#9F8BE7] text-[#161616] hover:bg-[#b4a3f7] shadow-[0_4px_15px_rgba(159,139,231,0.35)]"
                    : "bg-[#161616] text-white hover:bg-[#303030]"
                }`}
              >
                <span>Scale with {tier.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Assurance Strip */}
      <div className="p-8 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="space-y-1">
          <TrendingUp className="w-6 h-6 text-emerald-600 mx-auto" />
          <h4 className="font-display font-bold text-sm text-[#161616]">ROI-Focused Optimization</h4>
          <p className="text-xs text-[#585858]">Every ad dollar is tracked and calibrated for maximum profit.</p>
        </div>
        <div className="space-y-1">
          <ShieldCheck className="w-6 h-6 text-[#9F8BE7] mx-auto" />
          <h4 className="font-display font-bold text-sm text-[#161616]">Server-Side CAPI Tracking</h4>
          <p className="text-xs text-[#585858]">100% accurate conversion data bypasses ad-blockers.</p>
        </div>
        <div className="space-y-1">
          <Sparkles className="w-6 h-6 text-[#DDF160] mx-auto" />
          <h4 className="font-display font-bold text-sm text-[#161616]">No Long Lock-In Contracts</h4>
          <p className="text-xs text-[#585858]">Flexible month-to-month management with plain-language reporting.</p>
        </div>
      </div>
    </div>
  );
}
