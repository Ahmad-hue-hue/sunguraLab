"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type TimelineItem = {
  step: string;
  title: string;
  body: string;
};

/**
 * Vertical process timeline (Aceternity timeline pattern): a track whose
 * green fill grows as the section scrolls through the viewport.
 */
export function Timeline({ items }: { items: TimelineItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 30%", "end 70%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative mt-14">
      {/* track */}
      <div className="absolute left-4 top-2 bottom-2 w-px bg-border sm:left-6">
        <motion.div
          style={{ height }}
          className="w-px bg-gradient-to-b from-green-accent to-green"
        />
      </div>

      <ol className="space-y-10">
        {items.map((item, i) => (
          <motion.li
            key={item.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative pl-14 sm:pl-20"
          >
            <span className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border border-green/25 bg-card font-mono text-xs font-bold text-green sm:h-12 sm:w-12 sm:text-sm">
              {item.step}
            </span>
            <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {item.body}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
