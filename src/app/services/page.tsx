import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/data/site";

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
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      {service.name}
                    </h3>
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


</>
  );
}
