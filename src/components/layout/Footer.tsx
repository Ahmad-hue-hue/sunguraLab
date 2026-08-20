import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, Location01Icon } from "@hugeicons/core-free-icons";
import { company, nav } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/layout/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              {company.blurb}
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 text-xs text-zinc-600">
                <HugeiconsIcon icon={Location01Icon} size={14} />
                {company.location} · {company.locationNote}
              </span>
              <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 text-xs text-zinc-600 hover:text-green-accent transition-colors">
                <HugeiconsIcon icon={Mail01Icon} size={14} />
                {company.email}
              </a>
            </div>
          </div>

          <div>
            <p className="label-mono text-zinc-600">Navigate</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-zinc-500 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-mono text-zinc-600">Social</p>
            <p className="mt-4 text-xs text-zinc-600">Links coming soon.</p>
            <SocialLinks className="mt-3" onDark />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/6 pt-8 text-xs text-zinc-700 sm:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="font-mono">Dar es Salaam · East Africa</p>
        </div>
      </div>
    </footer>
  );
}
