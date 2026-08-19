import React from "react";
import { Metadata } from "next";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms & Conditions | Unified Branding Experts",
  description: "Terms and conditions for client engagements and digital services at Unified Branding Experts.",
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
            Last updated: February 2026
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-[#303030] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#161616]">1. Engagement Scope</h2>
            <p>
              All professional design, engineering, eCommerce setup, branding, and AISEO services provided by Unified Branding Experts are governed by explicit Statements of Work (SOW) executed between client parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#161616]">2. Intellectual Property & Code Ownership</h2>
            <p>
              Upon final milestone settlement, clients receive 100% full intellectual property ownership and source code access to all bespoke digital platforms and brand assets engineered for their company.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#161616]">3. Contact</h2>
            <p>
              For legal inquiries, contact us at{" "}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#9F8BE7] underline font-medium">
                {COMPANY_INFO.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
