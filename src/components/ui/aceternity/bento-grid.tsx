import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Aceternity UI — Bento Grid.
 * Source pattern: ui.aceternity.com/components/bento-grid (MIT).
 * Adapted to the SunguraLabs paper/green palette.
 */
export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto grid grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: ReactNode;
  description?: ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between overflow-hidden rounded-3xl bg-card shadow-md transition duration-200 hover:shadow-[0_18px_50px_-20px_rgba(29,77,43,0.35)]",
        className,
      )}
    >
      {header}
      <div className="p-6 transition duration-200 group-hover/bento:translate-x-1.5">
        {icon}
        <div className="mt-3 font-display text-lg font-semibold text-foreground">
          {title}
        </div>
        <div className="mt-1 text-sm leading-relaxed text-muted">
          {description}
        </div>
      </div>
    </div>
  );
}
