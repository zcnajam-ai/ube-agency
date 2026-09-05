/**
 * Unified Analytics & Conversion Event Manager for Unified Branding Experts
 * Supports GA4 (NEXT_PUBLIC_GA_MEASUREMENT_ID), Google Ads (NEXT_PUBLIC_GOOGLE_ADS_ID),
 * and Meta Pixel (NEXT_PUBLIC_META_PIXEL_ID) without sending PII.
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Safe Event Dispatcher to GA4, Google Ads, and Meta Pixel
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  try {
    if (typeof window === "undefined") return;

    // 1. Google Analytics 4 & Google Ads (gtag.js)
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }

    // 2. Meta Pixel (fbq)
    if (typeof window.fbq === "function") {
      // Map standard lead event
      if (eventName === "generate_lead") {
        window.fbq("track", "Lead", params);
      } else {
        window.fbq("trackCustom", eventName, params);
      }
    }
  } catch (err) {
    console.debug("[Analytics] Event tracking error:", err);
  }
}

/**
 * 1. PROJECT FORM SUCCESS -> generate_lead
 * Safe properties only (service, budget_range, timeline, source_page).
 * NO PII (name, email, phone, description) sent to analytics.
 */
export function trackLeadSubmit(data: {
  service?: string;
  budget_range?: string;
  timeline?: string;
  source_page?: string;
}) {
  trackEvent("generate_lead", {
    service: data.service || "General Inquiry",
    budget_range: data.budget_range || "Not Specified",
    timeline: data.timeline || "Flexible",
    source_page: data.source_page || (typeof window !== "undefined" ? window.location.pathname : "/"),
  });
}

/**
 * 2. PHONE CLICK -> phone_click
 * Safe parameters only (source_page, cta_location, link_type: "phone").
 * NO PII (phone_number) sent to analytics.
 */
export function trackPhoneClick(ctaLocation: string = "header") {
  trackEvent("phone_click", {
    cta_location: ctaLocation,
    link_type: "phone",
    source_page: typeof window !== "undefined" ? window.location.pathname : "/",
  });
}

/**
 * 3. EMAIL CLICK -> email_click
 * Safe parameters only (source_page, cta_location, link_type: "email").
 * NO PII (email_address) sent to analytics.
 */
export function trackEmailClick(ctaLocation: string = "header") {
  trackEvent("email_click", {
    cta_location: ctaLocation,
    link_type: "email",
    source_page: typeof window !== "undefined" ? window.location.pathname : "/",
  });
}

/**
 * 4. START PROJECT CTA -> start_project_click
 */
export function trackStartProjectClick(source: string = "Hero CTA") {
  trackEvent("start_project_click", {
    cta_source: source,
    source_page: typeof window !== "undefined" ? window.location.pathname : "/",
  });
}

/**
 * 5. PACKAGE CTA -> package_inquiry_click
 */
export function trackPackageInquiryClick(packageName: string, startingPrice?: string) {
  trackEvent("package_inquiry_click", {
    package_name: packageName,
    starting_price: startingPrice || "Custom",
    source_page: typeof window !== "undefined" ? window.location.pathname : "/",
  });
}

/**
 * 6. CHATBOT OPEN -> chatbot_open
 */
export function trackChatbotOpen() {
  trackEvent("chatbot_open", {
    source_page: typeof window !== "undefined" ? window.location.pathname : "/",
  });
}

/**
 * 7. CHATBOT DESTINATION ACTION -> chatbot_cta_click
 * Safe destination parameter only. NO free-text message conversation sent.
 */
export function trackChatbotCtaClick(destination: string, category?: string) {
  trackEvent("chatbot_cta_click", {
    destination: destination,
    category: category || "General",
    source_page: typeof window !== "undefined" ? window.location.pathname : "/",
  });
}
