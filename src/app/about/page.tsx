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
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Unified Branding Experts",
    url: "https://unifiedbrandingexperts.com/about",
    description: "Learn about Unified Branding Experts, our strategic craft, full-service philosophy, and multidisciplinary design and engineering team.",
    mainEntity: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: "https://unifiedbrandingexperts.com",
      telephone: COMPANY_INFO.phone,
      email: COMPANY_INFO.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: COMPANY_INFO.address.city,
        addressRegion: COMPANY_INFO.address.state,
        addressCountry: COMPANY_INFO.address.country,
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://unifiedbrandingexperts.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://unifiedbrandingexperts.com/about",
      },
    ],
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
          Our Story &amp; Philosophy
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
          <p>
            Explore our specialized <Link href="/services" className="text-[#9F8BE7] font-bold underline hover:text-[#161616]">agency services</Link>, view our <Link href="/work" className="text-[#9F8BE7] font-bold underline hover:text-[#161616]">active client case studies</Link>, or read our latest technical <Link href="/insights" className="text-[#9F8BE7] font-bold underline hover:text-[#161616]">editorial insights</Link> to see how we build scalable digital systems.
          </p>
        </div>
      </div>

      {/* Quality Control & Senior Engineering Framework */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-3xl bg-white border border-[#E0DDDB] space-y-3 shadow-xs">
          <h3 className="font-display text-lg font-bold text-[#161616]">
            1. Senior Direct Consultation
          </h3>
          <p className="text-xs text-[#585858] font-body leading-relaxed">
            No middleman account managers or outsourced junior teams. You partner directly with senior architects who engineer your brand identity and code infrastructure.
          </p>
        </div>
        <div className="p-8 rounded-3xl bg-white border border-[#E0DDDB] space-y-3 shadow-xs">
          <h3 className="font-display text-lg font-bold text-[#161616]">
            2. High-Performance Engineering
          </h3>
          <p className="text-xs text-[#585858] font-body leading-relaxed">
            Built on clean React/Next.js, modular Shopify Liquid, and semantic HTML structure optimized for sub-second load times and 90+ Core Web Vitals performance.
          </p>
        </div>
        <div className="p-8 rounded-3xl bg-white border border-[#E0DDDB] space-y-3 shadow-xs">
          <h3 className="font-display text-lg font-bold text-[#161616]">
            3. AI &amp; Generative Visibility
          </h3>
          <p className="text-xs text-[#585858] font-body leading-relaxed">
            Every platform we engineer comes pre-structured with connected JSON-LD schema, answer-first formatting, and generative search readiness for Google AI Overviews and ChatGPT.
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
