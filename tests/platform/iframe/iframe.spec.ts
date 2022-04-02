import { test, expect } from '@playwright/test';

test('iframe', async ({ page }) => {
  await page.goto('/tests/platform/iframe/');

  page.on('console', (msg) => {
    let text = msg.text();
    const splt = text.split(';');
    text = splt[splt.length - 1].trim();
    console.log(text);
  });

  expect(false);
  // await page.waitForSelector('.testSrcChange');
  // const testSrcChange1 = page.locator('#testSrcChange1');
  // await expect(testSrcChange1).toHaveText('src-change1');
  // const testSrcChange2 = page.locator('#testSrcChange2');
  // await expect(testSrcChange2).toHaveText('src-change2');
});
