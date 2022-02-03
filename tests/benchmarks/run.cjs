const { chromium, webkit } = require('playwright');
const { createServer } = require('../../scripts/server.cjs');
const { join } = require('path');
const { cpus } = require('os');

const screenshotPath = join(__dirname, 'screenshots');

(async () => {
  let title = `Benchmark: node ${process.version}, ${process.platform}, ${process.arch}`;
  title += `, ${cpus()[0].model}`;
  console.log(title);
  console.log(''.padStart(title.length, '-'));

  const baseline = await runBenchmark(chromium, true, 'Chromium Baseline');
  const atomics = await runBenchmark(chromium, false, 'Chromium Atomics');

  console.log(`Baseline:`.padStart(12, ' '), `${baseline}ms`);
  console.log(`Atomics:`.padStart(12, ' '), `${atomics}ms`);
})();

async function runBenchmark(browserType, isBaseline, label) {
  const server = await createServer(4005, true);

  const browser = await browserType.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 360, height: 360 });

  const url = new URL('/tests/benchmarks/', server.address);
  if (isBaseline) {
    url.searchParams.set('baseline', '');
  }
  await page.goto(url.href);

  await page.waitForSelector('.completed', { timeout: 180000 });

  const avgElement = page.locator('#result');
  const avgResultText = await avgElement.textContent();
  const avgResult = parseFloat(avgResultText.replace('ms', ''));

  await page.screenshot({
    path: join(screenshotPath, `${label.replace(/ /g, '-').toLowerCase()}.png`),
  });
  await browser.close();
  await server.close();

  return avgResult;
}
