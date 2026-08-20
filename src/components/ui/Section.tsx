import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <span
      className={cn(
        "label-mono inline-flex items-center gap-2.5 font-bold",
        onDark ? "text-gold-bright" : "text-green",
      )}
    >
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  index,
  title,
  intro,
  align = "left",
  onDark = false,
}: {
  eyebrow?: string;
  /** Magazine-style section index, e.g. "01". */
  index?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <div
        className={cn(
          "flex items-center gap-4",
          align === "center" && "justify-center",
        )}
      >
        {index && (
          <span className="index-numeral text-4xl sm:text-5xl">{index}</span>
        )}
        {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
      </div>
      <h2
        className={cn(
          "mt-5 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.01em] sm:text-[2.75rem]",
          onDark ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            onDark ? "text-white/70" : "text-muted",
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
