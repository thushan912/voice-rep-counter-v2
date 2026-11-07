import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const dist = 'dist';

const expectedRoutes = [
  'index.html',
  'it/index.html',
  'features/index.html',
  'it/features/index.html',
  'features/voice-rep-counting/index.html',
  'features/rest-timer/index.html',
  'features/custom-sessions/index.html',
  'features/sequential-workouts/index.html',
  'features/workout-history/index.html',
  'features/voice-settings/index.html',
  'it/features/voice-rep-counting/index.html',
  'it/features/rest-timer/index.html',
  'it/features/custom-sessions/index.html',
  'it/features/sequential-workouts/index.html',
  'it/features/workout-history/index.html',
  'it/features/voice-settings/index.html',
  'how-it-works/index.html',
  'it/how-it-works/index.html',
  'exercises/index.html',
  'exercises/push-up-rep-pacer/index.html',
  'exercises/squat-rep-timer/index.html',
  'exercises/plank-timer/index.html',
  'it/exercises/index.html',
  'it/exercises/push-up-rep-pacer/index.html',
  'it/exercises/squat-rep-timer/index.html',
  'it/exercises/plank-timer/index.html',
  'faq/index.html',
  'it/faq/index.html',
  'contact/index.html',
  'it/contact/index.html',
  'privacy/index.html',
  'it/privacy/index.html',
  'terms/index.html',
  'it/terms/index.html',
  'blog/index.html',
  'blog/how-to-pace-push-ups-with-a-spoken-count/index.html',
  'blog/how-long-to-rest-between-workout-sets/index.html',
  'blog/bodyweight-circuit-rep-rest-timers/index.html',
  'blog/voice-rep-timer-vs-automatic-rep-detection/index.html',
  'it/blog/index.html',
  'it/blog/come-scandire-i-piegamenti-con-un-conteggio-vocale/index.html',
  'it/blog/timer-vocale-vs-rilevamento-automatico/index.html',
  '404.html',
  'robots.txt',
  'sitemap-index.xml',
  'favicon.svg',
];

const expectedAssets = [
  'assets/images/Custom-Workout-Sessions.webp',
  'assets/images/Desktop-Hero-Background.webp',
  'assets/images/Main-App-Mockup.webp',
  'assets/images/Rest-Timer.webp',
  'assets/images/Social-Sharing-Image.webp',
  'assets/images/Voice-Rep-Counting.webp',
  'assets/images/og-cover.jpg',
  'assets/brand/google-play-badge.png',
  'assets/brand/app-store-badge.svg',
];

let failures = 0;

const missingRoutes = expectedRoutes.filter((route) => !existsSync(path.join(dist, route)));
if (missingRoutes.length > 0) {
  failures += missingRoutes.length;
  console.error('Missing routes:', missingRoutes);
} else {
  console.log(`OK — ${expectedRoutes.length} expected routes present.`);
}

const missingAssets = expectedAssets.filter((asset) => !existsSync(path.join(dist, asset)));
if (missingAssets.length > 0) {
  failures += missingAssets.length;
  console.error('Missing assets:', missingAssets);
} else {
  console.log(`OK — ${expectedAssets.length} expected assets present.`);
}

// Check robots.txt references the sitemap.
const robots = await readFile(path.join(dist, 'robots.txt'), 'utf8');
if (!robots.includes('sitemap-index.xml')) {
  failures += 1;
  console.error('robots.txt does not reference sitemap-index.xml');
} else {
  console.log('OK — robots.txt references the sitemap.');
}

// Verify no HTML references a missing local asset (simple src/href scan).
async function walkHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walkHtmlFiles(full)));
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

const htmlFiles = await walkHtmlFiles(dist);
const localRefPattern = /(?:src|href)="(\/(?:assets|_astro)\/[^"]+)"/g;
const referenced = new Set();
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(localRefPattern)) {
    referenced.add(match[1]);
  }
}

const brokenRefs = [...referenced].filter((ref) => !existsSync(path.join(dist, ref)));
if (brokenRefs.length > 0) {
  failures += brokenRefs.length;
  console.error('Broken local asset references:', brokenRefs);
} else {
  console.log(`OK — ${referenced.size} referenced local asset paths resolve.`);
}

if (failures > 0) {
  console.error(`\nVerify FAILED with ${failures} issue(s).`);
  process.exit(1);
} else {
  console.log('\nVerify PASSED.');
}
