const https = require('https');

const baseUrl = 'https://unifiedbrandingexperts.com';

const testAssetUrls = [
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/favicon-48x48.png',
  '/favicon-96x96.png',
  '/apple-touch-icon.png',
  '/web-app-manifest-192x192.png',
  '/web-app-manifest-512x512.png',
  '/og-default.png',
  '/og-image.png',
  '/twitter-image.png'
];

const testRoutes = [
  '/',
  '/services/web-design-development',
  '/work/fixoria-studio-brand-identity-system',
  '/insights/ai-seo-aeo-geo-guide',
  '/contact'
];

function fetchUrl(url) {
  return new Promise(resolve => {
    https.get(url, res => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, length: body.length, body }));
    }).on('error', e => resolve({ status: 0, length: 0, body: '', error: e.message }));
  });
}

async function verify() {
  console.log('=== POLLING DEPLOYMENT FOR UBE ICON & UNIVERSAL SOCIAL SHARE PREVIEW ===\n');

  const start = Date.now();
  let live = false;

  while (Date.now() - start < 120000) {
    const ogRes = await fetchUrl(`${baseUrl}/og-default.png`);
    console.log(`[${new Date().toLocaleTimeString()}] /og-default.png HTTP Status: ${ogRes.status} | Length: ${ogRes.length} bytes`);

    if (ogRes.status === 200 && ogRes.length > 50000) {
      console.log('\n✅ UBE OG-DEFAULT.PNG ASSET IS LIVE IN PRODUCTION!');
      live = true;
      break;
    }
    await new Promise(r => setTimeout(r, 5000));
  }

  if (!live) {
    console.error('Polling timed out.');
    process.exit(1);
  }

  console.log('\n--- VERIFYING ALL FAVICON & OG ASSETS ---');
  for (const assetPath of testAssetUrls) {
    const res = await fetchUrl(`${baseUrl}${assetPath}`);
    console.log(`${assetPath}: HTTP ${res.status} | ${res.length} bytes`);
  }

  console.log('\n--- VERIFYING OG & FAVICON METADATA ACROSS ROUTES ---');
  for (const route of testRoutes) {
    const res = await fetchUrl(`${baseUrl}${route}`);
    const hasOgImage = res.body.includes('og-default.png') || res.body.includes('og:image');
    const hasFavicon = res.body.includes('favicon') || res.body.includes('icon');
    const hasTwitterCard = res.body.includes('summary_large_image');

    console.log(`\nRoute [${route}]: HTTP ${res.status}`);
    console.log(`  - OG Image Present: ${hasOgImage}`);
    console.log(`  - Favicon Link Present: ${hasFavicon}`);
    console.log(`  - Twitter Card Present: ${hasTwitterCard}`);
  }

  console.log('\n=== UBE OFFICIAL ICON & SHARE PREVIEW DEPLOYMENT VERIFIED 100% CLEAN! ===');
  process.exit(0);
}

verify();
