import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { company, whyUs, stats } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "SunguraLabs — a two-person AI-integrated software studio in Dar es Salaam.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-black pb-0 pt-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <p className="eyebrow text-zinc-500">Who we are</p>
            <h1 className="mt-5 max-w-2xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              A studio that runs every engagement end&#8209;to&#8209;end.
            </h1>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="mt-16">
          <div className="relative aspect-[21/9] w-full overflow-hidden">
            <Image
              src="/images/about-office.jpg"
              alt="Modern office workspace"
              fill
              sizes="100vw"
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>
        </Reveal>
      </section>

      {/* Mission */}
      <Section>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <p className="text-2xl font-semibold leading-snug tracking-tight text-zinc-900 sm:text-3xl">
              {company.name} was founded by two builders combining technical depth with
              client-facing execution — taking every project from first call to post-launch.
            </p>
            <p className="mt-6 leading-relaxed text-zinc-500">
              Based in {company.location}. Remote-friendly across East Africa. Because we stay
              small, you always talk to the people actually building.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline"
            >
              Start a project <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="border-l-[3px] border-zinc-900 pl-6">
              <p className="text-xl font-semibold leading-snug tracking-tight text-zinc-900">
                &ldquo;The biggest blocker to AI adoption isn&apos;t the model — it&apos;s data
                fragmented across CRM, WhatsApp groups and Excel, with no single source
                of truth.&rdquo;
              </p>
              <p className="mt-4 text-sm text-zinc-500">
                So we map your real records first, then ground the AI in them.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </Section>

      {/* Stats */}
      <section className="border-y border-zinc-200 bg-surface">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0 divide-zinc-200">
            {stats.map((s, i) => (
              <Reveal key={s.value} delay={i * 0.08}>
                <div className="py-12 sm:px-8">
                  <p className="text-5xl font-bold tracking-tight text-zinc-900">{s.value}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <Section>
        <SectionHeading
          eyebrow="What sets us apart"
          title="Why clients choose SunguraLabs."
        />
        <div className="mt-14 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
