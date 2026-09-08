const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedImgPath = 'C:/Users/DELL/.gemini/antigravity/brain/0200cab5-7833-4723-aaa0-39320bb17977/.user_uploaded/media_1788899738768.png';
const publicDir = path.join(__dirname, '..', 'public');
const appDir = path.join(__dirname, '..', 'src', 'app');

async function generateFavicons() {
  console.log("Reading uploaded brand icon:", uploadedImgPath);

  // 1. Load uploaded image & find crop box of black mark
  const { data, info } = await sharp(uploadedImgPath).raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;

  let minX = w, maxX = 0, minY = h, maxY = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = data[idx], g = data[idx+1], b = data[idx+2], a = data[idx+3];
      const lum = (r + g + b) / 3;
      if (a > 50 && lum < 180) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;
  console.log(`Mark bounds: X=[${minX}..${maxX}] Y=[${minY}..${maxY}] (${cropW}x${cropH})`);

  // 2. Create smooth white-on-dark mark buffer and black-on-white mark buffer
  // We'll create a 1024x1024 high-res master icon buffer for crisp scaling
  const targetSize = 1024;
  const targetMarkHeight = Math.round(targetSize * 0.82); // 840px high
  const targetMarkWidth = Math.round((cropW / cropH) * targetMarkHeight); // ~534px wide

  // Create crop buffer of white symbol with alpha
  const whiteSymbolCrop = Buffer.alloc(cropW * cropH * 4);
  const blackSymbolCrop = Buffer.alloc(cropW * cropH * 4);

  for (let y = 0; y < cropH; y++) {
    for (let x = 0; x < cropW; x++) {
      const srcIdx = ((minY + y) * w + (minX + x)) * 4;
      const outIdx = (y * cropW + x) * 4;

      const r = data[srcIdx], g = data[srcIdx+1], b = data[srcIdx+2], a = data[srcIdx+3];
      let lum = (r + g + b) / 3;
      if (a < 50) lum = 255;

      let intensity = (255 - lum) / 255;
      if (intensity < 0.04) intensity = 0;
      if (intensity > 0.96) intensity = 1;

      // White symbol
      whiteSymbolCrop[outIdx] = 255;
      whiteSymbolCrop[outIdx+1] = 255;
      whiteSymbolCrop[outIdx+2] = 255;
      whiteSymbolCrop[outIdx+3] = Math.round(intensity * 255);

      // Black symbol
      blackSymbolCrop[outIdx] = 22;
      blackSymbolCrop[outIdx+1] = 22;
      blackSymbolCrop[outIdx+2] = 22;
      blackSymbolCrop[outIdx+3] = Math.round(intensity * 255);
    }
  }

  // Resize white symbol crop to high-res target mark size
  const whiteMarkResized = await sharp(whiteSymbolCrop, { raw: { width: cropW, height: cropH, channels: 4 } })
    .resize(targetMarkWidth, targetMarkHeight, { fit: 'fill', kernel: 'lanczos3' })
    .toBuffer();

  // Composite onto 1024x1024 solid dark obsidian (#161616) background with subtle rounded corners
  const padLeft = Math.round((targetSize - targetMarkWidth) / 2);
  const padTop = Math.round((targetSize - targetMarkHeight) / 2);

  const whiteMarkPng = await sharp(whiteSymbolCrop, { raw: { width: cropW, height: cropH, channels: 4 } })
    .resize(targetMarkWidth, targetMarkHeight, { fit: 'fill', kernel: 'lanczos3' })
    .png()
    .toBuffer();

  const masterDark = await sharp({
    create: {
      width: targetSize,
      height: targetSize,
      channels: 4,
      background: { r: 22, g: 22, b: 22, alpha: 1.0 }
    }
  })
  .composite([{ input: whiteMarkPng, left: padLeft, top: padTop }])
  .png()
  .toBuffer();

  // Also build high-resolution SVG embedding this exact master white symbol on dark obsidian
  const base64Png = masterDark.toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="#161616" rx="64"/>
  <image href="data:image/png;base64,${base64Png}" x="0" y="0" width="512" height="512"/>
</svg>`;

  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent);

  // Generate PNG and ICO files across all required dimensions
  const targets = [
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
    
    { name: 'icon.png', size: 512, target: appDir },
    { name: 'apple-icon.png', size: 180, target: appDir },
    { name: 'favicon.ico', size: 48, target: appDir },
    { name: 'favicon.ico', size: 48, target: publicDir }
  ];

  for (const item of targets) {
    const destPath = path.join(item.target, item.name);
    await sharp(masterDark)
      .resize(item.size, item.size, { fit: 'contain', kernel: 'lanczos3' })
      .png()
      .toFile(destPath);
    console.log(`Generated favicon asset: ${destPath}`);
  }

  console.log("Favicon suite updated with USER BRAND ICON successfully!");
}

generateFavicons().catch(err => {
  console.error("Favicon generation error:", err);
  process.exit(1);
});
