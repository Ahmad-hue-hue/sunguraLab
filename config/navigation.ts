/**
 * Navigation.
 *
 * `mainNav` drives the desktop header tabs and the mobile menu.
 * `allPagesMenu` is the "All pages" dropdown in the desktop header.
 * `footerNav` drives the four link columns in the footer.
 */

export interface NavLink {
  label: string;
  href: string;
  /** External links open in a new tab and get rel="noreferrer". */
  external?: boolean;
}

export interface NavColumn {
  title: string;
  links: NavLink[];
}

/** Header tabs, in order, left to right. */
export const mainNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Works', href: '/works' },
];

/** Contents of the "All pages" dropdown in the desktop header. */
export const allPagesMenu: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Works', href: '/works' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

/** Footer link columns, in order, left to right. */
export const footerNav: NavColumn[] = [
  {
    title: 'Navigate',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'AI Chatbot', href: '/services#ai-chatbot' },
      { label: 'Internal Tools', href: '/services#internal-tools' },
      { label: 'Document Processing', href: '/services#document-processing' },
      { label: 'Knowledge Assistant', href: '/services#rag-assistant' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '/about#our-story' },
      { label: 'Our Team', href: '/about#our-team' },
      { label: 'Process', href: '/services#process' },
      { label: 'Pricing', href: '/services#pricing' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
];

/** Social profiles, used by the footer and the contact page. */
export const socialLinks: NavLink[] = [
  { label: 'WhatsApp', href: '#', external: true },
  { label: 'Facebook', href: '#', external: true },
  { label: 'X', href: '#', external: true },
  { label: 'Instagram', href: '#', external: true },
  { label: 'LinkedIn', href: '#', external: true },
];