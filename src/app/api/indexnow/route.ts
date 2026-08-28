import { NextResponse } from "next/server";

// IndexNow Key Verification Endpoint
export async function GET() {
  const indexNowKey = process.env.INDEXNOW_KEY || "0200cab578334723aaa039320bb17977";
  return new Response(indexNowKey, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
