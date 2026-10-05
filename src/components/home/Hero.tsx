import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Palette } from "lucide-react";

import {
  Heading3DSparkle,
} from "../common/Brand3DIcons";
import { PlatformMark } from "../common/PlatformMark";
import HeroVideoClient from "./HeroVideoClient";
import HeroInteractiveCTA from "./HeroInteractiveCTA";

export default function Hero() {
  const priorityPills = [
    { label: "Shopify & Dropshipping", href: "/services/dropshipping", icon: <PlatformMark platform="shopify" size={18} decorative /> },
    { label: "TikTok Shop & Meta Ads", href: "/tiktok-marketing-packages", icon: <PlatformMark platform="tiktok" size={18} decorative /> },
    { label: "Google Marketing", href: "/services/google-ads", icon: <PlatformMark platform="google" size={18} decorative /> },
    { label: "AI SEO agency", href: "/ai-seo", icon: <Heading3DSparkle size={18} /> },
    { label: "Branding (From $299)", href: "/branding-packages", icon: <Palette className="w-4 h-4 text-blue-600" /> },
  ];

  return (
    <section
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 overflow-hidden border-b border-[#E0DDDB]"
    >
      {/* 2. Foreground Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* Left Column: Headline, Description, Service Pathways & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-8 sm:space-y-10">
            {/* Hero Headline & Intro */}
            <div className="space-y-4">
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#161616] tracking-tighter leading-[1.06] break-words">
                eCommerce Web Design <br className="hidden sm:block" />
                &amp; <span className="text-[#6B4BA7]">Growth Marketing</span>.
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#585858] font-body leading-relaxed max-w-3xl">
                We help U.S. businesses build and manage Shopify and WooCommerce stores, source products and suppliers, set up eligible marketplace channels, and connect branding, search and marketing to a practical launch plan. Start with the store you need today and scope what comes next.
              </p>
            </div>

            {/* Quick Service Pathways (Interactive Pills with 3D Icons) */}
            <div className="space-y-2.5">
              <span className="text-[11px] font-mono-num uppercase tracking-wider text-[#585858] font-bold block">
                Direct Service &amp; Package Pathways
              </span>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {priorityPills.map((pill) => (
                  <Link
                    key={pill.label}
                    href={pill.href}
                    className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-[#E0DDDB] hover:border-[#9F8BE7] text-xs font-display font-semibold text-[#161616] hover:text-[#6B4BA7] transition-all shadow-2xs group"
                  >
                    {pill.icon}
                    <span>{pill.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#585858] group-hover:text-[#9F8BE7] transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Action Conversion CTAs */}
            <Link href="/dropshipping-store-offer" className="group flex max-w-xl items-center gap-3 rounded-2xl border border-[#D0BFED] bg-gradient-to-r from-white to-[#F0E8FF] p-3 shadow-sm transition-transform hover:-translate-y-0.5 motion-reduce:transform-none" aria-label="Explore the dropshipping store setup offer starting at $399">
              <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl"><Image src="/images/offers/store-launch-offer.webp" alt="" fill sizes="64px" className="object-cover scale-[1.6]" /></span>
              <span className="min-w-0"><span className="block text-xs font-bold uppercase tracking-wider text-[#6049B0]">Store launch offer</span><span className="block font-display text-sm font-bold text-[#161616] sm:text-base">Store builds from $399 · See what is included</span></span>
              <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-[#6049B0]" aria-hidden="true" />
            </Link>
            <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 border-t border-[#E0DDDB]">
              <HeroInteractiveCTA />

              <Link
                href="/packages"
                className="px-6 py-3.5 rounded-full border border-[#E0DDDB] bg-white hover:border-[#9F8BE7] text-xs sm:text-sm font-display font-bold text-[#161616] transition-all flex items-center justify-center gap-2 shadow-xs w-full sm:w-auto min-h-[48px] whitespace-normal text-center"
              >
                <span>Compare Service Packages</span>
                <ArrowUpRight className="w-4 h-4 text-[#9F8BE7] shrink-0" />
              </Link>
            </div>
          </div>

          {/* Right Column: Prominent Upper-Right 16:9 Promotional Video Card */}
          <div className="lg:col-span-6 xl:col-span-6 w-full mt-4 lg:mt-1">
            <HeroVideoClient />
          </div>
        </div>
      </div>
    </section>
  );
}
