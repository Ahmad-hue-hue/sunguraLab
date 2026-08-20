import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Fixed-price AI services from SunguraLabs.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-zinc-950">
        <div className="dot-grid-dark absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-green/10 blur-[80px]" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28 sm:px-8">
          <Reveal className="max-w-2xl">
            <Eyebrow className="text-zinc-500">Services</Eyebrow>
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              AI scoped around what generic tools{" "}
              <span className="text-green-accent">can&apos;t</span> do.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              Our work starts where Meta&apos;s free WhatsApp AI stops — deep
              integration with your inventory, booking system or CRM, and answers
              grounded in your own data.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <ul className="divide-y divide-border">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.04}>
              <li className="grid grid-cols-[2.5rem_1fr] gap-6 py-10">
                <span className="index-numeral font-mono text-xs mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-extrabold text-foreground">
                    {service.name}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <p className="mt-4 font-mono text-xs text-green">
                    <span className="mr-2 opacity-60">›</span>
                    {service.outcome}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
