import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import ServiceDetailView from "@/components/services/ServiceDetailView";

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
        url: "https://unifiedbrandingexperts.com/images/editorial/social-content-planning.webp",
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
        </div>
      </section>
    </>
  );
}
