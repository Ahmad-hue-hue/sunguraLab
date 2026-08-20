import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, Location01Icon } from "@hugeicons/core-free-icons";
import { company, nav } from "@/data/site";
import { Logo, LogoMark } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/layout/SocialLinks";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border-strong bg-charcoal text-white/80">
      <div className="constellation absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
        {/* oversized tagline */}
        <div className="flex items-center gap-5">
          <LogoMark size={44} />
          <p className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Build. Connect. Grow.
          </p>
        </div>

        <div className="rule-gold my-10" />

        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo onDark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {company.blurb}
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-white/70">
              <span className="inline-flex items-center gap-2">
                <HugeiconsIcon icon={Location01Icon} size={17} />
                {company.location} · {company.locationNote}
              </span>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 hover:text-gold-bright"
              >
                <HugeiconsIcon icon={Mail01Icon} size={17} />
                {company.email}
              </a>
            </div>
          </div>

          <div>
            <h3 className="label-mono font-bold text-gold-bright">Explore</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-white/70">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label-mono font-bold text-gold-bright">Follow</h3>
            <p className="mt-5 text-sm text-white/60">
              Social links coming soon.
            </p>
            <SocialLinks className="mt-4" onDark />
          </div>
        </div>

        <div className="hairline my-10 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="label-mono">Dar es Salaam · East Africa</p>
        </div>
      </div>
    </footer>
  );
}
