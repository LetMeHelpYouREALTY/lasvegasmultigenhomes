import Link from 'next/link';
import { hyperlocalPages } from '@/content/hyperlocal-pages';
import { createPageMetadata } from '@/lib/metadata';
import type { SeoPageCategory } from '@/types/seo-page';

export const metadata = createPageMetadata({
  title: 'Multigenerational Home Communities & Search Guides',
  description:
    'Hyperlocal guides for multigenerational homes in Las Vegas, Summerlin, Henderson, and North Las Vegas — communities, casitas, dual masters, and buyer resources.',
  path: '/communities',
});

const categoryLabels: Record<SeoPageCategory, string> = {
  search: 'Buyer search guides',
  summerlin: 'Summerlin communities',
  henderson: 'Henderson communities',
  'north-las-vegas': 'North Las Vegas communities',
  'las-vegas': 'Las Vegas areas',
};

const categoryOrder: SeoPageCategory[] = [
  'search',
  'summerlin',
  'henderson',
  'north-las-vegas',
  'las-vegas',
];

export default function CommunitiesHubPage() {
  const grouped = categoryOrder.map((category) => ({
    category,
    label: categoryLabels[category],
    pages: hyperlocalPages.filter((p) => p.category === category),
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
        Multigenerational home guides for Las Vegas
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-600">
        Twenty-two hyperlocal pages covering realtor search terms, dual master suites, casitas, and popular
        communities in Summerlin, Henderson, and North Las Vegas. Each guide is written for families comparing
        layouts, schools, and commute — not generic national advice.
      </p>

      <div className="mt-12 space-y-12">
        {grouped.map(
          (group) =>
            group.pages.length > 0 && (
              <section key={group.category}>
                <h2 className="font-display text-xl font-bold text-slate-900">{group.label}</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.pages.map((page) => (
                    <li key={page.slug}>
                      <Link
                        href={`/${page.slug}`}
                        className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-brand-blue hover:shadow-md"
                      >
                        <span className="font-semibold text-slate-900">{page.title}</span>
                        <p className="mt-1 text-sm text-slate-500 line-clamp-2">{page.description}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ),
        )}
      </div>

      <div className="mt-12 rounded-2xl bg-brand-blue px-6 py-8 text-white">
        <h2 className="font-display text-xl font-bold">Start with a tour</h2>
        <p className="mt-2 text-blue-100">
          Featured dual master listing in Vistas at West Summerlin — open houses and private showings available.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/open-house-this-weekend" className="rounded-lg bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white">
            Open house this weekend
          </Link>
          <Link href="/dual-master-suite-homes-las-vegas" className="rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold">
            Dual master guide
          </Link>
        </div>
      </div>
    </div>
  );
}
