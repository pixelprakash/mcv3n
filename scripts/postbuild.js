import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { createHash } from 'crypto';
import { join } from 'path';

const DIST = 'dist';
const HTML_FILE = join(DIST, 'index.html');

function computeHash(content) {
  return 'sha384-' + createHash('sha384').update(content).digest('base64');
}

let html = readFileSync(HTML_FILE, 'utf-8');
const inlineHashes = [];

// 1. Add integrity to external <script src="..."> tags
html = html.replace(/<script([^>]*)\ssrc="(\/assets\/[^"]+)"([^>]*)>/g, (match, before, src, after) => {
  if (match.includes('integrity')) return match;
  try {
    const filePath = join(DIST, src);
    const content = readFileSync(filePath);
    const hash = computeHash(content);
    return `<script${before} src="${src}"${after} integrity="${hash}" crossorigin="anonymous">`;
  } catch (e) {
    console.warn('Could not hash:', src);
    return match;
  }
});

// 2. Add integrity to <link rel="stylesheet" href="..."> tags
html = html.replace(/<link([^>]*)\shref="(\/assets\/[^"]+\.css)"([^>]*)\/?>/g, (match, before, href, after) => {
  if (match.includes('integrity')) return match;
  try {
    const filePath = join(DIST, href);
    const content = readFileSync(filePath);
    const hash = computeHash(content);
    return `<link${before} href="${href}"${after} integrity="${hash}" crossorigin="anonymous">`;
  } catch (e) {
    console.warn('Could not hash:', href);
    return match;
  }
});

// 3. Compute hashes for inline <script>...</script> blocks
html.replace(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g, (match, content) => {
  const trimmed = content.trim();
  if (trimmed.length > 0) {
    const hash = computeHash(trimmed);
    inlineHashes.push(`'${hash}'`);
  }
  return match;
});

writeFileSync(HTML_FILE, html);

console.log('\n✅ SRI hashes added to all external scripts and stylesheets');

if (inlineHashes.length > 0) {
  console.log('\n📋 Inline script hashes for CSP script-src:');
  inlineHashes.forEach(h => console.log('  ' + h));
  console.log('\nAdd these to your CSP script-src instead of unsafe-inline');
} else {
  console.log('\n✅ No inline scripts found — you can remove unsafe-inline from script-src');
}
