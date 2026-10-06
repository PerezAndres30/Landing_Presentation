import { projects, projectsSection } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/**
 * Text-only project rows (no imagery, by design).
 * Columns are fixed so title, description and tech line up across every row.
 */
export function Projects() {
  return (
    <section id="proyectos" aria-labelledby="proyectos-title" className="section-y">
      <div className="container-x">
        <SectionHeading id="proyectos-title" {...projectsSection} />
        <ol className="border-t border-border">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.title} index={i} className="group border-b border-border">
              <article className="grid gap-x-8 gap-y-3 py-8 transition-colors duration-[220ms] hover:bg-surface/60 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.3fr)] md:items-start md:px-4 md:py-10 lg:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.5fr)_14rem] lg:gap-x-10">
                <span className="font-display text-sm tabular-nums text-accent-ink md:pt-3">{p.index}</span>
                <h3 className="font-display text-3xl font-semibold tracking-tight transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-2 md:text-4xl">
                  {p.title}
                </h3>
                <p className="max-w-[56ch] text-text-secondary md:pt-1.5">{p.description}</p>
                <ul
                  className="mt-1 flex flex-wrap gap-2 md:col-start-3 lg:col-start-4 lg:row-start-1 lg:mt-0 lg:justify-end lg:pt-1.5"
                  aria-label="Tecnologías"
                >
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
