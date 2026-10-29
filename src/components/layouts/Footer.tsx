import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export function Footer() {
  const { agent, address } = siteConfig;

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold text-white">{siteConfig.shortName}</p>
          <p className="mt-2 text-sm leading-relaxed">{siteConfig.description}</p>
          <p className="mt-4 text-xs text-slate-400">
            {agent.name} · License {agent.license}
            <br />
            {agent.team} · {agent.brokerage}
          </p>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden />
              <span>{address.formatted}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand-orange" aria-hidden />
              <a href={`tel:${agent.phoneTel}`} className="hover:text-white">{agent.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand-orange" aria-hidden />
              <a href={`mailto:${agent.email}`} className="hover:text-white">{agent.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden />
              <span>Mon–Fri 9am–6pm · Sat 10am–4pm · Sun by appointment</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-white">Quick links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/communities" className="hover:text-white">Community guides</Link></li>
            <li><Link href="/dual-master-suite-homes-las-vegas" className="hover:text-white">Dual master suite homes</Link></li>
            <li><Link href="/open-houses-summerlin" className="hover:text-white">Summerlin open houses</Link></li>
            <li><Link href="/tour" className="hover:text-white">Virtual tour</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy policy</Link></li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={siteConfig.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white/10 px-3 py-2 text-xs font-medium text-white hover:bg-white/20"
            >
              Directions
            </a>
            <a
              href={siteConfig.links.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-brand-orange px-3 py-2 text-xs font-medium text-white hover:bg-orange-600"
            >
              Google Reviews
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {agent.name}. All rights reserved.
      </div>
    </footer>
  );
}
