import { projects, projectsSection } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Text-only project rows (no imagery, by design). */
export function Projects() {
  return (
    <section id="proyectos" aria-labelledby="proyectos-title" className="section-y">
      <div className="container-x">
        <SectionHeading id="proyectos-title" {...projectsSection} />
        <ol className="border-t border-border">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.title} index={i} className="group border-b border-border">
              <article className="grid gap-4 py-8 transition-colors duration-[220ms] hover:bg-surface/60 md:grid-cols-[5rem_1.1fr_1.4fr_auto] md:items-center md:gap-8 md:px-4 md:py-10">
                <span className="font-display text-sm tabular-nums text-accent-ink">{p.index}</span>
                <h3 className="font-display text-3xl font-semibold tracking-tight transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-2 md:text-4xl">
                  {p.title}
                </h3>
                <p className="max-w-[52ch] text-text-secondary">{p.description}</p>
                <ul className="flex flex-wrap gap-2 md:justify-end" aria-label="Tecnologías">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-full bg-mint px-3 py-1 text-sm font-medium text-mint-ink">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
