import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  Layout,
  Gauge,
  Smartphone,
  Layers,
  MousePointerClick,
  Sliders,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Web Design Services | UI/UX & Responsive Web Design | Unified Branding Experts",
  description:
    "Bespoke UI/UX web design services engineered for high conversion, sub-second load speeds, and seamless responsiveness across all screen sizes.",
  alternates: {
    canonical: "/professional-web-design-services",
  },
};

export default function ProfessionalWebDesignServicesPage() {
  const serviceIncludes = [
    {
      title: "Conversion-Focused UI/UX Wireframing",
      desc: "We engineer layout wireframes using behavioral psychology, high-contrast visual cues, and intuitive user flows designed to guide visitors effortlessly toward booking, inquiry, or purchase.",
      icon: <MousePointerClick className="w-5 h-5 text-[#9F8BE7]" />,
      image: "/images/official/branding/brand-identity.jpeg",
    },
    {
      title: "100% Mobile-First Responsive Architecture",
      desc: "Over 65% of web traffic is mobile. We design adaptive layouts, thumb-zone navigation, and responsive typography that render flawlessly on smartphones, tablets, laptops, and 4K displays.",
      icon: <Smartphone className="w-5 h-5 text-emerald-600" />,
      image: "/images/official/ecommerce/storefront-setup.jpeg",
    },
    {
      title: "High-Performance Core Web Vitals Optimization",
      desc: "Sluggish sites lose customers. We design lightweight assets with sub-second largest contentful paint (LCP), zero cumulative layout shifts (CLS), and 95+ Google Lighthouse speed scores.",
      icon: <Gauge className="w-5 h-5 text-purple-600" />,
      image: "/images/official/aiseo/ai-discovery.jpeg",
    },
    {
      title: "Figma Component Libraries & Design Systems",
      desc: "Receive organized, tokenized Figma files with reusable UI components, typography styles, button states, and spacing grids that allow your brand to scale new pages with consistent quality.",
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      image: "/images/official/branding/brand-guidelines.jpeg",
    },
    {
      title: "Interactive Micro-Interactions & 60fps Motion",
      desc: "Subtle hover states, smooth scroll transitions, and engaging micro-interactions that elevate brand prestige without introducing rendering lag or cognitive distraction.",
      icon: <Sliders className="w-5 h-5 text-[#DDF160]" />,
      image: "/images/official/tiktok/tiktok-growth.jpeg",
    },
    {
      title: "SEO-Optimized Page Structure & Visual Hierarchy",
      desc: "Every design incorporates semantic heading hierarchies (H1-H4), accessible contrast ratios (WCAG 2.1 AA), and strategic content modules ready for search indexation and AI overviews.",
      icon: <Layout className="w-5 h-5 text-amber-600" />,
      image: "/images/official/branding/brand-strategy.jpeg",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Strategy & UX Audit",
      review: "Your current website metrics, customer personas, drop-off points, and competitor benchmarks.",
      setup: "A structured site architecture map and conversion strategy blueprint.",
      avoid: "Designing pretty layouts that fail to address real user friction points.",
    },
    {
      number: "02",
      title: "Low-Fidelity Wireframes",
      review: "Information hierarchy, section sequences, and page content layouts.",
      setup: "Detailed structural wireframes for all key pages before touching visual design.",
      avoid: "Costly design revisions caused by misaligned content priorities.",
    },
    {
      number: "03",
      title: "High-Fidelity Visual Design",
      review: "Brand colors, custom typography, photography, and interactive states.",
      setup: "Complete interactive Figma mockups for desktop, tablet, and mobile views.",
      avoid: "Inconsistent visual styling and mismatched brand touchpoints.",
    },
    {
      number: "04",
      title: "Interactive Prototype & Testing",
      review: "Clickable user journeys, form interactions, and navigation responsiveness.",
      setup: "A functional Figma prototype tested for user accessibility and mobile ergonomics.",
      avoid: "Confusing navigation menus and hard-to-click buttons on mobile devices.",
    },
    {
      number: "05",
      title: "Asset Handoff & Production Prep",
      review: "Exported design tokens, responsive breakpoints, and developer documentation.",
      setup: "Production-ready Figma files with CSS specs, SVG icons, and optimized web imagery.",
      avoid: "Broken development handoffs where the live site fails to match the approved design.",
    },
  ];

  const faqs = [
    {
      q: "What tools do you use for web design?",
      a: "We design all projects in Figma, providing interactive prototypes, tokenized design systems, and developer-friendly inspection tools. We also provide Adobe XD or Sketch exports if requested.",
    },
    {
      q: "Will my website be designed for mobile first?",
      a: "Yes. Every project includes dedicated mobile breakpoint designs with thumb-friendly touch targets, readable font sizes, and optimized navigation drawers.",
    },
    {
      q: "How many rounds of revisions are included?",
      a: "Our packages include structured revision rounds (typically 3 rounds or unlimited until milestone sign-off, depending on the tier) to ensure the design matches your exact expectations.",
    },
    {
      q: "Can you redesign our existing website without losing SEO rankings?",
      a: "Yes. We preserve existing URL structures or map 301 redirects, maintain heading hierarchy integrity, and ensure all existing ranking content is thoughtfully incorporated into the new design.",
    },
    {
      q: "Do you provide development after the design is approved?",
      a: "Yes. We are a full-service agency and seamlessly transition approved Figma designs into clean Next.js, React, or custom WordPress code through our website development packages.",
    },
    {
      q: "What are your web design package prices?",
      a: "Our fixed web design packages start at $300 for basic informative sites (up to 3 pages), $649 for standard sites (8-10 pages), and $1,200 for enterprise dynamic platforms.",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      {/* 1. Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E0DDDB] pb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UI/UX &amp; RESPONSIVE WEB DESIGN</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
            Professional Web Design Services Built for Conversion.
          </h1>

          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            Your website is the digital headquarters of your brand. We combine modern UI/UX design, conversion psychology, and fast responsive architectures to turn casual visitors into paying customers.
          </p>

          <p className="text-sm sm:text-base text-[#303030] font-body font-medium">
            At Unified Branding Experts, we build high-performance websites that combine modern UI/UX design with conversion-focused functionality and sub-second load speeds.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Bespoke Figma UI/UX wireframes & prototypes",
              "Mobile-first responsive layouts",
              "Sub-second load times & 95+ Core Web Vitals",
              "Conversion rate optimization built-in",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs text-[#303030] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact?type=web-design"
              className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)]"
            >
              Start Web Design Project
            </Link>

            <Link
              href="/web-design-packages"
              className="px-8 py-4 rounded-full border border-[#E0DDDB] bg-white hover:border-[#9F8BE7] text-sm font-display font-bold text-[#161616] transition-all flex items-center gap-2 shadow-xs"
            >
              <span>View Web Design Packages</span>
              <span className="text-xs font-mono-num text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                From $300
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-md group">
            <Image
              src="/images/official/branding/brand-identity.jpeg"
              alt="Unified Branding Experts Professional Web Design Showcase"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E0DDDB] text-xs font-mono-num text-[#161616] flex items-center justify-between shadow-xs">
              <span className="font-bold">UI/UX • FIGMA • RESPONSIVE</span>
              <span className="text-emerald-600 font-bold">PLANS FROM $300</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Deep Dive: What Is Conversion-Focused Web Design */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-sm">
            <Image
              src="/images/official/ecommerce/storefront-setup.jpeg"
              alt="Conversion-Focused Web Architecture"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            USER EXPERIENCE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            Design That Captivates and Converts.
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            A beautiful website that doesn&apos;t convert is merely art. Our web design services combine aesthetic sophistication with conversion architecture—ensuring your value propositions are instantly clear and next steps are frictionless.
          </p>
          <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
            By eliminating visual clutter, optimizing typography contrast, and engineering intuitive navigation, we help businesses reduce bounce rates and maximize return on ad spend.
          </p>
          <p className="text-xs font-mono-num text-[#161616] font-bold">
            Every pixel is placed with intentional commercial purpose.
          </p>
        </div>
      </section>

      {/* 3. Capabilities Grid */}
      <section className="space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            DESIGN CAPABILITIES
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            What Our Web Design Service Includes
          </h2>
          <p className="text-sm sm:text-base text-[#585858] font-body">
            Comprehensive UI/UX design deliverables tailored to your business model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceIncludes.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl bg-white border border-[#E0DDDB] overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#9F8BE7] transition-all group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF7F6]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 sm:p-7 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB] flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Process Steps */}
      <section className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] space-y-8 shadow-xs">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            DESIGN TO DELIVERY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">
            Our 5-Step Web Design Process
          </h2>
        </div>

        <div className="space-y-6">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              <div className="md:col-span-3 flex items-center gap-4">
                <span className="font-display font-black text-3xl text-[#9F8BE7] font-mono-num">
                  {step.number}
                </span>
                <h3 className="font-display text-base font-bold text-[#161616]">{step.title}</h3>
              </div>

              <div className="md:col-span-3 text-xs text-[#585858]">
                <strong className="text-[#161616] block mb-0.5">What we review:</strong>
                <span>{step.review}</span>
              </div>

              <div className="md:col-span-3 text-xs text-[#585858]">
                <strong className="text-[#161616] block mb-0.5">What we set up:</strong>
                <span>{step.setup}</span>
              </div>

              <div className="md:col-span-3 text-xs text-rose-700 bg-rose-50/60 p-3 rounded-xl border border-rose-100">
                <strong className="block mb-0.5 font-bold">What this helps you avoid:</strong>
                <span>{step.avoid}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Package CTA */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white to-[#F4EFEB] border-2 border-[#9F8BE7] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono-num text-emerald-600 font-bold uppercase tracking-wider block">
            AFFORDABLE FIXED SCOPES
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616]">
            Explore Web Design Packages &amp; Pricing
          </h2>
          <p className="text-xs sm:text-sm text-[#585858] font-body">
            Compare our Basic Web Design ($300), Standard ($649), and Enterprise Web Design ($1,200) packages.
          </p>
        </div>

        <Link
          href="/web-design-packages"
          className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)] shrink-0 flex items-center gap-2"
        >
          <span>View Web Design Packages</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>

      {/* 6. FAQs */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            FREQUENT QUESTIONS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="p-6 rounded-3xl bg-white border border-[#E0DDDB] space-y-2 shadow-xs"
            >
              <h3 className="font-display text-base font-bold text-[#161616] flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-[#9F8BE7] shrink-0 mt-1" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="p-8 sm:p-14 rounded-3xl bg-[#161616] text-white text-center space-y-6 shadow-xl">
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Ready to Elevate Your Web Presence?
        </h2>
        <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
          From focused 3-page websites to complete multi-page digital experiences.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact?type=web-design"
            className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md"
          >
            Start Web Design
          </Link>
          <Link
            href="/web-design-packages"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm transition-all"
          >
            Compare Package Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
