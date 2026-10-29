import Script from 'next/script';
import { siteConfig } from '@/config/site.config';

type RealScoutListingsProps = {
  className?: string;
};

export function RealScoutListings({ className }: RealScoutListingsProps) {
  const agentId = siteConfig.realscout.agentEncodedId;

  return (
    <div className={className}>
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        strategy="afterInteractive"
      />
      <div
        dangerouslySetInnerHTML={{
          __html: `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="STATUS_AND_SIGNIFICANT_CHANGE" listing-status="For Sale" property-types="SFR,MF" price-min="300000" price-max="2000000"></realscout-office-listings>`,
        }}
      />
    </div>
  );
}
