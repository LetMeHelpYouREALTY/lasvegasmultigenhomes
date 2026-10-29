import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/communities', label: 'Communities' },
  { href: '/dual-master-suite-homes-las-vegas', label: 'Dual Master Suites' },
  { href: '/open-houses-summerlin', label: 'Open Houses' },
  { href: '/tour', label: 'Virtual Tour' },
];

type HeaderProps = {
  className?: string;
};

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn('sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur', className)}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="font-display text-lg font-bold text-brand-blue sm:text-xl">
          {siteConfig.shortName}
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${siteConfig.agent.phoneTel}`}
          className="rounded-full bg-brand-orange px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
        >
          Call {siteConfig.agent.phone}
        </a>
      </div>
      <nav className="flex gap-2 overflow-x-auto border-t border-slate-100 px-4 py-2 md:hidden" aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
