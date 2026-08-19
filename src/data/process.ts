export interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  summary: string;
  deliverables: string[];
  duration: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    phase: "DISCOVERY & AUDIT",
    title: "Uncovering Deep Market Opportunities",
    summary:
      "We dissect your existing digital infrastructure, audience demographics, competitive positioning, and conversion friction points through data-driven research.",
    deliverables: [
      "Competitive Landscape & Gap Analysis",
      "Customer Persona & Journey Mapping",
      "Technical Architecture & Speed Audit",
      "Growth Opportunity Blueprint",
    ],
    duration: "Week 1",
  },
  {
    number: "02",
    phase: "STRATEGY & ROADMAP",
    title: "Architecting the Growth System",
    summary:
      "We formulate a unified roadmap that aligns brand positioning, technology choices, checkout mechanics, and search/paid acquisition into one seamless system.",
    deliverables: [
      "Unified Brand & Tech Master Plan",
      "Conversion Funnel & Wireframe Flow",
      "AISEO & Entity Architecture Specification",
      "Paid Media & Scaling Forecast",
    ],
    duration: "Week 2",
  },
  {
    number: "03",
    phase: "CREATIVE & UI/UX",
    title: "Crafting Distinctive Visuals",
    summary:
      "We design bespoke, high-contrast visual systems and intuitive user interfaces. Every layout is tested for visual hierarchy, typography precision, and emotional resonance.",
    deliverables: [
      "High-Fidelity Interactive Prototypes",
      "Bespoke Brand System & Vector Assets",
      "Micro-Interaction & Motion Design Specs",
      "Design Token & Component Library",
    ],
    duration: "Weeks 3–4",
  },
  {
    number: "04",
    phase: "ENGINEERING & CMS",
    title: "Building Responsive Digital Platforms",
    summary:
      "We custom-code your platform using Next.js App Router, TypeScript, and modern headless APIs, ensuring fast response times and optimized Core Web Vitals.",
    deliverables: [
      "Production Next.js / React Codebase",
      "GSAP Motion & Lenis Scroll Integration",
      "Payment & CRM Backend Integrations",
      "Automated Testing & Security Hardening",
    ],
    duration: "Weeks 5–7",
  },
  {
    number: "05",
    phase: "QUALITY QA & LAUNCH",
    title: "Zero-Downtime Deployment & Tuning",
    summary:
      "Rigorous cross-device testing across desktop, tablet, and mobile. We stress-test checkouts, verify schemas, and orchestrate a seamless deployment.",
    deliverables: [
      "Comprehensive Multi-Device QA",
      "Technical SEO & Schema Validation",
      "Server-Side Analytics & Pixel Calibration",
      "Zero-Downtime Live Launch",
    ],
    duration: "Week 8",
  },
  {
    number: "06",
    phase: "ACQUIRE & SCALE",
    title: "Compounding Growth & AI Dominance",
    summary:
      "Post-launch, we activate performance media funnels (Google, Meta, TikTok) and maintain continuous AISEO entity optimization to scale monthly revenue.",
    deliverables: [
      "Active Paid Media Campaign Management",
      "Generative Engine (GEO) Ongoing Optimization",
      "Continuous A/B Conversion Rate Testing",
      "Executive Growth & Revenue Dashboards",
    ],
    duration: "Ongoing Partnership",
  },
];
