import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Check,
  Sparkles,
  ArrowUpRight,
  ArrowLeft,
  Video,
  TrendingUp,
  Share2,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "TikTok Marketing Packages & Pricing | Short-Form Video & Ads | Unified Branding Experts",
  description:
    "Compare TikTok marketing packages built for every stage, from consistent organic posting to full-scale viral campaigns. Content calendars, hooks, and paid ads. Starting at $299/mo.",
  alternates: {
    canonical: "/tiktok-marketing-packages",
  },
};

export default function TikTokMarketingPackagesPage() {
  const packages = [
    {
      id: "tiktok-starter",
      name: "Starter",
      bestFor: "Best for new businesses finding their feet",
      tagline: "Show up consistently, without guessing what to post.",
      price: "$299",
      pricePeriod: "/month",
      popular: false,
      deliverables: [
        "Account setup and profile optimization",
        "Content strategy for one primary theme",
        "8 short-form videos planned per month (guidance and direction)",
        "Trending audio and hashtag research",
        "Posting schedule and content calendar",
        "Basic engagement guidance",
        "Monthly performance snapshot",
      ],
    },
    {
      id: "tiktok-growth",
      name: "Growth",
      bestFor: "Best for growing brands building an audience",
      tagline: "Turn a starting presence into steady momentum.",
      price: "$699",
      pricePeriod: "/month",
      popular: true,
      deliverables: [
        "Everything in Starter",
        "12 short-form videos planned per month",
        "Expanded content themes and format variety",
        "Hook and caption writing for every post",
        "Community engagement management",
        "1 paid ad campaign setup and management",
        "Bi-weekly performance reporting",
        "1 strategy call per month",
      ],
    },
    {
      id: "tiktok-pro",
      name: "Pro",
      bestFor: "Best for serious content creators scaling output",
      tagline: "Publish more, land harder, and read the results clearly.",
      price: "$1,499",
      pricePeriod: "/month",
      popular: false,
      deliverables: [
        "Everything in Growth",
        "20 short-form videos planned per month",
        "Advanced creative direction and content pillars",
        "Trend-jacking strategy for timely reach",
        "2 paid ad campaigns managed",
        "A/B testing on hooks and creative",
        "Basic influencer outreach coordination",
        "Weekly performance reporting",
        "2 strategy calls per month",
      ],
    },
    {
      id: "tiktok-authority",
      name: "Authority",
      bestFor: "Best for established brands scaling up",
      tagline: "Compete for attention in a crowded feed, and win it.",
      price: "$2,999",
      pricePeriod: "/month",
      popular: false,
      deliverables: [
        "Everything in Pro",
        "30 short-form videos planned per month",
        "Full content pillar and campaign strategy",
        "Full paid ads management with dedicated budget scaling",
        "Comprehensive influencer coordination",
        "High-converting video editing & sound design",
        "Weekly analytics & iterative creative tuning",
        "Dedicated TikTok strategist",
      ],
    },
    {
      id: "tiktok-enterprise",
      name: "Enterprise",
      bestFor: "Best for high-volume, multi-brand viral scaling",
      tagline: "Dominate your category across short-form video ecosystems.",
      price: "Custom",
      pricePeriod: "tailored program",
      popular: false,
      deliverables: [
        "Everything in Authority",
        "Unlimited short-form video creative planning",
        "Multi-account & multi-creator management",
        "Creator network & whitelisting campaigns",
        "Custom TikTok Shop integration & affiliate strategy",
        "Priority 24/7 dedicated creative team",
      ],
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-20">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between border-b border-[#E0DDDB] pb-4">
        <Link
          href="/services/tiktok-marketing"
          className="inline-flex items-center gap-2 text-xs font-mono-num text-[#585858] hover:text-[#161616] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#9F8BE7]" />
          <span>Back to TikTok Marketing Details</span>
        </Link>
        <div className="text-xs font-mono-num text-[#585858]">
          <Link href="/" className="hover:underline">Home</Link> / <Link href="/packages" className="hover:underline">Packages</Link> / <span className="text-[#161616] font-bold">TikTok Marketing</span>
        </div>
      </div>

      {/* 1. Header Section */}
      <section className="text-center space-y-5 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SHORT-FORM VIDEO PRICING</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616]">
          TikTok Marketing Packages
        </h1>

        <p className="text-xl sm:text-2xl font-display font-medium text-[#303030]">
          Choose the TikTok Plan That Fits Where You Are
        </p>

        <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed max-w-2xl mx-auto">
          Your customers are already scrolling. The only question is whether they&apos;re finding you or someone who sells what you sell.
        </p>

        <div className="inline-block p-3 rounded-2xl bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#161616] font-bold shadow-xs">
          Starting from <span className="text-emerald-600 font-black text-sm">$299/mo</span> for focused presence. Full-scale viral growth packages available.
        </div>
      </section>

      {/* 2. Packages Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            id={pkg.id}
            className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
              pkg.popular
                ? "bg-[#161616] text-white border-2 border-[#9F8BE7] shadow-xl scale-[1.02]"
                : "bg-white text-[#161616] border border-[#E0DDDB] shadow-xs hover:border-[#9F8BE7]"
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#9F8BE7] text-[#161616] text-[11px] font-mono-num font-bold uppercase tracking-wider shadow-md">
                Popular Creator Tier
              </div>
            )}

            <div className="space-y-6">
              <div>
                <span
                  className={`text-[11px] font-mono-num font-bold uppercase tracking-wider block mb-1 ${
                    pkg.popular ? "text-[#DDF160]" : "text-[#9F8BE7]"
                  }`}
                >
                  {pkg.bestFor}
                </span>
                <h3 className="font-display text-2xl font-bold">{pkg.name}</h3>
                <p
                  className={`text-xs mt-1 leading-relaxed ${
                    pkg.popular ? "text-[#ACACAC]" : "text-[#585858]"
                  }`}
                >
                  {pkg.tagline}
                </p>
              </div>

              {/* Price Display */}
              <div className="pt-2 pb-4 border-b border-[#E0DDDB]/30">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-black">{pkg.price}</span>
                  <span
                    className={`text-xs font-mono-num ${
                      pkg.popular ? "text-[#ACACAC]" : "text-[#585858]"
                    }`}
                  >
                    {pkg.pricePeriod}
                  </span>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="space-y-3">
                <span
                  className={`text-xs font-mono-num font-bold uppercase tracking-wider block ${
                    pkg.popular ? "text-[#DDF160]" : "text-[#161616]"
                  }`}
                >
                  Included in Package:
                </span>
                <ul className="space-y-2.5">
                  {pkg.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs leading-relaxed">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          pkg.popular ? "text-[#9F8BE7]" : "text-emerald-600"
                        }`}
                      />
                      <span className={pkg.popular ? "text-gray-200" : "text-[#303030]"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-8 mt-6 border-t border-[#E0DDDB]/30">
              <Link
                href={`/contact?package=tiktok-${pkg.id}`}
                className={`w-full py-3.5 rounded-full font-display font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  pkg.popular
                    ? "bg-[#9F8BE7] text-[#161616] hover:bg-[#b4a3f7] shadow-[0_4px_15px_rgba(159,139,231,0.4)]"
                    : "bg-[#161616] text-white hover:bg-[#303030]"
                }`}
              >
                <span>Select {pkg.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Final CTA */}
      <section className="p-8 sm:p-14 rounded-3xl bg-[#161616] text-white text-center space-y-6 shadow-xl">
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Ready to Grow on TikTok?
        </h2>
        <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
          Start with a focused content presence or scale into high-converting paid campaigns.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact?type=tiktok"
            className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md"
          >
            Start Your TikTok Plan
          </Link>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm transition-all"
          >
            Call {COMPANY_INFO.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
