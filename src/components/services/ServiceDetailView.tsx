"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, CheckCircle2, ArrowLeft, ArrowUpRight } from "lucide-react";
import { SubService } from "@/data/services";
import { useScroll } from "@/components/providers/SmoothScrollProvider";

const SERVICE_PACKAGE_MAP: Record<
  string,
  { packageUrl: string; packageText: string; starting: string; heroImage: string }
> = {
  "mobile-app-development": {
    packageUrl: "/mobile-app-packages",
    packageText: "Explore 5 Mobile App Packages",
    starting: "From $999 (MVP)",
    heroImage: "/images/official/mobile-app/mobile-app-showcase.png",
  },
  ecommerce: {
    packageUrl: "/packages",
    packageText: "Explore Storefront Packages",
    starting: "Custom Scope",
    heroImage: "/images/official/ecommerce/storefront-setup.jpeg",
  },
  "web-design-development": {
    packageUrl: "/branding-packages",
    packageText: "Explore Brand & Web Systems",
    starting: "From $299",
    heroImage: "/images/official/branding/brand-identity.jpeg",
  },
  "social-media-management": {
    packageUrl: "/tiktok-marketing-packages",
    packageText: "Explore Video Marketing Plans",
    starting: "From $299/mo",
    heroImage: "/images/official/tiktok/tiktok-growth.jpeg",
  },
};

interface ServiceDetailViewProps {
  service: SubService;
}

export default function ServiceDetailView({ service }: ServiceDetailViewProps) {
  const { openProjectModal } = useScroll();
  const pkgInfo = SERVICE_PACKAGE_MAP[service.slug];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Back Link */}
      <Link
        href="/services"
        className="inline-flex items-center gap-2 text-xs font-mono-num text-[#585858] hover:text-[#161616] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>BACK TO ALL SERVICES</span>
      </Link>

      {/* Editorial Page Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E0DDDB] pb-12">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{service.kicker}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
            {service.title}
          </h1>
          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed">
            {service.summary}
          </p>

          {/* Deliverable Scope */}
          <div className="pt-2">
            <span className="text-xs font-mono-num text-[#585858] uppercase font-bold block">
              Deliverable Scope
            </span>
            <p className="font-display text-xl sm:text-2xl font-bold text-[#161616] mt-0.5">
              {service.deliverableScope}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => openProjectModal(service.title)}
              className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)] cursor-pointer"
            >
              Book {service.shortTitle} Scope
            </button>

            {pkgInfo && (
              <Link
                href={pkgInfo.packageUrl}
                className="px-8 py-4 rounded-full border border-[#E0DDDB] bg-white hover:border-[#9F8BE7] text-sm font-display font-bold text-[#161616] transition-all flex items-center gap-2 shadow-xs"
              >
                <span>{pkgInfo.packageText}</span>
                <span className="text-xs font-mono-num text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {pkgInfo.starting}
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
              </Link>
            )}
          </div>
        </div>

        {/* Official Image if available */}
        {pkgInfo?.heroImage && (
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-md">
              <Image
                src={pkgInfo.heroImage}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        )}
      </div>

      {/* Deliverables Grid */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] space-y-6 shadow-xs">
        <h2 className="font-display text-2xl font-bold text-[#161616]">
          What We Deliver &amp; Engineer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.deliverables.map((item) => (
            <div
              key={item}
              className="p-4 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] flex items-start gap-3"
            >
              <CheckCircle2 className="w-4 h-4 text-[#9F8BE7] shrink-0 mt-0.5" />
              <span className="text-sm text-[#303030] font-body font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies & Tools Stack */}
      <div className="p-8 rounded-3xl bg-white border border-[#E0DDDB] space-y-4 shadow-xs">
        <h3 className="font-display text-lg font-bold text-[#161616]">
          Technology &amp; Platform Ecosystem
        </h3>
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] text-xs font-mono-num text-[#585858] font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
