const fs = require('fs');
const path = require('path');

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Replace old social preview SVG and stock/project image URLs in openGraph & twitter metadata
      const oldImageRegexes = [
        /url:\s*["'`]https:\/\/unifiedbrandingexperts\.com\/images\/[^"'`]+["'`]/g,
        /url:\s*["'`]\/images\/ube-social-preview-2026\.svg["'`]/g,
        /images:\s*\[\s*["'`]https:\/\/unifiedbrandingexperts\.com\/images\/[^"'`]+["'`]\s*\]/g,
        /images:\s*\[\s*["'`]\/images\/ube-social-preview-2026\.svg["'`]\s*\]/g,
        /url:\s*project\.heroImage/g,
        /`https:\/\/unifiedbrandingexperts\.com\${article\.coverImage}`/g,
      ];

      if (content.includes('openGraph') || content.includes('twitter')) {
        // Replace url inside openGraph images array
        content = content.replace(/url:\s*["'`][^"'`]+["'`]/g, (match) => {
          if (match.includes('canonical') || match.includes('unifiedbrandingexperts.com/work') || match.includes('unifiedbrandingexperts.com/insights') || match.includes('unifiedbrandingexperts.com/services') || match.includes('unifiedbrandingexperts.com/contact') || match.includes('unifiedbrandingexperts.com/about') || match.includes('unifiedbrandingexperts.com/packages') || match.includes('authors')) {
            return match;
          }
          if (match.includes('heroImage') || match.includes('coverImage') || match.includes('project-') || match.includes('.jpg') || match.includes('.webp') || match.includes('.png') || match.includes('.svg')) {
            changed = true;
            return 'url: "https://unifiedbrandingexperts.com/og-default.png"';
          }
          return match;
        });

        // Replace twitter images array if present
        content = content.replace(/images:\s*\[\s*["'`][^"'`]+["'`]\s*\]/g, (match) => {
          if (match.includes('/og-default.png')) return match;
          changed = true;
          return 'images: ["https://unifiedbrandingexperts.com/og-default.png"]';
        });

        if (changed) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log('Updated metadata images in:', fullPath);
        }
      }
    }
  });
}

walk('src/app');
console.log('Done scanning and updating page metadata images.');
