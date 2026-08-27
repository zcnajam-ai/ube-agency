"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowUpRight,
  Palette,
  Search,
  Bot,
  Video,
  Smartphone,
  ShoppingBag,
  Check,
} from "lucide-react";

export default function HomePackagesGrid() {
  const packages = [
    {
      title: "Branding Packages",
      slug: "/branding-packages",
      price: "$299",
      priceSub: "one-time starting",
      badge: "LOGO TO FULL IDENTITY",
      icon: <Palette className="w-5 h-5 text-[#9F8BE7]" />,
      desc: "Custom vector logos, color systems, typography rules, brand guidelines, and 100% full source file ownership.",
      features: ["2-3 Custom Logo Concepts", "Unlimited Revisions on Selection", "Full Brand Style Guide", "All Formats (AI, EPS, SVG, PNG)"],
      popular: false,
    },
    {
      title: "AI SEO Packages",
      slug: "/ai-seo-packages",
      price: "$349",
      priceSub: "audit · $749/mo ongoing",
      badge: "AEO & GEO VISIBILITY",
      icon: <Search className="w-5 h-5 text-emerald-600" />,
      desc: "Get discovered in Google AI Overviews, ChatGPT, and generative search with structured schema and topical authority.",
      features: ["AEO Direct-Answer Optimization", "Google AI Overviews Strategy", "JSON-LD Entity Graphs", "Monthly Citation Tracking"],
      popular: true,
    },
    {
      title: "TikTok Marketing",
      slug: "/tiktok-marketing-packages",
      price: "$299",
      priceSub: "/month starting",
      badge: "VIRAL VIDEO & ADS",
      icon: <Video className="w-5 h-5 text-rose-500" />,
      desc: "Short-form video hooks, content schedules, creator partnerships, and high-converting TikTok Shop ad funnels.",
      features: ["Short-Form Video Frameworks", "Trending Audio & Scripting", "TikTok Shop Storefront Sync", "Paid Ads Campaign Scaling"],
      popular: false,
    },
    {
      title: "AI Automation",
      slug: "/ai-automation-packages",
      price: "$349",
      priceSub: "audit · $749/mo builds",
      badge: "CRM & WORKFLOWS",
      icon: <Bot className="w-5 h-5 text-purple-600" />,
      desc: "Automate CRM pipeline stages, lead follow-up emails, 24/7 AI chatbots, and multi-app data synchronization.",
      features: ["CRM Lead Tagging & Workflows", "24/7 AI Qualification Chatbot", "Automated Email Sequences", "Multi-App Integrations (Make/Zapier)"],
      popular: false,
    },
    {
      title: "Mobile App Packages",
      slug: "/mobile-app-packages",
      price: "$999",
      priceSub: "MVP prototype starting",
      badge: "IOS & ANDROID",
      icon: <Smartphone className="w-5 h-5 text-blue-600" />,
      desc: "From rapid clickable MVP prototypes to full-scale cross-platform iOS & Android mobile applications.",
      features: ["Clickable Concept MVP Wireframes", "Native or Cross-Platform Build", "Backend & User Authentication", "App Store / Play Store Release"],
      popular: false,
    },
    {
      title: "Custom eCommerce & Web",
      slug: "/contact?type=ecommerce-custom",
      price: "Custom",
      priceSub: "tailored architecture",
      badge: "SHOPIFY PLUS & HEADLESS",
      icon: <ShoppingBag className="w-5 h-5 text-[#DDF160]" />,
      desc: "High-volume Shopify Plus storefronts, WooCommerce dropshipping automation, 3PL sync, and custom Next.js web applications.",
      features: ["Fast Next.js Storefront Architecture", "Custom 3PL & Supplier API Sync", "1-Click Post-Purchase Upsells", "Enterprise SLA & Dedicated Team"],
      popular: false,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-[#FAF7F6] border-b border-[#E0DDDB] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#E0DDDB] pb-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TRANSPARENT PACKAGES &amp; DIRECT TIERS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
              Choose Your Growth Pathway.
            </h2>
            <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
              No hidden fees, no ambiguous retainers. Every package has defined deliverables and clear timelines so you know exactly what you get.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/packages"
              className="px-6 py-3 rounded-full bg-[#161616] text-white hover:bg-[#9F8BE7] hover:text-[#161616] text-xs sm:text-sm font-display font-bold transition-all flex items-center gap-1.5 shadow-sm"
            >
              <span>View Packages Directory</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6-Card Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`p-7 rounded-3xl flex flex-col justify-between space-y-6 transition-all duration-300 relative ${
                pkg.popular
                  ? "bg-[#161616] text-white border-2 border-[#9F8BE7] shadow-xl scale-[1.02]"
                  : "bg-white text-[#161616] border border-[#E0DDDB] shadow-xs hover:border-[#9F8BE7]"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#9F8BE7] text-[#161616] text-[10px] font-mono-num font-bold uppercase tracking-wider shadow-sm">
                  Recommended Strategy
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${
                      pkg.popular
                        ? "bg-white/10 border-white/20"
                        : "bg-[#FAF7F6] border-[#E0DDDB]"
                    }`}
                  >
                    {pkg.icon}
                  </div>
                  <span
                    className={`text-[10px] font-mono-num font-bold uppercase tracking-wider ${
                      pkg.popular ? "text-[#DDF160]" : "text-[#9F8BE7]"
                    }`}
                  >
                    {pkg.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold">{pkg.title}</h3>
                  <p
                    className={`text-xs mt-1 leading-relaxed ${
                      pkg.popular ? "text-[#ACACAC]" : "text-[#585858]"
                    }`}
                  >
                    {pkg.desc}
                  </p>
                </div>

                <div className="pt-2 pb-3 border-b border-[#E0DDDB]/30">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl font-black">{pkg.price}</span>
                    <span
                      className={`text-xs font-mono-num ${
                        pkg.popular ? "text-[#ACACAC]" : "text-[#585858]"
                      }`}
                    >
                      {pkg.priceSub}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <Check
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          pkg.popular ? "text-[#9F8BE7]" : "text-emerald-600"
                        }`}
                      />
                      <span className={pkg.popular ? "text-gray-200" : "text-[#303030]"}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E0DDDB]/30">
                <Link
                  href={pkg.slug}
                  className={`w-full py-3 px-4 min-h-[44px] rounded-full font-display font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer text-center ${
                    pkg.popular
                      ? "bg-[#9F8BE7] text-[#161616] hover:bg-[#b4a3f7] shadow-[0_4px_15px_rgba(159,139,231,0.35)]"
                      : "bg-[#161616] text-white hover:bg-[#303030]"
                  }`}
                >
                  <span className="leading-snug">Explore {pkg.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
