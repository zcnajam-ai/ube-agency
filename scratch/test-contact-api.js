const http = require("http");

// We can import emailService directly via Node or test HTTP server.
const { sendProjectInquiryEmails } = require("../src/lib/emailService");

async function runTest() {
  console.log("--- TESTING EMAIL SERVICE DISPATCH (DEV MODE LOGGING) ---");
  await sendProjectInquiryEmails({
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    phone: "+1 555-019-2831",
    company: "Morgan Retail Co.",
    service: "Shopify eCommerce Development",
    budget: "$1,500 – $2,000",
    timeline: "1–2 Months",
    description: "Looking to build a custom Shopify store for our active apparel line.",
    sourcePage: "https://unifiedbrandingexperts.com/services/ecommerce",
  });

  console.log("\n--- TESTING CUSTOM BUDGET PAYLOAD ---");
  await sendProjectInquiryEmails({
    name: "Jordan Lee",
    email: "jordan@startup.io",
    phone: "+1 312-555-0144",
    company: "Apex Innovations",
    service: "AI SEO & Search Discovery",
    budget: "Custom: $2,500",
    timeline: "Immediately (ASAP)",
    description: "Need AEO entity schema and AI search optimization.",
    sourcePage: "https://unifiedbrandingexperts.com/contact",
  });

  console.log("\nAll email service dispatch tests completed successfully!");
}

runTest().catch((err) => {
  console.error("Test failed:", err);
  process.exit(1);
});
