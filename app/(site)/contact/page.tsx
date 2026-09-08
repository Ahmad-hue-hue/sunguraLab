import type { Metadata } from 'next';

import Hero from '@/components/sections/contact/Hero';
import Support from '@/components/sections/contact/Support';
import DigitalPresence from '@/components/sections/contact/DigitalPresence';
import Faq from '@/components/sections/contact/Faq';

export const metadata: Metadata = {
  title: 'Contact SunguraLabs',
  description:
    'Contact SunguraLabs — hello@sunguralabs.com. Free 30–45 minute scoping call, then a fixed-price quote. Based in Dar es Salaam, working across East Africa.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact SunguraLabs',
    description:
      'Contact SunguraLabs — hello@sunguralabs.com. Free 30–45 minute scoping call, then a fixed-price quote. Based in Dar es Salaam, working across East Africa.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Hero />
      <div className="pageShell">
        <Support />
        <DigitalPresence />
        <Faq />
      </div>
    </>
  );
}
