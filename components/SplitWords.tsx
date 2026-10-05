"use client";

import { useRef, type CSSProperties, type ElementType } from "react";
import { useInView } from "./useInView";

type Props = { text: string; as?: ElementType; className?: string; startAt?: number };

/** Word-by-word heading reveal. Plain text stays readable without JS. */
export function SplitWords({ text, as: Tag = "span", className = "", startAt = 0 }: Props) {
  const ref = useRef<HTMLElement>(null);
  useInView(ref, 0.1);
  const words = text.split(" ");
  return (
    <Tag ref={ref} className={`words ${className}`}>
      {words.map((w, i) => (
        <span key={i}>
          <span className="word" style={{ "--i": startAt + i } as CSSProperties}>
            {w}
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
