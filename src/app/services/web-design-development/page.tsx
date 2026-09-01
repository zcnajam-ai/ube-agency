import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Layout,
  Smartphone,
  Code2,
  Layers,
  Zap,
  Globe2,
  HelpCircle,
  Phone,
  Server,
  Database,
  Cpu,
  Search,
  Activity,
  Check,
} from "lucide-react";
import ServiceProjectModalTrigger from "@/components/services/ServiceProjectModalTrigger";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Website Design & Custom Web Development",
  description:
    "Custom website design and web development for businesses that need speed, usability and room to grow. UBE builds responsive websites, custom platforms, WordPress solutions and modern web applications with SEO-ready architecture.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/services/web-design-development",
  },
  openGraph: {
    title: "Website Design & Custom Web Development | Unified Branding Experts",
    description:
      "Custom website design and web development for businesses that need speed, usability and room to grow.",
    url: "https://unifiedbrandingexperts.com/services/web-design-development",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "Website Design & Custom Web Development - Unified Branding Experts",
      },
    ],
  },
};

export default function WebDesignServicePage() {
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
        name: "Services",
        item: "https://unifiedbrandingexperts.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Website Design & Development",
        item: "https://unifiedbrandingexperts.com/services/web-design-development",
      },
    ],
  };

  const faqs = [
    {
      q: "Do you build completely custom websites?",
      a: "Yes. The scope can range from customized CMS websites to fully custom-coded platforms depending on the functionality, budget and long-term requirements of the project.",
    },
    {
      q: "Can you redesign an existing website?",
      a: "Yes. We can assess the current site, preserve useful content and functionality, and rebuild the experience around improved UX, performance, branding and technical structure.",
    },
    {
      q: "Do you build WordPress websites?",
      a: "Yes. WordPress can be a strong choice when a business needs flexible content management. We also work with modern frameworks and headless architectures when the project requires them.",
    },
    {
      q: "Will the website work on mobile devices?",
      a: "Yes. Responsive behavior is considered throughout design and development rather than treated as a separate version of the website.",
    },
    {
      q: "Can you connect third-party tools?",
      a: "Depending on the project, we can integrate forms, CRM systems, payment platforms, analytics, APIs, booking tools and other business systems.",
    },
    {
      q: "Do you provide SEO after the website launches?",
      a: "Yes. Website development can be combined with UBE's ongoing SEO and AI search optimization services.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E0DDDB] pb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WEBSITE DESIGN &amp; DEVELOPMENT</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
            Website Design &amp; Custom Web Development
          </h1>

          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            Your website should do more than look professional. Unified Branding Experts designs and develops high-performance websites built around your brand, audience and business goals. From responsive business websites and conversion-focused landing pages to custom web applications and advanced CMS builds, we create digital experiences that are clear, fast and built to grow with your business.
          </p>

          {/* Key Deliverable Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "100% custom UI/UX design & Figma wireframes",
              "Next.js App Router & ultra-fast React architecture",
              "SEO-ready semantic HTML & Core Web Vitals optimization",
              "Flexible CMS options (WordPress or Headless)",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs text-[#303030] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Primary & Secondary Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <ServiceProjectModalTrigger
              label="Start Your Website Project"
              service="Website Design & Development"
              variant="primary"
            />
            <Link
              href="/web-design-packages"
              className="px-6 py-3.5 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#9F8BE7] text-[#161616] font-display font-bold text-xs transition-all flex items-center gap-2 group shadow-xs"
            >
              <span>Explore Web Design Packages</span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* HERO VISUAL (40-55% Width Composition) */}
        <div className="lg:col-span-5 relative group">
          <div className="relative rounded-3xl overflow-hidden border border-[#E0DDDB] bg-white p-4 shadow-xl">
            <div className="relative h-[380px] sm:h-[440px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#FAF7F6] to-[#EAE6E4] flex items-center justify-center">
              {/* Custom SVG Floating Desktop + Mobile Canvas */}
              <div className="relative w-full h-full p-6 flex flex-col justify-between">
                {/* Browser Frame */}
                <div className="w-full bg-white rounded-xl border border-[#E0DDDB] p-4 shadow-md space-y-3 transform transition-transform group-hover:scale-[1.02] duration-300">
                  <div className="flex items-center justify-between border-b border-[#E0DDDB] pb-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-[#FAF7F6] text-[10px] font-mono-num text-[#838383]">
                      unifiedbrandingexperts.com
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-2/3 bg-[#9F8BE7]/20 rounded-md" />
                    <div className="h-2.5 w-full bg-[#E0DDDB]/60 rounded-md" />
                    <div className="h-2.5 w-4/5 bg-[#E0DDDB]/40 rounded-md" />
                  </div>
                </div>

                {/* Floating Mobile Phone overlay */}
                <div className="absolute bottom-6 right-6 w-36 bg-[#161616] text-white rounded-2xl p-3 border border-white/20 shadow-2xl space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-8 h-1 rounded-full bg-white/30 mx-auto" />
                  <div className="h-3 w-3/4 bg-[#9F8BE7] rounded-sm" />
                  <div className="h-2 w-full bg-white/20 rounded-sm" />
                  <div className="h-2 w-2/3 bg-white/20 rounded-sm" />
                  <div className="h-6 w-full bg-[#DDF160] rounded-md text-[9px] font-bold text-[#161616] flex items-center justify-center">
                    Launch
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono-num text-[#585858]">
                  <Globe2 className="w-4 h-4 text-[#9F8BE7]" />
                  <span>Responsive Desktop &amp; Mobile UI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BUSINESS-FIRST APPROACH SECTION */}
      <section className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#585858] font-bold">
          <span>STRATEGIC ARCHITECTURE</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
          A Website Built Around How Your Business Actually Works
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-[#585858] font-body leading-relaxed">
          <p>
            Every business has a different sales process, customer journey and operational structure. That is why we do not approach web development as a simple theme installation.
          </p>
          <p>
            We begin with the experience your visitors need, the actions you want them to take and the systems the website needs to connect with.
          </p>
          <p>
            The result is a website that brings together brand presentation, user experience, performance, search visibility and the technology required behind the scenes.
          </p>
          <p className="text-sm sm:text-base font-medium text-[#303030]">
            Whether you are replacing an outdated website, launching a new company or building a more advanced digital platform, the architecture is planned around what the site needs to accomplish.
          </p>
        </div>
      </section>

      {/* 3. 6 SERVICES CARDS GRID */}
      <section className="space-y-8 border-t border-[#E0DDDB] pt-16">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold">
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            Website Design &amp; Development Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Custom Website Design",
              desc: "Original page layouts and interface systems designed around your brand, content and conversion goals rather than a generic pre-built appearance.",
              icon: <Layout className="w-5 h-5 text-[#9F8BE7]" />,
            },
            {
              title: "Responsive Development",
              desc: "Web experiences engineered to work smoothly across desktop, tablet and mobile with layouts that adapt naturally to different screen sizes.",
              icon: <Smartphone className="w-5 h-5 text-emerald-600" />,
            },
            {
              title: "Custom Web Development",
              desc: "Advanced front-end and back-end functionality for businesses that require more than a standard marketing website.",
              icon: <Code2 className="w-5 h-5 text-purple-600" />,
            },
            {
              title: "WordPress & CMS Development",
              desc: "Flexible content management systems that allow your team to manage pages, articles, media and website content without rebuilding the site.",
              icon: <Layers className="w-5 h-5 text-[#DDF160]" />,
            },
            {
              title: "Landing Page Development",
              desc: "Focused landing pages built for advertising campaigns, product launches, lead generation and high-intent service traffic.",
              icon: <Zap className="w-5 h-5 text-rose-500" />,
            },
            {
              title: "Web Applications & Integrations",
              desc: "Custom web functionality, APIs, forms, customer portals, databases and third-party integrations designed around your workflow.",
              icon: <Globe2 className="w-5 h-5 text-blue-600" />,
            },
          ].map((service) => (
            <div
              key={service.title}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] transition-all space-y-4 shadow-xs group"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] flex items-center justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-[#161616]">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#585858] leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. USER EXPERIENCE SECTION (WITH RESPONSIVE UX VISUAL) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-[#E0DDDB] pt-16">
        <div className="lg:col-span-5 relative group order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden border border-[#E0DDDB] bg-white p-4 shadow-xl">
            <div className="relative h-[340px] sm:h-[400px] w-full rounded-2xl overflow-hidden bg-[#FAF7F6] p-6 flex flex-col justify-center gap-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E0DDDB] shadow-xs">
                <Layout className="w-5 h-5 text-[#9F8BE7]" />
                <div>
                  <div className="text-xs font-bold text-[#161616]">Information Architecture</div>
                  <div className="text-[10px] text-[#585858]">Logical navigation &amp; page hierarchy</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E0DDDB] shadow-xs">
                <Smartphone className="w-5 h-5 text-emerald-600" />
                <div>
                  <div className="text-xs font-bold text-[#161616]">Mobile Usability &amp; Touch UX</div>
                  <div className="text-[10px] text-[#585858]">Thumb-friendly buttons &amp; layout scaling</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E0DDDB] shadow-xs">
                <Zap className="w-5 h-5 text-[#DDF160]" />
                <div>
                  <div className="text-xs font-bold text-[#161616]">Conversion Paths &amp; Speed</div>
                  <div className="text-[10px] text-[#585858]">Frictionless form experience &amp; low CLS</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold">
            <span>USER EXPERIENCE &amp; UI</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            Designed for the People Who Actually Use It
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            Good web design removes friction. We structure navigation, page hierarchy, messaging, forms and calls to action so visitors can quickly understand what you offer and determine what to do next.
          </p>
          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono-num font-bold text-[#161616] uppercase tracking-wider block">
              Our UX Process Considers:
            </span>
            <div className="grid grid-cols-2 gap-2.5 text-xs text-[#303030]">
              {[
                "Information architecture",
                "Mobile usability",
                "Conversion paths",
                "Visual hierarchy",
                "Accessibility Standards",
                "Readable typography",
                "Navigation behavior",
                "Form experience",
                "Page speed optimization",
                "Content clarity",
              ].map((ux) => (
                <div key={ux} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#9F8BE7] shrink-0" />
                  <span>{ux}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-[#585858] font-medium pt-2">
            The visual design should support the user journey rather than compete with it.
          </p>
        </div>
      </section>

      {/* 5. TECHNOLOGY SECTION (WITH ARCHITECTURE VISUAL) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-[#E0DDDB] pt-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-emerald-600 font-bold">
            <span>TECHNOLOGY STACK</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            Modern Technology Without Locking You Into Complexity
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            The technology stack depends on what the project actually requires. UBE works across modern development frameworks and content management systems including:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono-num text-xs text-[#161616]">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "WordPress",
              "Headless CMS",
              "REST APIs",
              "Cloud / Databases",
            ].map((tech) => (
              <div key={tech} className="p-3 rounded-2xl bg-white border border-[#E0DDDB] text-center font-bold shadow-2xs">
                {tech}
              </div>
            ))}
          </div>

          <p className="text-xs text-[#585858]">
            We select technology based on scalability, maintainability, performance and how your team will manage the website after launch.
          </p>
        </div>

        <div className="lg:col-span-5 relative group">
          <div className="relative rounded-3xl overflow-hidden border border-[#E0DDDB] bg-white p-4 shadow-xl">
            <div className="relative h-[340px] sm:h-[400px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#161616] to-[#252525] p-6 text-white flex flex-col justify-between">
              <div className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-wider font-bold">
                CONNECTED DIGITAL ECOSYSTEM
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono-num">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#DDF160]" />
                  <span>UI / Next.js</span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#9F8BE7]" />
                  <span>CMS Platform</span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span>REST APIs</span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-rose-400" />
                  <span>Analytics</span>
                </div>
              </div>

              <div className="text-[11px] text-[#ACACAC]">
                Bespoke integration nodes mapped to business requirements.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SEO & PERFORMANCE SECTION (WITH SEO LINK) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-[#E0DDDB] pt-16">
        <div className="lg:col-span-5 relative group order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden border border-[#E0DDDB] bg-white p-4 shadow-xl">
            <div className="relative h-[340px] sm:h-[400px] w-full rounded-2xl overflow-hidden bg-[#FAF7F6] p-6 flex flex-col justify-between border border-[#E0DDDB]">
              <div className="flex items-center justify-between border-b border-[#E0DDDB] pb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#161616]">
                  <Search className="w-4 h-4 text-[#9F8BE7]" />
                  <span>SEO &amp; Performance Audit</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono-num font-bold">
                  100/100 Core Vitals
                </span>
              </div>

              <div className="space-y-2 text-xs font-mono-num text-[#585858]">
                <div className="flex justify-between p-2 rounded-lg bg-white border border-[#E0DDDB]">
                  <span>Semantic HTML5</span>
                  <strong className="text-[#161616]">Verified</strong>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-white border border-[#E0DDDB]">
                  <span>JSON-LD Schema</span>
                  <strong className="text-[#161616]">Ready</strong>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-white border border-[#E0DDDB]">
                  <span>Canonical Architecture</span>
                  <strong className="text-[#161616]">Valid</strong>
                </div>
              </div>

              <Link
                href="/services/aiseo"
                className="p-3 rounded-2xl bg-[#9F8BE7]/15 border border-[#9F8BE7]/40 text-[#161616] font-display font-bold text-xs flex items-center justify-between hover:bg-[#9F8BE7]/25 transition-all"
              >
                <span>Explore AI SEO Services</span>
                <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold">
            <span>TECHNICAL FOUNDATION</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            SEO-Ready Architecture From the Beginning
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            Search visibility should not be something added after a website is finished. We build the technical foundation with search engines and users in mind, including:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#303030]">
            {[
              "Semantic page structure",
              "Crawlable navigation",
              "Responsive layouts",
              "Metadata architecture",
              "Canonical URLs",
              "Structured data readiness",
              "Image optimization",
              "Internal linking",
              "Core Web Vitals considerations",
              "Accessible HTML",
              "Sitemap and robots configuration",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9F8BE7] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/services/aiseo"
              className="inline-flex items-center gap-2 text-sm font-display font-bold text-[#161616] hover:text-[#9F8BE7] transition-colors border-b border-[#161616] pb-0.5"
            >
              <span>Explore AI SEO Services</span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. OUR PROCESS (5 STEPS) */}
      <section className="space-y-8 border-t border-[#E0DDDB] pt-16">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#585858] font-bold">
            <span>DEVELOPMENT LIFECYCLE</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            From Strategy to Launch
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              step: "01",
              name: "Discovery",
              desc: "We define the audience, business goals, website requirements, content needs and technical scope.",
            },
            {
              step: "02",
              name: "UX & Structure",
              desc: "We plan navigation, page hierarchy, wireframes and the primary conversion paths.",
            },
            {
              step: "03",
              name: "Visual Design",
              desc: "The interface is developed around the brand with responsive desktop and mobile layouts.",
            },
            {
              step: "04",
              name: "Development",
              desc: "Approved designs are transformed into a functional, optimized website and connected to required systems.",
            },
            {
              step: "05",
              name: "QA & Launch",
              desc: "We test responsiveness, forms, performance, navigation, browser compatibility and launch configuration before deployment.",
            },
          ].map((proc) => (
            <div
              key={proc.step}
              className="p-6 rounded-3xl bg-white border border-[#E0DDDB] space-y-3 shadow-2xs"
            >
              <span className="text-xl font-mono-num font-bold text-[#9F8BE7]">
                {proc.step}
              </span>
              <h3 className="font-display font-bold text-sm text-[#161616]">
                {proc.name}
              </h3>
              <p className="text-xs text-[#585858] leading-relaxed">
                {proc.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. WHO THIS IS FOR SECTION */}
      <section className="space-y-6 border-t border-[#E0DDDB] pt-16 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#585858] font-bold">
          <span>TARGET FIT</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
          Built for Businesses That Have Outgrown Basic Websites
        </h2>
        <p className="text-base text-[#585858]">
          Our website design and development service is a strong fit for:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-[#303030]">
          {[
            "Growing businesses needing custom platform capabilities",
            "Professional service companies aiming for higher credibility",
            "eCommerce brands scaling beyond standard templates",
            "Startups requiring fast, scalable React / Next.js builds",
            "Established companies undergoing a comprehensive digital redesign",
            "Businesses replacing rigid template-based websites",
            "Companies requiring custom third-party integrations & APIs",
            "Organizations needing a scalable content platform",
          ].map((fit) => (
            <div key={fit} className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-[#E0DDDB]">
              <CheckCircle2 className="w-4 h-4 text-[#9F8BE7] shrink-0" />
              <span>{fit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQs SECTION */}
      <section className="space-y-8 border-t border-[#E0DDDB] pt-16">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>QUESTIONS &amp; ANSWERS</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616] tracking-tight">
            Website Design &amp; Development FAQs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E0DDDB] space-y-3 shadow-2xs"
            >
              <h3 className="font-display font-bold text-base text-[#161616]">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-[#585858] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FINAL CALLOUT CTA */}
      <section className="p-8 sm:p-14 rounded-3xl bg-[#161616] text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DDF160]/15 border border-[#DDF160]/30 text-xs font-mono-num text-[#DDF160] font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NEXT STAGE GROWTH</span>
          </div>
          <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Ready to Build a Website That Works as Hard as Your Business?
          </h3>
          <p className="text-xs sm:text-sm text-[#ACACAC] leading-relaxed">
            Tell us what you are building, where you are now and what you want the next stage to accomplish. Our team will review your requirements and follow up with you.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto shrink-0">
          <ServiceProjectModalTrigger
            label="Start Your Project"
            service="Website Design & Development"
            variant="primary"
            className="w-full sm:w-auto !py-4 !px-8 text-sm"
          />
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="px-6 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-xs font-mono-num text-white flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#9F8BE7]" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
