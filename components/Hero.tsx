import Image from "next/image";
import { hero } from "@/lib/content";
import { CardSlot } from "./CardSlot";

const delay = (i: number) => ({ "--i": i }) as React.CSSProperties;

/**
 * Hero: one compact block. Name, tagline, description and CTA are stacked and
 * left-aligned; the traveling card (see FloatingCard) rests right beside them.
 * All copy is visible on first paint; the entrance is a CSS animation with
 * `backwards` fill.
 */
export function Hero() {
  return (
    <section id="sobre-mi" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-accent/25 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 bottom-0 size-[28rem] rounded-full bg-mint blur-3xl" />

      <div className="container-x relative flex min-h-svh items-center pb-14 pt-28 lg:pt-24">
        <div className="mx-auto grid w-full max-w-[68rem] items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="order-1 flex flex-col">
            <p className="eyebrow hero-in" style={delay(0)}>
              {hero.greeting}
            </p>

            <h1 id="hero-title" className="display-hero mt-4 flex flex-col">
              {hero.titleLines.map((line, i) => (
                <span key={line} className="hero-in block" style={delay(1 + i)}>
                  {line}
                </span>
              ))}
            </h1>

            <p
              className="hero-in mt-6 font-display text-[clamp(1.25rem,2.4vw,1.875rem)] font-medium leading-tight tracking-tight text-accent-ink"
              style={delay(3)}
            >
              {hero.tagline}
            </p>

            <p className="hero-in mt-4 max-w-[30rem] text-base leading-relaxed text-text-secondary sm:text-lg" style={delay(4)}>
              {hero.description}
            </p>

            <a
              href={hero.cta.href}
              style={delay(5)}
              className="hero-in mt-7 inline-flex min-h-12 items-center gap-2 self-start rounded-full bg-ink px-7 font-semibold text-background transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-on-accent hover:shadow-[0_10px_28px_-10px_rgba(255,122,89,0.7)] active:translate-y-0"
            >
              {hero.cta.label}
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="order-2 justify-self-center lg:justify-self-end">
            <CardSlot rot={5}>
              <div className="relative size-full border-4 border-surface bg-surface-2">
                <Image src="/img/yo.jpg" alt={hero.photoAlt} fill priority sizes="280px" className="object-cover" />
              </div>
            </CardSlot>
          </div>
        </div>
      </div>
    </section>
  );
}