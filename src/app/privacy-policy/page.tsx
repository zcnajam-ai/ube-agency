import React from "react";
import { Metadata } from "next";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data governance practices at Unified Branding Experts.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/privacy-policy",
  },
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
            Last updated: October 5, 2026
          </p>
        </div>

        <div className="space-y-7 text-sm leading-relaxed text-[#303030] sm:text-base">
          <p>This policy explains how Unified Branding Experts handles information through this website and its inquiry tools. A separate client agreement may cover information processed while we deliver a project.</p>
          {[
            ["1. What we receive", "When you contact us or use an inquiry form, we receive the details you choose to submit, such as name, email, phone, company, requested service and project description. The site may also receive ordinary technical information such as device, browser, pages visited, referral source and approximate location derived from an IP address."],
            ["2. Why we use it", "We use inquiry details to answer requests, prepare a scope, provide service and follow up about your project. Technical and aggregated analytics information helps us understand site use, troubleshoot problems, measure marketing and protect the website. We do not ask you to send payment card details in an inquiry form."],
            ["3. Forms and email delivery", "A form submission is processed by our website and our transactional email provider so we can receive your inquiry and send a confirmation. Do not include passwords, payment card numbers or sensitive personal records in an open text field."],
            ["4. Analytics, advertising and cookies", "The site uses Google Tag Manager and Google Analytics to measure traffic and meaningful interactions. Advertising tags, including Meta Pixel where configured, may measure campaign performance. These providers may set cookies or use similar technologies under their own policies. Browser controls may let you limit cookies, but some site functions can be affected."],
            ["5. Service providers and sharing", "We share information with providers needed to host the website, deliver inquiry emails, operate analytics and advertising tools, and support requested projects. We do not publish the contents of private inquiries. A service provider may process information in another country; its own privacy terms and the applicable agreement govern its handling."],
            ["6. Storage and security", "We use access controls and operational measures appropriate to the information we handle. No internet transmission or storage method can be guaranteed completely secure. We retain inquiry records only as needed for communication, project administration, legal obligations or dispute resolution, and review deletion requests case by case."],
            ["7. Your choices", "You can ask us to correct or delete information you submitted, or stop nonessential follow-up messages, by emailing us. We may need to retain some information where required for legal, billing or security reasons. You can also use your browser settings to manage cookies."],
            ["8. External links and updates", "Links to Shopify, marketplaces and other sites lead to services with their own privacy practices. We may revise this policy when our practices change and will update the date shown above."],
          ].map(([heading, body]) => <section key={heading} className="space-y-2"><h2 className="font-display text-xl font-bold text-[#161616]">{heading}</h2><p>{body}</p></section>)}
          <p>Privacy questions and requests: <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold text-[#6049B0] underline">{COMPANY_INFO.email}</a> or call {COMPANY_INFO.phone}.</p>
        </div>
      </div>
    </div>
  );
}
