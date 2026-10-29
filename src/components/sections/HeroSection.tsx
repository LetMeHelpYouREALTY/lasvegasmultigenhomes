import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type HeroSectionProps = {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
};

export function HeroSection({
  title,
  subtitle,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  className,
}: HeroSectionProps) {
  return (
    <section className={cn('relative overflow-hidden bg-brand-dark text-white', className)}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/90 via-brand-dark/80 to-brand-orange/50" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <h1 className="max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-blue-50 sm:text-xl">{subtitle}</p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-4">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="rounded-lg bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
