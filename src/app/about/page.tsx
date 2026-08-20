import type { Metadata } from "next";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";
import { company, whyUs, stats } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "SunguraLabs is a two-person AI-integrated software studio in Dar es Salaam, combining hands-on development with client-facing execution to run engagements end-to-end.",
};

export default function AboutPage() {
  return (
    <>
      {/* intro */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="constellation absolute inset-0 opacity-50" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Who we are</Eyebrow>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              A small studio that runs engagements{" "}
              <span className="font-medium text-green">end-to-end</span>.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {company.name} was founded by two builders combining hands-on
              development with client-facing execution — technical depth paired
              with the operational discipline to take a project from first call
              to post-launch support.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              We&apos;re based in {company.location} and work remotely with
              clients across East Africa. Because the team is small, you talk to
              the people actually building your product — no account managers,
              no bureaucracy.
            </p>
            <div className="mt-8">
              <ButtonLink href="/team">
                Meet the team
                <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/ar-vr.jpg"
                alt="A person interacting with AI through a VR interface"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* mission */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <blockquote className="border-l-2 border-gold pl-8">
              <p className="font-display text-2xl font-semibold leading-snug text-foreground">
                &ldquo;The biggest blocker to AI adoption for African businesses
                isn&apos;t the model — it&apos;s data fragmented across CRM,
                WhatsApp groups and Excel, with no single source of truth.&rdquo;
              </p>
              <p className="mt-6 text-sm text-muted">
                So we start every build by mapping your real records — then
                ground the AI in them.
              </p>
            </blockquote>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our approach"
              title="Grounded AI, delivered at East African cost structures."
              intro="We build on production-grade AI — Claude and OpenAI — not templated no-code bots that plateau at basic FAQs. And we price at the affordable end of the market so the value is real for a two-person studio and its clients alike."
            />
          </div>
        </div>
      </Section>

      {/* differentiators */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="What sets us apart"
          title="Why clients choose SunguraLabs."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div>
                <h3 className="font-display font-semibold text-foreground">
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

      {/* context stats */}
      <Section>
        <div className="grid divide-y border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0 divide-border">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.08}>
              <div className="h-full p-8">
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

      <CTABand />
    </>
  );
}
