import type { Metadata } from "next";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { CardContainer, CardItem } from "@/components/ui/Card3D";
import { CTABand } from "@/components/sections/CTABand";
import { team } from "@/data/site";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the two founders of SunguraLabs — Ahmad (development, architecture and AI integration) and Sultan Rais (client communication, project management and operations).",
};

export default function TeamPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="constellation absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <Reveal className="max-w-3xl">
            <Eyebrow>The team</Eyebrow>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              Two builders.{" "}
              <span className="font-medium text-green">Direct</span>{" "}
              communication.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Technical depth on one side, client-facing execution on the other
              — together we run every engagement from first call to launch.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <CardContainer className="h-full">
                <div className="relative h-full overflow-hidden rounded-3xl bg-surface p-8 shadow-lg">
                  <div className="constellation absolute inset-0 opacity-40" />
                  <div className="relative">
                    <CardItem translateZ={40}>
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green to-green-accent font-display text-2xl font-bold text-white shadow-lg">
                        {member.initials}
                      </div>
                    </CardItem>
                    <CardItem translateZ={30}>
                      <h2 className="mt-6 font-display text-2xl font-bold text-foreground">
                        {member.name}
                      </h2>
                      <p className="mt-1 text-sm font-medium text-green">
                        {member.role}
                      </p>
                    </CardItem>
                    <CardItem translateZ={20}>
                      <p className="mt-4 leading-relaxed text-muted">
                        {member.bio}
                      </p>
                    </CardItem>
                    <CardItem translateZ={15}>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {member.focus.map((f) => (
                          <li
                            key={f}
                            className="inline-flex items-center gap-1.5 rounded-full bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                          >
                            <HugeiconsIcon
                              icon={CheckmarkCircle02Icon}
                              size={14}
                              className="text-green"
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </CardItem>
                  </div>
                </div>
              </CardContainer>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10">
          <div className="border-t border-border pt-10 text-center">
            <p className="font-display text-lg font-semibold text-foreground">
              Growing carefully.
            </p>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted">
              We keep the team small on purpose — it&apos;s what lets us offer
              direct communication and agency-grade work without agency
              overhead. When we bring in specialists, it&apos;s per project.
            </p>
          </div>
        </Reveal>
      </Section>

      <CTABand
        title="Work directly with the people who build it."
        subtitle="No layers, no handoffs. Start a conversation with the founders today."
      />
    </>
  );
}
