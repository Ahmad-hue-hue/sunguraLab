import { HugeiconsIcon } from "@hugeicons/react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import type { Service } from "@/data/site";

/**
 * Service card with cursor spotlight, icon chip, price and outcome line.
 * Used on the Home preview and the Services page.
 */
export function ServiceCard({
  service,
  showDescription = false,
}: {
  service: Service;
  showDescription?: boolean;
}) {
  return (
    <SpotlightCard className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-soft text-green">
          <HugeiconsIcon icon={service.icon} size={24} strokeWidth={1.8} />
        </span>
        <span className="rounded-full border border-gold/40 bg-gold-soft px-3 py-1 text-sm font-semibold text-green">
          {service.price}
        </span>
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
        {service.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {showDescription ? service.description : service.short}
      </p>
      <div className="mt-5 flex items-start gap-2 border-t border-border pt-4 text-sm text-green">
        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-accent" />
        <span className="font-medium">{service.outcome}</span>
      </div>
    </SpotlightCard>
  );
}
