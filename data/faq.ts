/**
 * FAQ content — split per page.
 *
 * All answers are grounded in the real SunguraLabs facts defined in
 * data/site.ts (pricing, process, timeline, support, stack). Nothing here is
 * invented.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const homeFaq: FaqItem[] = [
  {
    question: 'How much does a custom AI build cost?',
    answer:
      'Pricing is fixed per project. AI Chatbot & Customer Support is $900, AI-Powered Internal Tools & Automation is $1,400, AI Document & Data Processing is $1,200, AI Content & Marketing Automation is $700, and a Custom AI Knowledge Assistant (RAG) is $1,800. Custom web apps and SaaS are quoted individually. No hourly billing.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Most projects are delivered in 1–4 weeks depending on scope, built in focused 1–2 week sprints — including mapping your data sources so the AI is grounded in your real records.',
  },
  {
    question: 'Do you offer support after launch?',
    answer:
      'Yes. Every project includes post-launch support, and you can move onto an optional Monthly Maintenance & Support Retainer at $200/mo whenever it suits you.',
  },
  {
    question: 'Are we paying hourly or per project?',
    answer:
      'Per project, at a fixed price agreed up front. You get a clear quote and confirmed scope before development starts, so there are no surprise costs.',
  },
  {
    question: 'Who actually works on our project?',
    answer:
      'You work directly with SunguraLabs\u2019 two-person team — Ahmad on development and technical architecture, Sultan Rais on client communication and operations. No account managers relaying messages.',
  },
  {
    question: 'Where do you work from?',
    answer:
      'We are based in Dar es Salaam, Tanzania and work remotely with clients across East Africa and beyond.',
  },
  {
    question: 'Can you integrate with the tools we already use?',
    answer:
      'Most likely, yes. Part of the scoping call is mapping your current stack — spreadsheets, CRM, inventory, WhatsApp, booking systems — so the build connects to what you already run.',
  },
  {
    question: 'What happens in the scoping call?',
    answer:
      'A focused 30–45 minute call covering your workflow, data sources and systems to integrate. You leave with a clear sense of scope and next steps toward a fixed-price quote.',
  },
  {
    question: 'How do you keep the AI grounded in our business?',
    answer:
      'We map your actual data during the build — inventory, bookings, CRM, support history — and build on that foundation, rather than answering from generic internet knowledge.',
  },
  {
    question: 'What if our needs change after we launch?',
    answer:
      'Post-launch support keeps the door open for iteration, and the maintenance retainer covers ongoing changes and improvements as your business grows.',
  },
];

export const servicesFaq: FaqItem[] = [
  {
    question: 'What is your process for starting a new project?',
    answer:
      'A lightweight scoping call, then a fixed-price quote with confirmed scope, development in 1–2 week sprints, testing and delivery with a usage walkthrough, and post-launch support.',
  },
  {
    question: 'Which services are included in the fixed prices?',
    answer:
      'AI Chatbot & Customer Support ($900), AI-Powered Internal Tools & Automation ($1,400), AI Document & Data Processing ($1,200), AI Content & Marketing Automation ($700), and Custom AI Knowledge Assistant (RAG) ($1,800). Custom web apps & SaaS are quoted individually.',
  },
  {
    question: 'Is the chatbot limited to WhatsApp?',
    answer:
      'No. We go beyond Meta\u2019s free native WhatsApp AI agent by connecting your bot to your inventory, booking system or CRM — and extending it to Instagram DMs and your website, grounded in your own business data.',
  },
  {
    question: 'What does the monthly retainer cover?',
    answer:
      'The $200/mo retainer covers ongoing maintenance and support after launch. It is optional — you can move onto it whenever you\u2019re ready.',
  },
  {
    question: 'Why are your prices so much lower than agencies?',
    answer:
      'Developer-built AI projects typically run $1,000–$5,000+ globally and agency builds start at $5,000. As a focused two-person studio with East African cost structures, we deliver the same core capability at the affordable end of the range.',
  },
  {
    question: 'Can I get a custom web app or SaaS build?',
    answer:
      'Yes. Custom Web Apps & SaaS is a dedicated service with individual quotes — full product builds, API integrations and ongoing maintenance.',
  },
  {
    question: 'What tech stack do you build with?',
    answer:
      'React, Next.js, TypeScript, Tailwind CSS, TanStack Query, Supabase, Python, Claude/OpenAI, LangChain, WhatsApp Business API, Vercel, and Stripe/Flutterwave for payments.',
  },
  {
    question: 'How do payments work?',
    answer:
      'Fixed-price per project with scope confirmed up front, so you know the total cost before development starts. No hourly billing.',
  },
];

export const contactFaq: FaqItem[] = [
  {
    question: 'How fast will you get back to me?',
    answer:
      'Reach us at hello@sunguralabs.com — we aim to respond within one business day.',
  },
  {
    question: 'What happens after I reach out?',
    answer:
      'You\u2019ll be invited to a free 30–45 minute scoping call covering your workflow, data sources and systems to integrate, after which you\u2019ll get a fixed-price quote with confirmed scope.',
  },
  {
    question: 'Can we meet in person?',
    answer:
      'We\u2019re based in Dar es Salaam, Tanzania and happy to meet locally — we also work fully remotely with clients across East Africa and beyond.',
  },
  {
    question: 'Which businesses do you typically work with?',
    answer:
      'East African SMEs — retail, real-estate and property management, logistics, service businesses — and early-stage startups and founders who need an AI-integrated MVP built quickly and affordably.',
  },
  {
    question: 'What do I need to prepare for the first call?',
    answer:
      'Nothing formal. If it\u2019s convenient, have an idea of where your data lives — CRM, spreadsheets, WhatsApp groups, booking systems — and the process you\u2019d most like to automate.',
  },
];