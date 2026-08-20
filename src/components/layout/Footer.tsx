import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, Location01Icon } from "@hugeicons/core-free-icons";
import { company, nav } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/layout/SocialLinks";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {company.blurb}
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <HugeiconsIcon icon={Location01Icon} size={17} />
                {company.location} · {company.locationNote}
              </span>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 hover:text-green"
              >
                <HugeiconsIcon icon={Mail01Icon} size={17} />
                {company.email}
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-foreground">
              Explore
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-green">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-foreground">
              Follow along
            </h3>
            <p className="mt-4 text-sm text-muted">
              Social links coming soon.
            </p>
            <SocialLinks className="mt-4" />
          </div>
        </div>

        <div className="rule-gold my-10" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="tracking-[0.2em] uppercase text-muted/80">
            Build · Connect · Grow
          </p>
        </div>
      </div>
    </footer>
  );
}
