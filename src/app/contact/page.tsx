import type { Metadata } from "next";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, Location01Icon, Clock01Icon } from "@hugeicons/core-free-icons";
import { Section } from "@/components/ui/Section";
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
      <section className="bg-black pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <p className="eyebrow text-zinc-500">Contact</p>
            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Let&apos;s scope your project.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-400">
              A free 30–45 min call to cover your workflow, data sources, and what you
              want to automate. You leave with a fixed-price quote.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-20 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <Reveal>
            <div className="space-y-8">
              <a href={`mailto:${company.email}`} className="group flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition group-hover:bg-zinc-900 group-hover:text-white">
                  <HugeiconsIcon icon={Mail01Icon} size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Email</p>
                  <p className="mt-1 font-semibold text-zinc-900 transition group-hover:text-green">
                    {company.email}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-600">
                  <HugeiconsIcon icon={Location01Icon} size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Location</p>
                  <p className="mt-1 font-semibold text-zinc-900">{company.location}</p>
                  <p className="text-sm text-zinc-500">{company.locationNote}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-600">
                  <HugeiconsIcon icon={Clock01Icon} size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Delivery</p>
                  <p className="mt-1 font-semibold text-zinc-900">1–4 weeks per project</p>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  Follow us
                </p>
                <SocialLinks className="mt-3" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/images/contact-meeting.jpg"
                alt="Clean professional workspace"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="border-t border-zinc-200 bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <p className="eyebrow text-zinc-500">What happens next</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900">
              Three steps to a shipped product.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {process.slice(0, 3).map((step, i) => (
              <Reveal key={step.step} delay={i * 0.07}>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                    {step.step}
                  </p>
                  <h3 className="mt-3 font-semibold text-zinc-900">{step.title}</h3>
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
