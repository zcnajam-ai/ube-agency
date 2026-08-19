"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import ConciergeTrigger from "./ConciergeTrigger";
import ConciergeChat from "./ConciergeChat";

function subscribe(callback: () => void) {
  return () => {};
}

function getSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export default function ConciergeProvider() {
  const [isOpen, setIsOpen] = useState(false);
  const isClient = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isClient) return null;

  return createPortal(
    <>
      <ConciergeTrigger isOpen={isOpen} onToggle={() => setIsOpen((prev) => !prev)} />
      <ConciergeChat isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>,
    document.body
  );
}
