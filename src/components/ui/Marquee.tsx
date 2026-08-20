"use client";

import { cn } from "@/lib/utils";

/**
 * Infinite horizontal marquee (Aceternity "infinite moving cards" pattern),
 * built with a duplicated track and a CSS keyframe. Pauses on hover.
 */
export function Marquee({
  items,
  className,
  duration = 32,
}: {
  items: string[];
  className?: string;
  duration?: number;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <div
        className="flex w-max items-center gap-8 animate-scroll-x group-hover:[animation-play-state:paused]"
        style={{ ["--duration" as string]: `${duration}s` }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-3 whitespace-nowrap font-mono text-sm font-bold uppercase tracking-wider text-foreground"
          >
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
