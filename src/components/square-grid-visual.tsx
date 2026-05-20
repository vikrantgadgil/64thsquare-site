"use client";

import { cn } from "@/lib/utils";

const HIGHLIGHTED = new Set([
  9, 10, 18, 19, 27, 28, 36, 37, 45, 46, 54, 55, 12, 13, 21, 22, 30, 31, 39,
  40, 48, 49, 57, 58,
]);

export function SquareGridVisual() {
  return (
    <div className="relative">
      {/* Card container */}
      <div className="rounded-xl border border-border/40 bg-card p-5 shadow-sm">
        {/* Subtle glow behind the grid */}
        <div
          aria-hidden="true"
          className="absolute -inset-8 rounded-full bg-teal/5 blur-3xl"
        />
        <div className="relative grid grid-cols-8 gap-2" aria-hidden="true">
          {Array.from({ length: 64 }, (_, i) => {
            const isHighlighted = HIGHLIGHTED.has(i);
            const isTeal = isHighlighted && i % 2 === 0;
            const isNavy = isHighlighted && i % 2 !== 0;

            return (
              <div
                key={i}
                className={cn(
                  "h-4 w-4 rounded-sm transition-all duration-300 sm:h-5 sm:w-5",
                  isTeal && "bg-teal/60",
                  isNavy && "bg-navy/20",
                  !isHighlighted && "bg-ivory/40",
                )}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
