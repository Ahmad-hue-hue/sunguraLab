import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, Location01Icon, Clock01Icon } from "@hugeicons/core-free-icons";
import { Reveal } from "@/components/motion/Reveal";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { company, process } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with SunguraLabs.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero — full-bleed contact image ────────────────────────── */}
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-black pb-20 pt-40">
        {/* Background image */}
        <Image
          src="/images/contact-meeting.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        {/* Grain */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-overlay"
          style={{
            opacity: 0.4,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "240px 240px",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-10">
          <Reveal>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-zinc-500">
              Contact
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Let&apos;s scope your project.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400">
              A free 30–45 min call to cover your workflow, data sources, and what you
              want to automate. You leave with a fixed-price quote.
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-zinc-900 transition hover:bg-zinc-200"
            >
              <HugeiconsIcon icon={Mail01Icon} size={16} />
              {company.email}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Contact details ─────────────────────────────────────────── */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-16 sm:grid-cols-3">
            <Reveal>
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 text-zinc-600">
                  <HugeiconsIcon icon={Mail01Icon} size={18} />
                </div>
                <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-zinc-400">
                  Email
                </p>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-1 block font-semibold text-zinc-900 transition hover:text-green-700"
                >
                  {company.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.07}>
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 text-zinc-600">
                  <HugeiconsIcon icon={Location01Icon} size={18} />
                </div>
                <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-zinc-400">
                  Location
                </p>
                <p className="mt-1 font-semibold text-zinc-900">{company.location}</p>
                <p className="text-sm text-zinc-500">{company.locationNote}</p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 text-zinc-600">
                  <HugeiconsIcon icon={Clock01Icon} size={18} />
                </div>
                <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-zinc-400">
                  Delivery
                </p>
                <p className="mt-1 font-semibold text-zinc-900">1–4 weeks per project</p>
                <p className="text-sm text-zinc-500">Fixed price, no surprises</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-16 border-t border-zinc-100 pt-10">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-zinc-400">
                Follow us
              </p>
              <SocialLinks className="mt-4" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Process steps ───────────────────────────────────────────── */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-zinc-400">
              What happens next
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-zinc-900 sm:text-4xl">
              Three steps to a shipped product.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {process.slice(0, 3).map((step, i) => (
              <Reveal key={step.step} delay={i * 0.07}>
                <div className="border-t-2 border-zinc-900 pt-5">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-zinc-400">
                    {step.step}
                  </p>
                  <h3 className="mt-3 font-bold text-zinc-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
