import { spawn } from 'node:child_process';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const proc = spawn(
    CHROME,
    [
      '--headless=new',
      '--remote-debugging-port=9224',
      '--disable-gpu',
      '--no-first-run',
      '--hide-scrollbars',
      `--user-data-dir=/tmp/vrc-diag-${Date.now()}`,
      'about:blank',
    ],
    { stdio: 'ignore' },
  );

  let targets = [];
  for (let i = 0; i < 60; i += 1) {
    try {
      targets = await (await fetch('http://127.0.0.1:9224/json')).json();
      if (targets.length) break;
    } catch {}
    await sleep(250);
  }

  const page = targets.find((t) => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((res, rej) => {
    ws.addEventListener('open', res, { once: true });
    ws.addEventListener('error', rej, { once: true });
  });

  let id = 0;
  const pending = new Map();
  ws.addEventListener('message', (e) => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) {
      pending.get(m.id)(m);
      pending.delete(m.id);
    }
  });
  const send = (method, params = {}) =>
    new Promise((res) => {
      const mid = ++id;
      pending.set(mid, res);
      ws.send(JSON.stringify({ id: mid, method, params }));
    });

  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, screenWidth: 1440, screenHeight: 1000, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: 'http://localhost:4321/' });
  await sleep(1800);

  const result = await send('Runtime.evaluate', { expression: `(() => {
    const rect = (el) => el ? { x: Math.round(el.getBoundingClientRect().x), w: Math.round(el.getBoundingClientRect().width), right: Math.round(el.getBoundingClientRect().right) } : null;
    return {
      viewport: window.innerWidth,
      docScrollWidth: document.documentElement.scrollWidth,
      main: rect(document.querySelector('main')),
      sections: [...document.querySelectorAll('main > section')].map((el, i) => rect(el)),
      containers: [...document.querySelectorAll('.container-wide')].slice(0, 4).map(rect),
      valueCards: rect(document.querySelector('main > section:nth-child(2) .grid')),
      firstFeatureArticle: rect(document.querySelector('main > section:nth-child(4) article')),
    };
  })()`, returnByValue: true });

  console.log(JSON.stringify(result.result.result.value, null, 2));
  ws.close();
  proc.kill('SIGTERM');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
