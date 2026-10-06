import { certifications, certsSection } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Split layout: heading stays in view on the left while the list scrolls on the right. */
export function Certifications() {
  return (
    <section id="certificaciones" aria-labelledby="cert-title" className="section-y">
      <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading id="cert-title" className="mb-0" {...certsSection} />
        </div>
        <ul className="border-t border-border">
          {certifications.map((c, i) => (
            <Reveal as="li" key={c.title} index={i % 3} className="group border-b border-border">
              <div className="flex flex-col gap-1 py-6 transition-all duration-[220ms] hover:bg-surface/60 sm:flex-row sm:items-center sm:justify-between sm:gap-8 md:px-4">
                <div>
                  <h3 className="font-display text-xl font-medium tracking-tight transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-2 md:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-text-secondary">{c.issuer}</p>
                </div>
                <span className="font-display text-sm tabular-nums text-accent-ink">{c.year}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
