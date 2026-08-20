import type { Metadata } from "next";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, Location01Icon, Clock01Icon } from "@hugeicons/core-free-icons";
import { Section, Eyebrow } from "@/components/ui/Section";
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
      <section className="relative overflow-hidden border-b border-border bg-zinc-950">
        <div className="dot-grid-dark absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-green/10 blur-[80px]" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28 sm:px-8">
          <Reveal className="max-w-2xl">
            <Eyebrow className="text-zinc-500">Contact</Eyebrow>
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s <span className="text-green-accent">scope</span> your project.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              A free 30–45 min call to cover your workflow, data sources and systems.
              You&apos;ll leave with a clear, fixed-price quote.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <div className="space-y-7">
              <a href={`mailto:${company.email}`} className="group flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-border bg-surface text-green">
                  <HugeiconsIcon icon={Mail01Icon} size={18} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="font-mono text-xs text-muted">Email</p>
                  <p className="font-display font-bold text-foreground group-hover:text-green transition-colors">
                    {company.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-border bg-surface text-green">
                  <HugeiconsIcon icon={Location01Icon} size={18} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="font-mono text-xs text-muted">Location</p>
                  <p className="font-display font-bold text-foreground">{company.location}</p>
                  <p className="font-mono text-xs text-muted">{company.locationNote}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-border bg-surface text-green">
                  <HugeiconsIcon icon={Clock01Icon} size={18} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="font-mono text-xs text-muted">Delivery</p>
                  <p className="font-display font-bold text-foreground">1–4 weeks per project</p>
                </div>
              </div>

              <div className="pt-2">
                <p className="font-mono text-xs text-muted">// social — links coming soon</p>
                <SocialLinks className="mt-3" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/meeting.jpg"
                alt="Team meeting"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-surface">
        <Reveal>
          <p className="font-mono text-xs text-muted">// what happens next</p>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-foreground">
            Three steps to a shipped product.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {process.slice(0, 3).map((step, i) => (
            <Reveal key={step.step} delay={i * 0.07}>
              <div className="border-l border-border pl-4">
                <p className="font-mono text-xs font-medium text-green">{step.step}</p>
                <h3 className="mt-2 font-display text-base font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
