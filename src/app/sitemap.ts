import type { MetadataRoute } from 'next';
import { getAllHyperlocalSlugs } from '@/content/hyperlocal-pages';
import { siteConfig } from '@/config/site.config';

const staticRoutes = [
  '/',
  '/communities',
  '/dual-master-suite-homes-las-vegas',
  '/open-houses-summerlin',
  '/open-house-this-weekend',
  '/tour',
  '/privacy',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const hyperlocalRoutes = getAllHyperlocalSlugs().map((slug) => `/${slug}`);
  const allRoutes = [...staticRoutes, ...hyperlocalRoutes];

  return allRoutes.map((path) => ({
    url: path === '/' ? base : `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' || path === '/communities' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/communities' ? 0.9 : 0.75,
  }));
}
