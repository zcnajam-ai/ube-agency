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
import AnalyticsEventBridge from "@/components/analytics/AnalyticsEventBridge";
import { COMPANY_INFO } from "@/data/company";

const funnelDisplay = Funnel_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const funnelSans = Funnel_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Environment-aware indexing: allow indexing on production domain by default, noindex ONLY on Vercel preview builds
const isProductionDomain = process.env.VERCEL_ENV !== "preview";

export const metadata: Metadata = {
  metadataBase: new URL("https://unifiedbrandingexperts.com"),
  title: {
    default: "Web Design, Shopify, AI SEO & Digital Marketing Agency | Unified Branding Experts",
    template: "%s | Unified Branding Experts",
  },
  description:
    "Grow your business with expert Shopify development, eCommerce, AI SEO, branding, web design, Google Ads and digital marketing services across the U.S.",
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
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://unifiedbrandingexperts.com",
    siteName: COMPANY_INFO.name,
    title: "Web Design, Shopify, AI SEO & Digital Marketing Agency",
    description:
      "Grow your business with expert Shopify development, eCommerce, AI SEO, branding, web design, Google Ads and digital marketing services across the U.S.",
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
    title: "Web Design, Shopify, AI SEO & Digital Marketing Agency",
    description:
      "Grow your business with expert Shopify development, eCommerce, AI SEO, branding, web design, Google Ads and digital marketing services across the U.S.",
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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T3W5QR6T');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#FAF7F6] text-[#161616] font-body flex flex-col min-h-screen relative overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T3W5QR6T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* GA4, Google Ads, and Meta Pixel Analytics Scripts */}
        <AnalyticsScripts />
        <AnalyticsEventBridge />

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
