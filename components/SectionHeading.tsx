import { Reveal } from "./Reveal";
import { SplitWords } from "./SplitWords";

type Props = { eyebrow: string; title: string; id: string; className?: string };

export function SectionHeading({ eyebrow, title, id, className = "mb-10 md:mb-14" }: Props) {
  return (
    <div className={`max-w-4xl ${className}`}>
      <Reveal as="p" className="eyebrow mb-4">{eyebrow}</Reveal>
      <h2 id={id} className="display-l">
        <SplitWords text={title} />
      </h2>
    </div>
  );
}
