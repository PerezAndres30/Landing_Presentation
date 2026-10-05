import Image from "next/image";
import { events, eventsSection } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Events() {
  return (
    <section id="eventos" aria-labelledby="eventos-title" className="section-y">
      <div className="container-x">
        <SectionHeading id="eventos-title" {...eventsSection} />
        <div className="grid gap-6">
          {events.map((e) => (
            <article key={e.title} className="group grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end md:gap-10">
              <Reveal variant="img-reveal" className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface">
                <Image
                  src={e.image.src}
                  alt={e.image.alt}
                  width={e.image.w}
                  height={e.image.h}
                  sizes="(min-width: 768px) 60vw, 100vw"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105"
                />
              </Reveal>
              <Reveal index={2} className="pb-2">
                <span className="eyebrow">{e.tag}</span>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">{e.title}</h3>
                <p className="mt-4 max-w-[48ch] text-text-secondary">{e.description}</p>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
