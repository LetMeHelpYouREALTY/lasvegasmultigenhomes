import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllHyperlocalSlugs, getHyperlocalPage } from '@/content/hyperlocal-pages';
import { HyperlocalPageView } from '@/components/seo/HyperlocalPageView';
import { createPageMetadata } from '@/lib/metadata';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllHyperlocalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getHyperlocalPage(slug);
  if (!page) return {};

  return createPageMetadata({
    title: page.title,
    description: page.description,
    path: `/${slug}`,
  });
}

export default async function HyperlocalDynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getHyperlocalPage(slug);

  if (!page) {
    notFound();
  }

  return <HyperlocalPageView page={page} />;
}
