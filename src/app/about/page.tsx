import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import MagneticButton from "@/components/common/MagneticButton";

export const metadata: Metadata = {
  title: "About Us | Agency Philosophy & Team",
  description:
    "Learn about Unified Branding Experts, our strategic craft, full-service philosophy, and multidisciplinary design and engineering team.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/about",
  },
  openGraph: {
    title: "About Us | Agency Philosophy & Team",
    description:
      "Learn about Unified Branding Experts, our strategic craft, full-service philosophy, and multidisciplinary team.",
    url: "https://unifiedbrandingexperts.com/about",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "About Unified Branding Experts",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Editorial Page Hero (Clean & Fast) */}
      <div className="space-y-4 max-w-3xl border-b border-[#E0DDDB] pb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono-num uppercase tracking-[0.25em] text-[#9F8BE7] font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ABOUT UNIFIED BRANDING EXPERTS</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
          A Full-Service Agency Built on Unified Systems.
        </h1>
        <p className="text-base sm:text-xl text-[#585858] font-body leading-relaxed max-w-2xl">
          We help modern businesses build strong brands, launch high-performing digital platforms, and implement scalable growth systems that drive compounding revenue.
        </p>
      </div>

      {/* Verified Stats (Clean White Cards) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {COMPANY_INFO.stats.map((stat) => (
          <div
            key={stat.label}
            className="p-6 rounded-3xl bg-white border border-[#E0DDDB] text-center space-y-1 shadow-xs"
          >
            <span className="font-display font-black text-3xl sm:text-4xl text-[#9F8BE7] font-mono-num block">
              {stat.value}
            </span>
            <span className="font-display font-bold text-xs sm:text-sm text-[#161616] block">
              {stat.label}
            </span>
            <span className="text-[11px] text-[#585858] font-body block">
              {stat.sublabel}
            </span>
          </div>
        ))}
      </div>

      {/* Agency Story (Clean White Container) */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] space-y-6 shadow-xs">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">
          Our Story & Philosophy
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-[#585858] font-body leading-relaxed max-w-4xl">
          <p>
            At Unified Branding Experts, we recognized that the traditional agency model is broken. When branding,
            development, eCommerce, and paid acquisition are executed in silos by disjointed freelancers or agencies,
            businesses suffer from fragmented customer experiences and wasted budget.
          </p>
          <p>
            We created a unified agency structure where senior brand designers, full-stack engineers, eCommerce
            architects, and AISEO strategists collaborate as a single dedicated unit. This cohesion ensures that
            every visual asset, codebase optimization, and marketing campaign works seamlessly to accelerate business
            growth.
          </p>
        </div>
      </div>

      {/* CTA Strip */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#161616] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
        <div className="space-y-1">
          <h3 className="font-display text-2xl font-bold text-white">
            Ready to partner with UBE?
          </h3>
          <p className="text-xs sm:text-sm text-[#ACACAC]">
            Let&apos;s discuss your roadmap, timeline, and deliverables.
          </p>
        </div>
        <Link href="/contact">
          <MagneticButton size="md" variant="primary" showArrow>
            Start Your Consultation
          </MagneticButton>
        </Link>
      </div>
    </div>
  );
}
