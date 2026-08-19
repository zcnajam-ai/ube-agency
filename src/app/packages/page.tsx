import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  Palette,
  Search,
  Bot,
  Video,
  Smartphone,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Service Packages & Pricing Directory | Unified Branding Experts",
  description:
    "Explore transparent pricing plans across Branding, AI SEO, AI Automation, TikTok Marketing, and Mobile App Development. Compare tiers and start scaling today.",
  alternates: {
    canonical: "/packages",
  },
};

export default function PackagesHubPage() {
  const packageHubs = [
    {
      title: "Branding Packages",
      slug: "/branding-packages",
      icon: <Palette className="w-6 h-6 text-[#9F8BE7]" />,
      startingPrice: "From $299",
      bestFor: "Startups, Rebrands & Growing Businesses",
      description:
        "Custom logo design, brand strategy, typography, color palettes, visual identity systems, and brand guidelines.",
      image: "/images/official/branding/branding-hero.jpeg",
      tiers: ["Logo Essentials ($299)", "Brand Starter ($599)", "Brand Identity ($1,199)", "Brand Elevate ($2,499)", "Full Brand System"],
    },
    {
      title: "AI SEO Packages",
      slug: "/ai-seo-packages",
      icon: <Search className="w-6 h-6 text-emerald-600" />,
      startingPrice: "From $349",
      bestFor: "Businesses Seeking Visibility in AI Answers",
      description:
        "Get found in Google AI Overviews, ChatGPT, and Bing Copilot. AEO direct answer formatting, GEO citation signals, schema, and content clusters.",
      image: "/images/official/aiseo/ai-discovery.jpeg",
      tiers: ["AI SEO Audit ($349)", "Starter ($749/mo)", "Growth ($1,499/mo)", "Authority ($2,999/mo)", "Enterprise Custom"],
    },
    {
      title: "AI Automation Packages",
      slug: "/ai-automation-packages",
      icon: <Bot className="w-6 h-6 text-purple-600" />,
      startingPrice: "From $349",
      bestFor: "Teams Streamlining CRM & Ops",
      description:
        "Automate follow-ups, CRM pipeline stages, AI customer service chatbots, and multi-system data synchronization.",
      image: "/images/official/automation/automation-strategy.jpeg",
      tiers: ["Automation Audit ($349)", "Starter ($749/mo)", "Growth ($1,499/mo)", "Advanced ($2,999/mo)", "Enterprise"],
    },
    {
      title: "TikTok Marketing Packages",
      slug: "/tiktok-marketing-packages",
      icon: <Video className="w-6 h-6 text-rose-500" />,
      startingPrice: "From $299/mo",
      bestFor: "Brands Scaling Viral Short-Form Video",
      description:
        "Short-form video strategy, content calendars, hook writing, community engagement, and paid TikTok ad campaign management.",
      image: "/images/official/tiktok/tiktok-growth.jpeg",
      tiers: ["Starter ($299/mo)", "Growth ($699/mo)", "Pro ($1,499/mo)", "Authority ($2,999/mo)", "Enterprise"],
    },
    {
      title: "Mobile App Packages",
      slug: "/mobile-app-packages",
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
      startingPrice: "From $999",
      bestFor: "Founders Launching iOS & Android Products",
      description:
        "Concept MVP prototypes, native iOS/Android development, React Native cross-platform apps, backend architecture, and App Store release.",
      image: "/images/official/mobile-app/app-process.jpeg",
      tiers: ["App Concept MVP ($999)", "Starter App ($2,999)", "Growth App ($6,999)", "Advanced App ($14,999)", "Enterprise Custom"],
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-20">
      {/* 1. Header Section */}
      <section className="text-center space-y-5 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TRANSPARENT COMMERCIAL PACKAGES</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616]">
          Service Packages &amp; Pricing Directory
        </h1>

        <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed max-w-2xl mx-auto">
          Explore our dedicated packages across branding, AI search optimization, workflow automation, viral video marketing, and mobile app engineering. Clear deliverables with transparent pricing.
        </p>
      </section>

      {/* 2. Package Category Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packageHubs.map((hub) => (
          <div
            key={hub.slug}
            className="rounded-3xl bg-white border border-[#E0DDDB] overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#9F8BE7] transition-all group"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF7F6]">
              <Image
                src={hub.image}
                alt={hub.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E0DDDB] text-xs font-mono-num font-bold text-emerald-600 shadow-xs">
                {hub.startingPrice}
              </div>
            </div>

            <div className="p-7 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] flex items-center justify-center">
                    {hub.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors">
                      {hub.title}
                    </h3>
                    <span className="text-[11px] font-mono-num text-[#585858] block">
                      {hub.bestFor}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#585858] font-body leading-relaxed">
                  {hub.description}
                </p>

                {/* Tiers list */}
                <div className="space-y-1.5 pt-2 border-t border-[#E0DDDB]">
                  <span className="text-[11px] font-mono-num uppercase tracking-wider text-[#161616] font-bold block">
                    Available Tiers:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {hub.tiers.map((tier) => (
                      <span
                        key={tier}
                        className="text-[10px] font-mono-num px-2 py-0.5 rounded-md bg-[#FAF7F6] border border-[#E0DDDB] text-[#303030]"
                      >
                        {tier}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href={hub.slug}
                  className="w-full py-3 rounded-full bg-[#161616] hover:bg-[#9F8BE7] text-white hover:text-[#161616] text-xs font-display font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  <span>Explore {hub.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Custom eCommerce & Web Development Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#161616] to-[#252525] text-white p-8 flex flex-col justify-between border border-white/10 shadow-lg">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-[#DDF160]" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono-num text-[#DDF160] font-bold uppercase tracking-wider">
                Custom Engineering
              </span>
              <h3 className="font-display text-2xl font-bold text-white">
                eCommerce &amp; Web Development
              </h3>
            </div>
            <p className="text-xs text-[#ACACAC] leading-relaxed font-body">
              For high-volume multi-channel storefronts (Shopify Plus, WooCommerce) and custom Next.js web applications, we provide bespoke architecture scoped to your exact business specifications.
            </p>
            <ul className="space-y-2 text-xs text-[#E0DDDB]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DDF160]" />
                <span>Custom Next.js &amp; Headless Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DDF160]" />
                <span>Shopify &amp; WooCommerce High-Volume Scaling</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DDF160]" />
                <span>Custom API &amp; ERP Integrations</span>
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <Link
              href="/contact?type=custom-build"
              className="w-full py-3.5 rounded-full bg-[#DDF160] text-[#161616] text-xs font-display font-bold flex items-center justify-center gap-2 hover:bg-[#c9dc53] transition-all"
            >
              <span>Request Custom Proposal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Final Conversion CTA */}
      <section className="p-8 sm:p-14 rounded-3xl bg-[#161616] text-white text-center space-y-6 shadow-xl">
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Not Sure Which Package Is the Right Fit?
        </h2>
        <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
          Book a 20-minute strategic scope assessment with our lead architects. We will examine your current stack, market position, and goals to recommend the exact right tier.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md"
          >
            Schedule Free Strategy Session
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
