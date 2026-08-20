import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { BentoShowcase } from "@/components/sections/BentoShowcase";
import { services, stats, whyUs, targetClients } from "@/data/site";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-zinc-950">
        {/* dot grid */}
        <div className="dot-grid-dark absolute inset-0" />
        {/* green glow top-right */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-green/10 blur-[120px]" />
        {/* gold glow bottom-left */}
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gold/8 blur-[100px]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl py-32">
            {/* badge */}
            <div
              className="rise mb-8 inline-flex items-center gap-2.5 rounded-md border border-green-accent/20 bg-green-accent/8 px-3 py-1.5"
              style={{ ["--i" as string]: 0 }}
            >
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-green-accent" />
              <span className="font-mono text-xs text-green-accent">
                AI Software Studio · Dar es Salaam
              </span>
            </div>

            <h1
              className="rise font-display text-5xl font-extrabold leading-[1] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
              style={{ ["--i" as string]: 1 }}
            >
              Software that runs<br />
              on your{" "}
              <span className="text-green-accent">real data.</span>
            </h1>

            <p
              className="rise mt-7 max-w-lg text-lg leading-relaxed text-zinc-400"
              style={{ ["--i" as string]: 2 }}
            >
              We build AI into the systems East African businesses already use.
              Delivered in weeks, not months.
            </p>

            <ul
              className="rise mt-8 space-y-2 font-mono text-sm text-zinc-500"
              style={{ ["--i" as string]: 3 }}
            >
              {[
                "Chatbots wired to your inventory, bookings and CRM",
                "Automation, reporting and document processing",
                "Knowledge assistants grounded in your own docs",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-green-accent">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div
              className="rise mt-10 flex flex-wrap items-center gap-4"
              style={{ ["--i" as string]: 4 }}
            >
              <ButtonLink href="/contact" size="lg">
                Start a project
                <HugeiconsIcon icon={ArrowRight01Icon} size={15} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
              </ButtonLink>
              <ButtonLink href="/services" variant="dark" size="lg">
                View services
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0 divide-border">
            {stats.map((s, i) => (
              <Reveal key={s.value} delay={i * 0.07}>
                <div className="py-10 pr-8">
                  <p className="font-display text-4xl font-extrabold text-foreground lg:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we build ────────────────────────────────────────── */}
      <Section>
        <SectionHeading
          index="02"
          eyebrow="What we build"
          title="A studio's worth of AI, in one place."
          intro="From conversational AI to custom SaaS — each build grounded in the systems and data you already run on."
        />
        <BentoShowcase />
      </Section>

      {/* ── What we do ───────────────────────────────────────────── */}
      <Section className="bg-surface">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            index="03"
            eyebrow="What we do"
            title="Five ways we put AI to work."
            intro="Fixed-price services built around deep integration — not generic no-code bots."
          />
          <Link
            href="/services"
            className="label-mono hidden shrink-0 items-center gap-2 text-green sm:inline-flex hover:gap-3 transition-all"
          >
            All services
            <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
          </Link>
        </div>

        <ul className="mt-10 divide-y divide-border">
          {services.map((service, i) => (
            <Reveal key={service.slug}>
              <li className="grid grid-cols-[2rem_1fr] gap-6 py-7">
                <span className="index-numeral mt-0.5 font-mono text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {service.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {service.short}
                  </p>
                  <p className="mt-2.5 font-mono text-xs text-green">
                    <span className="mr-2 opacity-60">›</span>
                    {service.outcome}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ── Who we help ──────────────────────────────────────────── */}
      <Section>
        <SectionHeading
          index="04"
          eyebrow="Who we help"
          title="Built for East African SMEs and early-stage founders."
        />
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {targetClients.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="border-l-2 border-green pl-6">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Why us ───────────────────────────────────────────────── */}
      <Section className="bg-surface">
        <SectionHeading
          index="05"
          eyebrow="Why us"
          title="Agency-grade AI, without the agency overhead."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06}>
              <div className="group flex gap-4">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-green/30 bg-green-soft">
                  <HugeiconsIcon icon={CheckmarkCircle02Icon} size={14} className="text-green" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
