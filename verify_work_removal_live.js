const https = require('https');
const workUrl = 'https://unifiedbrandingexperts.com/work';

console.log('=== POLLING DEPLOYMENT FOR REMOVAL OF 5 PLACEHOLDER PROJECTS ===\n');

function checkUrl(url) {
  return new Promise(resolve => {
    https.get(url, res => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => resolve({ status: res.statusCode, length: body.length, body }));
    }).on('error', e => resolve({ status: 0, length: 0, body: '' }));
  });
}

const removedSlugs = [
  'apex-storefront-engine',
  'vanguard-brand-system',
  'aura-health-mobile-app',
  'hyperscale-aiseo-paid-acquisition',
  'lumina-enterprise-digital-platform'
];

async function verify() {
  const start = Date.now();
  while (Date.now() - start < 120000) {
    const res = await checkUrl(workUrl);
    console.log(`[${new Date().toLocaleTimeString()}] Work Page Status: ${res.status} | Length: ${res.length}`);

    let foundRemoved = false;
    for (const slug of removedSlugs) {
      if (res.body.includes(slug)) {
        foundRemoved = true;
        break;
      }
    }

    if (res.status === 200 && !foundRemoved) {
      console.log('\n✅ VERCEL PRODUCTION DEPLOYMENT IS LIVE!');
      console.log('Zero target placeholder projects found in /work page!');
      process.exit(0);
    }
    await new Promise(r => setTimeout(r, 5000));
  }
  console.log('Polling timed out');
  process.exit(1);
}

verify();
