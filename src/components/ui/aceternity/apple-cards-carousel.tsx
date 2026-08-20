"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  type ReactNode,
} from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { useOutsideClick } from "@/hooks/use-outside-click";

// ─── Types ────────────────────────────────────────────────────────────────────

export type AppleCard = {
  src: string;
  alt: string;
  title: string;
  category: string;
  content: ReactNode;
};

// ─── Context ──────────────────────────────────────────────────────────────────

const CarouselCtx = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({ onCardClose: () => {}, currentIndex: 0 });

// ─── Carousel ─────────────────────────────────────────────────────────────────

export function Carousel({
  items,
  initialScroll = 0,
  className,
}: {
  items: React.JSX.Element[];
  initialScroll?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollLeft = initialScroll;
      check();
    }
  }, [initialScroll]);

  const check = () => {
    if (!ref.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    setCanLeft(scrollLeft > 0);
    setCanRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  const scroll = (dir: "left" | "right") => {
    ref.current?.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  };

  const handleCardClose = (index: number) => {
    if (!ref.current) return;
    const cardW = 288 + 16; // md:w-72 + gap-4
    ref.current.scrollTo({ left: cardW * index, behavior: "smooth" });
    setCurrentIndex(index);
  };

  return (
    <CarouselCtx.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className={cn("relative w-full", className)}>
        {/* scrollable strip */}
        <div
          ref={ref}
          onScroll={check}
          className="flex w-full gap-4 overflow-x-auto overscroll-x-auto scroll-smooth py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex gap-4 pl-1 pr-[10%]">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* arrows */}
        <div className="mt-3 flex items-center justify-end gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canLeft}
            aria-label="Scroll left"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/8 text-foreground transition hover:bg-foreground/15 disabled:pointer-events-none disabled:opacity-30"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={17} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canRight}
            aria-label="Scroll right"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/8 text-foreground transition hover:bg-foreground/15 disabled:pointer-events-none disabled:opacity-30"
          >
            <HugeiconsIcon icon={ArrowRight01Icon} size={17} />
          </button>
        </div>
      </div>
    </CarouselCtx.Provider>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

export function Card({ card, index }: { card: AppleCard; index: number }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselCtx);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.body.style.overflow = open ? "hidden" : "";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      {/* ── Expanded modal ── */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-10">
            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-charcoal/75 backdrop-blur-md"
            />

            {/* sheet */}
            <motion.div
              ref={containerRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative z-[60] mx-4 w-full max-w-2xl rounded-3xl bg-background shadow-2xl"
            >
              {/* close */}
              <button
                onClick={handleClose}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-foreground/10 text-foreground transition hover:bg-foreground/20"
              >
                <HugeiconsIcon icon={Cancel01Icon} size={17} />
              </button>

              {/* image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 672px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* body */}
              <div className="px-8 pb-10 pt-6">
                <p className="label-mono text-gold">{card.category}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
                  {card.title}
                </h3>
                <div className="mt-4 leading-relaxed text-muted">{card.content}</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Card tile ── */}
      <button
        onClick={handleOpen}
        className="group relative h-[26rem] w-60 shrink-0 overflow-hidden rounded-3xl shadow-lg transition-shadow duration-300 hover:shadow-2xl md:h-[30rem] md:w-72"
      >
        {/* photo */}
        <Image
          src={card.src}
          alt={card.alt}
          fill
          sizes="(max-width: 768px) 240px, 288px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 to-transparent" />

        {/* label & title */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-left">
          <p className="label-mono text-xs font-semibold tracking-widest text-white/75 uppercase">
            {card.category}
          </p>
          <p className="font-display text-[1.2rem] font-semibold leading-snug text-white">
            {card.title}
          </p>
        </div>
      </button>
    </>
  );
}
