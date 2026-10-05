"use client";

import { useEffect, type RefObject } from "react";

/**
 * Adds `.in` once the element is near the viewport. Uses IntersectionObserver
 * plus a scroll/resize rect check as fallback, so content can never stay hidden.
 */
export function useInView(ref: RefObject<HTMLElement | null>, threshold = 0.15) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      el.classList.add("in");
      cleanup();
    };
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * (1 - threshold * 0.5) && r.bottom > 0) reveal();
    };
    const io =
      "IntersectionObserver" in window
        ? new IntersectionObserver(([e]) => e.isIntersecting && reveal(), { threshold })
        : null;
    io?.observe(el);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    check();
    const t = window.setTimeout(check, 400);
    function cleanup() {
      io?.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      window.clearTimeout(t);
    }
    return cleanup;
  }, [ref, threshold]);
}
