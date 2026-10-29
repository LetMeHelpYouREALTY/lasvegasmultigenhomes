import { HeroSection } from '@/components/sections/HeroSection';
import { ContactCard } from '@/components/sections/ContactCard';
import { siteConfig } from '@/config/site.config';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Open Houses in Summerlin Las Vegas',
  description:
    'Summerlin open house schedule for multi-generational and dual master suite homes. Tour move-in ready listings with Dr. Jan Duffy.',
  path: '/open-houses-summerlin',
});

export default function OpenHousesSummerlinPage() {
  return (
    <>
      <HeroSection
        title="Summerlin Open Houses"
        subtitle="Tour multi-generational homes in West Summerlin — dual masters, oversized lots, and family-friendly floor plans."
        image={siteConfig.property.heroImage}
        imageAlt="Summerlin open house multi-gen home"
        primaryCta={{ label: 'This weekend', href: '/open-house-this-weekend' }}
        secondaryCta={{ label: 'Virtual tour', href: '/tour' }}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              Open houses are the fastest way to experience layout, natural light, and neighborhood feel before
              you commit to a private showing. Dr. Jan Duffy hosts tours across Summerlin West with emphasis on
              homes suited for extended family living.
            </p>
            <h2 className="font-display text-2xl font-bold text-slate-900">Featured listing</h2>
            <p>
              <strong>{siteConfig.property.headline}</strong> at {siteConfig.property.address} —{' '}
              {siteConfig.property.beds} bedrooms, {siteConfig.property.baths} bathrooms in{' '}
              {siteConfig.property.neighborhood}. Call {siteConfig.agent.phone} for the latest open house times.
            </p>
            <h2 className="font-display text-2xl font-bold text-slate-900">Areas we cover</h2>
            <p>
              Summerlin West, Summerlin North, Summerlin South, Henderson, and North Las Vegas. Request a custom
              tour if you prefer a private appointment outside published open house hours.
            </p>
          </div>
          <ContactCard title="Open house info" />
        </div>
      </div>
    </>
  );
}
