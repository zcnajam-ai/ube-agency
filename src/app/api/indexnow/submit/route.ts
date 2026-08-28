import { NextResponse } from "next/server";
import { INSIGHTS } from "@/data/insights";
import { ALL_SERVICES } from "@/data/services";

export async function POST() {
  const host = "unifiedbrandingexperts.com";
  const key = process.env.INDEXNOW_KEY || "0200cab578334723aaa039320bb17977";
  const keyLocation = `https://${host}/api/indexnow`;

  const insightUrls = INSIGHTS.map((i) => `https://${host}/insights/${i.slug}`);
  const serviceUrls = ALL_SERVICES.map((s) => `https://${host}/services/${s.slug}`);
  
  const packageUrls = [
    `https://${host}/branding-packages`,
    `https://${host}/web-design-packages`,
    `https://${host}/digital-marketing-packages`,
    `https://${host}/ai-seo-packages`,
    `https://${host}/ai-automation-packages`,
    `https://${host}/tiktok-marketing-packages`,
    `https://${host}/mobile-app-packages`,
    `https://${host}/ecommerce-growth-packages`,
  ];

  const urlList = [
    `https://${host}`,
    `https://${host}/services`,
    `https://${host}/packages`,
    `https://${host}/work`,
    `https://${host}/about`,
    `https://${host}/contact`,
    `https://${host}/insights`,
    ...serviceUrls,
    ...packageUrls,
    ...insightUrls,
  ];

  try {
    const payload = {
      host,
      key,
      keyLocation,
      urlList,
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      submittedUrlsCount: urlList.length,
    });
  } catch (error) {
    console.error("IndexNow submission error occurred");
    return NextResponse.json(
      { error: "Failed to submit URLs to IndexNow." },
      { status: 500 }
    );
  }
}
