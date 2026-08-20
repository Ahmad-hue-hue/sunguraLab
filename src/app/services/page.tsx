import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Timeline } from "@/components/ui/Timeline";
import { CTABand } from "@/components/sections/CTABand";
import { services, retainer, pricingNote, process } from "@/data/site";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Fixed-price AI services from SunguraLabs: chatbots, internal tools & automation, document processing, content automation, and RAG knowledge assistants — plus custom web and SaaS builds.",
};

export default function ServicesPage() {
  return (
    <>
      {/* header */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="constellation absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <Reveal className="max-w-3xl">
            <Eyebrow>Services &amp; pricing</Eyebrow>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              AI scoped around what generic tools{" "}
              <span className="font-medium text-green">can&apos;t</span> do.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Meta&apos;s free WhatsApp AI agent made basic FAQ bots a commodity.
              Our work starts where that stops — deep integration with your
              inventory, booking or CRM, multi-channel reach, and answers
              grounded in your own data.
            </p>
          </Reveal>
        </div>
      </section>

      {/* service list with full descriptions */}
      <Section>
        <ul className="divide-y divide-border">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.05}>
              <li className="flex gap-6 py-10">
                <span className="index-numeral mt-1.5 w-8 shrink-0 text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      {service.name}
                    </h3>
                    <span className="font-mono text-base font-bold text-green">
                      {service.price}
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <p className="mt-4 flex items-center gap-2 text-sm font-medium text-green">
                    <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gold" />
                    {service.outcome}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* pricing table */}
      <Section className="bg-surface" id="pricing">
        <SectionHeading
          eyebrow="Transparent pricing"
          title="Fixed prices, known upfront."
          intro={pricingNote}
        />
        <Reveal className="mt-12">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border text-sm">
                <th className="py-4 font-display font-semibold text-foreground">
                  Service
                </th>
                <th className="py-4 text-right font-display font-semibold text-foreground">
                  Fixed price
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {services.map((s) => (
                <tr
                  key={s.slug}
                  className="border-b border-border last:border-0"
                >
                  <td className="py-4 text-foreground">{s.name}</td>
                  <td className="py-4 text-right font-semibold text-green">
                    {s.price}
                  </td>
                </tr>
              ))}
              <tr className="border-t border-border">
                <td className="py-4 font-medium text-foreground">
                  {retainer.name}
                  <span className="mt-1 block text-xs font-normal text-muted">
                    {retainer.description}
                  </span>
                </td>
                <td className="py-4 text-right font-semibold text-green">
                  {retainer.price}
                </td>
              </tr>
            </tbody>
          </table>
        </Reveal>
      </Section>

      {/* process */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="How we work"
              title="A working process sized to your project."
              intro="No multi-week discovery sprints — full discovery is only proportionate for much larger builds. At our project sizes, a focused call is the right depth."
            />
            <Timeline items={process} />
          </div>
          <Reveal delay={0.1} className="lg:sticky lg:top-24">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/team.jpg"
                alt="Developers collaborating around a table"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title="Not sure which service fits?"
        subtitle="Tell us your workflow and data sources — we'll point you to the right build and a fixed price."
      />
    </>
  );
}
