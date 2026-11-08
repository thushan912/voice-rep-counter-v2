import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const DEBUG_PORT = 9223;
const BASE = 'http://localhost:4321';

const jobs = [
  { url: '/', label: 'home-en', widths: [390, 768, 1280, 1440, 1680, 1920] },
  { url: '/it/', label: 'home-it', widths: [390, 1440] },
  { url: '/features/rest-timer/', label: 'feature-rest-timer', widths: [390, 1440] },
  { url: '/blog/how-to-pace-push-ups-with-a-spoken-count/', label: 'blog-post', widths: [390, 1440] },
  { url: '/how-it-works/', label: 'how-it-works', widths: [390, 768, 1440] },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const proc = spawn(
    CHROME,
    [
      '--headless=new',
      `--remote-debugging-port=${DEBUG_PORT}`,
      '--disable-gpu',
      '--no-first-run',
      '--no-default-browser-check',
      '--hide-scrollbars',
      `--user-data-dir=/tmp/vrc-chrome-${Date.now()}`,
      'about:blank',
    ],
    { stdio: 'ignore' },
  );

  let targets = [];
  for (let i = 0; i < 60; i += 1) {
    try {
      targets = await (await fetch(`http://127.0.0.1:${DEBUG_PORT}/json`)).json();
      if (targets.length > 0) break;
    } catch {
      /* not ready yet */
    }
    await sleep(250);
  }

  const pageTarget = targets.find((target) => target.type === 'page');
  if (!pageTarget) {
    proc.kill('SIGTERM');
    throw new Error('Could not find a Chrome page target.');
  }

  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });

  let msgId = 0;
  const pending = new Map();
  ws.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      pending.get(message.id)(message);
      pending.delete(message.id);
    }
  });

  const send = (method, params = {}) =>
    new Promise((resolve) => {
      const id = ++msgId;
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });

  mkdirSync('screenshots', { recursive: true });
  const report = [];

  for (const job of jobs) {
    for (const width of job.widths) {
      const mobile = width < 768;
      const height = mobile ? 844 : 1000;
      await send('Emulation.setDeviceMetricsOverride', {
        width,
        height,
        screenWidth: width,
        screenHeight: height,
        deviceScaleFactor: 2,
        mobile,
      });
      await send('Page.navigate', { url: `${BASE}${job.url}` });
      await sleep(1800);

      const evaluated = await send('Runtime.evaluate', {
        expression:
          '({ scrollWidth: document.documentElement.scrollWidth, innerWidth: window.innerWidth, clientWidth: document.documentElement.clientWidth, bodyScrollWidth: document.body ? document.body.scrollWidth : 0 })',
        returnByValue: true,
      });
      const values = evaluated.result?.result?.value ?? {};
      const overflow = values.scrollWidth > values.innerWidth + 1;

      const screenshot = await send('Page.captureScreenshot', {
        format: 'png',
        captureBeyondViewport: true,
        fromSurface: true,
      });
      const file = path.join('screenshots', `${job.label}-${width}.png`);
      writeFileSync(file, Buffer.from(screenshot.result.data, 'base64'));

      report.push({ label: job.label, width, ...values, overflow });
      console.log(`${overflow ? 'OVERFLOW' : 'ok'}  ${job.label} @ ${width}px  scrollWidth=${values.scrollWidth}  innerWidth=${values.innerWidth}  -> ${file}`);
    }
  }

  ws.close();
  proc.kill('SIGTERM');

  const failures = report.filter((entry) => entry.overflow);
  console.log('\nSummary:');
  console.table(report.map(({ label, width, scrollWidth, innerWidth, overflow }) => ({ label, width, scrollWidth, innerWidth, overflow })));
  if (failures.length > 0) {
    console.error(`\n${failures.length} viewport(s) have horizontal overflow.`);
    process.exit(1);
  }
  console.log('\nNo horizontal overflow detected at any tested viewport.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
