/**
 * Single source of truth for site content.
 * All facts sourced from the SunguraLabs business proposal — do not invent claims.
 * Contact + social links are placeholders (href: "#") until real links are provided.
 */
import type { IconSvgElement } from "@hugeicons/react";
import {
  BubbleChatIcon,
  DashboardBrowsingIcon,
  DocumentValidationIcon,
  PenTool03Icon,
  Brain02Icon,
  SourceCodeIcon,
  WhatsappIcon,
  Facebook01Icon,
  NewTwitterIcon,
  InstagramIcon,
  Linkedin01Icon,
} from "@hugeicons/core-free-icons";

type IconSvg = IconSvgElement;

export const company = {
  name: "SunguraLabs",
  tagline: "Build · Connect · Grow",
  kicker: "Custom Software Development Solutions",
  blurb:
    "AI-integrated software development for East African businesses — grounded in your real data, priced for your reality.",
  location: "Dar es Salaam, Tanzania",
  locationNote: "Remote-friendly",
  email: "hello@sunguralabs.com",
  domain: "sunguralabs.com",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const socials: { label: string; href: string; icon: IconSvg }[] = [
  { label: "WhatsApp", href: "#", icon: WhatsappIcon },
  { label: "Facebook", href: "#", icon: Facebook01Icon },
  { label: "X", href: "#", icon: NewTwitterIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: Linkedin01Icon },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  price: string;
  outcome: string;
  icon: IconSvg;
};

export const services: Service[] = [
  {
    slug: "ai-chatbot",
    name: "AI Chatbot & Customer Support",
    short: "Chatbots wired to your real systems, across every channel.",
    description:
      "Goes beyond Meta's free native WhatsApp AI agent by connecting the chatbot to your actual inventory, booking system or CRM — and extending it to Instagram DMs and your website, not just WhatsApp. Responses are grounded in your business's own data, not generic answers.",
    price: "$900",
    outcome: "Instant, accurate replies grounded in your own records.",
    icon: BubbleChatIcon,
  },
  {
    slug: "internal-tools",
    name: "AI-Powered Internal Tools & Automation",
    short: "Turn scattered data into summaries, alerts and reports.",
    description:
      "Connects your existing data — spreadsheets, CRM, inventory — to an AI layer that summarizes activity, flags anomalies, and auto-generates reports so your team stops doing it by hand.",
    price: "$1,400",
    outcome: "Less manual reporting, earlier warning on what matters.",
    icon: DashboardBrowsingIcon,
  },
  {
    slug: "document-processing",
    name: "AI Document & Data Processing",
    short: "Invoices and forms become structured data automatically.",
    description:
      "OCR plus AI extraction that turns invoices, receipts, contracts and forms into structured, usable data automatically — cutting the manual entry that costs an estimated $15–40 in labor per invoice.",
    price: "$1,200",
    outcome: "Documents in, clean structured data out — no re-typing.",
    icon: DocumentValidationIcon,
  },
  {
    slug: "content-automation",
    name: "AI Content & Marketing Automation",
    short: "On-brand product copy, captions and replies at scale.",
    description:
      "Auto-generates product descriptions, social captions, and email replies matched to your brand voice — so marketing keeps pace without adding headcount.",
    price: "$700",
    outcome: "Consistent, on-brand content produced in a fraction of the time.",
    icon: PenTool03Icon,
  },
  {
    slug: "rag-assistant",
    name: "Custom AI Knowledge Assistant (RAG)",
    short: "An assistant that answers from your own documents.",
    description:
      "Feeds your company's own documents, policies or product catalog into an AI assistant that employees or customers can query directly — answers grounded in your knowledge, not the open internet.",
    price: "$1,800",
    outcome: "Your policies and catalog, answerable in plain language.",
    icon: Brain02Icon,
  },
  {
    slug: "custom-development",
    name: "Custom Web Apps & SaaS",
    short: "Full product builds, API integrations and maintenance.",
    description:
      "Custom web application and SaaS product development, API integrations, and ongoing maintenance — built on the same production-grade stack we use for every engagement.",
    price: "Quoted",
    outcome: "A production app built and maintained by the people who talk to you.",
    icon: SourceCodeIcon,
  },
];

export const retainer = {
  name: "Monthly Maintenance & Support Retainer",
  price: "$200/mo",
  description:
    "Optional ongoing support and maintenance after launch — move onto the retainer whenever you're ready.",
};

export const pricingNote =
  "Fixed-price per project — no hourly billing, so you know the total cost upfront. Priced against 2026 market data: developer-built AI chatbots run $1,000–$5,000 globally and agency builds start at $5,000+. We price at the affordable end while staying sustainable for a focused two-person studio.";

export const stats = [
  {
    value: "78%",
    label:
      "of Sub-Saharan African SMEs sell primarily through WhatsApp — but handle it manually.",
  },
  {
    value: "391%",
    label:
      "more conversions when businesses respond within one minute. Most take 47 hours on average.",
  },
  {
    value: "86%",
    label:
      "of SMEs still enter invoice and record data by hand, at $15–40 in labor per invoice.",
  },
];

export const whyUs = [
  {
    title: "Up to 80% below global agency pricing",
    body: "Developer-built AI projects typically run $1,000–$5,000+ elsewhere; agency builds start at $5,000 and climb into six figures. We deliver the same core capability at East African cost structures.",
  },
  {
    title: "Direct communication, no bureaucracy",
    body: "A small team means you talk to the people actually building your product — not an account manager relaying messages.",
  },
  {
    title: "Fast turnaround",
    body: "Most projects delivered in 1–4 weeks depending on scope, built in focused 1–2 week sprints.",
  },
  {
    title: "Production-grade AI, not no-code toys",
    body: "Built on Claude/OpenAI, not templated no-code bots that plateau at basic FAQs.",
  },
  {
    title: "We understand East African workflows",
    body: "Based in Dar es Salaam, we know the payment methods and WhatsApp-first, high-inbound messaging habits that outside agencies miss.",
  },
  {
    title: "Grounded in your actual data",
    body: "We map your real records during the build, so the AI answers from your business — not from assumptions.",
  },
];

export const process = [
  {
    step: "01",
    title: "Lightweight scoping call",
    body: "A focused 30–45 minute call covering your workflow, data sources and systems to integrate — not a multi-week discovery sprint. Full discovery is only proportionate for much larger projects.",
  },
  {
    step: "02",
    title: "Fixed-price quote & scope confirmation",
    body: "You get a clear fixed-price quote and confirmed scope up front. No surprise costs.",
  },
  {
    step: "03",
    title: "Development in 1–2 week sprints",
    body: "We build in short sprints, including data-source mapping so the AI is grounded in your actual records rather than assumptions.",
  },
  {
    step: "04",
    title: "Testing, delivery & handoff",
    body: "We test, deliver, and walk your team through using it with a usage walkthrough.",
  },
  {
    step: "05",
    title: "Post-launch support",
    body: "Ongoing support after launch, with an optional move to the monthly retainer whenever it suits you.",
  },
];

export const tools = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "TanStack Query",
  "Supabase",
  "Python",
  "Claude / OpenAI",
  "LangChain",
  "WhatsApp Business API",
  "Vercel",
  "Stripe / Flutterwave",
];

export const targetClients = [
  {
    title: "East African SMEs",
    body: "Retail shops, real-estate & property managers, logistics operators, and service businesses — salons, clinics — in Dar es Salaam and across East Africa. Most sell through WhatsApp manually and still enter records by hand.",
  },
  {
    title: "Early-stage startups & founders",
    body: "Local or remote founders who need an AI-integrated MVP built quickly and affordably, without hiring a full in-house dev team. The real blocker is rarely the AI model — it's data fragmented across CRM, WhatsApp groups and Excel with no single source of truth.",
  },
];

export type Founder = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  focus: string[];
};

export const team: Founder[] = [
  {
    name: "Ahmad",
    role: "Development & Technical Architecture",
    initials: "A",
    bio: "A full-stack developer based in Dar es Salaam, working across React, Next.js, TypeScript, Supabase and Python in production settings, with additional experience in PHP, MySQL and Django.",
    focus: [
      "Development",
      "Technical architecture",
      "AI integration",
      "Infrastructure",
    ],
  },
  {
    name: "Sultan Rais",
    role: "Client Communication & Operations",
    initials: "SR",
    bio: "Leads client communication and project management, keeping delivery on track and client expectations clear — running engagements end-to-end from first call to post-launch support.",
    focus: [
      "Client communication",
      "Project management",
      "Business operations",
    ],
  },
];
