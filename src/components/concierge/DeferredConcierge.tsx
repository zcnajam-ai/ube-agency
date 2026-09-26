"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ConciergeProvider = dynamic(() => import("./ConciergeProvider"), {
  ssr: false,
});

export default function DeferredConcierge() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const activate = () => setReady(true);
    const interactionEvents: Array<keyof WindowEventMap> = ["pointerdown", "keydown", "touchstart"];

    interactionEvents.forEach((eventName) => {
      window.addEventListener(eventName, activate, { once: true, passive: true });
    });

    const idleCallback = window.requestIdleCallback?.(activate, { timeout: 5000 });
    const fallbackTimer = idleCallback === undefined ? window.setTimeout(activate, 5000) : undefined;

    return () => {
      interactionEvents.forEach((eventName) => window.removeEventListener(eventName, activate));
      if (idleCallback !== undefined) window.cancelIdleCallback?.(idleCallback);
      if (fallbackTimer !== undefined) window.clearTimeout(fallbackTimer);
    };
  }, []);

  return ready ? <ConciergeProvider /> : null;
}
