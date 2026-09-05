"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";
import ConciergeTrigger from "./ConciergeTrigger";

const ConciergeChat = dynamic(() => import("./ConciergeChat"), {
  ssr: false,
});

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
  const [hasOpened, setHasOpened] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isClient = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 2500);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!isClient || !mounted) return null;

  const handleToggle = () => {
    if (!hasOpened) setHasOpened(true);
    setIsOpen((prev) => !prev);
  };

  return createPortal(
    <>
      <ConciergeTrigger isOpen={isOpen} onToggle={handleToggle} />
      {hasOpened && <ConciergeChat isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>,
    document.body
  );
}
