type ServiceSchemaProps = {
  name: string;
  description: string;
  path: string;
  serviceType: string;
};

export default function ServiceSchema({ name, description, path, serviceType }: ServiceSchemaProps) {
  const url = `https://unifiedbrandingexperts.com${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    serviceType,
    url,
    provider: { "@id": "https://unifiedbrandingexperts.com/#organization" },
    areaServed: { "@type": "Country", name: "United States" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}
