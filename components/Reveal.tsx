"use client";

import { useRef, type CSSProperties, type ElementType, type ReactNode } from "react";
import { useInView } from "./useInView";

type Props = {
  as?: ElementType;
  className?: string;
  index?: number;
  children: ReactNode;
  variant?: "reveal" | "img-reveal";
};

export function Reveal({ as: Tag = "div", className = "", index = 0, variant = "reveal", children }: Props) {
  const ref = useRef<HTMLElement>(null);
  useInView(ref);
  return (
    <Tag ref={ref} className={`${variant} ${className}`} style={{ "--i": index } as CSSProperties}>
      {children}
    </Tag>
  );
}
