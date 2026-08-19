import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  Code2,
  Server,
  Zap,
  Shield,
  Database,
  Cpu,
  Layers,
  FileCode2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best Website Development Agency | Custom Full-Stack Web",
  description:
    "High-performance website development services. Custom Next.js, WordPress, headless architectures, API integrations, and enterprise security.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/best-website-development-agency",
  },
  openGraph: {
    title: "Best Website Development Agency | Custom Full-Stack Web",
    description:
      "High-performance website development services. Custom Next.js, headless architectures, and API integrations.",
    url: "https://unifiedbrandingexperts.com/best-website-development-agency",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/images/projects/project-web-1.webp",
        width: 1200,
        height: 630,
        alt: "Website Development Agency - Unified Branding Experts",
      },
    ],
  },
};

export default function BestWebsiteDevelopmentAgencyPage() {
  const serviceIncludes = [
    {
      title: "Full-Stack Next.js & React Engineering",
      desc: "Sub-second server-side rendered (SSR) pages, edge API routes, dynamic database connections, and type-safe TypeScript architectures built without bloat.",
      icon: <Code2 className="w-5 h-5 text-[#9F8BE7]" />,
      image: "/images/official/automation/system-integration.jpeg",
    },
    {
      title: "Custom WordPress & Headless CMS Platforms",
      desc: "Intuitive content management systems customized for your team. Update blog posts, case studies, team bios, and media without touching a line of code.",
      icon: <Layers className="w-5 h-5 text-emerald-600" />,
      image: "/images/official/branding/brand-strategy.jpeg",
    },
    {
      title: "Third-Party API & Middleware Integration",
      desc: "Seamless synchronization with CRMs (HubSpot, Salesforce), payment processors (Stripe, PayPal), marketing automation, inventory systems, and custom webhooks.",
      icon: <Database className="w-5 h-5 text-purple-600" />,
      image: "/images/official/automation/workflow-mapping.jpeg",
    },
    {
      title: "Enterprise Web Security & SSL Hardening",
      desc: "Bank-grade data encryption, automated daily backups, DDoS mitigation, role-based user access controls, and strict cross-site scripting prevention.",
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      image: "/images/official/aiseo/aeo-structure.jpeg",
    },
    {
      title: "Speed Optimization & Core Web Vitals",
      desc: "Optimized asset bundling, tree-shaking, lazy-loaded media pipelines, and edge CDN caching resulting in sub-second LCP and 95+ Lighthouse benchmark ratings.",
      icon: <Zap className="w-5 h-5 text-[#DDF160]" />,
      image: "/images/official/ecommerce/storefront-setup.jpeg",
    },
    {
      title: "Clean W3C Certified Code & 100% Ownership",
      desc: "Fully documented, modular codebases adhering to strict W3C standards. Complete GitHub repository and deployment infrastructure handed over upon completion.",
      icon: <FileCode2 className="w-5 h-5 text-amber-600" />,
      image: "/images/official/branding/brand-identity.jpeg",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Architecture & Tech Stack Planning",
      review: "Your feature requirements, expected traffic volumes, third-party APIs, and hosting infrastructure.",
      setup: "A comprehensive technical architecture document, database schema, and deployment plan.",
      avoid: "Choosing sluggish platforms or restrictive CMS templates that break when you scale.",
    },
    {
      number: "02",
      title: "Frontend Engineering & Component Build",
      review: "Approved Figma UI/UX design files and interactive state specifications.",
      setup: "Modular, responsive React/Next.js components with clean HTML5 semantic markup.",
      avoid: "Bloated page templates that drag down page load speeds on mobile networks.",
    },
    {
      number: "03",
      title: "Backend & CMS Integration",
      review: "Content workflows, dynamic data models, custom forms, and API endpoints.",
      setup: "Secure CMS admin controls, database queries, and automated email/form notifications.",
      avoid: "Complex backends that require technical developers for simple text and image updates.",
    },
    {
      number: "04",
      title: "Rigorous QA & Performance Testing",
      review: "Cross-browser compatibility (Chrome, Safari, iOS, Android), form validations, and load speeds.",
      setup: "Automated regression testing, Core Web Vitals optimization, and security audits.",
      avoid: "Broken buttons, form submission failures, or unindexed 404 error routes.",
    },
    {
      number: "05",
      title: "Deployment & Team Onboarding",
      review: "Live server environment, DNS records, SSL certificates, and Google Search Console setup.",
      setup: "Zero-downtime production launch, team CMS video walkthrough, and post-launch support.",
      avoid: "Deployment downtime, lost SEO rankings, or feeling stranded after go-live.",
    },
  ];

  const faqs = [
    {
      q: "What programming languages and frameworks do you use?",
      a: "We specialize in modern, high-performance web stacks: Next.js, React, TypeScript, Tailwind CSS, Node.js, and custom WordPress architectures. We select the best technology tailored to your specific project needs.",
    },
    {
      q: "Will our website be easy to edit after launch?",
      a: "Yes. Every website is connected to an intuitive Content Management System (CMS) such as custom WordPress or Headless CMS. We include a custom video training walkthrough for your team.",
    },
    {
      q: "How fast will our website load?",
      a: "We engineer for sub-second Largest Contentful Paint (LCP) times and 95+ Google Lighthouse scores across desktop and mobile devices, ensuring you exceed search engine performance benchmarks.",
    },
    {
      q: "Do you provide hosting and domain setup?",
      a: "We deploy onto high-speed cloud infrastructures (such as Vercel, AWS, or your preferred hosting provider) and assist with DNS, SSL certificate installation, and email MX record configuration.",
    },
    {
      q: "Who owns the website source code?",
      a: "You own 100% of the repository source code, database assets, and deployment accounts. There are zero licensing fees or vendor lock-ins.",
    },
    {
      q: "What are your website development package prices?",
      a: "Our dedicated development packages start at $300 for basic 3-page CMS websites, $649 for standard 8-10 page dynamic sites, and $1,200 for enterprise bespoke platforms.",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      {/* 1. Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E0DDDB] pb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL-STACK WEB &amp; CMS ENGINEERING</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
            Best Website Development Agency for High-Growth Brands.
          </h1>

          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            We build high-performance, conversion-focused websites engineered for speed, search discovery, and long-term scalability. Combining modern Next.js and robust CMS backends with zero bloat.
          </p>

          <p className="text-sm sm:text-base text-[#303030] font-body font-medium">
            Your website is the digital headquarters of your brand. Our development approach focuses on creating websites that are fast, responsive, secure, and optimized for search engines and AI discovery platforms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Custom Next.js & WordPress architectures",
              "Sub-second load times & 95+ Core Web Vitals",
              "Admin CMS support & easy content editing",
              "100% source code and deployment ownership",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs text-[#303030] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact?type=web-development"
              className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)]"
            >
              Start Web Development
            </Link>

            <Link
              href="/our-website-development-packages"
              className="px-8 py-4 rounded-full border border-[#E0DDDB] bg-white hover:border-[#9F8BE7] text-sm font-display font-bold text-[#161616] transition-all flex items-center gap-2 shadow-xs"
            >
              <span>View Development Packages</span>
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
              src="/images/official/branding/brand-strategy.jpeg"
              alt="Unified Branding Experts Website Development Showcase"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E0DDDB] text-xs font-mono-num text-[#161616] flex items-center justify-between shadow-xs">
              <span className="font-bold">NEXT.JS • WORDPRESS • FAST CMS</span>
              <span className="text-emerald-600 font-bold">PLANS FROM $300</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Deep Dive */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-sm">
            <Image
              src="/images/official/automation/system-integration.jpeg"
              alt="Engineered Full-Stack Performance"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            TECHNICAL SUPERIORITY
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            Clean Code Engineered to Scale.
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            The difference between an average website and an enterprise-grade platform is the underlying architecture. We eliminate bloated visual builders and spaghetti code in favor of modular Next.js and custom CMS backends.
          </p>
          <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
            The result is a website that not only looks visually impressive but also generates organic traffic, builds customer credibility, and drives measurable business growth.
          </p>
          <p className="text-xs font-mono-num text-[#161616] font-bold">
            Built on clean, extensible standards so you never outgrow your digital infrastructure.
          </p>
        </div>
      </section>

      {/* 3. Capabilities Grid */}
      <section className="space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            ENGINEERING EXCELLENCE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            What Our Website Development Includes
          </h2>
          <p className="text-sm sm:text-base text-[#585858] font-body">
            Full-stack capabilities spanning modern JavaScript frameworks to robust database integrations.
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
            SPRINT WORKFLOW
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">
            Our 5-Step Web Development Process
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
            AFFORDABLE CMS &amp; FULL-STACK TIERS
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616]">
            Explore Website Development Packages
          </h2>
          <p className="text-xs sm:text-sm text-[#585858] font-body">
            Compare our Basic ($300), Standard ($649), and Enterprise ($1,200) website development plans.
          </p>
        </div>

        <Link
          href="/our-website-development-packages"
          className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)] shrink-0 flex items-center gap-2"
        >
          <span>View Development Packages</span>
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
          Ready to Build a High-Performance Website?
        </h2>
        <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
          From fast 3-page CMS websites to full-stack Next.js and headless architectures.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact?type=web-development"
            className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md"
          >
            Start Web Development
          </Link>
          <Link
            href="/our-website-development-packages"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm transition-all"
          >
            Compare Package Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
