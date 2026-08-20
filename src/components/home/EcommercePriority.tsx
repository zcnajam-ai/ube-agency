"use client";

import React from "react";
import Link from "next/link";
import {
  CreditCard,
  Truck,
  ArrowUpRight,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { useScroll } from "@/components/providers/SmoothScrollProvider";
import InteractiveMedia from "../common/InteractiveMedia";
import BackgroundGrid from "../common/BackgroundGrid";
import PurpleGlowField from "../common/PurpleGlowField";
import OversizedTypography from "../common/OversizedTypography";
import { Shopify3DIcon, Heading3DSparkle } from "../common/Brand3DIcons";

export default function EcommercePriority() {
  const { openProjectModal } = useScroll();

  const ecommercePillars = [
    {
      icon: <Shopify3DIcon size={26} />,
      title: "Shopify & Custom Storefronts",
      desc: "Custom Shopify and WooCommerce storefronts designed with clean navigation, clear product photography, responsive mobile layouts, and fast loading speeds.",
      highlights: ["Custom Theme Customization", "Mobile-Optimized Layouts", "Intuitive Product Catalog"],
    },
    {
      icon: <Truck className="w-5 h-5 text-emerald-600" />,
      title: "Dropshipping & Supplier Integrations",
      desc: "Automated dropshipping workflows connecting suppliers, real-time inventory synchronization, tracking updates, and multi-channel fulfillment.",
      highlights: ["Automated Order Routing", "Supplier API Connections", "Live Inventory Tracking"],
    },
    {
      icon: <CreditCard className="w-5 h-5 text-blue-600" />,
      title: "Secure Payment & Shipping Setup",
      desc: "Multi-currency payment gateways (Stripe, Apple Pay, PayPal), automated tax calculation, and localized shipping zone configuration.",
      highlights: ["Trusted Payment Gateways", "Automated Tax & Shipping Rules", "Simple, Clear Checkout"],
    },
    {
      icon: <Layers className="w-5 h-5 text-purple-600" />,
      title: "WooCommerce & Multi-Channel Scaling",
      desc: "Custom WordPress/WooCommerce builds organized for expanding product catalogs, wholesale B2B pricing tiers, and marketplace connections.",
      highlights: ["Structured Category Architecture", "B2B Wholesale Ordering", "Marketplace Syndication"],
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#FAF7F6] border-b border-[#E0DDDB] overflow-hidden">
      {/* Ambient Decor */}
      <BackgroundGrid opacity={0.03} size={80} maskRadial />
      <PurpleGlowField position="top-right" size={700} opacity={0.08} />
      <OversizedTypography text="STOREFRONTS" direction="left" className="top-12 opacity-35" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#E0DDDB] pb-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-2xs">
              <Heading3DSparkle size={16} />
              <span>ECOMMERCE DESIGN &amp; DEVELOPMENT</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
              Professional eCommerce Store Design &amp; Development
            </h2>
            <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
              We design and develop professional Shopify and WooCommerce stores with organized product collections, mobile-friendly shopping experiences, secure payment setup, shipping configuration, supplier integrations, and checkout flows built to make purchasing simple.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => openProjectModal("eCommerce Store Design")}
              className="px-6 py-3 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-xs sm:text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_15px_rgba(159,139,231,0.35)] cursor-pointer"
            >
              Start eCommerce Project
            </button>
            <Link
              href="/services/ecommerce"
              className="px-6 py-3 rounded-full bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] text-xs sm:text-sm font-display font-bold text-[#161616] transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <span>Explore eCommerce Services</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#9F8BE7]" />
            </Link>
          </div>
        </div>

        {/* Feature Grid & Visual Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 4 Core eCommerce Capabilities */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ecommercePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-3xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] transition-all space-y-3 shadow-xs flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] flex items-center justify-center group-hover:border-[#9F8BE7] transition-colors">
                    {pillar.icon}
                  </div>
                  <h3 className="font-display text-base font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#585858] font-body leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-[#E0DDDB]">
                  {pillar.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] font-mono-num text-[#585858]">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Visual eCommerce Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <InteractiveMedia
              src="/images/official/ecommerce/storefront-setup.jpeg"
              alt="Shopify and Custom eCommerce Storefront Design by Unified Branding Experts"
              aspectRatio="aspect-[4/3]"
              badgeText="Shopify 2.0 & D2C Storefronts"
            />
            <div className="p-6 rounded-3xl bg-white border border-[#E0DDDB] space-y-3 text-center shadow-xs">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs font-mono-num font-bold text-[#161616] bg-[#FAF7F6] px-3.5 py-1 rounded-full border border-[#E0DDDB] inline-block">
                  Verified Client Work: Happy Knot Creations
                </span>
              </div>
              <p className="text-xs text-[#585858] font-body leading-relaxed">
                Bespoke D2C plushie &amp; amigurumi storefront featuring custom Liquid sections, mobile-first product filtering, and instant Shop Pay checkout.
              </p>
              <div className="pt-2 border-t border-[#E0DDDB] flex items-center justify-center gap-4 text-xs font-mono-num">
                <Link
                  href="/work/happy-knot-creations-shopify-storefront"
                  className="text-[#9F8BE7] font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
