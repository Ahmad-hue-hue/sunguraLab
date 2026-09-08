/**
 * Footer call-to-action copy.
 *
 * The headline is split into parts so you can pick out phrases in the brand
 * accent colour without touching JSX — set `accent: true` on any part.
 */

export interface HeadlinePart {
  text: string;
  accent?: boolean;
}

export interface FooterCta {
  eyebrow: string;
  headline: HeadlinePart[];
  button: { label: string; href: string };
}

export const footerCta: FooterCta = {
  eyebrow: 'What are you waiting for?',
  headline: [
    { text: 'Ready to build ' },
    { text: 'something real', accent: true },
    { text: ' for your business?' },
  ],
  button: {
    label: 'Start a project',
    href: '/contact',
  },
};
