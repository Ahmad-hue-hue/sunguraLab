import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "gold";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/40 focus-visible:ring-offset-2";

const sizes = {
  md: "h-11 px-6",
  lg: "h-12 px-7 text-[15px]",
};

const variants: Record<Variant, string> = {
  primary: "bg-green text-white hover:bg-green-600",
  gold: "bg-gold text-charcoal hover:brightness-105",
  outline:
    "border border-border bg-white text-foreground hover:border-green hover:text-green",
  ghost: "text-foreground hover:text-green",
};

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: keyof typeof sizes;
};

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    />
  );
}
