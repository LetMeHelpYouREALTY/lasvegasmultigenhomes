import { siteConfig } from '@/config/site.config';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy for Las Vegas Multi-Generational Homes and Dr. Jan Duffy real estate services.',
  path: '/privacy',
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 text-slate-600 leading-relaxed">
      <h1 className="font-display text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p>
        {siteConfig.name} ({siteConfig.url}) is operated by {siteConfig.agent.name} and {siteConfig.agent.brokerage}.
        We respect your privacy and only collect information you voluntarily provide through phone, email, or
        contact forms.
      </p>
      <h2 className="mt-8 font-display text-xl font-bold text-slate-900">Information we collect</h2>
      <ul>
        <li>Name, email, phone number when you contact us</li>
        <li>Property preferences shared during consultations</li>
        <li>Analytics data via Google Analytics (page views, device type)</li>
      </ul>
      <h2 className="mt-8 font-display text-xl font-bold text-slate-900">How we use information</h2>
      <p>
        We use your information to respond to inquiries, schedule showings, and provide real estate services.
        We do not sell personal information to third parties.
      </p>
      <h2 className="mt-8 font-display text-xl font-bold text-slate-900">Contact</h2>
      <p>
        Questions: {siteConfig.agent.email} · {siteConfig.agent.phone} · {siteConfig.address.formatted}
      </p>
    </div>
  );
}
