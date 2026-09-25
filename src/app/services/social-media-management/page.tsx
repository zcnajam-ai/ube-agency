import React from "react";
import ServiceSchema from "@/components/seo/ServiceSchema";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import ServiceDetailView from "@/components/services/ServiceDetailView";
import FaqSchema, { type ServiceFaq } from "@/components/seo/FaqSchema";

const faqs: ServiceFaq[] = [
  { q: "How much does social media management cost?", a: "Pricing depends on the number of channels, monthly publishing volume, creative requirements, community-response scope, and reporting needs. Paid media spend, creator fees, and on-location production are separate unless included in the proposal." },
  { q: "How long does it take to start social media management?", a: "Most engagements begin with a short onboarding and planning cycle. Timing depends on account access, brand assets, approvals, and the number of channels. We confirm the first calendar and publishing date before production starts." },
  { q: "Do I need a brand guide before social media management begins?", a: "A complete brand guide is helpful but not required. We need approved logos, colors, offer details, audience information, and an approval contact. If the visual system needs work, branding can be scoped separately." },
  { q: "What is the difference between social media management and paid social advertising?", a: "Management covers the organic publishing system: planning, content, scheduling, and community guidance. Paid social uses advertising budgets and campaign targeting to distribute offers. The two can be coordinated but have separate scopes and costs." },
  { q: "Can you work with content my business already creates?", a: "Yes. We can organize and adapt approved photography, video, product information, and founder content into the agreed channel formats. Usage rights and source-file access must be confirmed before publishing." },
  { q: "What happens after the first month of social media management?", a: "We review the work completed, available channel signals, approval bottlenecks, and upcoming business priorities. The next calendar is adjusted within the agreed scope; no specific follower, engagement, or sales outcome is guaranteed." },
];

export const metadata: Metadata = {
  title: "Social Media Management & Content Strategy",
  description:
    "End-to-end social media strategy, custom branded assets, editorial content calendars, and community engagement across LinkedIn, Instagram, Facebook, and Threads.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/services/social-media-management",
  },
  openGraph: {
    title: "Social Media Management & Omnichannel Content Strategy",
    description:
      "End-to-end social media strategy, custom branded assets, and community engagement across LinkedIn, Instagram, Facebook, and Threads.",
    url: "https://unifiedbrandingexperts.com/services/social-media-management",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/services/social-media-management/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Social Media Management - Unified Branding Experts",
      },
    ],
  },
};

export default function SocialMediaServicePage() {
  const service = getServiceBySlug("social-media-management");
  if (!service) return notFound();
  return (
    <>
      <FaqSchema faqs={faqs} />
      <ServiceSchema
        name="Social Media Management Services"
        description="Editorial planning, branded social content, scheduling, community-response guidance and monthly performance review."
        path="/services/social-media-management"
        serviceType="Social media management"
      />
      <ServiceDetailView service={service} />
      <section className="px-4 sm:px-6 md:px-12 pb-24">
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-[#E0DDDB] p-7 sm:p-10 space-y-8">
          <div className="space-y-3">
            <h2 className="font-display text-2xl sm:text-4xl font-bold">What ongoing social media management includes</h2>
            <p className="text-[#585858] leading-relaxed">We turn approved brand priorities into a practical monthly publishing system. The work can include channel planning, post concepts, captions, branded graphics, scheduling, community-response guidance and a monthly review. The exact channels, posting volume and approval workflow are documented before production begins.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h2 className="font-display text-xl font-bold">How the monthly workflow operates</h2>
              <p className="text-sm text-[#585858] leading-relaxed">Each cycle starts with priorities, offers and upcoming dates. We prepare a calendar, develop the agreed assets, send them for approval and schedule approved content. Reporting focuses on reach, engagement, qualified conversations and traffic when those measurements are available.</p>
            </div>
            <div className="space-y-3">
              <h2 className="font-display text-xl font-bold">What is not automatically included</h2>
              <p className="text-sm text-[#585858] leading-relaxed">Paid media spend, influencer fees, professional photography, on-location video production and guaranteed follower or sales outcomes are not included unless they appear in the signed scope. Platform performance also depends on the offer, audience, publishing consistency and available creative assets.</p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold">A useful fit for teams that need consistency</h2>
            <p className="text-sm text-[#585858] leading-relaxed">This service is designed for businesses with an established offer that need a dependable publishing process across selected channels. It is not a substitute for product-market fit or customer service. When paid acquisition is required, the organic calendar can be coordinated with our Google Ads, Meta Ads and TikTok marketing work without mixing ad spend into the management fee.</p>
          </div>
          <div className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Social media management questions</h2>
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-2xl border border-[#E0DDDB] p-5">
                <summary className="cursor-pointer font-display font-bold text-[#161616]">{faq.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-[#585858]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
