import type { Metadata } from 'next';

import ProjectsHero from '@/components/sections/works/ProjectsHero';
import Projects from '@/components/sections/works/Projects';
import Portfolio from '@/components/sections/works/Portfolio';
import Excellence from '@/components/sections/works/Excellence';
import Testimonials from '@/components/sections/works/Testimonials';
import Partners from '@/components/sections/works/Partners';
import ContactUs from '@/components/sections/works/ContactUs';
import ProjectScreens from '@/components/ui/ProjectScreens';

export const metadata: Metadata = {
  title: 'Our Builds',
  description:
    'The AI builds SunguraLabs delivers — chatbots, automation, document processing and knowledge assistants for East African businesses, at fixed prices in 1–4 weeks.',
  alternates: { canonical: '/works' },
  openGraph: {
    title: 'Our Builds',
    description:
      'The AI builds SunguraLabs delivers — chatbots, automation, document processing and knowledge assistants for East African businesses, at fixed prices in 1–4 weeks.',
    url: '/works',
  },
};

export default function WorksPage() {
  return (
    <>
      <ProjectScreens>
        <ProjectsHero />
      </ProjectScreens>
      <div className="pageShell pageShellFlush">
        <ProjectScreens>
          <Projects />
        </ProjectScreens>
        <ProjectScreens>
          <Portfolio />
        </ProjectScreens>
        <Excellence />
        <Testimonials />
        <Partners />
        <ContactUs />
      </div>
    </>
  );
}
