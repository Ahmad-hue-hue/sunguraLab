import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Fixed-price AI services from SunguraLabs.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-black pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <p className="eyebrow text-zinc-500">Services</p>
            <h1 className="mt-5 max-w-2xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              AI that does the work generic tools can&apos;t.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-400">
              Each service is deeply integrated with your real systems — not a
              copy-paste bot that plateaus at basic FAQs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services list */}
      <Section>
        <ul className="divide-y divide-zinc-200">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.04}>
              <li className="grid grid-cols-[3rem_1fr] gap-8 py-12">
                <p className="pt-1 text-sm font-medium text-zinc-400">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
                    {service.name}
                  </h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-zinc-500">
                    {service.description}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-green">
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
