import type { Metadata } from "next";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  Location01Icon,
  Clock01Icon,
} from "@hugeicons/core-free-icons";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { company, process } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SunguraLabs to start an AI-integrated software project. Reach us by email or on social — WhatsApp, Facebook, X, Instagram and LinkedIn.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="constellation absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <Reveal className="max-w-3xl">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              Let&apos;s <em className="font-light italic text-green">scope</em>{" "}
              your project.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Reach out and we&apos;ll set up a free 30–45 minute scoping call to
              cover your workflow, data sources and the systems you want to
              integrate. You&apos;ll leave with a clear, fixed-price quote.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <div className="space-y-4">
              {/* email */}
              <a
                href={`mailto:${company.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-green/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-soft text-green">
                  <HugeiconsIcon icon={Mail01Icon} size={24} strokeWidth={1.8} />
                </span>
                <span>
                  <span className="block text-sm text-muted">Email us</span>
                  <span className="font-display font-semibold text-foreground group-hover:text-green">
                    {company.email}
                  </span>
                </span>
              </a>

              {/* location */}
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-soft text-green">
                  <HugeiconsIcon
                    icon={Location01Icon}
                    size={24}
                    strokeWidth={1.8}
                  />
                </span>
                <span>
                  <span className="block text-sm text-muted">Based in</span>
                  <span className="font-display font-semibold text-foreground">
                    {company.location}
                  </span>
                  <span className="block text-sm text-muted">
                    {company.locationNote}
                  </span>
                </span>
              </div>

              {/* hours / response */}
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-soft text-green">
                  <HugeiconsIcon
                    icon={Clock01Icon}
                    size={24}
                    strokeWidth={1.8}
                  />
                </span>
                <span>
                  <span className="block text-sm text-muted">Turnaround</span>
                  <span className="font-display font-semibold text-foreground">
                    Most projects delivered in 1–4 weeks
                  </span>
                </span>
              </div>

              {/* socials */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-sm text-muted">
                  Or reach us on social — links coming soon.
                </p>
                <SocialLinks className="mt-4" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
              <Image
                src="/images/meeting.jpg"
                alt="Colleagues celebrating a successful collaboration"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* what to expect */}
      <Section className="bg-surface">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-foreground">
            What happens next
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {process.slice(0, 3).map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <span className="font-display text-sm font-bold text-gold">
                  {step.step}
                </span>
                <h3 className="mt-2 font-display font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
