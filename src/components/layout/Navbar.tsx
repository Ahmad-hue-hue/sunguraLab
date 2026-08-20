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
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const dark = isHome && !scrolled;

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-500",
      dark
        ? "bg-black/60 backdrop-blur-xl"
        : "border-b border-zinc-200 bg-white/90 backdrop-blur-xl",
    )}>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 sm:px-10">
        <Link href="/" aria-label="SunguraLabs home">
          <Logo dark={dark} />
        </Link>

        {/* Desktop nav — Apple style: centered, small, light */}
        <nav className="hidden items-center gap-0 md:flex">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  dark
                    ? active ? "text-white" : "text-white/60 hover:text-white"
                    : active ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className={cn(
            "hidden rounded-full px-5 py-2 text-sm font-semibold transition-all md:block",
            dark
              ? "bg-white text-black hover:bg-zinc-200"
              : "bg-zinc-900 text-white hover:bg-zinc-700",
          )}
        >
          Talk to us
        </Link>

        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn("flex h-9 w-9 items-center justify-center rounded-full md:hidden", dark ? "text-white" : "text-zinc-900")}
        >
          <HugeiconsIcon icon={open ? Cancel01Icon : Menu01Icon} size={20} />
        </button>
      </div>

      {open && (
        <div className={cn("border-t md:hidden", dark ? "border-white/10 bg-black" : "border-zinc-200 bg-white")}>
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn("py-3 text-sm font-medium", dark ? "text-white/70 hover:text-white" : "text-zinc-600 hover:text-zinc-900")}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-3 rounded-full bg-zinc-900 py-3 text-center text-sm font-semibold text-white">
              Talk to us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
