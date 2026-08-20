"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { nav } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const dark = isHome && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        dark
          ? "border-b border-white/8 bg-zinc-950/80 backdrop-blur-md"
          : "border-b border-border bg-background/90 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="SunguraLabs home">
          <Logo dark={dark} />
        </Link>

        <nav className="hidden items-center gap-0 md:flex">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "label-mono relative px-4 py-2 transition-colors",
                  dark
                    ? active ? "text-white" : "text-white/50 hover:text-white/80"
                    : active ? "text-foreground" : "text-muted hover:text-foreground",
                )}
              >
                {item.label}
                {active && (
                  <span className={cn(
                    "absolute inset-x-4 -bottom-px h-px",
                    dark ? "bg-green-accent" : "bg-green"
                  )} />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className={cn(
            "label-mono hidden rounded-md px-4 py-2 text-xs transition-colors md:block",
            dark
              ? "border border-white/15 text-white hover:border-green-accent hover:text-green-accent"
              : "border border-border-strong text-foreground hover:border-green hover:text-green",
          )}
        >
          Talk to us
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-md border md:hidden",
            dark ? "border-white/15 text-white" : "border-border text-foreground",
          )}
        >
          <HugeiconsIcon icon={open ? Cancel01Icon : Menu01Icon} size={18} />
        </button>
      </div>

      {open && (
        <div className={cn(
          "border-t md:hidden",
          dark ? "border-white/8 bg-zinc-950" : "border-border bg-background",
        )}>
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "label-mono rounded-md px-3 py-3",
                  dark ? "text-white/70 hover:text-white" : "text-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="label-mono mt-2 rounded-md border border-green px-3 py-3 text-green"
            >
              Talk to us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
