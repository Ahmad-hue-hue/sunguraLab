import type { Metadata } from 'next';

import Hero from '@/components/sections/about/Hero';
import OurStory from '@/components/sections/about/OurStory';
import Features from '@/components/sections/about/Features';
import TeamMembers from '@/components/sections/about/TeamMembers';
import OurCulture from '@/components/sections/about/OurCulture';
import Excellence from '@/components/sections/about/Excellence';
import Testimonials from '@/components/sections/about/Testimonials';
import Careers from '@/components/sections/about/Careers';
import CallToAction from '@/components/sections/about/CallToAction';

export const metadata: Metadata = {
  title: 'About SunguraLabs — Meet the Team',
  description:
    'SunguraLabs is a two-person studio in Dar es Salaam building production-grade AI software — chatbots, automation, document processing and knowledge assistants at fixed prices.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About SunguraLabs — Meet the Team',
    description:
      'SunguraLabs is a two-person studio in Dar es Salaam building production-grade AI software — chatbots, automation, document processing and knowledge assistants at fixed prices.',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Hero />
      <div className="pageShell pageShellTightTop">
        <OurStory />
        <Features />
        <TeamMembers />
        <OurCulture />
        <Excellence />
        <Testimonials />
        <Careers />
        <CallToAction />
      </div>
    </>
  );
}
