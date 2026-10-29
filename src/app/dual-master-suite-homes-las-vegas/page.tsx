import Link from 'next/link';
import { HeroSection } from '@/components/sections/HeroSection';
import { ContactCard } from '@/components/sections/ContactCard';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';
import { createPageMetadata } from '@/lib/metadata';
import { buildFaqSchema } from '@/lib/schema';

export const metadata = createPageMetadata({
  title: 'Dual Master Suite Homes Las Vegas',
  description:
    'Explore dual master suite homes in Las Vegas and West Summerlin. Ideal for multi-generational families seeking privacy, space, and move-in ready layouts.',
  path: '/dual-master-suite-homes-las-vegas',
});

const faqItems = [
  {
    question: 'What is a dual master suite home?',
    answer:
      'A dual master suite home includes two primary bedrooms with ensuite bathrooms, giving multiple adult households private space while sharing common areas.',
  },
  {
    question: 'Are dual master suites common in Summerlin?',
    answer:
      'Yes. West Summerlin and nearby communities offer newer floor plans with dual masters, casitas, and bonus rooms designed for extended family living.',
  },
  {
    question: 'Can I finance a multi-generational home in Las Vegas?',
    answer:
      'Many buyers use conventional, FHA, or VA financing. Dr. Jan Duffy can connect you with trusted local lenders familiar with multi-gen purchases.',
  },
];

export default function DualMasterSuitePage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(faqItems)} />

      <HeroSection
        title="Dual Master Suite Homes in Las Vegas"
        subtitle="Privacy for every generation — explore layouts with two primary suites in West Summerlin and across the valley."
        image={siteConfig.property.heroImage}
        imageAlt="Dual master suite home in Las Vegas"
        primaryCta={{ label: 'Call to tour', href: `tel:${siteConfig.agent.phoneTel}` }}
        secondaryCta={{ label: 'Open houses', href: '/open-houses-summerlin' }}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <article className="max-w-none space-y-6 text-slate-600 leading-relaxed">
            <h2 className="font-display text-2xl font-bold text-slate-900">Why dual master suites matter for multi-gen families</h2>
            <p>
              Las Vegas families increasingly need homes that balance togetherness with privacy. Dual master
              suites allow parents, adult children, or grandparents to enjoy ensuite bathrooms, walk-in closets,
              and separation from main living areas — without sacrificing shared kitchens, dining, and outdoor space.
            </p>
            <h3 className="font-display text-xl font-bold text-slate-900">Top features buyers request</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>Two primary suites on separate wings or levels</li>
              <li>Casita or bonus room for guests or home office</li>
              <li>Open kitchen with large island for family meals</li>
              <li>3-car garage and RV parking in select communities</li>
              <li>Low-maintenance landscaping on larger lots</li>
            </ul>
            <h3 className="font-display text-xl font-bold text-slate-900">Neighborhoods to explore</h3>
            <p>
              Start in <strong>Vistas at West Summerlin</strong>, then compare inventory in Henderson, North Las Vegas,
              and established Summerlin villages.{' '}
              <Link href="/open-houses-summerlin">View Summerlin open houses</Link> or{' '}
              <Link href="/tour">take the virtual tour</Link> of our featured listing.
            </p>
          </article>
          <ContactCard title="Tour dual master homes" />
        </div>
      </div>
    </>
  );
}
