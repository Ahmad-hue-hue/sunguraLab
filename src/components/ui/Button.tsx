import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "dark";

const base =
  "group/btn inline-flex items-center justify-center gap-2 font-mono text-xs font-medium uppercase tracking-widest transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/40";

const sizes = {
  md: "h-10 px-5 rounded-md",
  lg: "h-12 px-7 rounded-md",
};

const variants: Record<Variant, string> = {
  primary: "bg-green text-white hover:bg-green-dark",
  outline: "border border-border-strong bg-transparent text-foreground hover:border-green hover:text-green",
  ghost:   "text-muted hover:text-foreground",
  dark:    "border border-white/15 bg-transparent text-white hover:border-green-accent hover:text-green-accent",
};

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: keyof typeof sizes;
};

export function ButtonLink({ className, variant = "primary", size = "md", ...props }: ButtonLinkProps) {
  return (
    <Link className={cn(base, sizes[size], variants[variant], className)} {...props} />
  );
}
