import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { BentoShowcase } from "@/components/sections/BentoShowcase";
import { CTABand } from "@/components/sections/CTABand";
import { services, stats, whyUs, targetClients } from "@/data/site";

export default function HomePage() {
  return (
    <>
      {/* ============ Hero ============ */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <Image
          src="/images/hero-robot.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl py-28">
            <p
              className="rise text-sm font-medium uppercase tracking-[0.2em] text-green"
              style={{ ["--i" as string]: 0 }}
            >
              AI Software Studio — Dar es Salaam
            </p>

            <h1
              className="rise mt-7 font-display text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl lg:text-7xl"
              style={{ ["--i" as string]: 1 }}
            >
              Software that runs on your real data.
            </h1>

            <p
              className="rise mt-7 max-w-md text-lg leading-relaxed text-muted"
              style={{ ["--i" as string]: 2 }}
            >
              We build AI into the systems East African businesses already use.
              Fixed prices, delivered in weeks.
            </p>

            <ul
              className="rise mt-9 space-y-2.5 text-lg text-foreground"
              style={{ ["--i" as string]: 3 }}
            >
              {[
                "Chatbots wired to your inventory, bookings and CRM",
                "Automation, reporting and document processing",
                "Knowledge assistants grounded in your own docs",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gold">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div
              className="rise mt-11 flex items-center gap-7"
              style={{ ["--i" as string]: 4 }}
            >
              <ButtonLink href="/contact" size="lg">
                Start a project
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={18}
                  className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
                />
              </ButtonLink>
              <Link
                href="/services"
                className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                See what we build
              </Link>
            </div>
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
              <span className="font-medium text-green">manual work</span> in
              between.
            </>
          }
          intro="East African businesses move fast on WhatsApp but still run on manual replies and manual data entry. That's exactly where grounded AI pays for itself."
        />
        <div className="mt-14 grid divide-y border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0 divide-border">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.08}>
              <div className="h-full p-8">
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

      {/* ============ Bento showcase (Aceternity) ============ */}
      <Section>
        <SectionHeading
          index="02"
          eyebrow="What we build"
          title="A studio's worth of AI, in one place."
          intro="From conversational AI to custom SaaS — each build grounded in the systems and data you already run on."
        />
        <BentoShowcase />
      </Section>

      {/* ============ Services preview ============ */}
      <Section className="bg-surface">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            index="03"
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
        <ul className="mt-12 divide-y divide-border">
          {services.map((service, i) => (
            <Reveal key={service.slug}>
              <li className="flex gap-6 py-8">
                <span className="index-numeral mt-1 w-8 shrink-0 text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {service.name}
                    </h3>
                    <span className="font-mono text-sm font-bold text-green">
                      {service.price}
                    </span>
                  </div>
                  <p className="mt-2 leading-relaxed text-muted">
                    {service.short}
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-sm font-medium text-green">
                    <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gold" />
                    {service.outcome}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ============ Who we help ============ */}
      <Section>
        <SectionHeading
          index="04"
          eyebrow="Who we help"
          title="Built for East African SMEs and early-stage founders."
        />
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {targetClients.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div>
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
          index="05"
          eyebrow="Why work with us"
          title="Agency-grade AI, without the agency overhead."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div>
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
