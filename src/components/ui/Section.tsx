import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

export function Section({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("py-24 sm:py-32", className)}>
      <div className="mx-auto max-w-6xl px-6 sm:px-10">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("eyebrow", className)}>{children}</span>
  );
}

export function SectionHeading({
  eyebrow, index, title, intro, align = "left",
}: {
  eyebrow?: string;
  index?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn(align === "center" && "text-center")}>
      {eyebrow && (
        <p className={cn("eyebrow mb-4", align === "center" && "justify-center")}>{eyebrow}</p>
      )}
      <h2 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-500">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
