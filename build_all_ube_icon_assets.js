const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcIconPath = 'C:/Users/DELL/.gemini/antigravity/brain/0200cab5-7833-4723-aaa0-39320bb17977/.user_uploaded/media_1788288073308.png';

async function generateAssets() {
  console.log('=== GENERATING UBE OFFICIAL FAVICON AND SOCIAL PREVIEW ASSETS ===\n');

  if (!fs.existsSync(srcIconPath)) {
    console.error('Source icon file not found:', srcIconPath);
    process.exit(1);
  }

  // 1. Square Favicons and App Icons
  const squareSizes = [
    { name: 'public/favicon-16x16.png', size: 16 },
    { name: 'public/favicon-32x32.png', size: 32 },
    { name: 'public/favicon-48x48.png', size: 48 },
    { name: 'public/favicon-96x96.png', size: 96 },
    { name: 'public/apple-touch-icon.png', size: 180 },
    { name: 'public/apple-icon.png', size: 180 },
    { name: 'public/web-app-manifest-192x192.png', size: 192 },
    { name: 'public/web-app-manifest-512x512.png', size: 512 },
    { name: 'public/icon.png', size: 512 },
    { name: 'src/app/icon.png', size: 512 },
    { name: 'src/app/apple-icon.png', size: 180 },
  ];

  for (const item of squareSizes) {
    const dir = path.dirname(item.name);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    await sharp(srcIconPath)
      .resize(item.size, item.size, { fit: 'contain' })
      .png()
      .toFile(item.name);
    console.log(`Created: ${item.name} (${item.size}x${item.size})`);
  }

  // Copy 32x32 PNG to favicon.ico in both public and src/app
  const fav32Buffer = await sharp(srcIconPath).resize(32, 32).png().toBuffer();
  fs.writeFileSync('public/favicon.ico', fav32Buffer);
  fs.writeFileSync('src/app/favicon.ico', fav32Buffer);
  console.log('Created: public/favicon.ico & src/app/favicon.ico');

  // 2. 1200 x 630 px Social Share Images (OG & Twitter)
  // Background: #FAF7F6 with centered 460x460 icon
  const ogIconResized = await sharp(srcIconPath)
    .resize(460, 460, { fit: 'contain' })
    .toBuffer();

  const ogCanvas = await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 250, g: 247, b: 246, alpha: 1 } // #FAF7F6
    }
  })
  .composite([
    {
      input: ogIconResized,
      top: 85,
      left: 370
    }
  ])
  .png()
  .toBuffer();

  const ogFiles = [
    'public/og-default.png',
    'public/og-image.png',
    'public/twitter-image.png',
    'src/app/opengraph-image.png',
    'src/app/twitter-image.png',
  ];

  for (const file of ogFiles) {
    const dir = path.dirname(file);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(file, ogCanvas);
    console.log(`Created OG Asset: ${file} (1200x630)`);
  }

  console.log('\n✅ ALL UBE FAVICON AND OG ASSETS GENERATED CLEANLY!');
}

generateAssets();
