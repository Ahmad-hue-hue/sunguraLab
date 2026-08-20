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
        className="flex w-max gap-3 animate-scroll-x group-hover:[animation-play-state:paused]"
        style={{ ["--duration" as string]: `${duration}s` }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-foreground shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green-accent" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
