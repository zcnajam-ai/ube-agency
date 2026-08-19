"use client";

import React from "react";
import Image from "next/image";
import {
  ShoppingBag,
  Zap,
  CreditCard,
  Truck,
  ArrowUpRight,
  Smartphone,
} from "lucide-react";
import { useScroll } from "@/components/providers/SmoothScrollProvider";

export default function EcommerceShowcase() {
  const { openProjectModal } = useScroll();

  const features = [
    {
      icon: <Zap className="w-4 h-4 text-[#9F8BE7]" />,
      title: "Sub-Second Headless Speed",
      desc: "Instant catalog navigation, zero layout shift, and instant cart flyouts that maximize conversion.",
    },
    {
      icon: <CreditCard className="w-4 h-4 text-[#9F8BE7]" />,
      title: "Global Multi-Currency Checkout",
      desc: "Stripe, Shopify Payments, Apple Pay, PayPal & localized tax calculations across 140+ countries.",
    },
    {
      icon: <Truck className="w-4 h-4 text-emerald-600" />,
      title: "Automated Logistics & 3PL Sync",
      desc: "Real-time 3PL sync, warehouse routing, high-SKU inventory management, and automated tracking.",
    },
    {
      icon: <Smartphone className="w-4 h-4 text-purple-600" />,
      title: "Mobile-First Conversion UX",
      desc: "Thumb-optimized sticky checkout bar, 1-click upsells, and tailored mobile merchandising.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-36 px-6 md:px-12 bg-[#FAF7F6] border-t border-[#E0DDDB] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#E0DDDB] pb-8">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono-num uppercase tracking-[0.25em] text-[#9F8BE7] font-bold">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>04 / CORE ECOMMERCE SPECIALIZATION</span>
            </div>
            <h2 className="font-display text-editorial-lg text-[#161616] tracking-tight">
              From Storefront to Scale.
            </h2>
            <p className="text-sm sm:text-base text-[#585858] font-body max-w-2xl">
              We engineer conversion-focused eCommerce experiences on Shopify Plus, WooCommerce, and modern Headless Commerce architectures built to handle millions in monthly transaction volume.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              type="button"
              onClick={() => openProjectModal("eCommerce Store Setup")}
              className="px-6 py-3.5 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-xs sm:text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)] flex items-center gap-2 cursor-pointer"
            >
              <span>Build Your Storefront</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Major Showcase Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Visual: Browser Device Mockup Frame */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-[#E0DDDB] overflow-hidden shadow-md group">
              {/* Browser Window Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-[#F4EFEB] border-b border-[#E0DDDB]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="px-4 py-1 rounded-full bg-white border border-[#E0DDDB] text-[11px] font-mono-num text-[#585858] max-w-xs truncate shadow-2xs">
                  https://store.unifiedbrandingexperts.com/checkout
                </div>
                <div className="text-[11px] font-mono-num text-emerald-600 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>LIVE 0.7s</span>
                </div>
              </div>

              {/* Viewport Image using official eCommerce asset */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF7F6]">
                <Image
                  src="/images/official/ecommerce/storefront-setup.jpeg"
                  alt="Unified Branding Experts eCommerce Architecture & Multi-Channel Storefront"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Column: 4 Key eCommerce Pillars */}
          <div className="lg:col-span-5 space-y-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-3xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] transition-all space-y-2 group shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB] flex items-center justify-center group-hover:border-[#9F8BE7] transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-base font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed pl-12">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
