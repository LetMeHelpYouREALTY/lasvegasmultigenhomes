import Image from 'next/image';
import Link from 'next/link';
import { HeroSection } from '@/components/sections/HeroSection';
import { ContactCard } from '@/components/sections/ContactCard';
import { GoogleMapEmbed } from '@/components/sections/GoogleMapEmbed';
import { RealScoutListings } from '@/components/realscout/RealScoutListings';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';
import { createPageMetadata } from '@/lib/metadata';
import { buildFaqSchema, buildRealEstateListingSchema } from '@/lib/schema';

export const metadata = createPageMetadata({
  title: 'Multi-Generational Homes for Sale in Las Vegas & Summerlin',
  description:
    'Find dual master suite and multi-generational homes in West Summerlin, Las Vegas. 4BR/3BA move-in ready homes with oversized lots. Dr. Jan Duffy, Berkshire Hathaway.',
  path: '/',
});

const faqItems = [
  {
    question: 'What is a multi-generational home in Las Vegas?',
    answer:
      'A multi-generational home includes flexible living spaces such as dual master suites, casitas, or separate living areas so extended family can live comfortably under one roof.',
  },
  {
    question: 'Where are multi-gen homes available in Summerlin?',
    answer:
      'West Summerlin neighborhoods like Vistas at West Summerlin offer dual master suite layouts, larger lots, and proximity to parks, trails, and top-rated schools.',
  },
  {
    question: 'How do I schedule a private showing?',
    answer: `Call ${siteConfig.agent.phone} or email ${siteConfig.agent.email} to schedule a private tour with Dr. Jan Duffy.`,
  },
];

export default function HomePage() {
  const { property } = siteConfig;

  return (
    <>
      <JsonLd data={[buildRealEstateListingSchema(), buildFaqSchema(faqItems)]} />

      <HeroSection
        title={`${property.beds} Beds · ${property.baths} Baths · Perfect Multi-Generational Home`}
        subtitle={`${property.headline} — move-in ready with an oversized lot in ${property.neighborhood}.`}
        image={property.heroImage}
        imageAlt={`Multi-generational home at ${property.address}, Las Vegas`}
        primaryCta={{ label: 'Schedule a showing', href: `tel:${siteConfig.agent.phoneTel}` }}
        secondaryCta={{ label: 'Virtual tour', href: '/tour' }}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-slate-900">
                Las Vegas multi-generational homes with dual master suites
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Whether you are combining households, caring for aging parents, or hosting adult children,
                multi-generational living requires thoughtful layout and privacy. Featured listings in
                West Summerlin include dual master suites, flexible bonus rooms, and outdoor space for
                gatherings — all within minutes of Red Rock Canyon, Downtown Summerlin, and top-rated schools.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-slate-900">Featured property gallery</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {property.gallery.map((src, index) => (
                  <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={src}
                      alt={`${property.neighborhood} multi-gen home photo ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-slate-900">Why families choose West Summerlin</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  'Dual master suites for privacy across generations',
                  'Oversized lots with room to entertain',
                  'Walkable trails, parks, and community amenities',
                  'Easy access to Henderson and North Las Vegas',
                ].map((item) => (
                  <li key={item} className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-slate-900">Browse multi-gen listings</h2>
              <p className="mt-2 text-slate-600">
                Search MLS listings curated for multi-generational buyers across Las Vegas Valley.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <RealScoutListings />
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-slate-900">Frequently asked questions</h2>
              <div className="mt-6 space-y-4">
                {faqItems.map((item) => (
                  <details key={item.question} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <summary className="cursor-pointer font-semibold text-slate-900">{item.question}</summary>
                    <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-slate-900">Visit our Summerlin location</h2>
              <p className="mt-2 text-slate-600">{siteConfig.address.formatted}</p>
              <div className="mt-6">
                <GoogleMapEmbed />
              </div>
            </section>
          </div>

          <ContactCard />
        </div>

        <section className="mt-16 rounded-2xl bg-brand-blue px-6 py-10 text-center text-white">
          <h2 className="font-display text-2xl font-bold">Ready to tour a multi-gen home?</h2>
          <p className="mt-2 text-blue-100">Private showings available this week in West Summerlin.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/open-house-this-weekend"
              className="rounded-lg bg-brand-orange px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600"
            >
              Open house this weekend
            </Link>
            <Link
              href="/dual-master-suite-homes-las-vegas"
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Dual master suite guide
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
