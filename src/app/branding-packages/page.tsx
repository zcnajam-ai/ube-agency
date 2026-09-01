import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Check,
  Sparkles,
  ArrowUpRight,
  ArrowLeft,
  ShieldCheck,
  Clock,
  Layers,
  FileCheck,
  Users,
  Briefcase,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Branding Packages & Pricing | Logo & Identity Plans",
  description:
    "Compare branding packages built for every stage, from a professional logo to a full brand system. Logo design, brand identity, strategy, guidelines, and rebranding. Starting at $299.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/branding-packages",
  },
  openGraph: {
    title: "Branding Packages & Pricing | Logo & Identity Plans",
    description:
      "Compare branding packages built for every stage, from a professional logo to a full brand system. Starting at $299.",
    url: "https://unifiedbrandingexperts.com/branding-packages",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "Branding Packages by Unified Branding Experts",
      },
    ],
  },
};

export default function BrandingPackagesPage() {
  const packages = [
    {
      id: "logo-essentials",
      name: "Logo Essentials",
      bestFor: "Best for first-time founders and new businesses",
      tagline: "Launch with a logo you're proud to put out there.",
      price: "$299",
      pricePeriod: "one-time",
      popular: false,
      deliverables: [
        "Custom logo design (2 concepts)",
        "Unlimited revisions on the chosen concept",
        "Color, black, and white versions",
        "Primary logo lockup",
        "Files in all formats (AI, EPS, PDF, PNG, JPG)",
        "Full ownership rights",
        "One 30-minute handover walkthrough",
      ],
    },
    {
      id: "brand-starter",
      name: "Brand Starter",
      bestFor: "Best for businesses ready to look established",
      tagline: "Move beyond a logo to a look that feels considered.",
      price: "$599",
      pricePeriod: "one-time",
      popular: false,
      deliverables: [
        "Everything in Logo Essentials",
        "Custom logo design (3 concepts)",
        "Secondary logo and submark",
        "Defined color palette (HEX, RGB, CMYK)",
        "Typography selection (primary and secondary)",
        "Favicon and social profile assets",
        "Mini brand sheet",
        "All source files and ownership rights",
      ],
    },
    {
      id: "brand-identity",
      name: "Brand Identity",
      bestFor: "Best for growing brands that want consistency",
      tagline: "Build the full system, so everything speaks with one voice.",
      price: "$1,199",
      pricePeriod: "one-time",
      popular: true,
      deliverables: [
        "Everything in Brand Starter",
        "Brand strategy and positioning session",
        "Complete visual identity system",
        "Extended color palette with usage rules",
        "Full typography system",
        "Imagery and graphic style direction",
        "Brand guidelines document",
        "Business card and letterhead design",
      ],
    },
    {
      id: "brand-elevate",
      name: "Brand Elevate",
      bestFor: "Best for established businesses rebranding or scaling",
      tagline: "Refresh what isn't working, keep what is, and grow from there.",
      price: "$2,499",
      pricePeriod: "one-time",
      popular: false,
      deliverables: [
        "Everything in Brand Identity",
        "Full brand audit and competitor review",
        "Rebranding strategy and roadmap",
        "Comprehensive brand guidelines (logo, color, type, spacing, voice)",
        "Expanded asset kit (social templates, presentation deck)",
        "Packaging or signage direction (as relevant)",
        "Messaging and tone-of-voice framework",
        "Two rounds of stakeholder review",
      ],
    },
    {
      id: "full-brand-system",
      name: "Full Brand System",
      bestFor: "Best for full-scale, multi-touchpoint brands",
      tagline: "One complete identity, built to hold across everything you do.",
      price: "Custom",
      pricePeriod: "tailored scope",
      popular: false,
      deliverables: [
        "Everything in Brand Elevate",
        "End-to-end brand strategy and positioning",
        "Complete identity system with all variations",
        "Full brand guidelines with governance rules",
        "Marketing and collateral template suite",
        "Packaging, signage, and print applications",
        "Digital and social asset library",
        "Ongoing brand support and dedicated team",
      ],
    },
  ];

  const infoBlocks = [
    {
      title: "Pricing",
      desc: "Prices start from $299 for a professional logo and climb with scope. Complete systems and custom work are quoted separately, based on the depth of strategy, assets, and applications you need.",
    },
    {
      title: "What's Included",
      desc: "Each package lists its concepts, assets, and deliverables. Anything beyond a package's scope, such as extra applications, additional collateral, or heavier strategy work, can be added with a custom quote. We'll outline exactly what fits before we begin.",
    },
    {
      title: "Revisions",
      desc: "Every package includes revisions so we get your identity right, not just done. Logo tiers include unlimited revisions on your chosen concept. Larger packages include defined review rounds at each stage, so feedback stays focused and the work keeps moving.",
    },
    {
      title: "File Formats",
      desc: "You receive your final designs in every format you need for web and print, including vector files (AI, EPS), PDF, and standard image formats (PNG, JPG). Higher tiers include organized brand asset folders, so your team always knows which file to reach for.",
    },
    {
      title: "Ownership Rights",
      desc: "Once your project is complete and paid for, the work is yours. You receive full ownership of the final designs, free to use everywhere your business goes, with no ongoing licensing fees.",
    },
    {
      title: "Timelines",
      desc: "A focused logo project typically takes two to four weeks. Full identity and rebranding work takes longer, since strategy and multiple review rounds deserve room to breathe. Timelines also depend on how quickly feedback comes back. We share a clear schedule at the start.",
    },
  ];

  // Offer / Schema structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Unified Branding Experts Branding Packages",
    description:
      "Professional branding and logo design packages starting from $299 to full enterprise brand systems.",
    brand: {
      "@type": "Brand",
      name: COMPANY_INFO.name,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "299",
      highPrice: "2499",
      offers: packages.map((pkg) => {
        const numeric = pkg.price.replace(/[^0-9]/g, "");
        const offer: Record<string, unknown> = {
          "@type": "Offer",
          name: pkg.name,
          description: pkg.tagline,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `https://unifiedbrandingexperts.com/branding-packages#${pkg.id}`,
        };
        if (numeric) {
          offer.price = numeric;
        }
        return offer;
      }),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-20">
        {/* Navigation Breadcrumb & Back Link */}
        <div className="flex items-center justify-between border-b border-[#E0DDDB] pb-4">
          <Link
            href="/services/branding"
            className="inline-flex items-center gap-2 text-xs font-mono-num text-[#585858] hover:text-[#161616] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#9F8BE7]" />
            <span>Back to Branding Service Details</span>
          </Link>
          <div className="text-xs font-mono-num text-[#585858]">
            <Link href="/" className="hover:underline">Home</Link> / <Link href="/services" className="hover:underline">Services</Link> / <Link href="/services/branding" className="hover:underline">Branding</Link> / <span className="text-[#161616] font-bold">Packages</span>
          </div>
        </div>

        {/* 1. Header Section */}
        <section className="text-center space-y-5 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING & DELIVERABLES</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616]">
            Branding Packages &amp; Pricing
          </h1>

          <p className="text-xl sm:text-2xl font-display font-medium text-[#303030]">
            Choose the Brand Foundation That Fits Where You Are
          </p>

          <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed max-w-2xl mx-auto">
            Every business starts with a first impression. For some, that means a single mark to launch with confidence. For others, it means a complete identity that holds up across every screen, shelf, and touchpoint.
          </p>

          <div className="inline-block p-3 rounded-2xl bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#161616] font-bold shadow-xs">
            Starting from <span className="text-emerald-600 font-black text-sm">$299</span> for a professional logo. Complete brand system packages available.
          </div>
        </section>

        {/* 2. Packages Pricing Grid */}
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
                  Most Selected
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

              {/* Action Conversion Button */}
              <div className="pt-8 mt-6 border-t border-[#E0DDDB]/30">
                <Link
                  href={`/contact?package=branding-${pkg.id}`}
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

        {/* 3. Important Package Information */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] space-y-8 shadow-xs">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
              TRANSPARENCY & ASSURANCE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">
              Important Package Information
            </h2>
            <p className="text-sm text-[#585858] font-body">
              A brand built well should serve you for years. That means being clear about what each package covers and how the work unfolds. Here&apos;s what to know before you choose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infoBlocks.map((block) => (
              <div
                key={block.title}
                className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-2"
              >
                <h3 className="font-display text-base font-bold text-[#161616]">{block.title}</h3>
                <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Cross-Links to Related Services */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/services/branding"
            className="p-6 rounded-3xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] space-y-2 transition-all group shadow-xs"
          >
            <span className="text-xs font-mono-num text-[#9F8BE7] font-bold">DEEP DIVE</span>
            <h3 className="font-display text-base font-bold text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
              <span>Branding Service Page</span>
              <ArrowUpRight className="w-4 h-4 text-[#585858] group-hover:text-[#9F8BE7]" />
            </h3>
            <p className="text-xs text-[#585858]">
              Read the full methodology, philosophy, and brand strategy process.
            </p>
          </Link>

          <Link
            href="/services/web-design-development"
            className="p-6 rounded-3xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] space-y-2 transition-all group shadow-xs"
          >
            <span className="text-xs font-mono-num text-emerald-600 font-bold">NEXT STEP</span>
            <h3 className="font-display text-base font-bold text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
              <span>Web Development</span>
              <ArrowUpRight className="w-4 h-4 text-[#585858] group-hover:text-[#9F8BE7]" />
            </h3>
            <p className="text-xs text-[#585858]">
              Bring your new brand to life with high-speed, interactive web architecture.
            </p>
          </Link>

          <Link
            href="/ai-seo-packages"
            className="p-6 rounded-3xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] space-y-2 transition-all group shadow-xs"
          >
            <span className="text-xs font-mono-num text-purple-600 font-bold">EXPAND VISIBILITY</span>
            <h3 className="font-display text-base font-bold text-[#161616] group-hover:text-[#9F8BE7] flex items-center justify-between">
              <span>AI SEO Packages</span>
              <ArrowUpRight className="w-4 h-4 text-[#585858] group-hover:text-[#9F8BE7]" />
            </h3>
            <p className="text-xs text-[#585858]">
              Improve visibility across Google and AI-powered search starting from $349.
            </p>
          </Link>
        </section>

        {/* 5. Final CTA */}
        <section className="p-8 sm:p-14 rounded-3xl bg-[#161616] text-white text-center space-y-6 shadow-xl">
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Ready to Build a Brand That Lasts?
          </h2>
          <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
            Start with a logo or step straight into a full identity. Request a quote and tell us where your business is headed.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/contact?type=branding"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md text-center min-h-[48px] whitespace-nowrap flex items-center justify-center"
            >
              Request a Custom Quote
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm transition-all text-center min-h-[48px] whitespace-nowrap flex items-center justify-center"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
