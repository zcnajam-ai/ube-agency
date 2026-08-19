import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  Code2,
  Workflow,
  Lock,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Web Development | Bespoke Web Apps & Enterprise Software | Unified Branding Experts",
  description:
    "Bespoke custom web development. Tailor-made web applications, custom customer portals, high-volume database systems, and secure API integrations.",
  alternates: {
    canonical: "/custom-web-development",
  },
};

export default function CustomWebDevelopmentPage() {
  const serviceIncludes = [
    {
      title: "Bespoke Web Applications & SaaS Architecture",
      desc: "Custom-built web software tailored to your proprietary business logic, user roles, complex algorithms, and subscription billing without restrictive third-party templates.",
      icon: <Cpu className="w-5 h-5 text-[#9F8BE7]" />,
      image: "/images/official/automation/system-integration.jpeg",
    },
    {
      title: "Secure Client, Vendor & Member Portals",
      desc: "Protected web portals with role-based authentication, custom dashboards, encrypted file transfers, automated document signing, and real-time status tracking.",
      icon: <Lock className="w-5 h-5 text-emerald-600" />,
      image: "/images/official/branding/brand-identity.jpeg",
    },
    {
      title: "High-Volume Database & Backend Engineering",
      desc: "Scalable PostgreSQL, MySQL, Redis, and MongoDB architectures engineered to process millions of dynamic records, queries, and concurrent user sessions without latency.",
      icon: <Database className="w-5 h-5 text-purple-600" />,
      image: "/images/official/automation/workflow-mapping.jpeg",
    },
    {
      title: "Custom eCommerce, B2B Portals & Dropshipping",
      desc: "Tailor-made product configurators, wholesale pricing tiers, multi-warehouse 3PL inventory routing, custom checkout extensions, and global currency gateways.",
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      image: "/images/official/ecommerce/storefront-setup.jpeg",
    },
    {
      title: "Custom REST & GraphQL API Middleware",
      desc: "Connect your disparate software ecosystem. We engineer custom API gateways and webhooks connecting your web app to ERPs, CRMs, logistics, and internal microservices.",
      icon: <Workflow className="w-5 h-5 text-[#DDF160]" />,
      image: "/images/official/automation/automation-strategy.jpeg",
    },
    {
      title: "Sub-Second Serverless & Edge Cloud Deployment",
      desc: "Engineered on Next.js and deployed to global edge CDNs (Vercel, AWS). Automatic SSL, global caching, continuous CI/CD integration, and 99.99% uptime SLAs.",
      icon: <Zap className="w-5 h-5 text-amber-600" />,
      image: "/images/official/aiseo/ai-discovery.jpeg",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Technical Scoping",
      review: "Your business requirements, user roles, database entities, and third-party integrations.",
      setup: "A detailed System Architecture Document (SAD), database schema map, and sprint backlog.",
      avoid: "Scope creep, inaccurate project estimates, and misaligned technical architecture.",
    },
    {
      number: "02",
      title: "Database Modeling & API Design",
      review: "Data relationships, security permissions, API contracts, and serverless infrastructure.",
      setup: "PostgreSQL/MongoDB relational schemas, Redis caching layers, and authenticated REST/GraphQL endpoints.",
      avoid: "Database query bottlenecks and data structure rework midway through development.",
    },
    {
      number: "03",
      title: "Full-Stack Agile Sprints",
      review: "Sprint milestones every 2 weeks with interactive demo environments.",
      setup: "Frontend UI in Next.js/React paired with serverless edge functions and state management.",
      avoid: "Long silent development periods with no visibility into actual progress.",
    },
    {
      number: "04",
      title: "Automated QA & Security Audits",
      review: "End-to-end user journeys, edge cases, penetration testing, and performance stress tests.",
      setup: "Automated test suites (Jest, Playwright) and hardened security configurations.",
      avoid: "Critical bugs and security vulnerabilities exposing customer data after launch.",
    },
    {
      number: "05",
      title: "Production Launch & Code Handoff",
      review: "Domain DNS routing, production environment variables, and CI/CD pipelines.",
      setup: "Zero-downtime deployment, full source code repository ownership, and technical documentation.",
      avoid: "Deployment failures, vendor lock-ins, or proprietary code holding your business hostage.",
    },
  ];

  const faqs = [
    {
      q: "What makes custom web development better than using Shopify or WordPress templates?",
      a: "Off-the-shelf templates and plugins are restrictive, heavy, and often break during updates. Custom web development gives you 100% control over features, bespoke business logic, unmatched speed, and complete freedom from monthly plugin subscriptions.",
    },
    {
      q: "Can you build custom portals with user logins and payments?",
      a: "Yes. We build custom client portals, B2B wholesale ordering systems, and membership dashboards with secure OAuth authentication, role-based access, and Stripe/PayPal integration.",
    },
    {
      q: "How scalable are your custom web applications?",
      a: "We architect applications on modern serverless edge infrastructures (such as Next.js on Vercel/AWS) and optimized cloud databases, allowing your platform to handle tens of thousands of concurrent users seamlessly.",
    },
    {
      q: "Who owns the code, database, and intellectual property?",
      a: "You own 100% of the source code, repository, database schemas, and documentation upon project completion. There are zero ongoing licensing fees.",
    },
    {
      q: "Do you provide ongoing maintenance and feature updates?",
      a: "Yes. We provide flexible post-launch support retainers, ongoing feature development, security patches, and cloud infrastructure monitoring.",
    },
    {
      q: "What are your custom web development package prices?",
      a: "Our custom web packages start at $450 for Custom Web Basic (up to 150 products/pages), $700 for Custom Web Standard (up to 300 products/pages), and $1,400 for Custom Web Enterprise (up to 500+ products/pages and bespoke workflows).",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      {/* 1. Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E0DDDB] pb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BESPOKE WEB APPS &amp; ENTERPRISE SYSTEMS</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
            Custom Web Development Tailored to Your Vision.
          </h1>

          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            When off-the-shelf templates cannot meet your business needs, we engineer tailor-made custom web applications, portals, and dynamic platforms built for performance, security, and effortless scaling.
          </p>

          <p className="text-sm sm:text-base text-[#303030] font-body font-medium">
            At Unified Branding Experts, we build digital assets engineered for measurable outcomes—traffic, conversion speed, database scalability, and long-term business expansion.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Bespoke business logic & customer portals",
              "Sub-second edge rendering (Next.js / Node / TypeScript)",
              "High-volume database & custom API integrations",
              "100% source code ownership & zero plugin bloat",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs text-[#303030] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact?type=custom-web"
              className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)]"
            >
              Request Custom Web Quote
            </Link>

            <Link
              href="/our-custom-web-design-development-packages"
              className="px-8 py-4 rounded-full border border-[#E0DDDB] bg-white hover:border-[#9F8BE7] text-sm font-display font-bold text-[#161616] transition-all flex items-center gap-2 shadow-xs"
            >
              <span>View Custom Packages</span>
              <span className="text-xs font-mono-num text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                From $450
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-md group">
            <Image
              src="/images/official/automation/system-integration.jpeg"
              alt="Unified Branding Experts Custom Web Development Showcase"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E0DDDB] text-xs font-mono-num text-[#161616] flex items-center justify-between shadow-xs">
              <span className="font-bold">BESPOKE • PORTALS • NEXT.JS</span>
              <span className="text-emerald-600 font-bold">FROM $450</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Deep Dive: Custom vs Generic Templates */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-sm">
            <Image
              src="/images/official/automation/workflow-mapping.jpeg"
              alt="Bespoke Software Architecture and Workflow Engineering"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            TAILORED LOGIC
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            Built Specifically for Your Business Model.
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            Generic platforms force your company into rigid constraints. Custom web development empowers you to build software that matches your exact operational workflows, customer purchasing patterns, and database hierarchies.
          </p>
          <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
            From automated invoice generation to custom inventory routing and high-volume membership portals, we build web systems that eliminate manual bottlenecks and scale seamlessly.
          </p>
          <p className="text-xs font-mono-num text-[#161616] font-bold">
            No technical debt. No recurring plugin fees. Just pure engineering built for your growth.
          </p>
        </div>
      </section>

      {/* 3. Capabilities Grid */}
      <section className="space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            CUSTOM CAPABILITIES
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            What Our Custom Web Development Includes
          </h2>
          <p className="text-sm sm:text-base text-[#585858] font-body">
            Enterprise full-stack solutions tailored to your operational specifications.
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
            ENGINEERING WORKFLOW
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">
            Our 5-Step Custom Development Process
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
            AFFORDABLE CUSTOM TIERS
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616]">
            Explore Custom Web Design &amp; Development Packages
          </h2>
          <p className="text-xs sm:text-sm text-[#585858] font-body">
            Compare Custom Starter ($450), Custom Standard ($700), and Custom Enterprise ($1,400) packages.
          </p>
        </div>

        <Link
          href="/our-custom-web-design-development-packages"
          className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)] shrink-0 flex items-center gap-2"
        >
          <span>View Custom Web Packages</span>
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
          Ready to Build Your Custom Platform?
        </h2>
        <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
          Share your technical requirements with our engineering team for an actionable blueprint and transparent quote.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact?type=custom-web"
            className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md"
          >
            Request Custom Scope
          </Link>
          <Link
            href="/our-custom-web-design-development-packages"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm transition-all"
          >
            Compare Package Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
