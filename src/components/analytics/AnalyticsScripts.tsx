"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { GOOGLE_ADS_ID, META_PIXEL_ID } from "@/lib/analytics";

export default function AnalyticsScripts() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setShouldLoad(true);
    };

    window.addEventListener("scroll", handleInteraction, { passive: true, once: true });
    window.addEventListener("pointerdown", handleInteraction, { passive: true, once: true });

    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 2500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("pointerdown", handleInteraction);
    };
  }, []);

  if (!shouldLoad) return null;
  return (
    <>
      {/* Google Analytics is configured once through GTM-T3W5QR6T. */}
      {/* Google Ads Tag */}
      {GOOGLE_ADS_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
            strategy="lazyOnload"
          />
          <Script id="gads-gtag-init" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ADS_ID}');
            `}
          </Script>
        </>
      )}

      {/* Meta Pixel */}
      {META_PIXEL_ID && (
        <Script id="meta-pixel-init" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
