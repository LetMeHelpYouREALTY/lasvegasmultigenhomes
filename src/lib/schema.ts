import { siteConfig } from '@/config/site.config';
import type { SchemaObject } from '@/lib/schema-types';

export function buildLocalBusinessSchema(): SchemaObject {
  const { agent, address, geo, url } = siteConfig;

  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: `${agent.name} - ${siteConfig.shortName}`,
    description: siteConfig.description,
    url,
    image: agent.image,
    email: agent.email,
    telephone: agent.phoneTel,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    memberOf: {
      '@type': 'Organization',
      name: agent.brokerage,
    },
    areaServed: siteConfig.areasServed.map((name) => ({
      '@type': 'City',
      name,
      containedInPlace: { '@type': 'State', name: 'Nevada' },
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    sameAs: [siteConfig.links.googleMaps],
  };
}

export function buildFaqSchema(
  items: Array<{ question: string; answer: string }>,
): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildRealEstateListingSchema(): SchemaObject {
  const { property, url } = siteConfig;

  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.headline,
    description: siteConfig.description,
    url,
    image: property.heroImage,
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    numberOfRooms: property.beds,
    numberOfBathroomsTotal: property.baths,
  };
}
