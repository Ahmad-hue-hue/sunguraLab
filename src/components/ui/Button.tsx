import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white";

const base = "group/btn inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const sizes = {
  sm: "h-9 px-5 text-sm",
  md: "h-11 px-7",
  lg: "h-13 px-9 text-base",
};

const variants: Record<Variant, string> = {
  primary:   "bg-zinc-900 text-white hover:bg-zinc-700 focus-visible:ring-zinc-900",
  secondary: "bg-white text-zinc-900 hover:bg-zinc-100 focus-visible:ring-zinc-900",
  outline:   "border border-zinc-300 bg-transparent text-zinc-900 hover:border-zinc-900 focus-visible:ring-zinc-900",
  ghost:     "text-zinc-600 hover:text-zinc-900",
  white:     "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 focus-visible:ring-white",
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
