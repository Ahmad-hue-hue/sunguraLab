import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon } from "@hugeicons/core-free-icons";
import { company, nav } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/layout/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              {company.blurb}
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              <HugeiconsIcon icon={Mail01Icon} size={14} />
              {company.email}
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Navigate</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Social</p>
            <SocialLinks className="mt-4" />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-zinc-100 pt-8 text-xs text-zinc-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>{company.location} · East Africa</p>
        </div>
      </div>
    </footer>
  );
}
