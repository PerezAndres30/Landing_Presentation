import { Reveal } from "./Reveal";
import { SplitWords } from "./SplitWords";

export function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return (
    <div className="mb-12 max-w-4xl md:mb-16">
      <Reveal as="p" className="eyebrow mb-4">{eyebrow}</Reveal>
      <h2 id={id} className="display-l">
        <SplitWords text={title} />
      </h2>
    </div>
  );
}
