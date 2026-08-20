import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { LogoMark } from "@/components/ui/Logo";

/**
 * Dark green/charcoal call-to-action band — the one place the site leans into
 * the logo's dramatic dark look, with a gold accent.
 */
export function CTABand({
  title = "Let's build something that runs on your real data.",
  subtitle = "Book a free 30–45 minute scoping call. Fixed-price quote, no obligation.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-charcoal px-6 py-16 text-center sm:px-12">
        <div className="constellation absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-green/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />
        <Reveal className="relative">
          <div className="mb-6 flex justify-center">
            <LogoMark size={48} />
          </div>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">{subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="gold" size="lg">
              Talk to us
            </ButtonLink>
            <ButtonLink
              href="/services"
              size="lg"
              className="border border-white/20 bg-transparent text-white hover:border-gold hover:text-gold"
            >
              Explore services
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
