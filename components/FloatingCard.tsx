"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Stop = { x: number; top: number; w: number; h: number; rot: number; A: number; hideBefore: boolean };

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (t: number) => t * t * (3 - 2 * t);

/**
 * One card that follows you down the page. It rests on each <CardSlot/>, and
 * between stops it glides, tilts and flips like a playing card (photo <-> logo),
 * passing edge-on halfway. Position is written straight to the DOM from a
 * rAF-throttled scroll handler (transform + opacity only).
 * Active only on wide screens without reduced-motion; elsewhere the static
 * content inside each slot is shown.
 */
export function FloatingCard() {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o = outer.current;
    const c = inner.current;
    if (!o || !c) return;
    const mq = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    const root = document.documentElement;
    let stops: Stop[] = [];
    let baseW = 1;
    let baseH = 1;
    let raf = 0;

    const measure = () => {
      if (!mq.matches) return;
      const vh = window.innerHeight;
      const sy = window.scrollY;
      void sy;
      // Layout position via offset* so running CSS animations/transforms never skew the measurement.
      const layoutPos = (n: HTMLElement) => {
        let x = 0;
        let y = 0;
        let el: HTMLElement | null = n;
        while (el) {
          x += el.offsetLeft;
          y += el.offsetTop;
          el = el.offsetParent as HTMLElement | null;
        }
        return { x, y };
      };
      const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-card-slot]"));
      stops = nodes
        .filter((n) => n.offsetWidth > 0)
        .map((n) => {
          const { x, y: top } = layoutPos(n);
          const w = n.offsetWidth;
          const h = n.offsetHeight;
          return {
            x,
            top,
            w,
            h,
            rot: parseFloat(n.dataset.rot ?? "0"),
            A: Math.max(0, top + h / 2 - vh / 2),
            hideBefore: n.dataset.hideBefore === "true",
          };
        });
      for (let i = 1; i < stops.length; i++) stops[i].A = Math.max(stops[i].A, stops[i - 1].A + 1);
      if (stops.length) {
        baseW = stops[0].w;
        baseH = stops[0].h;
        o.style.width = `${baseW}px`;
        o.style.height = `${baseH}px`;
      }
      render();
    };

    const place = (x: number, y: number, w: number, h: number, rz: number, rx: number, ry: number, op: number) => {
      const cx = x + w / 2;
      const cy = y + h / 2;
      const s = w / baseW;
      c.style.transform =
        `translate3d(${cx - baseW / 2}px, ${cy - baseH / 2}px, 0) perspective(1400px) ` +
        `rotateZ(${rz}deg) rotateX(${rx}deg) rotateY(${ry}deg) scale(${s})`;
      o.style.opacity = String(op);
      o.style.visibility = op <= 0.01 ? "hidden" : "visible";
    };

    const render = () => {
      raf = 0;
      if (!mq.matches || stops.length === 0) return;
      const s = window.scrollY;
      const last = stops.length - 1;
      const first = stops[0];

      if (s <= first.A) {
        place(first.x, first.top - s, first.w, first.h, first.rot, 0, 0, 1);
        return;
      }
      if (s >= stops[last].A) {
        const L = stops[last];
        place(L.x, L.top - s, L.w, L.h, L.rot, 0, 180 * last, 1);
        return;
      }
      let i = 0;
      while (i < last - 1 && s >= stops[i + 1].A) i++;
      const a = stops[i];
      const b = stops[i + 1];
      const t = (s - a.A) / (b.A - a.A);
      const tt = smooth(clamp((t - 0.08) / 0.84)); // hold at both ends, move in the middle

      const ya = a.top - a.A;
      const yb = b.top - b.A;
      let op = 1;
      if (b.hideBefore) {
        op = t < 0.06 ? 1 : t < 0.2 ? 1 - (t - 0.06) / 0.14 : t < 0.8 ? 0 : t < 0.94 ? (t - 0.8) / 0.14 : 1;
      }
      place(
        lerp(a.x, b.x, tt),
        lerp(ya, yb, tt),
        lerp(a.w, b.w, tt),
        lerp(a.h, b.h, tt),
        lerp(a.rot, b.rot, tt),
        12 * Math.sin(Math.PI * tt),
        180 * (i + tt),
        op,
      );
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };

    const activate = () => {
      if (mq.matches) {
        root.classList.add("card-on");
        o.style.display = "block";
        measure();
      } else {
        root.classList.remove("card-on");
        o.style.display = "none";
      }
    };

    activate();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    mq.addEventListener("change", activate);
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    document.fonts?.ready.then(measure);
    const t = window.setTimeout(measure, 600);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
      mq.removeEventListener("change", activate);
      ro.disconnect();
      window.clearTimeout(t);
      if (raf) cancelAnimationFrame(raf);
      root.classList.remove("card-on");
    };
  }, []);

  const face =
    "absolute inset-0 overflow-hidden rounded-[var(--radius-card)] [backface-visibility:hidden] shadow-[0_30px_60px_-25px_rgba(42,36,55,0.5)]";

  return (
    <div
      ref={outer}
      aria-hidden="true"
      style={{ display: "none", "--i": 2 } as React.CSSProperties}
      className="hero-in pointer-events-none fixed left-0 top-0 z-30"
    >
      <div ref={inner} className="relative size-full will-change-transform [transform-style:preserve-3d]">
        {/* front: photo */}
        <div className={`${face} border-4 border-surface bg-surface-2`}>
          <Image src="/img/yo.jpg" alt="" fill sizes="280px" loading="eager" className="object-cover" />
        </div>
        {/* back: logo */}
        <div className={`${face} flex items-center justify-center bg-ink p-[12%]`} style={{ transform: "rotateY(180deg)" }}>
          <Image src="/img/logo.png" alt="" width={677} height={369} loading="eager" className="h-auto w-full object-contain" />
        </div>
      </div>
    </div>
  );
}
