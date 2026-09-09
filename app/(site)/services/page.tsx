import type { Metadata } from 'next';

import Hero from '@/components/sections/services/Hero';
import Expertise from '@/components/sections/services/Expertise';
import ServicesOverview from '@/components/sections/services/ServicesOverview';
import Services from '@/components/sections/services/Services';
import PricingPlan from '@/components/sections/services/PricingPlan';
import Comparison from '@/components/sections/services/Comparison';
import KeyFeatures from '@/components/sections/services/KeyFeatures';
import Benefits from '@/components/sections/services/Benefits';
import Faq from '@/components/sections/services/Faq';
import Process from '@/components/sections/services/Process';

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description:
    'SunguraLabs services — AI chatbot, internal tools & automation, document processing, content automation, knowledge assistants and custom apps. Fixed prices from $700, delivered in 1–4 weeks.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services & Pricing',
    description:
      'SunguraLabs services — AI chatbot, internal tools & automation, document processing, content automation, knowledge assistants and custom apps. Fixed prices from $700, delivered in 1–4 weeks.',
    url: '/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <div className="pageShell">
        <Expertise />
        {/* Hidden on phones: this section only lays out correctly above 810px. */}
        <div className="hidePhone">
          <ServicesOverview />
        </div>
        <Services />
        <PricingPlan />
        <Comparison />
        <KeyFeatures />
        <Benefits />
        <Faq />
        <Process />
      </div>
    </>
  );
}
