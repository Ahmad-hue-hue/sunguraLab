import Image from "next/image";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  BubbleChatIcon,
  Robot01Icon,
  DashboardBrowsingIcon,
  Brain02Icon,
} from "@hugeicons/core-free-icons";
import { BentoGrid, BentoGridItem } from "@/components/ui/aceternity/bento-grid";

/** Image header tile for a bento cell, with a gold icon chip. */
function ImageHeader({
  src,
  alt,
  icon,
}: {
  src: string;
  alt: string;
  icon: IconSvgElement;
}) {
  return (
    <div className="relative min-h-40 flex-1 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover/bento:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
      <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-charcoal/60 text-gold-bright backdrop-blur-sm">
        <HugeiconsIcon icon={icon} size={20} strokeWidth={1.8} />
      </span>
    </div>
  );
}

const tiles = [
  {
    title: "Conversational AI, every channel",
    description:
      "Chatbots wired to your inventory, bookings or CRM — on WhatsApp, Instagram and your site.",
    src: "/images/ar-vr.jpg",
    alt: "Person interacting with AI through a headset",
    icon: BubbleChatIcon,
    span: "md:col-span-2",
  },
  {
    title: "Automation that never sleeps",
    description: "Summaries, anomaly alerts and reports generated for you.",
    src: "/images/robot.jpg",
    alt: "Humanoid robot",
    icon: Robot01Icon,
    span: "md:col-span-1",
  },
  {
    title: "Reporting that writes itself",
    description: "Your spreadsheets and CRM, turned into live insight.",
    src: "/images/data.jpg",
    alt: "Analytics dashboard",
    icon: DashboardBrowsingIcon,
    span: "md:col-span-1",
  },
  {
    title: "Answers from your own docs",
    description: "A RAG assistant grounded in your policies and catalog.",
    src: "/images/automation.jpg",
    alt: "Cascading green code",
    icon: Brain02Icon,
    span: "md:col-span-1",
  },
];

export function BentoShowcase() {
  return (
    <BentoGrid className="mt-12">
      {tiles.map((t) => (
        <BentoGridItem
          key={t.title}
          className={t.span}
          title={t.title}
          description={t.description}
          header={<ImageHeader src={t.src} alt={t.alt} icon={t.icon} />}
        />
      ))}
    </BentoGrid>
  );
}
