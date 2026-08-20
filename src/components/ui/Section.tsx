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
    <section id={id} className={cn("py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("label-mono inline-flex items-center gap-2 text-green", className)}>
      <span className="h-px w-4 bg-green/50" />
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
}: {
  eyebrow?: string;
  index?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
        {index && <span className="index-numeral font-mono text-3xl">{index}</span>}
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      </div>
      <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-muted">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
