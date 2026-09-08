const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Define SVG with high contrast symbol
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="#161616" rx="64"/>
  <g transform="translate(142, 40) scale(1.42)">
    <path fill="#FFFFFF" fill-rule="evenodd" clip-rule="evenodd" d="M76.084 155.821C76.084 135.088 88.587 116.592 107.697 109.049L129.56 100.419C137.954 97.1062 143.46 89.0118 143.46 79.9997V79.9997C143.46 67.8732 133.631 58.0441 121.504 58.0441H91.1396C77.4938 58.0441 66.4312 69.1067 66.4312 82.7525V129.98C66.4312 143.626 55.3686 154.688 41.7228 154.688V154.688C28.077 154.688 17.0144 143.626 17.0144 129.98V82.7525C17.0144 41.8159 50.203 8.6272 91.1396 8.6272H121.504C160.925 8.6272 192.877 40.5786 192.877 79.9997V79.9997C192.877 109.289 174.982 135.596 147.699 146.366L125.836 154.996C117.442 158.309 111.936 166.403 111.936 175.415V175.415C111.936 187.542 121.765 197.371 133.892 197.371H164.256C177.902 197.371 188.965 186.308 188.965 172.662V125.435C188.965 111.789 200.027 100.727 213.673 100.727V100.727C227.319 100.727 238.382 111.789 238.382 125.435V172.662C238.382 213.599 205.193 246.788 164.256 246.788H133.892C94.4712 246.788 62.5197 214.836 62.5197 175.415V175.415C62.5197 167.575 67.7538 159.98 76.084 155.821Z"/>
  </g>
</svg>`;

const publicDir = path.join(__dirname, '..', 'public');
const appDir = path.join(__dirname, '..', 'src', 'app');

async function generate() {
  const svgBuffer = Buffer.from(svgContent);

  // Write SVG file
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent);

  // Generate PNGs at required sizes
  const sizes = [
    { name: 'favicon-16x16.png', size: 16, target: publicDir },
    { name: 'favicon-32x32.png', size: 32, target: publicDir },
    { name: 'favicon-48x48.png', size: 48, target: publicDir },
    { name: 'favicon-96x96.png', size: 96, target: publicDir },
    { name: 'apple-touch-icon.png', size: 180, target: publicDir },
    { name: 'apple-icon.png', size: 180, target: publicDir },
    { name: 'icon-192x192.png', size: 192, target: publicDir },
    { name: 'icon-512x512.png', size: 512, target: publicDir },
    { name: 'web-app-manifest-192x192.png', size: 192, target: publicDir },
    { name: 'web-app-manifest-512x512.png', size: 512, target: publicDir },
    
    // Also place key icons inside src/app for Next.js convention routing fallback
    { name: 'icon.png', size: 512, target: appDir },
    { name: 'apple-icon.png', size: 180, target: appDir },
    { name: 'favicon.ico', size: 48, target: appDir },
    { name: 'favicon.ico', size: 48, target: publicDir }
  ];

  for (const item of sizes) {
    const filePath = path.join(item.target, item.name);
    await sharp(svgBuffer)
      .resize(item.size, item.size)
      .png()
      .toFile(filePath);
    console.log(`Generated: ${filePath}`);
  }
  console.log('Favicon generation complete!');
}

generate().catch(console.error);
