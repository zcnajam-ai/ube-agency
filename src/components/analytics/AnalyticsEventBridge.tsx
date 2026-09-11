"use client";

import { useEffect } from "react";
import {
  trackEmailClick,
  trackEvent,
  trackPackageInquiryClick,
  trackPhoneClick,
} from "@/lib/analytics";

function getCtaLocation(link: HTMLAnchorElement) {
  if (link.dataset.analyticsLocation) return link.dataset.analyticsLocation;
  if (link.closest("header")) return "header";
  if (link.closest("footer")) return "footer";
  if (link.closest('[role="dialog"]')) return "project_modal";
  return "page_content";
}

export default function AnalyticsEventBridge() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a");
      if (!(link instanceof HTMLAnchorElement)) return;
      if (link.dataset.analyticsHandled === "true") return;

      const rawHref = link.getAttribute("href");
      if (!rawHref) return;

      const ctaLocation = getCtaLocation(link);

      if (rawHref.startsWith("tel:")) {
        trackPhoneClick(ctaLocation);
        return;
      }

      if (rawHref.startsWith("mailto:")) {
        trackEmailClick(ctaLocation);
        return;
      }

      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.pathname !== "/contact") {
        return;
      }

      const packageName = destination.searchParams.get("package");
      if (packageName) {
        trackPackageInquiryClick(packageName);
        return;
      }

      trackEvent("contact_click", {
        cta_location: ctaLocation,
        inquiry_type: destination.searchParams.get("type") || "general",
        source_page: window.location.pathname,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
