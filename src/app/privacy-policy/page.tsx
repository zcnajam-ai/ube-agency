import React from "react";
import { Metadata } from "next";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Unified Branding Experts",
  description: "Privacy policy and data governance practices at Unified Branding Experts.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto space-y-8 font-body">
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] space-y-8 shadow-xs">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#161616] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono-num text-[#585858] mt-2">
            Last updated: February 2026
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-[#303030] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#161616]">1. Information We Collect</h2>
            <p>
              Unified Branding Experts (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) collects information you provide directly to us when you fill out our project inquiry form, subscribe to our insights newsletter, or contact us by phone ({COMPANY_INFO.phone}) or email ({COMPANY_INFO.email}).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#161616]">2. How We Use Information</h2>
            <p>
              We use the information we collect to communicate with you regarding your project inquiries, deliver client services, improve our website performance, and provide technical and strategic updates.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#161616]">3. Data Security & Storage</h2>
            <p>
              We implement industry-standard encryption and security protocols to safeguard your personal and business data against unauthorized access, loss, or misuse.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#161616]">4. Contact Us</h2>
            <p>
              If you have questions about this policy, please reach us directly at{" "}
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
