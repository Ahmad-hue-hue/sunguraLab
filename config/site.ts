/**
 * Site-wide settings.
 *
 * This is the first file to edit when you rebrand the template: name, logo,
 * contact details, social profiles and default SEO all live here.
 */

export interface SiteConfig {
  /** Brand name, used in <title> suffixes and the footer. */
  name: string;
  /** Short tagline shown in the footer under the logo. */
  tagline: string;
  /** Absolute production URL — drives canonical tags, OG urls and the sitemap. */
  url: string;
  /** Default metadata used by the root layout and any page that omits its own. */
  seo: {
    title: string;
    description: string;
    /** Relative path to the Open Graph image under /public. */
    ogImage: string;
    twitterCard: 'summary' | 'summary_large_image';
  };
  logo: {
    src: string;
    /** Intrinsic dimensions of the logo file, so next/image can reserve space. */
    width: number;
    height: number;
    alt: string;
  };
  favicon: string;
  contact: {
    email: string;
    phone: string;
    address: string;
    /** Booking link used by the "Book a call" style buttons. */
    bookingUrl: string;
    /** Google Maps embed URL shown on the contact page. */
    mapEmbedUrl: string;
  };
  /** Primary call-to-action reused by the header and several sections. */
  cta: {
    label: string;
    href: string;
  };
}

export const site: SiteConfig = {
  name: 'SunguraLabs',
  tagline: 'Build · Connect · Grow',
  url: 'https://sunguralabs.com',

  seo: {
    title:
      'SunguraLabs — AI-Integrated Software Development for East African Businesses',
    description:
      'SunguraLabs builds AI-integrated software for East African businesses — chatbots, automation, document processing and knowledge assistants grounded in your real data.',
    ogImage: '/assets/media/hero-robot.jpg',
    twitterCard: 'summary_large_image',
  },

  logo: {
    src: '/assets/media/sunguralabs-logo.svg',
    width: 210,
    height: 60,
    alt: 'SunguraLabs',
  },

  favicon: '/assets/media/sunguralabs-mark.svg',

  contact: {
    email: 'hello@sunguralabs.com',
    phone: '',
    address: 'Dar es Salaam, Tanzania',
    bookingUrl: '/contact',
    mapEmbedUrl: '',
  },

  cta: {
    label: 'Start a project',
    href: '/contact',
  },
};