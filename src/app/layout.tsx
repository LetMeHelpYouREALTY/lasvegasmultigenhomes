import type { Metadata } from 'next';
import { Geist, Roboto_Condensed } from 'next/font/google';
import Script from 'next/script';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';
import { buildLocalBusinessSchema } from '@/lib/schema';
import '@/styles/globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const display = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  icons: {
    icon: 'https://cribflyer-publicsite.s3.amazonaws.com/favicon/256.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = siteConfig.analytics.ga4;

  return (
    <html lang="en" className={`${geistSans.variable} ${display.variable}`}>
      <body className="min-h-screen font-sans">
        <JsonLd data={buildLocalBusinessSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { page_location: '${siteConfig.url}' });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
