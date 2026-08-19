export type ConciergeEvent =
  | "chat_opened"
  | "service_selected"
  | "package_viewed"
  | "estimate_started"
  | "lead_submitted"
  | "human_handoff";

export interface ConciergeEventPayload {
  serviceSlug?: string;
  packageName?: string;
  packagePrice?: string;
  projectType?: string;
  source?: string;
}

/**
 * Privacy-Safe Concierge Analytics Dispatcher
 * Tracks high-level conversion milestones without sending message text or PII to third parties.
 */
export function trackConciergeEvent(
  event: ConciergeEvent,
  payload?: ConciergeEventPayload
) {
  try {
    if (typeof window !== "undefined") {
      // 1. Dispatch custom DOM event for any embedded tracking listeners
      const customEvent = new CustomEvent("ube_concierge_event", {
        detail: { event, ...payload, timestamp: new Date().toISOString() },
      });
      window.dispatchEvent(customEvent);

      // 2. Google Analytics 4 integration (if present on window)
      if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", event, {
          event_category: "AI_Concierge",
          service_slug: payload?.serviceSlug || "",
          package_name: payload?.packageName || "",
          project_type: payload?.projectType || "",
        });
      }
    }
  } catch (err) {
    // Fail silently in non-browser or ad-blocked environments
    console.debug("Concierge event dispatch error:", err);
  }
}
