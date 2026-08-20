import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTABand } from "@/components/sections/CTABand";
import {
  company,
  services,
  stats,
  whyUs,
  tools,
  targetClients,
} from "@/data/site";

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        <div className="constellation absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-green-soft blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>AI-integrated software · Dar es Salaam</Eyebrow>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI software that runs on{" "}
              <span className="text-green">your real data</span> — priced for
              your reality.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {company.name} builds chatbots, automation, and knowledge
              assistants wired into the systems your business already uses — for
              East African SMEs and founders, at fixed prices up to 80% below
              global agency rates.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Start a project
                <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
              </ButtonLink>
              <ButtonLink href="/services" variant="outline" size="lg">
                See what we build
              </ButtonLink>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {["Fixed-price, no hourly billing", "Delivered in 1–4 weeks", "Grounded in your records"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={18}
                      className="text-green"
                    />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface shadow-xl">
              <Image
                src="/images/hero-vr.jpg"
                alt="A robotic hand reaching out — AI meeting human work"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            {/* floating stat chip */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-white p-4 shadow-lg sm:block">
              <p className="font-display text-2xl font-bold text-green">391%</p>
              <p className="max-w-[10rem] text-xs text-muted">
                more conversions when you reply within a minute
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Tools strip ---------- */}
      <section className="border-y border-border bg-surface py-8">
        <div className="mx-auto max-w-6xl px-5">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            The production stack we build with
          </p>
          <Marquee items={tools} />
        </div>
      </section>

      {/* ---------- Problem / stats ---------- */}
      <Section>
        <SectionHeading
          eyebrow="Why it matters"
          title="The gap isn't ambition — it's the manual work in between."
          intro="East African businesses move fast on WhatsApp but still run on manual replies and manual data entry. That's exactly where grounded AI pays for itself."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-white p-7">
                <p className="font-display text-4xl font-extrabold text-green">
                  {s.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Services preview ---------- */}
      <Section className="bg-surface">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Five ways we put AI to work — plus custom builds."
            intro="Productized, fixed-price services scoped for what generic AI tools can't do: deep integration with your actual systems."
          />
          <Link
            href="/services"
            className="hidden shrink-0 items-center gap-1 text-sm font-medium text-green hover:gap-2 sm:inline-flex"
          >
            All services & pricing
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Who we help ---------- */}
      <Section>
        <SectionHeading
          eyebrow="Who we help"
          title="Built for East African SMEs and early-stage founders."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {targetClients.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-white p-8">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Why us ---------- */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Why work with us"
          title="Agency-grade AI, without the agency overhead."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-white p-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green text-white">
                  <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} />
                </span>
                <h3 className="mt-4 font-display font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
