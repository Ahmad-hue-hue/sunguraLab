import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { LogoMark } from "@/components/ui/Logo";
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
      {/* ============ Hero ============ */}
      <section className="relative overflow-hidden">
        <div className="constellation absolute inset-0 opacity-70" />
        <div className="pointer-events-none absolute right-[-10%] top-[-10%] h-[32rem] w-[32rem] rounded-full bg-green-soft/60 blur-3xl" />
        <LogoMark
          size={520}
          className="pointer-events-none absolute -right-40 top-10 hidden opacity-[0.05] lg:block"
        />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          {/* run-of-show header row */}
          <div className="flex items-center justify-between border-b border-border py-4">
            <span className="label-mono rise font-bold text-green" style={{ ["--i" as string]: 0 }}>
              AI-Integrated Software Studio
            </span>
            <span className="label-mono rise hidden text-muted sm:block" style={{ ["--i" as string]: 1 }}>
              06°49′S · 39°17′E — Dar es Salaam
            </span>
          </div>

          <div className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-12">
            {/* headline column */}
            <div className="lg:col-span-7">
              <h1
                className="rise font-display text-5xl font-semibold leading-[0.98] tracking-[-0.02em] text-foreground sm:text-6xl lg:text-[5rem]"
                style={{ ["--i" as string]: 2 }}
              >
                AI software that runs on{" "}
                <em className="font-light italic text-green">your real data</em>
                <span className="text-gold">.</span>
              </h1>
              <p
                className="rise mt-8 max-w-xl text-lg leading-relaxed text-muted"
                style={{ ["--i" as string]: 4 }}
              >
                {company.name} builds chatbots, automation and knowledge
                assistants wired into the systems your business already uses — for
                East African SMEs and founders, at fixed prices up to{" "}
                <span className="font-semibold text-foreground">
                  80% below global agency rates
                </span>
                .
              </p>
              <div
                className="rise mt-9 flex flex-col gap-3 sm:flex-row"
                style={{ ["--i" as string]: 5 }}
              >
                <ButtonLink href="/contact" size="lg">
                  Start a project
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={18}
                    className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
                  />
                </ButtonLink>
                <ButtonLink href="/services" variant="outline" size="lg">
                  See what we build
                </ButtonLink>
              </div>
              <ul
                className="rise mt-10 flex flex-wrap gap-x-6 gap-y-2"
                style={{ ["--i" as string]: 6 }}
              >
                {[
                  "Fixed-price, no hourly billing",
                  "Delivered in 1–4 weeks",
                  "Grounded in your records",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-muted"
                  >
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={16}
                      className="text-green"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* image column */}
            <div
              className="rise lg:col-span-5"
              style={{ ["--i" as string]: 3 }}
            >
              <figure className="relative">
                {/* gold frame offset */}
                <div className="absolute -inset-3 -z-10 rounded-2xl border border-gold/40" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border-strong bg-surface">
                  <Image
                    src="/images/hero-vr.jpg"
                    alt="A robotic hand reaching out — AI meeting human work"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                    <span className="label-mono text-white/90">Fig. 01</span>
                    <span className="label-mono text-white/90">
                      Human × Machine
                    </span>
                  </figcaption>
                </div>
                {/* floating stat chip */}
                <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border-strong bg-card p-4 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)] sm:block">
                  <p className="font-display text-3xl font-semibold text-green">
                    391%
                  </p>
                  <p className="mt-1 max-w-[10rem] font-mono text-[11px] leading-tight text-muted">
                    more conversions when you reply within a minute
                  </p>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Tools strip ============ */}
      <section className="border-y border-border-strong bg-charcoal py-6 text-white">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 sm:px-8">
          <span className="label-mono hidden shrink-0 font-bold text-gold-bright sm:block">
            Built with
          </span>
          <div className="min-w-0 flex-1 [&_*]:!text-white">
            <Marquee items={tools} />
          </div>
        </div>
      </section>

      {/* ============ Problem / stats ============ */}
      <Section>
        <SectionHeading
          index="01"
          eyebrow="Why it matters"
          title={
            <>
              The gap isn&apos;t ambition — it&apos;s the{" "}
              <em className="font-light italic text-green">manual work</em> in
              between.
            </>
          }
          intro="East African businesses move fast on WhatsApp but still run on manual replies and manual data entry. That's exactly where grounded AI pays for itself."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.08}>
              <div className="h-full bg-card p-8">
                <p className="font-display text-5xl font-semibold text-green">
                  {s.value}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============ Services preview ============ */}
      <Section className="bg-surface">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            index="02"
            eyebrow="What we do"
            title="Five ways we put AI to work — plus custom builds."
            intro="Productized, fixed-price services scoped for what generic AI tools can't do: deep integration with your actual systems."
          />
          <Link
            href="/services"
            className="group hidden shrink-0 items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-green sm:inline-flex"
          >
            All services &amp; pricing
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
              <ServiceCard
                service={service}
                index={String(i + 1).padStart(2, "0")}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============ Who we help ============ */}
      <Section>
        <SectionHeading
          index="03"
          eyebrow="Who we help"
          title="Built for East African SMEs and early-stage founders."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {targetClients.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="group h-full rounded-xl border border-border bg-card p-8 transition-colors hover:border-green/40">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============ Why us ============ */}
      <Section className="bg-surface">
        <SectionHeading
          index="04"
          eyebrow="Why work with us"
          title="Agency-grade AI, without the agency overhead."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-xl border border-border bg-card p-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green text-background">
                  <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
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
