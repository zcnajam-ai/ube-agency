import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { ArrowLeft, ExternalLink, Palette, Type } from "lucide-react";
import { FEATURED_PROJECTS, getProjectBySlug } from "@/data/projects";
import { Heading3DSparkle } from "@/components/common/Brand3DIcons";
import CaseStudyGalleryCarousel from "@/components/work/CaseStudyGalleryCarousel";
import FixoriaEditorialGallery from "@/components/work/FixoriaEditorialGallery";

export function generateStaticParams() {
  return FEATURED_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "bugle-chaser-outdoor-apparel-brand") permanentRedirect("/work");
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.client} ${project.projectType === "website-build" ? "Shopify Store" : "Brand Identity"} Case Study`,
    description:
      project.id === "happy-knot-creations"
        ? "See how UBE supported Happy Knot Creations with Shopify storefront work, ongoing store management, and AI SEO. Explore the live handmade crochet store."
        : project.tagline,
    alternates: {
      canonical: `https://unifiedbrandingexperts.com/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Unified Branding Experts`,
      description: project.tagline,
      url: `https://unifiedbrandingexperts.com/work/${project.slug}`,
      siteName: "Unified Branding Experts",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Unified Branding Experts`,
      description: project.tagline,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === "bugle-chaser-outdoor-apparel-brand") permanentRedirect("/work");
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  const caseStudyUrl = `https://unifiedbrandingexperts.com/work/${project.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${caseStudyUrl}#case-study`,
        name: project.title,
        description: project.tagline,
        url: caseStudyUrl,
        image: `https://unifiedbrandingexperts.com${project.heroImage}`,
        creator: { "@id": "https://unifiedbrandingexperts.com/#organization" },
        about: { "@type": "Organization", name: project.client },
        ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
        ...(project.year ? { dateCreated: project.year } : {}),
        keywords: [project.industry, ...project.services].join(", "),
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://unifiedbrandingexperts.com" },
          { "@type": "ListItem", position: 2, name: "Work", item: "https://unifiedbrandingexperts.com/work" },
          { "@type": "ListItem", position: 3, name: project.client, item: caseStudyUrl },
        ],
      },
    ],
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      {/* Back Link */}
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-xs font-mono-num text-[#585858] hover:text-[#161616] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>BACK TO OUR WORK</span>
      </Link>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Heading3DSparkle size={16} />
            <span>{project.category}</span>
          </div>
          <span className="text-xs font-mono-num text-[#585858]">
            {[project.client, project.year, project.industry, project.platform].filter(Boolean).join(" • ")}
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-[1.1]">
          {project.title}
        </h1>

        <p className="text-base sm:text-xl text-[#585858] font-body leading-relaxed max-w-3xl">
          {project.tagline}
        </p>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9F8BE7] px-6 py-3 text-sm font-display font-bold text-[#161616] transition-colors hover:bg-[#b4a3f7]"
          >
            Visit Live Site <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </div>

      {project.clientDescription && (
        <section className="max-w-4xl space-y-3">
          <p className="text-xs font-mono-num font-bold uppercase tracking-wider text-[#9F8BE7]">The Client</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">About {project.client}</h2>
          <p className="text-base leading-relaxed text-[#585858]">{project.clientDescription}</p>
        </section>
      )}

      {/* Hero Visual */}
      <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-[#E0DDDB] shadow-md bg-white">
        <Image
          src={project.heroImage}
          alt={project.galleryAltText?.[0] ?? `${project.client} project overview`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1152px"
          className="object-cover object-center"
        />
      </div>

      {/* Project scope highlights; these are deliverables, not performance metrics. */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {project.results.map((res) => (
          <div
            key={res.label}
            className="p-6 rounded-3xl bg-white border border-[#E0DDDB] text-center space-y-1 shadow-xs"
          >
            <span className="font-display font-bold text-xl sm:text-2xl text-[#161616] block">
              {res.metric}
            </span>
            <span className="text-xs text-[#585858] font-body block">{res.label}</span>
          </div>
        ))}
      </div>

      {/* Challenge, strategy and scope */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E0DDDB] space-y-3 shadow-xs">
          <div className="text-xs font-mono-num font-bold text-rose-600 uppercase tracking-wider">
            1. The Challenge
          </div>
          <h2 className="font-display text-lg font-bold text-[#161616]">
            The Challenge
          </h2>
          <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
            {project.challenge}
          </p>
        </div>

        <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E0DDDB] space-y-3 shadow-xs">
          <div className="text-xs font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider">
            2. Strategic Direction
          </div>
          <h2 className="font-display text-lg font-bold text-[#161616]">
            {project.projectType === "website-build" ? "Strategic Direction" : "Design Rationale"}
          </h2>
          <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
            {project.strategy}
          </p>
        </div>

        <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E0DDDB] space-y-3 shadow-xs">
          <div className="text-xs font-mono-num font-bold text-emerald-600 uppercase tracking-wider">
            3. Execution &amp; Scope
          </div>
          <h2 className="font-display text-lg font-bold text-[#161616]">
            {project.projectType === "website-build" ? "What UBE Built" : "What UBE Delivered"}
          </h2>
          <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
            {project.execution}
          </p>
        </div>
      </div>

      {project.caseStudySections?.map((section, index) => (
        <section key={section.heading} className="max-w-4xl space-y-4" aria-labelledby={`case-study-section-${index}`}>
          <h2
            id={`case-study-section-${index}`}
            className="font-display text-2xl sm:text-3xl font-bold text-[#161616]"
          >
            {section.heading}
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-[#585858] font-body">
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={`${section.heading}-${paragraphIndex}`}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}

      {project.id === "happy-knot-creations" && (
        <section className="rounded-3xl border border-[#E0DDDB] bg-white p-7 sm:p-10 space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">Discuss a similar Shopify project</h2>
          <p className="max-w-3xl text-base leading-relaxed text-[#585858]">
            If you need a Shopify storefront, ongoing store management, or search support for a product catalog, review our{" "}
            <Link href="/services/shopify-development" className="underline decoration-[#9F8BE7] underline-offset-4 hover:text-[#161616]">
              Shopify development service
            </Link>{" "}
            or tell us about your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#9F8BE7] px-6 py-3 text-sm font-display font-bold text-[#161616] transition-colors hover:bg-[#b4a3f7]"
          >
            Discuss a Similar Project
          </Link>
        </section>
      )}

      {/* Brand Specifications (Typography & Palette) */}
      {(project.typography || project.palette) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {project.typography && (
            <div className="p-7 rounded-3xl bg-white border border-[#E0DDDB] space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono-num text-[#9F8BE7] font-bold">
                <Type className="w-4 h-4" />
                <span>TYPOGRAPHY SYSTEM</span>
              </div>
              <div className="font-display text-xl font-bold text-[#161616]">
                {project.typography}
              </div>
              <p className="text-xs text-[#585858] leading-relaxed">
                Selected for optimal brand legibility, visual hierarchy, and cross-platform consistency.
              </p>
            </div>
          )}

          {project.palette && (
            <div className="p-7 rounded-3xl bg-white border border-[#E0DDDB] space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono-num text-[#9F8BE7] font-bold">
                <Palette className="w-4 h-4" />
                <span>COLOR SPECIFICATIONS</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {project.palette.map((color) => (
                  <div key={color} className="flex items-center gap-2">
                    <span
                      className="w-6 h-6 rounded-full border border-black/10 shadow-xs block"
                      style={{ backgroundColor: color }}
                    />
                    <span className="font-mono-num text-xs text-[#585858]">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Visual Showcase Gallery */}
      {project.slug === "fixoria-studio-brand-identity-system" ? (
        <FixoriaEditorialGallery />
      ) : (
        project.galleryImages && project.galleryImages.length > 0 && (
          <CaseStudyGalleryCarousel images={project.galleryImages} title={project.title} altText={project.galleryAltText} />
        )
      )}


      {/* Technology Stack & Bottom CTA */}
      <div className="p-8 rounded-3xl bg-white border border-[#E0DDDB] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
        <div>
          <span className="text-xs font-mono-num text-[#585858] uppercase block mb-2 font-bold">
            Project Tools &amp; Scope
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3.5 py-1.5 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] text-xs font-mono-num text-[#585858] font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#E0DDDB] text-[#161616] font-display font-bold text-xs sm:text-sm hover:border-[#9F8BE7] transition-all text-center"
            >
              Visit Live Site <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
          <Link
            href={project.projectType === "website-build" ? "/services/shopify-development" : "/services/branding"}
            className="px-6 py-3.5 rounded-full bg-white border border-[#E0DDDB] text-[#161616] font-display font-bold text-xs sm:text-sm hover:border-[#9F8BE7] transition-all text-center"
          >
            Related UBE Service
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-xs sm:text-sm hover:bg-[#b4a3f7] transition-all text-center shadow-xs"
          >
            Discuss a Similar Project
          </Link>
        </div>
      </div>
    </div>
  );
}
