/**
 * Homepage hero content.
 */

export interface HeroStat {
  value: string;
  /** Rendered immediately after the value, e.g. the "+" in "50+". */
  suffix?: string;
  label: string;
}

export interface HeroContent {
  badge: {
    text: string;
    starsIcon: string;
    avatarIcon: string;
  };
  heading: string;
  subheading: string;
  primaryCta: { label: string; href: string };
  note: { text: string; icon: string };
  stats: HeroStat[];
  marquee: {
    title: string;
    /** Logos cycle infinitely; the component duplicates the list itself. */
    logos: { src: string; alt: string }[];
  };
  background: {
    pattern: string;
    lightLeft: string;
    lightRight: string;
  };
}

export const hero: HeroContent = {
  badge: {
    text: 'Fixed prices · 1–4 weeks to ship',
    starsIcon: '/assets/media/InL2lTTFiMLfaRpROnHZUbLtMKE.svg',
    avatarIcon: '/assets/media/WxkrmjQWjYAfP1IM3c93O6EITAc.svg',
  },

  heading: 'We build AI into your real operations.',
  subheading:
    'Fixed prices. Delivered in weeks. Grounded in the systems East African businesses already run.',

  primaryCta: { label: 'Start a project', href: '/contact' },

  note: {
    text: 'Free 30-minute scoping call — leave with a fixed-price quote',
    icon: '/assets/media/Q4pdwonAT329eMKcy1U33qS8WY.svg',
  },

  stats: [
    { value: '78%', label: 'of SMEs sell primarily through WhatsApp' },
    { value: '391%', label: 'more conversions when you respond within a minute' },
    { value: '86%', label: 'still enter invoice and record data by hand' },
    { value: '1–4', label: 'weeks to ship a production-grade build' },
  ],

  marquee: {
    title: 'Trusted by forward-thinking businesses',
    logos: [
      { src: '/assets/media/brands/meta.svg', alt: 'Meta' },
      { src: '/assets/media/brands/openai.svg', alt: 'OpenAI' },
      { src: '/assets/media/brands/anthropic.svg', alt: 'Anthropic' },
      { src: '/assets/media/brands/google.svg', alt: 'Google' },
      { src: '/assets/media/brands/mistral-ai.svg', alt: 'Mistral AI' },
      { src: '/assets/media/brands/hugging-face.svg', alt: 'Hugging Face' },
    ],
  },

  background: {
    pattern: '/assets/media/BtlaHSBVpP1o4SpXdJy2V9cdWF0.png',
    lightLeft: '/assets/media/uYkLP5SiUycWQryE3EWbrjbhiE.svg',
    lightRight: '/assets/media/OEy9gAODlW0zXdPu7Uts9Eeyk.svg',
  },
};