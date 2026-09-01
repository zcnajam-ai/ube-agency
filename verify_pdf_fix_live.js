const https = require('https');
const pageUrl = 'https://unifiedbrandingexperts.com/work/fixoria-studio-brand-identity-system';
const pdfUrl = 'https://unifiedbrandingexperts.com/case-studies/fixoria/portfolio/fixoria-complete-portfolio.pdf';

console.log('=== POLLING DEPLOYMENT FOR PDF VIEWER FIX ===\n');

function checkUrl(url) {
  return new Promise(resolve => {
    https.get(url, res => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => resolve({ status: res.statusCode, length: body.length, body }));
    }).on('error', e => resolve({ status: 0, length: 0, body: '' }));
  });
}

async function verify() {
  const start = Date.now();
  while (Date.now() - start < 120000) {
    const pageRes = await checkUrl(pageUrl);
    console.log(`[${new Date().toLocaleTimeString()}] Page Status: ${pageRes.status} | Length: ${pageRes.length}`);

    if (pageRes.status === 200 && pageRes.body.includes('Open Direct')) {
      console.log('\n✅ PRODUCTION BUILD CONTAINING ENHANCED PDF VIEWER IS LIVE!');
      const pdfRes = await checkUrl(pdfUrl);
      console.log(`PDF Direct Asset (${pdfUrl}): HTTP ${pdfRes.status} | Length: ${pdfRes.length} bytes`);
      process.exit(0);
    }
    await new Promise(r => setTimeout(r, 5000));
  }
  console.log('Polling timed out');
  process.exit(1);
}

verify();
