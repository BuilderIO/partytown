import { test, expect } from '@playwright/test';

test('audio', async ({ page }) => {
  if (process.env.CI) {
    // TODO: audio tests in CI
    return;
  }

  await page.goto('/platform/audio/');

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      console.log(`Audio Test Error: ${msg.text()}`);
    }
  });

  // TODO: Doesn't always work
  // const ua: string = await page.evaluate('navigator.userAgent');

  // if (ua.includes('Chrome')) {
  //   const testCreateElementAudio = page.locator('#testCreateElementAudio');
  //   const btnCreateElementAudio = page.locator('#btnCreateElementAudio');
  //   await btnCreateElementAudio.click();
  //   await page.waitForSelector('.testCreateElementAudio');
  //   await expect(testCreateElementAudio).toHaveText('played');

  //   const testNewAudio = page.locator('#testNewAudio');
  //   const btnNewAudio = page.locator('#btnNewAudio');
  //   await btnNewAudio.click();
  //   await page.waitForSelector('.testNewAudio');
  //   await expect(testNewAudio).toHaveText('played');
  // }
});
