"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useScroll } from "@/components/providers/SmoothScrollProvider";
import {
  TrustpilotOfficialIcon,
  GoogleOfficialIcon,
  TikTokOfficialIcon,
  MetaOfficialIcon,
} from "./OfficialBrandLogos";
import { Heading3DSparkle } from "./Brand3DIcons";

export default function Footer() {
  const { scrollTo, openProjectModal } = useScroll();

  const handleBackToTop = () => {
    scrollTo(0, { duration: 0.8 });
  };

  return (
    <footer className="relative bg-[#161616] text-white border-t border-white/10 overflow-hidden pt-20 pb-12">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-t from-[#9F8BE7]/10 via-[#DDF160]/05 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        {/* Top Callout Strip */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 backdrop-blur-xl">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF160]/15 border border-[#DDF160]/30 text-xs font-mono-num text-[#DDF160] font-bold">
              <Heading3DSparkle size={16} />
              <span>READY TO SCALE YOUR BRAND?</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Let&apos;s build a digital ecosystem that commands market authority.
            </h3>
            <p className="text-sm text-[#ACACAC]">
              Direct consultation with our senior strategy team. No sales pressure, only actionable architecture.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
            <button
              type="button"
              onClick={() => openProjectModal()}
              className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm md:text-base hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.4)] flex items-center justify-center gap-2 flex-1 sm:flex-initial cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-6 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#9F8BE7] transition-all text-xs sm:text-sm font-mono-num text-white flex items-center justify-center gap-2 flex-1 sm:flex-initial"
            >
              <Phone className="w-4 h-4 text-[#9F8BE7]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Multi-Column Sitemap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pt-6">
          {/* Brand Identity & Summary Column */}
          <div className="lg:col-span-3 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-8 w-44">
                <Image
                  src="/images/logo/ube-logo-white.svg"
                  alt="Unified Branding Experts"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-xs text-[#ACACAC] leading-relaxed">
              Full-service digital branding, technology, and growth agency. Providing custom web design, brand identity systems, Shopify eCommerce development, and search optimization.
            </p>

            {/* Official Review Ratings (Part 6) */}
            <div className="space-y-2 pt-2 text-xs font-mono-num">
              <div className="flex items-center gap-2 text-[#ACACAC]">
                <TrustpilotOfficialIcon size={18} />
                <a
                  href={COMPANY_INFO.ratings.trustpilot.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9F8BE7] transition-colors"
                >
                  Trustpilot <strong className="text-white">4.9/5</strong>
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#ACACAC]">
                <GoogleOfficialIcon size={18} />
                <a
                  href={COMPANY_INFO.ratings.google.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9F8BE7] transition-colors"
                >
                  Google Reviews <strong className="text-white">5.0/5</strong>
                </a>
              </div>
            </div>
          </div>

          {/* Dedicated Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#DDF160]">
              Dedicated Services
            </h4>
            <ul className="space-y-1.5 text-xs font-body text-[#ACACAC]">
              <li>
                <Link href="/services/branding" className="hover:text-white transition-colors">
                  Branding &amp; Identity
                </Link>
              </li>
              <li>
                <Link href="/services/web-design-development" className="hover:text-white transition-colors">
                  Professional Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="hover:text-white transition-colors">
                  eCommerce Growth &amp; Marketplaces
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/meta-ads" className="hover:text-white transition-colors">
                  Meta Ads &amp; Paid Social
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="hover:text-white transition-colors">
                  AI Systems &amp; Automations
                </Link>
              </li>
              <li>
                <Link href="/services/aiseo" className="hover:text-white transition-colors">
                  AI Search Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/shopify-development" className="hover:text-white transition-colors">
                  Shopify &amp; Dropshipping Storefronts
                </Link>
              </li>
            </ul>
          </div>

          {/* Transparent Packages Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#9F8BE7]">
              Service Packages
            </h4>
            <ul className="space-y-1.5 text-xs font-body text-[#ACACAC]">
              <li>
                <Link href="/branding-packages" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Branding &amp; Logo Packages</span>
                  <span className="text-[10px] text-emerald-400 font-mono-num font-bold">$299+</span>
                </Link>
              </li>
              <li>
                <Link href="/web-design-packages" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Web Design Packages</span>
                  <span className="text-[10px] text-emerald-400 font-mono-num font-bold">$499+</span>
                </Link>
              </li>
              <li>
                <Link href="/ai-seo-packages" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>AI SEO Packages</span>
                  <span className="text-[10px] text-emerald-400 font-mono-num font-bold">$349+</span>
                </Link>
              </li>
              <li>
                <Link href="/ai-automation-packages" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>AI Automation Packages</span>
                  <span className="text-[10px] text-emerald-400 font-mono-num font-bold">$349+</span>
                </Link>
              </li>
              <li>
                <Link href="/tiktok-marketing-packages" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>TikTok Video Packages</span>
                  <span className="text-[10px] text-emerald-400 font-mono-num font-bold">$299/mo</span>
                </Link>
              </li>
              <li>
                <Link href="/mobile-app-packages" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Mobile App Packages</span>
                  <span className="text-[10px] text-emerald-400 font-mono-num font-bold">$999+</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Contact & Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#DDF160]">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs font-mono-num text-[#ACACAC]">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#9F8BE7] transition-all text-white"
              >
                <Phone className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#9F8BE7] transition-all text-white"
              >
                <Mail className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                <span className="truncate">{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2.5 p-2.5 rounded-2xl bg-white/5 border border-white/10">
                <MapPin className="w-4 h-4 text-[#DDF160] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Monolithic Headline */}
        <div className="border-t border-b border-white/10 py-6 sm:py-12 text-center select-none overflow-hidden max-w-full">
          <span className="font-display font-black text-footer-mono tracking-tighter text-white/90 leading-none block break-words">
            BUILD. GROW. SCALE.
          </span>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono-num text-[#838383] text-center md:text-left">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
          </div>

          <button
            type="button"
            onClick={handleBackToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#9F8BE7] text-white transition-all cursor-pointer min-h-[44px]"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#9F8BE7]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
