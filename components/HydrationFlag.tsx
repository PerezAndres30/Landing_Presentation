"use client";

import { useEffect } from "react";

/** Tells the head script that React took over, so hidden-until-reveal styles may stay. */
export function HydrationFlag() {
  useEffect(() => {
    (window as unknown as { __hydrated?: boolean }).__hydrated = true;
  }, []);
  return null;
}
