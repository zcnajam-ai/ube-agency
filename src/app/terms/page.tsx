import React from "react";
import { Metadata } from "next";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for client engagements and digital services at Unified Branding Experts.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto space-y-8 font-body">
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] space-y-8 shadow-xs">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#161616] tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs font-mono-num text-[#585858] mt-2">
            Last updated: October 5, 2026
          </p>
        </div>

        <div className="space-y-7 text-sm leading-relaxed text-[#303030] sm:text-base">
          <p>These website terms describe how visitors may use our site and how we discuss potential projects. The signed proposal, statement of work and any service agreement govern a paid engagement if their terms differ from this page.</p>
          {[
            ["1. Proposals and scope", "A website inquiry does not create a client relationship. Before work starts, we set out the services, deliverables, platforms, milestones, payment schedule and responsibilities in writing. Work outside that scope requires a written change or a separate quote."],
            ["2. Pricing and outside costs", "Displayed package prices describe the listed starting or fixed package scope. Platform subscriptions, third-party apps, domains, advertising spend, inventory, samples, manufacturing, shipping and taxes may be additional. We identify applicable outside costs and approved budgets in the proposal before they are incurred."],
            ["3. Client materials and access", "Clients are responsible for supplying accurate product information, lawful rights to images and brand assets, necessary account access and timely approvals. We may pause work dependent on missing information or access and revise the schedule with the client."],
            ["4. Revisions, approval and delivery", "The agreed proposal sets revision rounds, review windows, acceptance criteria and handoff materials. A launch can depend on payment-provider approvals, seller verification, product eligibility and other third-party decisions outside our control."],
            ["5. Intellectual property", "Ownership and license rights for custom deliverables are defined in the signed agreement after applicable payments. Third-party software, fonts, stock assets, platform themes and supplier content retain their own licenses and terms. We do not claim to transfer rights we do not own."],
            ["6. Results and performance commitments", "We can set measurable goals and a process for reporting on them. A store build alone does not ensure traffic, orders or profitability. Advertising and search outcomes depend on the offer, market, budget, eligibility, fulfillment and ongoing decisions. A specific sales or return guarantee applies only when a signed agreement states the metric, baseline, measurement period, client dependencies and remedy."],
            ["7. Third-party platforms", "Shopify, marketplaces, advertising networks, payment providers and suppliers set their own policies, fees and account decisions. Clients retain responsibility for complying with the rules of platforms they use. Integrations and availability can change."],
            ["8. Payments, changes and cancellation", "Your signed proposal controls deposits, installments, refunds, cancellation, pause rights and work already completed. Please review those terms before approving a project. Contact us promptly about a billing or scope concern so we can address it directly."],
            ["9. Website content and acceptable use", "Site examples and articles are general information, not a promise that the same result applies to your business. You may not misuse this site, submit unlawful or infringing material, or interfere with its security or availability."],
            ["10. Updates and contact", "We may update these website terms and will show the date above. For questions about a proposed or signed project, contact us at the address below."],
          ].map(([heading, body]) => <section key={heading} className="space-y-2"><h2 className="font-display text-xl font-bold text-[#161616]">{heading}</h2><p>{body}</p></section>)}
          <p>Contact: <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold text-[#6049B0] underline">{COMPANY_INFO.email}</a>.</p>
        </div>
      </div>
    </div>
  );
}
