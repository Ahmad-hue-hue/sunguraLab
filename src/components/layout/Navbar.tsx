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

  /* Close drawer on route change */
  useEffect(() => setOpen(false), [pathname]);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const dark = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          dark
            ? "bg-black/60 backdrop-blur-xl"
            : "border-b border-zinc-200 bg-white/90 backdrop-blur-xl",
        )}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 sm:px-10">
          <Link href="/" aria-label="SunguraLabs home">
            <Logo dark={dark} />
          </Link>

          {/* Desktop nav */}
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

          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={cn(
              "relative z-[60] flex h-9 w-9 items-center justify-center rounded-full transition-colors md:hidden",
              open ? "text-white" : dark ? "text-white" : "text-zinc-900",
            )}
          >
            <HugeiconsIcon icon={open ? Cancel01Icon : Menu01Icon} size={20} />
          </button>
        </div>
      </header>

      {/* ── Backdrop ───────────────────────────────────────────────── */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden
      />

      {/* ── Slide-in drawer ────────────────────────────────────────── */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 flex h-full w-72 flex-col bg-zinc-950 shadow-2xl transition-transform duration-300 ease-in-out md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Drawer header */}
        <div className="flex h-14 items-center justify-between border-b border-white/10 px-6">
          <Logo dark />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 hover:text-white transition-colors"
          >
            <HugeiconsIcon icon={Cancel01Icon} size={18} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-4 pt-6">
          {nav.map((item, i) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  transitionDelay: open ? `${i * 40}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateX(0)" : "translateX(16px)",
                  transition: "opacity 0.25s ease, transform 0.25s ease",
                }}
                className={cn(
                  "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA at bottom */}
        <div className="mt-auto border-t border-white/10 p-6">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block w-full rounded-full bg-white py-3 text-center text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </>
  );
}
