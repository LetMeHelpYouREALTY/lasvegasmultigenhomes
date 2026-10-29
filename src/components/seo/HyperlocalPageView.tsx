import Link from 'next/link';
import { ContactCard } from '@/components/sections/ContactCard';
import { HeroSection } from '@/components/sections/HeroSection';
import { RealScoutListings } from '@/components/realscout/RealScoutListings';
import { JsonLd } from '@/components/seo/JsonLd';
import { getHyperlocalPage } from '@/content/hyperlocal-pages';
import { siteConfig } from '@/config/site.config';
import { buildFaqSchema } from '@/lib/schema';
import type { HyperlocalPage } from '@/types/seo-page';

type HyperlocalPageViewProps = {
  page: HyperlocalPage;
};

export function HyperlocalPageView({ page }: HyperlocalPageViewProps) {
  return (
    <>
      <JsonLd data={buildFaqSchema(page.faqs)} />

      <HeroSection
        title={page.h1}
        subtitle={page.heroSubtitle}
        image={siteConfig.property.heroImage}
        imageAlt={`${page.areaLabel} multigenerational homes — ${page.primaryKeyword}`}
        primaryCta={{ label: 'Call to tour', href: `tel:${siteConfig.agent.phoneTel}` }}
        secondaryCta={{ label: 'View open houses', href: '/open-houses-summerlin' }}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <article className="space-y-10">
            <p className="text-lg leading-relaxed text-slate-600">{page.intro}</p>

            {page.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-slate-900">{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-slate-600">{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="list-disc space-y-2 pl-5 text-slate-600">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-display text-xl font-bold text-slate-900">Search listings in {page.areaLabel}</h2>
              <p className="mt-2 text-sm text-slate-600">
                MLS search for multi-generational layouts — dual masters, casitas, and 4+ bedroom homes.
              </p>
              <div className="mt-4">
                <RealScoutListings />
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-slate-900">Frequently asked questions</h2>
              <div className="mt-6 space-y-4">
                {page.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <summary className="cursor-pointer font-semibold text-slate-900">{faq.question}</summary>
                    <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {page.relatedSlugs.length > 0 && (
              <section>
                <h2 className="font-display text-2xl font-bold text-slate-900">Related guides</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {page.relatedSlugs.map((slug) => {
                    const href =
                      slug === 'dual-master-suite-homes-las-vegas' ? '/dual-master-suite-homes-las-vegas' : `/${slug}`;
                    const label =
                      slug === 'dual-master-suite-homes-las-vegas'
                        ? 'Dual Master Suite Homes Las Vegas'
                        : getHyperlocalPage(slug)?.title ?? slug.replace(/-/g, ' ');

                    return (
                      <li key={slug}>
                        <Link
                          href={href}
                          className="block rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-brand-blue shadow-sm hover:border-brand-blue"
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}

            <p className="text-sm text-slate-500">
              Inventory changes weekly. Dr. Jan Duffy tours multigenerational layouts across the Las Vegas Valley —
              call {siteConfig.agent.phone} for current listings matching your family’s privacy, budget, and commute needs.
            </p>
          </article>

          <ContactCard title={`Tour ${page.areaLabel}`} />
        </div>
      </div>
    </>
  );
}
