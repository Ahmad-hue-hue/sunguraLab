import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { LogoMark } from "@/components/ui/Logo";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";

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
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-charcoal px-6 py-20 text-center sm:px-12">
        <BackgroundBeams />
        <div className="constellation absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-green/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />
        <Reveal className="relative">
          <div className="mb-7 flex justify-center">
            <LogoMark size={52} />
          </div>
          <span className="label-mono font-bold text-gold-bright">
            Let&apos;s build
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-[2rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-[2.75rem]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/65">{subtitle}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="gold" size="lg">
              Talk to us
            </ButtonLink>
            <ButtonLink
              href="/services"
              size="lg"
              className="border border-white/20 bg-transparent text-white hover:border-gold-bright hover:text-gold-bright"
            >
              Explore services
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
