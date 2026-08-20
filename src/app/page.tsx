import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { BentoShowcase } from "@/components/sections/BentoShowcase";
import { services, stats, whyUs, targetClients } from "@/data/site";

export default function HomePage() {
  return (
    <>
      {/* ─── Hero — Tesla style ───────────────────────────────────── */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-black pb-24 pt-40">
        <Image
          src="/images/hero-robot.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-10">
          <p className="rise eyebrow text-zinc-400" style={{ ["--i" as string]: 0 }}>
            AI Software Studio — Dar es Salaam
          </p>
          <h1
            className="rise mt-5 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ ["--i" as string]: 1 }}
          >
            Software that runs on your real data.
          </h1>
          <p
            className="rise mt-6 max-w-lg text-lg text-zinc-300"
            style={{ ["--i" as string]: 2 }}
          >
            We build AI into the systems East African businesses already use — fixed
            prices, delivered in weeks.
          </p>
          <div className="rise mt-10 flex flex-wrap gap-4" style={{ ["--i" as string]: 3 }}>
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Get started
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Stats — Apple horizontal bar ────────────────────────── */}
      <section className="border-y border-zinc-200 bg-white">
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

      {/* ─── What we build ───────────────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="What we build"
          title="A full suite of AI, in one studio."
          intro="From conversational AI to custom SaaS — each build grounded in the systems you already run."
        />
        <BentoShowcase />
      </Section>

      {/* ─── Services — clean list ────────────────────────────────── */}
      <section className="border-y border-zinc-200 bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow text-zinc-500">What we do</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                Five ways we put AI to work.
              </h2>
            </div>
            <Link
              href="/services"
              className="hidden items-center gap-1.5 text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline sm:flex"
            >
              All services
              <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
            </Link>
          </div>

          <ul className="mt-14 divide-y divide-zinc-200">
            {services.map((service, i) => (
              <Reveal key={service.slug}>
                <li className="group flex items-baseline gap-8 py-8">
                  <span className="w-6 shrink-0 text-sm font-medium text-zinc-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-zinc-900">{service.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">{service.short}</p>
                  </div>
                  <p className="hidden text-sm text-green sm:block">{service.outcome}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Who we help ─────────────────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Who we help"
          title="Built for East African SMEs and early-stage founders."
        />
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {targetClients.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900">{c.title}</h3>
                <p className="mt-4 leading-relaxed text-zinc-500">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ─── Why us — Nike grid ──────────────────────────────────── */}
      <section className="bg-zinc-900 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <p className="eyebrow text-zinc-500">Why us</p>
          <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Agency-grade AI. Without the agency overhead.
          </h2>
          <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.07}>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
