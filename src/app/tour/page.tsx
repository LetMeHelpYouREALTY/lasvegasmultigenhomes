import Image from 'next/image';
import Link from 'next/link';
import { ContactCard } from '@/components/sections/ContactCard';
import { siteConfig } from '@/config/site.config';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Virtual Tour — Multi-Gen Home in West Summerlin',
  description:
    'Virtual tour of a multi-generational home with dual master suites in Vistas at West Summerlin, Las Vegas.',
  path: '/tour',
});

export default function TourPage() {
  const { property } = siteConfig;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
        <div>
          <h1 className="font-display text-3xl font-bold text-slate-900">Virtual property tour</h1>
          <p className="mt-3 text-slate-600">
            Preview {property.headline} before your in-person visit. Photos showcase dual masters, living areas,
            and outdoor space at {property.address}.
          </p>

          <div className="mt-8 space-y-6">
            {property.gallery.map((src, index) => (
              <div key={src} className="relative aspect-video overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={src}
                  alt={`Virtual tour image ${index + 1} — ${property.neighborhood}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          <p className="mt-8 text-slate-600">
            Want to walk the home in person?{' '}
            <Link href="/open-house-this-weekend" className="font-semibold text-brand-blue hover:underline">
              Check open house times
            </Link>{' '}
            or call {siteConfig.agent.phone}.
          </p>
        </div>
        <ContactCard title="Book a live tour" />
      </div>
    </div>
  );
}
