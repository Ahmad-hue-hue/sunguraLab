import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { team } from "@/data/site";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the two founders of SunguraLabs.",
};

const photos: Record<string, string> = {
  Ahmad:         "/images/team-ahmad.jpg",
  "Sultan Rais": "/images/team-sultan.jpg",
};

export default function TeamPage() {
  return (
    <>
      <section className="bg-black pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <p className="eyebrow text-zinc-500">The team</p>
            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Two builders. One studio.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-400">
              Technical depth on one side, client-facing execution on the other —
              together we run every engagement from first call to launch.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-16 md:grid-cols-2">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <div>
                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-100">
                  {photos[member.name] ? (
                    <Image
                      src={photos[member.name]}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-6xl font-bold text-zinc-300">{member.initials}</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="mt-6">
                  <h2 className="text-2xl font-bold tracking-tight text-zinc-900">{member.name}</h2>
                  <p className="mt-1 text-sm font-medium text-green">{member.role}</p>
                  <p className="mt-4 leading-relaxed text-zinc-500">{member.bio}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {member.focus.map((f) => (
                      <li key={f} className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-24 border-t border-zinc-200 pt-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Growing carefully.</h2>
            <p className="mt-4 leading-relaxed text-zinc-500">
              We keep the team small on purpose — it&apos;s what lets us offer direct
              communication and agency-grade work without agency overhead. Specialists
              join per project when the scope demands it.
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
