"use client";

import { useId } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Aceternity UI — Background Beams.
 * Animated gradient "beams" that travel along curved SVG paths. Adapted to the
 * SunguraLabs palette (green → gold) for use behind the dark CTA band.
 * Source pattern: ui.aceternity.com/components/background-beams (MIT).
 */
export function BackgroundBeams({ className }: { className?: string }) {
  const paths = [
    "M-100 200C-100 200 120 140 320 200C520 260 640 200 860 260",
    "M-120 260C-120 260 100 200 300 260C500 320 620 260 840 320",
    "M-140 320C-140 320 80 260 280 320C480 380 600 320 820 380",
    "M-160 380C-160 380 60 320 260 380C460 440 580 380 800 440",
    "M-180 440C-180 440 40 380 240 440C440 500 560 440 780 500",
    "M-90 140C-90 140 130 80 330 140C530 200 650 140 870 200",
    "M-110 500C-110 500 110 440 310 500C510 560 630 500 850 560",
  ];

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <svg
        className="absolute h-full w-full"
        viewBox="0 0 800 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {paths.map((d, i) => (
          <Beam key={i} d={d} index={i} total={paths.length} />
        ))}
      </svg>
    </div>
  );
}

function Beam({ d, index, total }: { d: string; index: number; total: number }) {
  const id = useId();
  return (
    <>
      {/* faint static rail */}
      <path d={d} stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
      {/* animated gradient traveling along the path */}
      <motion.path
        d={d}
        stroke={`url(#grad-${id})`}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          id={`grad-${id}`}
          gradientUnits="userSpaceOnUse"
          initial={{ x1: "-10%", x2: "0%", y1: "0%", y2: "0%" }}
          animate={{
            x1: ["-10%", "110%"],
            x2: ["0%", "120%"],
          }}
          transition={{
            duration: 5 + (index % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: (index / total) * 3,
            repeatDelay: 1.5,
          }}
        >
          <stop stopColor="#45a35a" stopOpacity="0" />
          <stop offset="0.4" stopColor="#45a35a" />
          <stop offset="0.7" stopColor="#d0a53a" />
          <stop offset="1" stopColor="#d0a53a" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </>
  );
}
