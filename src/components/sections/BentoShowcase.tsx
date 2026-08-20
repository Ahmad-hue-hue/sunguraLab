"use client";

import { Carousel, Card, type AppleCard } from "@/components/ui/aceternity/apple-cards-carousel";

const cards: AppleCard[] = [
  {
    src: "/images/card-chatbot.jpg",
    alt: "Person using a smartphone to interact with an AI assistant",
    title: "Conversational AI, every channel",
    category: "AI Chatbot",
    content:
      "Chatbots wired to your inventory, bookings or CRM — on WhatsApp, Instagram and your site. Goes beyond generic FAQ bots with deep integration to your actual business data, so every response is grounded in what your business knows.",
  },
  {
    src: "/images/card-automation.jpg",
    alt: "Humanoid robot — automation at work",
    title: "Automation that never sleeps",
    category: "Internal Tools",
    content:
      "Connects your existing data — spreadsheets, CRM, inventory — to an AI layer that summarizes activity, flags anomalies and auto-generates reports. Your team stops doing it by hand.",
  },
  {
    src: "/images/card-data.jpg",
    alt: "Analytics dashboard on a laptop screen",
    title: "Reporting that writes itself",
    category: "Data Processing",
    content:
      "Invoices, receipts, contracts and forms become structured, usable data automatically — cutting the manual entry that costs an estimated $15–40 in labor per invoice.",
  },
  {
    src: "/images/card-knowledge.jpg",
    alt: "Library corridor — deep knowledge retrieval",
    title: "Answers from your own docs",
    category: "RAG Assistant",
    content:
      "Feeds your company's own documents, policies or product catalog into an AI assistant that employees or customers can query directly — answers grounded in your knowledge, not the open internet.",
  },
];

export function BentoShowcase() {
  return (
    <div className="mt-10 -mx-5 sm:-mx-8">
      <Carousel
        items={cards.map((card, i) => (
          <Card key={i} card={card} index={i} />
        ))}
      />
    </div>
  );
}
