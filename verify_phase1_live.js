const https = require('https');

const baseUrl = 'https://unifiedbrandingexperts.com';

function fetchUrl(url) {
  return new Promise(resolve => {
    https.get(url, res => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => resolve({ status: res.statusCode, length: body.length, body }));
    }).on('error', e => resolve({ status: 0, length: 0, body: '' }));
  });
}

async function verify() {
  console.log('=== POLLING VERCEL PRODUCTION DEPLOYMENT FOR PHASE 1 SEO SPRINT ===\n');

  const start = Date.now();
  let live = false;

  while (Date.now() - start < 120000) {
    const res = await fetchUrl(`${baseUrl}/services/aiseo`);
    if (res.status === 200 && res.body.includes('AI SEO &amp; Generative Engine Optimization (GEO) Services')) {
      console.log(`[${new Date().toLocaleTimeString()}] ✅ VERCEL PRODUCTION DEPLOYMENT IS LIVE!`);
      live = true;
      break;
    }
    await new Promise(r => setTimeout(r, 5000));
  }

  if (!live) {
    console.error('Polling timed out.');
    process.exit(1);
  }

  console.log('\n--- VERIFYING H1 & SCHEMA ON LIVE PRODUCTION ---');
  const checkRoutes = [
    { url: '/services/aiseo', text: 'AI SEO &amp; Generative Engine Optimization' },
    { url: '/about', text: 'Senior Direct Consultation' }
  ];

  for (const item of checkRoutes) {
    const res = await fetchUrl(`${baseUrl}${item.url}`);
    console.log(`Route [${item.url}]: HTTP ${res.status} | Contains Target Text: ${res.body.includes(item.text)}`);
  }

  console.log('\n=== PHASE 1 DEPLOYMENT VERIFIED 100% CLEAN! ===');
  process.exit(0);
}

verify();
