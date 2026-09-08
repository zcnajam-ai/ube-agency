async function checkLive() {
  const res = await fetch('https://unifiedbrandingexperts.com/', { cache: 'no-store' });
  const html = await res.text();
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  const descMatch = html.match(/<meta name="description" content="([^"]+)"/i);
  const iconMatches = html.match(/<link[^>]+rel="[^"]*icon[^"]*"[^>]*>/gi);

  console.log("=== LIVE PRODUCTION METADATA CHECK ===");
  console.log("Title:", titleMatch ? titleMatch[1] : "NOT FOUND");
  console.log("Description:", descMatch ? descMatch[1] : "NOT FOUND");
  console.log("Icons:", iconMatches ? iconMatches : "NONE");
}

checkLive();
