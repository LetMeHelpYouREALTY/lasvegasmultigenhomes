import type { SchemaObject } from '@/lib/schema-types';

type JsonLdProps = {
  data: SchemaObject | SchemaObject[];
};

export function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
