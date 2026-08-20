import { HugeiconsIcon } from "@hugeicons/react";
import { socials } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Renders the brand social icon links (WhatsApp, Facebook, X, Instagram, LinkedIn).
 * Links are placeholders (href "#") until real URLs are provided.
 */
export function SocialLinks({
  className,
  onDark = false,
  size = 20,
}: {
  className?: string;
  onDark?: boolean;
  size?: number;
}) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            aria-label={s.label}
            title={s.label}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-200",
              onDark
                ? "border-white/15 text-white/80 hover:border-gold hover:text-gold"
                : "border-border text-muted hover:border-green hover:text-green",
            )}
          >
            <HugeiconsIcon icon={s.icon} size={size} strokeWidth={1.8} />
          </a>
        </li>
      ))}
    </ul>
  );
}
