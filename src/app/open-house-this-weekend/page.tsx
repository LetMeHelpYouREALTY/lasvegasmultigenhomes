import { HeroSection } from '@/components/sections/HeroSection';
import { ContactCard } from '@/components/sections/ContactCard';
import { siteConfig } from '@/config/site.config';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Open House This Weekend in Summerlin',
  description:
    'Open house this weekend in West Summerlin — tour a multi-generational home with dual master suites. Call 702-550-0112 for times.',
  path: '/open-house-this-weekend',
});

export default function OpenHouseThisWeekendPage() {
  return (
    <>
      <HeroSection
        title="Open House This Weekend"
        subtitle={`Tour ${siteConfig.property.headline} at ${siteConfig.property.address} — perfect for multi-gen families.`}
        image={siteConfig.property.heroImage}
        imageAlt="Open house this weekend Summerlin"
        primaryCta={{ label: `Call ${siteConfig.agent.phone}`, href: `tel:${siteConfig.agent.phoneTel}` }}
        secondaryCta={{ label: 'Get directions', href: siteConfig.links.googleMaps }}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-brand-orange/30 bg-orange-50 p-6">
              <h2 className="font-display text-xl font-bold text-slate-900">Weekend showing details</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li><strong>Property:</strong> {siteConfig.property.beds} bed / {siteConfig.property.baths} bath multi-gen home</li>
                <li><strong>Address:</strong> {siteConfig.address.formatted}</li>
                <li><strong>Neighborhood:</strong> {siteConfig.property.neighborhood}</li>
                <li><strong>Agent:</strong> {siteConfig.agent.name}</li>
              </ul>
              <p className="mt-4 text-sm text-slate-600">
                Times vary — call or text for the latest schedule. Private tours available if you cannot attend the open house.
              </p>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Bring your family and walk the dual master layout, oversized lot, and indoor-outdoor living spaces.
              Dr. Jan Duffy will answer questions about schools, HOA, and comparable sales in West Summerlin.
            </p>
          </div>
          <ContactCard title="Confirm open house time" />
        </div>
      </div>
    </>
  );
}
