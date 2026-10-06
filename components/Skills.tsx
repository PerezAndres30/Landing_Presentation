import Image from "next/image";
import { skills, skillsSection } from "@/lib/content";
import { CardSlot } from "./CardSlot";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="lenguajes" aria-labelledby="lenguajes-title" className="section-y">
      <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-center lg:gap-16">
        <div>
        <SectionHeading id="lenguajes-title" {...skillsSection} />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
          {skills.map((s, i) => (
            <Reveal as="li" key={s.name} index={i % 4}>
              <div className="group flex h-full flex-col items-center justify-center gap-4 rounded-[var(--radius-card)] border border-border bg-surface p-5 transition-all duration-[220ms] hover:-translate-y-1.5 hover:border-accent hover:bg-surface-2 md:p-6">
                <div className="flex h-24 items-center justify-center md:h-28">
                  <Image
                    src={s.src}
                    alt=""
                    width={s.w}
                    height={s.h}
                    sizes="112px"
                    className="max-h-full w-auto max-w-[8rem] object-contain transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:scale-110"
                  />
                </div>
                <span className="font-display text-lg font-medium tracking-tight">{s.name}</span>
              </div>
            </Reveal>
          ))}
        </ul>
        </div>
        <CardSlot rot={-6} className="hidden justify-self-center lg:block">
          <div className="flex size-full items-center justify-center bg-ink p-[12%]">
            <Image src="/img/logo.png" alt="Logotipo de Andrés Pérez" width={677} height={369} className="h-auto w-full object-contain" />
          </div>
        </CardSlot>
      </div>
    </section>
  );
}
