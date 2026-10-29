export const siteConfig = {
  name: 'Las Vegas Multi-Generational Homes',
  shortName: 'Las Vegas Multi-Gen Homes',
  description:
    'Multi-generational homes in Las Vegas and West Summerlin with dual master suites, casitas, and flexible living spaces. Dr. Jan Duffy, Berkshire Hathaway HomeServices.',
  url: 'https://www.lasvegasmultigenhomes.com',
  ogImage:
    'https://photos.cribflyer-proxy.com/cdn-cgi/image/width=1200,height=630,fit=crop,rotate=0,format=auto,quality=85/4616/65307/3298839/photo.jpg',
  agent: {
    name: 'Dr. Jan Duffy',
    license: 'S.0197614.LLC',
    team: 'The Summerlin West Team',
    brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
    phone: '702-550-0112',
    phoneTel: '+17025500112',
    email: 'DrJanSells@OpenHouseUpdates.com',
    image:
      'https://assets.cribflyer-proxy.com/cdn-cgi/image/width=200,height=200,gravity=face,fit=crop,rotate=0,format=auto,quality=85/4616/2/3292100/asset.jpg',
  },
  address: {
    street: '11312 Parkside Way',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89138',
    country: 'US',
    formatted: '11312 Parkside Way, Las Vegas, NV 89138',
  },
  geo: {
    latitude: 36.1699,
    longitude: -115.1398,
  },
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
    { days: ['Saturday'], opens: '10:00', closes: '16:00' },
    { days: ['Sunday'], opens: '00:00', closes: '00:00', note: 'By appointment' },
  ],
  areasServed: [
    'Summerlin West',
    'Summerlin North',
    'Summerlin South',
    'Henderson',
    'North Las Vegas',
    'Las Vegas',
  ],
  property: {
    address: '11312 Parkside Way',
    neighborhood: 'Vistas at West Summerlin',
    beds: 4,
    baths: 3,
    headline: 'Dual Master Suites in Vistas at West Summerlin',
    heroImage:
      'https://photos.cribflyer-proxy.com/cdn-cgi/image/width=1200,height=630,fit=crop,rotate=0,format=auto,quality=85/4616/65307/3298839/photo.jpg',
    gallery: [
      'https://photos.cribflyer-proxy.com/cdn-cgi/image/width=800,height=600,fit=crop,rotate=0,format=auto,quality=85/4616/65307/3298839/photo.jpg',
      'https://photos.cribflyer-proxy.com/cdn-cgi/image/width=800,height=600,fit=crop,rotate=0,format=auto,quality=85/4616/65307/3298840/photo.jpg',
      'https://photos.cribflyer-proxy.com/cdn-cgi/image/width=800,height=600,fit=crop,rotate=0,format=auto,quality=85/4616/65307/3298841/photo.jpg',
    ],
  },
  realscout: {
    agentEncodedId: 'QWdlbnQtMjI1MDUw',
  },
  analytics: {
    ga4: 'G-RZ48JCVXWJ',
  },
  links: {
    googleMaps: 'https://www.google.com/maps/search/?api=1&query=11312+Parkside+Way,+Las+Vegas,+NV+89138',
    googleReviews: 'https://www.google.com/maps/search/?api=1&query=Dr+Jan+Duffy+Summerlin+Las+Vegas',
  },
} as const;

export type SiteConfig = typeof siteConfig;
