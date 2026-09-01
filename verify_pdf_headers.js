const https = require('https');
const pageUrl = 'https://unifiedbrandingexperts.com/work/fixoria-studio-brand-identity-system';
const pdfUrl = 'https://unifiedbrandingexperts.com/case-studies/fixoria/portfolio/fixoria-complete-portfolio.pdf';

console.log('=== VERIFYING DEPLOYED HEADERS FOR PDF FRAMING ===\n');

function checkUrl(url) {
  return new Promise(resolve => {
    https.get(url, res => {
      resolve({ status: res.statusCode, headers: res.headers });
    }).on('error', e => resolve({ status: 0, headers: {}, error: e.message }));
  });
}

async function verify() {
  const start = Date.now();
  while (Date.now() - start < 120000) {
    const pdfRes = await checkUrl(pdfUrl);
    console.log(`[${new Date().toLocaleTimeString()}] PDF Status: ${pdfRes.status} | X-Frame-Options: ${pdfRes.headers['x-frame-options'] || 'NONE'}`);

    if (pdfRes.status === 200 && pdfRes.headers['x-frame-options'] === 'SAMEORIGIN') {
      console.log('\n✅ VERCEL DEPLOYMENT IS LIVE WITH X-Frame-Options: SAMEORIGIN!');
      process.exit(0);
    }
    await new Promise(r => setTimeout(r, 5000));
  }
  console.log('Polling timed out');
  process.exit(1);
}

verify();
