import type { Metadata } from "next";
import { Funnel_Display, Funnel_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ClientProjectModal from "@/components/common/ClientProjectModal";
import SchemaOrg from "@/components/seo/SchemaOrg";
import ConciergeProvider from "@/components/concierge/ConciergeProvider";
import AnalyticsScripts from "@/components/analytics/AnalyticsScripts";
import { COMPANY_INFO } from "@/data/company";

const funnelDisplay = Funnel_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const funnelSans = Funnel_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// Environment-aware indexing: allow indexing on production domain by default, noindex ONLY on Vercel preview builds
const isProductionDomain = process.env.VERCEL_ENV !== "preview";

export const metadata: Metadata = {
  metadataBase: new URL("https://unifiedbrandingexperts.com"),
  title: {
    default: "Web Design, Branding & Digital Marketing Agency | Unified Branding Experts",
    template: "%s | Unified Branding Experts",
  },
  description:
    "Unified Branding Experts provides professional web design, branding, eCommerce development, AI SEO, paid advertising, mobile apps and digital growth services for businesses ready to scale.",
  authors: [{ name: "Unified Branding Experts", url: "https://unifiedbrandingexperts.com" }],
  creator: "Unified Branding Experts",
  publisher: "Unified Branding Experts",
  robots: isProductionDomain
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : {
        index: false,
        follow: false,
      },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "https://unifiedbrandingexperts.com/og-default.png", sizes: "16x16", type: "image/png" },
      { url: "https://unifiedbrandingexperts.com/og-default.png", sizes: "32x32", type: "image/png" },
      { url: "https://unifiedbrandingexperts.com/og-default.png", sizes: "48x48", type: "image/png" },
      { url: "https://unifiedbrandingexperts.com/og-default.png", sizes: "96x96", type: "image/png" },
      { url: "https://unifiedbrandingexperts.com/og-default.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "https://unifiedbrandingexperts.com/og-default.png", sizes: "180x180", type: "image/png" },
      { url: "https://unifiedbrandingexperts.com/og-default.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://unifiedbrandingexperts.com",
    siteName: COMPANY_INFO.name,
    title: "Web Design, Branding & Digital Marketing Agency | Unified Branding Experts",
    description:
      "Unified Branding Experts provides professional web design, branding, eCommerce development, AI SEO, paid advertising, mobile apps and digital growth services for businesses ready to scale.",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "Unified Branding Experts - Official Visual Identity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design, Branding & Digital Marketing Agency | Unified Branding Experts",
    description:
      "Unified Branding Experts provides professional web design, branding, eCommerce development, AI SEO, paid advertising, mobile apps and digital growth services for businesses ready to scale.",
    images: ["/og-default.png"],
  },
  alternates: {
    canonical: "https://unifiedbrandingexperts.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${funnelDisplay.variable} ${funnelSans.variable} ${spaceGrotesk.variable} antialiased selection:bg-[#9F8BE7] selection:text-[#161616]`}
    >
      <body className="bg-[#FAF7F6] text-[#161616] font-body flex flex-col min-h-screen relative overflow-x-hidden">
        {/* GA4, Google Ads, and Meta Pixel Analytics Scripts */}
        <AnalyticsScripts />

        {/* Organization & WebSite JSON-LD Schema */}
        <SchemaOrg />

        <SmoothScrollProvider>
          {/* Main Fixed Navigation Pill */}
          <Navbar />

          {/* Page Body */}
          <main className="flex-1 w-full relative z-10">{children}</main>

          {/* Monolithic Footer */}
          <Footer />

          {/* Interactive Project Inquiry Modal with Overlay Scroll */}
          <ClientProjectModal />

          {/* UBE AI Sales & Service Concierge */}
          <ConciergeProvider />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
