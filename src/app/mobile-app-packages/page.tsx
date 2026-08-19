import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Check,
  Sparkles,
  ArrowUpRight,
  ArrowLeft,
  Smartphone,
  Layers,
  Code2,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Mobile App Development Packages & Pricing | iOS & Android | Unified Branding Experts",
  description:
    "Compare mobile app development packages from MVP prototypes to full custom iOS and Android builds. Wireframing, UI/UX, backend, and app store deployment. Starting at $999.",
  alternates: {
    canonical: "/mobile-app-packages",
  },
};

export default function MobileAppPackagesPage() {
  const packages = [
    {
      id: "app-concept-mvp",
      name: "App Concept / MVP",
      bestFor: "Best for founders testing an idea before the full build",
      tagline: "Prove the concept before you invest in everything.",
      price: "$999",
      pricePeriod: "one-time",
      popular: false,
      deliverables: [
        "Idea and feasibility consultation",
        "Core feature definition (up to 3 key features)",
        "Wireframes for your primary screens",
        "Working MVP prototype (single platform)",
        "Basic UI design applied to core flows",
        "One functional demo build to test with users",
        "One 30-minute review and next-steps walkthrough",
      ],
    },
    {
      id: "starter-app",
      name: "Starter App",
      bestFor: "Best for small businesses launching their first app",
      tagline: "Launch a real, focused app on the platform that matters most.",
      price: "$2,999",
      pricePeriod: "one-time",
      popular: false,
      deliverables: [
        "Everything in Concept / MVP",
        "Full UI/UX design for your core screens",
        "Native or cross-platform build (one platform)",
        "Up to 6 core features",
        "User accounts and basic backend setup",
        "Testing across real devices",
        "App Store or Google Play submission",
        "30 days post-launch support",
      ],
    },
    {
      id: "growth-app",
      name: "Growth App",
      bestFor: "Best for growing businesses ready for both platforms",
      tagline: "Reach every customer, on whichever phone they carry.",
      price: "$6,999",
      pricePeriod: "one-time",
      popular: true,
      deliverables: [
        "Everything in Starter App",
        "Cross-platform build (iOS and Android)",
        "Up to 12 features with custom functionality",
        "Complete UI/UX design system",
        "Push notifications and analytics integration",
        "API and third-party integrations (up to 3)",
        "Full testing and quality assurance",
        "Submission to both app stores",
        "60 days post-launch support",
      ],
    },
    {
      id: "advanced-app",
      name: "Advanced App",
      bestFor: "Best for established businesses running on their app",
      tagline: "Build the full product, backend and all, ready to scale.",
      price: "$14,999",
      pricePeriod: "one-time",
      popular: false,
      deliverables: [
        "Everything in Growth App",
        "Native iOS and Android development",
        "Unlimited core features and custom logic",
        "Custom scalable backend architecture and database",
        "Payment processing and in-app purchases",
        "Complex integrations (CRM, ERP, custom APIs)",
        "Security audit and compliance checks",
        "Performance optimization and load testing",
        "90 days dedicated post-launch support",
      ],
    },
    {
      id: "enterprise-app",
      name: "Enterprise App",
      bestFor: "Best for high-volume, multi-market applications",
      tagline: "Custom engineering tailored to your exact specifications.",
      price: "Custom",
      pricePeriod: "tailored build",
      popular: false,
      deliverables: [
        "Everything in Advanced App",
        "Multi-platform ecosystem (iOS, Android, Web, Tablet)",
        "Microservices backend and real-time data sync",
        "Enterprise-grade security and encryption",
        "Custom SDKs and proprietary integrations",
        "Dedicated development team & SLA guarantee",
      ],
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-20">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between border-b border-[#E0DDDB] pb-4">
        <Link
          href="/services/mobile-apps"
          className="inline-flex items-center gap-2 text-xs font-mono-num text-[#585858] hover:text-[#161616] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#9F8BE7]" />
          <span>Back to Mobile App Details</span>
        </Link>
        <div className="text-xs font-mono-num text-[#585858]">
          <Link href="/" className="hover:underline">Home</Link> / <Link href="/packages" className="hover:underline">Packages</Link> / <span className="text-[#161616] font-bold">Mobile Apps</span>
        </div>
      </div>

      {/* 1. Header Section */}
      <section className="text-center space-y-5 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>MOBILE ENGINEERING PRICING</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616]">
          Mobile App Packages &amp; Pricing
        </h1>

        <p className="text-xl sm:text-2xl font-display font-medium text-[#303030]">
          Choose the App Plan That Fits Where You Are
        </p>

        <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed max-w-2xl mx-auto">
          Every app starts as an idea. For some businesses, that means testing a concept before committing to the full build. For others, it means launching a polished product ready for thousands of users on day one.
        </p>

        <div className="inline-block p-3 rounded-2xl bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#161616] font-bold shadow-xs">
          Starting from <span className="text-emerald-600 font-black text-sm">$999</span> for an MVP prototype. Full custom iOS &amp; Android builds available.
        </div>
      </section>

      {/* 2. Packages Grid */}
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
                Recommended for Dual Platform
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

            {/* Action Button */}
            <div className="pt-8 mt-6 border-t border-[#E0DDDB]/30">
              <Link
                href={`/contact?package=app-${pkg.id}`}
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

      {/* 3. Final CTA */}
      <section className="p-8 sm:p-14 rounded-3xl bg-[#161616] text-white text-center space-y-6 shadow-xl">
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Ready to Build Your Mobile App?
        </h2>
        <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
          Start with a concept prototype or step straight into a full iOS and Android release.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact?type=mobile-app"
            className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md"
          >
            Start Your App Consultation
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
