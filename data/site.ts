/**
 * SunguraLabs — single source of truth for site content.
 * All facts sourced from the SunguraLabs business proposal — do not invent claims.
 * Contact + social links keep the same placeholders (`#`) as the original site
 * until the real links are provided.
 */

export const company = {
  name: 'SunguraLabs',
  tagline: 'Build · Connect · Grow',
  kicker: 'Custom Software Development Solutions',
  blurb:
    'AI-integrated software development for East African businesses — grounded in your real data, priced for your reality.',
  location: 'Dar es Salaam, Tanzania',
  locationNote: 'Remote-friendly',
  email: 'hello@sunguralabs.com',
  domain: 'sunguralabs.com',
};

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const nav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Works', href: '/works' },
  { label: 'Contact', href: '/contact' },
];

export interface Social {
  label: string;
  href: string;
}

export const socials: Social[] = [
  { label: 'WhatsApp', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'X', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
];

export interface Service {
  slug: string;
  name: string;
  short: string;
  description: string;
  price: string;
  outcome: string;
}

export const services: Service[] = [
  {
    slug: 'ai-chatbot',
    name: 'AI Chatbot & Customer Support',
    short: 'Chatbots wired to your real systems, across every channel.',
    description:
      "Goes beyond Meta's free native WhatsApp AI agent by connecting the chatbot to your actual inventory, booking system or CRM — and extending it to Instagram DMs and your website, not just WhatsApp. Responses are grounded in your business's own data, not generic answers.",
    price: '$900',
    outcome: 'Instant, accurate replies grounded in your own records.',
  },
  {
    slug: 'internal-tools',
    name: 'AI-Powered Internal Tools & Automation',
    short: 'Turn scattered data into summaries, alerts and reports.',
    description:
      'Connects your existing data — spreadsheets, CRM, inventory — to an AI layer that summarizes activity, flags anomalies, and auto-generates reports so your team stops doing it by hand.',
    price: '$1,400',
    outcome: 'Less manual reporting, earlier warning on what matters.',
  },
  {
    slug: 'document-processing',
    name: 'AI Document & Data Processing',
    short: 'Invoices and forms become structured data automatically.',
    description:
      'OCR plus AI extraction that turns invoices, receipts, contracts and forms into structured, usable data automatically — cutting the manual entry that costs an estimated $15–40 in labor per invoice.',
    price: '$1,200',
    outcome: 'Documents in, clean structured data out — no re-typing.',
  },
  {
    slug: 'content-automation',
    name: 'AI Content & Marketing Automation',
    short: 'On-brand product copy, captions and replies at scale.',
    description:
      'Auto-generates product descriptions, social captions, and email replies matched to your brand voice — so marketing keeps pace without adding headcount.',
    price: '$700',
    outcome: 'Consistent, on-brand content produced in a fraction of the time.',
  },
  {
    slug: 'rag-assistant',
    name: 'Custom AI Knowledge Assistant (RAG)',
    short: 'An assistant that answers from your own documents.',
    description:
      'Feeds your company\u2019s own documents, policies or product catalog into an AI assistant that employees or customers can query directly — answers grounded in your knowledge, not the open internet.',
    price: '$1,800',
    outcome: 'Your policies and catalog, answerable in plain language.',
  },
  {
    slug: 'custom-development',
    name: 'Custom Web Apps & SaaS',
    short: 'Full product builds, API integrations and maintenance.',
    description:
      'Custom web application and SaaS product development, API integrations, and ongoing maintenance — built on the same production-grade stack we use for every engagement.',
    price: 'Quoted',
    outcome: 'A production app built and maintained by the people who talk to you.',
  },
];

export const retainer = {
  name: 'Monthly Maintenance & Support Retainer',
  price: '$200/mo',
  description:
    'Optional ongoing support and maintenance after launch — move onto the retainer whenever you\u2019re ready.',
};

export const pricingNote =
  'Fixed-price per project — no hourly billing, so you know the total cost upfront. Priced against 2026 market data: developer-built AI chatbots run $1,000–$5,000 globally and agency builds start at $5,000+. We price at the affordable end while staying sustainable for a focused two-person studio.';

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  {
    value: '78%',
    label:
      'of Sub-Saharan African SMEs sell primarily through WhatsApp — but handle it manually.',
  },
  {
    value: '391%',
    label:
      'more conversions when businesses respond within one minute. Most take 47 hours on average.',
  },
  {
    value: '86%',
    label:
      'of SMEs still enter invoice and record data by hand, at $15–40 in labor per invoice.',
  },
];

export interface WhyItem {
  title: string;
  body: string;
}

export const whyUs: WhyItem[] = [
  {
    title: 'Up to 80% below global agency pricing',
    body: 'Developer-built AI projects typically run $1,000–$5,000+ elsewhere; agency builds start at $5,000 and climb into six figures. We deliver the same core capability at East African cost structures.',
  },
  {
    title: 'Direct communication, no bureaucracy',
    body: 'A small team means you talk to the people actually building your product — not an account manager relaying messages.',
  },
  {
    title: 'Fast turnaround',
    body: 'Most projects delivered in 1–4 weeks depending on scope, built in focused 1–2 week sprints.',
  },
  {
    title: 'Production-grade AI, not no-code toys',
    body: 'Built on Claude/OpenAI, not templated no-code bots that plateau at basic FAQs.',
  },
  {
    title: 'We understand East African workflows',
    body: 'Based in Dar es Salaam, we know the payment methods and WhatsApp-first, high-inbound messaging habits that outside agencies miss.',
  },
  {
    title: 'Grounded in your actual data',
    body: 'We map your real records during the build, so the AI answers from your business — not from assumptions.',
  },
];

export interface Reason {
  stat: string;
  claim: string;
  detail: string;
}

export const threeReasons: Reason[] = [
  {
    stat: '80%',
    claim: 'Less than agency pricing',
    detail:
      'Fixed project fees, no retainers, no hourly surprises — priced for East African businesses.',
  },
  {
    stat: '1–4',
    claim: 'Weeks to ship',
    detail:
      'Production-grade AI systems shipped in weeks, not quarters. We stay small so we move fast.',
  },
  {
    stat: '2',
    claim: 'Builders, not managers',
    detail:
      'You work directly with Ahmad and Sultan — the people actually writing the code and training the models.',
  },
];

export interface BuildCard {
  num: string;
  category: string;
  title: string;
  description: string;
}

export const buildCards: BuildCard[] = [
  {
    num: '01',
    category: 'AI Chatbot',
    title: 'Conversational AI, every channel',
    description:
      'Chatbots wired to your inventory, bookings or CRM — on WhatsApp, Instagram and your site. Every answer grounded in your real data.',
  },
  {
    num: '02',
    category: 'Internal Tools',
    title: 'Automation that never sleeps',
    description:
      'Connect your data to an AI layer that summarises activity, flags anomalies and auto-generates reports. Your team stops doing it by hand.',
  },
  {
    num: '03',
    category: 'Data Processing',
    title: 'Reporting that writes itself',
    description:
      'Invoices, receipts and contracts become structured, usable data automatically — cutting the manual entry that costs $15–40 per invoice.',
  },
  {
    num: '04',
    category: 'RAG Assistant',
    title: 'Answers from your own docs',
    description:
      'Your company\u2019s documents become a queryable AI assistant. Answers grounded in your knowledge, not the open internet.',
  },
];

export interface Step {
  step: string;
  title: string;
  body: string;
}

export const process: Step[] = [
  {
    step: '01',
    title: 'Lightweight scoping call',
    body: 'A focused 30–45 minute call covering your workflow, data sources and systems to integrate — not a multi-week discovery sprint. Full discovery is only proportionate for much larger projects.',
  },
  {
    step: '02',
    title: 'Fixed-price quote & scope confirmation',
    body: 'You get a clear fixed-price quote and confirmed scope up front. No surprise costs.',
  },
  {
    step: '03',
    title: 'Development in 1–2 week sprints',
    body: 'We build in short sprints, including data-source mapping so the AI is grounded in your actual records rather than assumptions.',
  },
  {
    step: '04',
    title: 'Testing, delivery & handoff',
    body: 'We test, deliver, and walk your team through using it with a usage walkthrough.',
  },
  {
    step: '05',
    title: 'Post-launch support',
    body: 'Ongoing support after launch, with an optional move to the monthly retainer whenever it suits you.',
  },
];

export const tools = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'TanStack Query',
  'Supabase',
  'Python',
  'Claude / OpenAI',
  'LangChain',
  'WhatsApp Business API',
  'Vercel',
  'Stripe / Flutterwave',
];

export interface Client {
  title: string;
  body: string;
}

export const targetClients: Client[] = [
  {
    title: 'East African SMEs',
    body: 'Retail shops, real-estate & property managers, logistics operators, and service businesses — salons, clinics — in Dar es Salaam and across East Africa. Most sell through WhatsApp manually and still enter records by hand.',
  },
  {
    title: 'Early-stage startups & founders',
    body: 'Local or remote founders who need an AI-integrated MVP built quickly and affordably, without hiring a full in-house dev team. The real blocker is rarely the AI model — it\u2019s data fragmented across CRM, WhatsApp groups and Excel with no single source of truth.',
  },
];

export interface Founder {
  name: string;
  role: string;
  bio: string;
  focus: string[];
  photo: string;
}

export const team: Founder[] = [
  {
    name: 'Ahmad',
    role: 'Development & Technical Architecture',
    bio: 'A full-stack developer based in Dar es Salaam, working across React, Next.js, TypeScript, Supabase and Python in production settings, with additional experience in PHP, MySQL and Django.',
    focus: ['Development', 'Technical architecture', 'AI integration', 'Infrastructure'],
    photo: '/images/team-ahmad.jpg',
  },
  {
    name: 'Sultan Rais',
    role: 'Client Communication & Operations',
    bio: 'Leads client communication and project management, keeping delivery on track and client expectations clear — running engagements end-to-end from first call to post-launch support.',
    focus: ['Client communication', 'Project management', 'Business operations'],
    photo: '/images/team-sultan.jpg',
  },
];