import type { Metadata } from "next";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { company, whyUs, stats } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "SunguraLabs — a two-person AI-integrated software studio in Dar es Salaam.",
};

export default function AboutPage() {
  return (
    <>
      {/* Dark header */}
      <section className="relative overflow-hidden border-b border-border bg-zinc-950">
        <div className="dot-grid-dark absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-green/10 blur-[80px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-28 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <Eyebrow className="text-zinc-500">Who we are</Eyebrow>
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              A small studio that runs engagements{" "}
              <span className="text-green-accent">end-to-end.</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              {company.name} was founded by two builders combining hands-on
              development with client-facing execution — technical depth paired
              with the operational discipline to take a project from first call
              to post-launch support.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              Based in {company.location}. Remote-friendly across East Africa.
              You talk to the people actually building — no account managers.
            </p>
            <div className="mt-8">
              <ButtonLink href="/team">
                Meet the team
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/ar-vr.jpg"
                alt="AI technology interaction"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="font-mono text-xs text-muted">// our stance</p>
            <blockquote className="mt-4 border-l-2 border-green pl-6">
              <p className="font-display text-2xl font-bold leading-snug text-foreground">
                &ldquo;The biggest blocker to AI adoption for African businesses
                isn&apos;t the model — it&apos;s data fragmented across CRM,
                WhatsApp groups and Excel, with no single source of truth.&rdquo;
              </p>
              <p className="mt-4 text-sm text-muted">
                So we start every build by mapping your real records, then ground the AI in them.
              </p>
            </blockquote>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Our approach"
              title="Grounded AI, delivered at East African cost structures."
              intro="We build on production-grade AI — Claude and OpenAI — not templated no-code bots that plateau at basic FAQs."
            />
          </Reveal>
        </div>
      </Section>

      {/* Differentiators */}
      <Section className="bg-surface">
        <SectionHeading eyebrow="What sets us apart" title="Why clients choose SunguraLabs." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06}>
              <div className="border-l border-border pl-4">
                <h3 className="font-display text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <div className="grid divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0 divide-border border-y border-border">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.07}>
              <div className="py-10 pr-8">
                <p className="font-display text-4xl font-extrabold text-foreground">{s.value}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
