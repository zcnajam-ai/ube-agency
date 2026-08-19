import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, Check, ArrowUpRight, ShieldCheck, PenTool, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Content Writing Packages & Pricing | Copywriting Plans | Unified Branding Experts",
  description:
    "Explore our professional content writing packages. Persuasive website copywriting, SEO articles, and brand storytelling starting from $199.",
  alternates: {
    canonical: "/our-content-writing-packages",
  },
};

export default function OurContentWritingPackagesPage() {
  const tiers = [
    {
      name: "Starter Copywriting",
      price: "$199",
      period: "one-time",
      badge: "ESSENTIAL PAGES",
      desc: "High-impact conversion copywriting for up to 3 core website pages or 5 high-converting social media posts.",
      features: [
        "Up to 3 Website Pages (Home, About, Services)",
        "Keyword Research & On-Page SEO Integration",
        "Clear Headlines, Subheadings & CTAs",
        "Brand Voice Alignment",
        "2 Rounds of Revisions",
        "3 to 5 Business Days Turnaround",
        "100% Original Human Writing",
      ],
      popular: false,
    },
    {
      name: "Growth Content Suite",
      price: "$499",
      period: "one-time",
      badge: "MOST POPULAR",
      desc: "Full website copywriting (up to 8 pages) plus 2 SEO blog articles and brand storytelling narrative.",
      features: [
        "Up to 8 Website Pages Full Copy",
        "2 High-Authority SEO Blog Articles (1,200 words each)",
        "Brand Story & Mission/Vision Statements",
        "Google AI Overview Direct-Answer Structuring",
        "Email Welcome Series Copy (3 Emails)",
        "Unlimited Revisions on Drafts",
        "Dedicated Content Strategist",
      ],
      popular: true,
    },
    {
      name: "Authority Copy Suite",
      price: "$999",
      period: "one-time",
      badge: "FULL OMNI-CHANNEL",
      desc: "Complete omni-channel copywriting overhaul including website copy, ad creative variations, email sequences, and PR release.",
      features: [
        "Complete Website Copy (Up to 15 Pages)",
        "4 Comprehensive SEO & Thought Leadership Articles",
        "Ad Copy Pack (10 Google Ads + 10 Meta Ads variations)",
        "Full Email Nurture Sequence (5 Automated Emails)",
        "Official Brand Press Release & Bio Sheets",
        "Tone of Voice & Style Guide Documentation",
        "Priority Turnaround with Live Review Calls",
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
          <span>COPYWRITING &amp; CONTENT PACKAGES</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
          Our Content Writing Packages
        </h1>
        <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed">
          Persuasive, SEO-optimized copywriting crafted to articulate your value proposition, connect emotionally with customers, and drive action.
        </p>
      </div>

      {/* 2. Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                Best Value
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
                href={`/contact?type=content&tier=${encodeURIComponent(tier.name)}`}
                className={`w-full py-3 rounded-full font-display font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  tier.popular
                    ? "bg-[#9F8BE7] text-[#161616] hover:bg-[#b4a3f7] shadow-[0_4px_15px_rgba(159,139,231,0.35)]"
                    : "bg-[#161616] text-white hover:bg-[#303030]"
                }`}
              >
                <span>Order {tier.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Assurance Strip */}
      <div className="p-8 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="space-y-1">
          <PenTool className="w-6 h-6 text-emerald-600 mx-auto" />
          <h4 className="font-display font-bold text-sm text-[#161616]">100% Original Writing</h4>
          <p className="text-xs text-[#585858]">Human-crafted copy customized to your exact market and audience.</p>
        </div>
        <div className="space-y-1">
          <ShieldCheck className="w-6 h-6 text-[#9F8BE7] mx-auto" />
          <h4 className="font-display font-bold text-sm text-[#161616]">SEO &amp; AEO Formatted</h4>
          <p className="text-xs text-[#585858]">Engineered for high search rankings and AI Overview citations.</p>
        </div>
        <div className="space-y-1">
          <Sparkles className="w-6 h-6 text-[#DDF160] mx-auto" />
          <h4 className="font-display font-bold text-sm text-[#161616]">Satisfaction Guaranteed</h4>
          <p className="text-xs text-[#585858]">Revisions included until you are completely satisfied with the tone.</p>
        </div>
      </div>
    </div>
  );
}
