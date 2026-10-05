import type { ReactNode } from "react";

type Props = {
  /** Resting tilt of the traveling card on this stop, in degrees. */
  rot: number;
  /** Fade the card out while it travels from the previous stop to this one. */
  hideBefore?: boolean;
  className?: string;
  /** Static content shown when the floating card is off (mobile, reduced motion, no JS). */
  children: ReactNode;
};

/**
 * A "stop" for the traveling card. It only reserves space and marks where the
 * card rests; the fixed card in <FloatingCard/> measures these elements.
 */
export function CardSlot({ rot, hideBefore = false, className = "", children }: Props) {
  return (
    <div
      data-card-slot
      data-rot={rot}
      data-hide-before={hideBefore ? "true" : undefined}
      className={`relative aspect-[3/4] w-[min(17.5rem,64vw)] ${className}`}
    >
      <div
        className="slot-static absolute inset-0 overflow-hidden rounded-[var(--radius-card)] shadow-[0_30px_60px_-25px_rgba(42,36,55,0.45)] transition-opacity duration-200"
        style={{ transform: `rotate(${rot}deg)` }}
      >
        {children}
      </div>
    </div>
  );
}
