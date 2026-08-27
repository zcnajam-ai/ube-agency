import { NextRequest, NextResponse } from "next/server";
import {
  CONCIERGE_DECISION_TREE,
  matchKeywordIntent,
} from "@/data/conciergeDecisionTree";

export interface ConciergeApiAction {
  type: "recommend_service" | "recommend_package" | "open_project_estimate" | "view_work" | "contact_team";
  label: string;
  route?: string;
}

export async function POST(request: NextRequest) {
  try {
    // 1. Content-Type Check
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return NextResponse.json(
        { error: "Content-Type must be application/json" },
        { status: 400 }
      );
    }

    // 2. Request Size Validation (max 16KB)
    const rawBody = await request.text();
    if (rawBody.length > 16384) {
      return NextResponse.json(
        { error: "Payload too large. Please shorten your message." },
        { status: 413 }
      );
    }

    let parsedBody: { messages?: Array<{ role: string; content: string }> };
    try {
      parsedBody = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: "Invalid JSON payload format." }, { status: 400 });
    }

    const { messages = [] } = parsedBody;
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Messages array is required." }, { status: 400 });
    }

    // Limit array size to prevent heavy iterations
    const safeMessages = messages.slice(-10);

    const lastUserMsgRaw =
      safeMessages.filter((m) => m && typeof m.content === "string" && m.role === "user").slice(-1)[0]?.content || "";

    const lastUserMsg = lastUserMsgRaw.trim().slice(0, 1000);

    const match = matchKeywordIntent(lastUserMsg);

    if (match.matched) {
      if (match.special === "contact") {
        return NextResponse.json({
          role: "assistant",
          content:
            "You can connect directly with our directors and technical team via phone at **+1 224-266-8081** or email at **info@unifiedbrandingexperts.com**.",
          actions: [
            { type: "contact_team", label: "Contact Us Directly", route: "/contact" },
            { type: "open_project_estimate", label: "Get Project Estimate", route: "/contact" },
          ],
        });
      }

      if (match.special === "work") {
        return NextResponse.json({
          role: "assistant",
          content:
            "Explore our verified client case studies including Fixoria Studio, Happy Knot Creations, Everhome Real Estate, and Eau'dacity Luxury Fragrance.",
          actions: [
            { type: "view_work", label: "View All Case Studies", route: "/work" },
            { type: "view_work", label: "Fixoria Studio Brand System", route: "/work/fixoria-studio-brand-identity-system" },
            { type: "view_work", label: "Happy Knot Shopify Storefront", route: "/work/happy-knot-creations-shopify-storefront" },
            { type: "view_work", label: "Everhome Real Estate Study", route: "/work/everhome-real-estate-brand-system" },
            { type: "open_project_estimate", label: "Get Project Estimate", route: "/contact" },
          ],
        });
      }

      if (match.pathway) {
        const node = CONCIERGE_DECISION_TREE[match.pathway];
        if (node) {
          const rec = node.recommendation ? node.recommendation(match.subOption) : null;
          if (rec) {
            return NextResponse.json({
              role: "assistant",
              content: `${rec.summary}`,
              actions: rec.actions.map((act) => ({
                type: act.type === "link" ? "recommend_service" : "open_project_estimate",
                label: act.label,
                route: act.url || "/contact",
              })),
            });
          }
        }
      }
    }

    // Fallback for unknown / general inquiries
    return NextResponse.json({
      role: "assistant",
      content:
        "I can help you find the right Unified Branding Experts service. Choose what you're looking to accomplish below.",
      actions: [
        { type: "recommend_service", label: "Build a Website", route: "/services/web-design-development" },
        { type: "recommend_service", label: "Launch an Online Store", route: "/services/shopify-development" },
        { type: "recommend_service", label: "Brand My Business", route: "/services/branding" },
        { type: "recommend_service", label: "Improve Search Visibility", route: "/services/aiseo" },
        { type: "recommend_package", label: "Compare Packages", route: "/packages" },
      ],
    });
  } catch (err) {
    console.error("Concierge API Error occurred");
    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please try again or contact info@unifiedbrandingexperts.com.",
      },
      { status: 500 }
    );
  }
}
