import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { cn } from '@/lib/utils';

type ContactCardProps = {
  title?: string;
  className?: string;
  variant?: 'sidebar' | 'inline';
};

export function ContactCard({ title = 'Schedule a showing', className, variant = 'sidebar' }: ContactCardProps) {
  const { agent, address } = siteConfig;
  const isSidebar = variant === 'sidebar';

  return (
    <aside
      className={cn(
        'rounded-2xl border border-slate-200 bg-white p-6 shadow-sm',
        isSidebar && 'lg:sticky lg:top-24',
        className,
      )}
    >
      <h2 className="font-display text-xl font-bold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">
        {agent.name} · {agent.team}
      </p>
      <p className="text-sm text-slate-500">{agent.brokerage}</p>

      <div className="mt-4 space-y-2 text-sm text-slate-600">
        <p className="flex items-start gap-2">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden />
          {address.formatted}
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <a
          href={`tel:${agent.phoneTel}`}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call {agent.phone}
        </a>
        <a
          href={`mailto:${agent.email}`}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-blue px-4 py-3 text-sm font-semibold text-brand-blue transition hover:bg-brand-blue hover:text-white"
        >
          <Mail className="h-4 w-4" aria-hidden />
          Email Dr. Jan
        </a>
        <a
          href={siteConfig.links.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300"
        >
          <MapPin className="h-4 w-4" aria-hidden />
          Get directions
        </a>
      </div>
    </aside>
  );
}
