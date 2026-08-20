import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "gold";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const sizes = {
  md: "h-11 px-6 text-sm",
  lg: "h-[52px] px-8 text-[15px]",
};

const variants: Record<Variant, string> = {
  primary: "bg-green text-background hover:bg-charcoal",
  gold: "bg-gold text-charcoal hover:bg-gold-bright",
  outline:
    "border border-border-strong bg-transparent text-foreground hover:border-green hover:text-green",
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
