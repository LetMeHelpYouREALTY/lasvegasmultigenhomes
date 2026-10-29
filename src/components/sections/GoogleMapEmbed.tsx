import { siteConfig } from '@/config/site.config';

export function GoogleMapEmbed() {
  const query = encodeURIComponent(siteConfig.address.formatted);

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <iframe
        title={`Map showing ${siteConfig.address.formatted}`}
        src={`https://maps.google.com/maps?q=${query}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
        className="h-72 w-full border-0 sm:h-96"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </section>
  );
}
