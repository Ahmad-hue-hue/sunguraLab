import type { Metadata } from "next";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { team } from "@/data/site";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the two founders of SunguraLabs.",
};

const photos: Record<string, string> = {
  Ahmad: "/images/team-ahmad.jpg",
  "Sultan Rais": "/images/team-sultan.jpg",
};

export default function TeamPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-zinc-950">
        <div className="dot-grid-dark absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-green/10 blur-[80px]" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28 sm:px-8">
          <Reveal>
            <Eyebrow className="text-zinc-500">The team</Eyebrow>
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Two builders.{" "}
              <span className="text-green-accent">Direct</span> communication.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
              Technical depth on one side, client-facing execution on the other —
              together we run every engagement from first call to launch.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <div className="group">
                {/* Photo */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100">
                  {photos[member.name] ? (
                    <Image
                      src={photos[member.name]}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-green/20 to-zinc-200">
                      <span className="font-display text-5xl font-extrabold text-green/40">
                        {member.initials}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
                  {/* name overlay */}
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="font-display text-xl font-bold text-white">{member.name}</p>
                    <p className="font-mono text-xs text-green-accent">{member.role}</p>
                  </div>
                </div>

                {/* Bio */}
                <div className="mt-5">
                  <p className="text-sm leading-relaxed text-muted">{member.bio}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {member.focus.map((f) => (
                      <li
                        key={f}
                        className="inline-flex items-center gap-1.5 rounded border border-border bg-surface px-2.5 py-1 font-mono text-xs text-foreground"
                      >
                        <HugeiconsIcon icon={CheckmarkCircle02Icon} size={11} className="text-green" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16">
          <div className="border-t border-border pt-10">
            <p className="font-mono text-xs text-muted">// studio model</p>
            <p className="mt-3 font-display text-lg font-bold text-foreground">
              Growing carefully.
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              We keep the team small on purpose — it&apos;s what lets us offer
              direct communication and agency-grade work without agency overhead.
              Specialists join per-project when the scope demands it.
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
