const fs = require('fs');

const servicePages = [
  {
    file: 'src/app/services/shopify-development/page.tsx',
    name: 'Shopify Store Setup & Custom Theme Development Services',
    type: 'eCommerce Development',
    desc: 'End-to-end Shopify store setup and custom theme development. Custom Shopify Plus stores, dropshipping automation, and responsive checkout flows.',
    url: 'https://unifiedbrandingexperts.com/services/shopify-development',
    packageUrl: 'https://unifiedbrandingexperts.com/ecommerce-growth-packages',
    price: '450.00'
  },
  {
    file: 'src/app/services/ecommerce/page.tsx',
    name: 'eCommerce Growth Services for Shopify, Amazon, Etsy & eBay',
    type: 'eCommerce Growth & Multi-Channel Logistics',
    desc: 'Grow your online business across Shopify, Amazon, Etsy and eBay with high-converting storefronts, multichannel management, and fulfillment automation.',
    url: 'https://unifiedbrandingexperts.com/services/ecommerce',
    packageUrl: 'https://unifiedbrandingexperts.com/ecommerce-growth-packages',
    price: '450.00'
  },
  {
    file: 'src/app/services/branding/page.tsx',
    name: 'Branding Services & Custom Visual Identity Systems',
    type: 'Brand Strategy & Graphic Design',
    desc: 'Custom logo design, brand strategy, visual identity systems, brand guidelines, and packaging design built to make your business memorable.',
    url: 'https://unifiedbrandingexperts.com/services/branding',
    packageUrl: 'https://unifiedbrandingexperts.com/branding-packages',
    price: '299.00'
  },
  {
    file: 'src/app/services/digital-marketing/page.tsx',
    name: 'Digital Marketing Services for Search, Social & Paid Growth',
    type: 'Digital Marketing & Paid Media Management',
    desc: 'Integrated digital marketing services across Google Ads, Meta Ads (Facebook & Instagram), TikTok Shop marketing, and social media management.',
    url: 'https://unifiedbrandingexperts.com/services/digital-marketing',
    packageUrl: 'https://unifiedbrandingexperts.com/tiktok-marketing-packages',
    price: '349.00'
  },
  {
    file: 'src/app/services/aiseo/page.tsx',
    name: 'AI SEO & Generative Engine Optimization (GEO) Services',
    type: 'Search Engine Optimization & Generative AI Visibility',
    desc: 'Get found in Google AI Overviews, ChatGPT Search, Perplexity, and generative search engines with Answer Engine Optimization (AEO) and JSON-LD schema.',
    url: 'https://unifiedbrandingexperts.com/services/aiseo',
    packageUrl: 'https://unifiedbrandingexperts.com/ai-seo-packages',
    price: '349.00'
  }
];

servicePages.forEach(p => {
  if (!fs.existsSync(p.file)) return;
  let content = fs.readFileSync(p.file, 'utf8');

  if (content.includes('serviceSchema')) {
    console.log(`serviceSchema already exists in ${p.file}`);
    return;
  }

  const schemaObj = `  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "${p.name}",
    serviceType: "${p.type}",
    provider: {
      "@type": "Organization",
      name: "Unified Branding Experts",
      url: "https://unifiedbrandingexperts.com",
    },
    areaServed: "Worldwide",
    description: "${p.desc}",
    url: "${p.url}",
    offers: {
      "@type": "Offer",
      price: "${p.price}",
      priceCurrency: "USD",
      url: "${p.packageUrl}",
    },
  };\n`;

  // Insert serviceSchema inside function component
  const funcMatch = content.match(/export default function [^\(]+\(\) \{/);
  if (funcMatch) {
    content = content.replace(funcMatch[0], `${funcMatch[0]}\n${schemaObj}`);

    // Insert script tag in JSX return
    const jsxMatch = content.match(/<div className="pt-32[^">]*>/);
    if (jsxMatch) {
      content = content.replace(
        jsxMatch[0],
        `${jsxMatch[0]}\n      <script\n        type="application/ld+json"\n        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}\n      />`
      );
      fs.writeFileSync(p.file, content, 'utf8');
      console.log(`✅ Added serviceSchema to ${p.file}`);
    }
  }
});
