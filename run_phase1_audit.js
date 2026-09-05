const fs = require('fs');
const path = require('path');

console.log('=== UNIFIED BRANDING EXPERTS - PHASE 1 COMPREHENSIVE GAP AUDIT ===\n');

// 1. Technical Infrastructure
console.log('--- 1. TECHNICAL INFRASTRUCTURE ---');
const techFiles = [
  'src/app/robots.ts',
  'src/app/sitemap.ts',
  'src/app/llms.txt/route.ts',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/llms.txt',
  'public/favicon.ico',
  'public/og-default.png'
];

techFiles.forEach(f => {
  console.log(`- ${f}: ${fs.existsSync(f) ? '✅ EXISTS' : '❌ MISSING'}`);
});

// 2. Metadata & Headings Audit
console.log('\n--- 2. METADATA & HEADINGS AUDIT ---');
const keyRoutes = [
  { slug: 'home', file: 'src/app/page.tsx', heroComp: 'src/components/home/Hero.tsx' },
  { slug: 'about', file: 'src/app/about/page.tsx' },
  { slug: 'services', file: 'src/app/services/page.tsx' },
  { slug: 'web-design-development', file: 'src/app/services/web-design-development/page.tsx' },
  { slug: 'shopify-development', file: 'src/app/services/shopify-development/page.tsx' },
  { slug: 'ecommerce', file: 'src/app/services/ecommerce/page.tsx' },
  { slug: 'branding', file: 'src/app/services/branding/page.tsx' },
  { slug: 'digital-marketing', file: 'src/app/services/digital-marketing/page.tsx' },
  { slug: 'aiseo', file: 'src/app/services/aiseo/page.tsx' },
  { slug: 'packages', file: 'src/app/packages/page.tsx' },
  { slug: 'work', file: 'src/app/work/page.tsx' },
  { slug: 'insights', file: 'src/app/insights/page.tsx' },
  { slug: 'contact', file: 'src/app/contact/page.tsx' }
];

keyRoutes.forEach(r => {
  const content = fs.existsSync(r.file) ? fs.readFileSync(r.file, 'utf8') : '';
  const heroContent = r.heroComp && fs.existsSync(r.heroComp) ? fs.readFileSync(r.heroComp, 'utf8') : '';
  const combined = content + '\n' + heroContent;

  const h1Match = combined.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const titleMatch = content.match(/title:\s*["'`]?([^"'`\n,]+)["'`]?/i) || content.match(/title:\s*{\s*default:\s*["'`]?([^"'`\n,]+)["'`]?/i);
  const descMatch = content.match(/description:\s*["'`]?([^"'`\n]+)["'`]?/i);

  console.log(`\nRoute [${r.slug}]:`);
  console.log(`  H1: ${h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ') : '❌ MISSING'}`);
  console.log(`  Title: ${titleMatch ? titleMatch[1].trim() : 'Inherited from Layout'}`);
  console.log(`  Desc: ${descMatch ? descMatch[1].trim().substring(0, 70) + '...' : 'Inherited from Layout'}`);
});

// 3. Pricing Consistency Audit
console.log('\n--- 3. PRICING CONSISTENCY AUDIT ---');
const companyData = fs.readFileSync('src/data/company.ts', 'utf8');
const servicesData = fs.readFileSync('src/data/services.ts', 'utf8');

console.log('Prices in company.ts & services.ts:');
const companyPrices = companyData.match(/\$\d+/g) || [];
const servicePrices = servicesData.match(/\$\d+/g) || [];
console.log('  company.ts prices:', [...new Set(companyPrices)]);
console.log('  services.ts prices:', [...new Set(servicePrices)]);

// 4. Schema Org Audit
console.log('\n--- 4. STRUCTURED DATA (JSON-LD) AUDIT ---');
const schemaFile = 'src/components/seo/SchemaOrg.tsx';
if (fs.existsSync(schemaFile)) {
  const schemaContent = fs.readFileSync(schemaFile, 'utf8');
  console.log('- SchemaOrg.tsx Exists: ✅');
  console.log('  Organization Schema:', schemaContent.includes('"Organization"') ? '✅' : '❌');
  console.log('  WebSite Schema:', schemaContent.includes('"WebSite"') ? '✅' : '❌');
  console.log('  Service Schema:', schemaContent.includes('"Service"') ? '✅' : '❌');
  console.log('  BreadcrumbList Schema:', schemaContent.includes('"BreadcrumbList"') ? '✅' : '❌');
  console.log('  Article Schema:', schemaContent.includes('"Article"') ? '✅' : '❌');
} else {
  console.log('❌ SchemaOrg.tsx MISSING');
}

// 5. Claims & Testimonials Audit
console.log('\n--- 5. CLAIMS & TESTIMONIALS (OWNER VERIFICATION FLAGS) ---');
function searchClaims(dir) {
  const claims = ['200+', '90%', '15+', '4.9', 'Trustpilot'];
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) searchClaims(p);
    else if (f.endsWith('.ts') || f.endsWith('.tsx')) {
      const c = fs.readFileSync(p, 'utf8');
      claims.forEach(cl => {
        if (c.includes(cl)) console.log(`  Found "${cl}" in ${p}`);
      });
    }
  });
}
searchClaims('src');

// 6. E-E-A-T & Author Reviewer Audit
console.log('\n--- 6. E-E-A-T & AUTHOR REVIEWER AUDIT ---');
const insightsData = fs.readFileSync('src/data/insights.ts', 'utf8');
const authorMatches = insightsData.match(/author:\s*{[^}]+}/g) || [];
console.log('Authors in insights.ts:', authorMatches.length);
console.log('Reviewer metadata in insights.ts:', insightsData.includes('reviewer') ? '✅ EXISTS' : '❌ MISSING');
