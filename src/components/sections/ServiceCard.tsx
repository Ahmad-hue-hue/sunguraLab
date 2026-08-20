import { HugeiconsIcon } from "@hugeicons/react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import type { Service } from "@/data/site";

/**
 * Service card with cursor spotlight, a mono index, icon chip, price and
 * outcome line. A gold hairline crowns the card on hover.
 * Used on the Home preview and the Services page.
 */
export function ServiceCard({
  service,
  index,
  showDescription = false,
}: {
  service: Service;
  index?: string;
  showDescription?: boolean;
}) {
  return (
    <SpotlightCard className="flex h-full flex-col">
      {/* hover hairline */}
      <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />

      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-green text-background">
          <HugeiconsIcon icon={service.icon} size={23} strokeWidth={1.8} />
        </span>
        <div className="flex items-center gap-3">
          {index && (
            <span className="label-mono text-muted">{index}</span>
          )}
          <span className="font-mono text-sm font-bold text-green">
            {service.price}
          </span>
        </div>
      </div>

      <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-foreground">
        {service.name}
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
        {showDescription ? service.description : service.short}
      </p>

      <div className="mt-6 flex items-start gap-2.5 border-t border-border pt-4 text-sm text-green">
        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
        <span className="font-medium">{service.outcome}</span>
      </div>
    </SpotlightCard>
  );
}
