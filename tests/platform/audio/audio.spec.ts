import { test, expect } from '@playwright/test';

test('audio', async ({ page }) => {
  await page.goto('/platform/audio/');

  const ua: string = await page.evaluate('navigator.userAgent');

  if (ua.includes('Chrome')) {
    const testCreateElementAudio = page.locator('#testCreateElementAudio');
    const btnCreateElementAudio = page.locator('#btnCreateElementAudio');
    await btnCreateElementAudio.click();
    await page.waitForSelector('.testCreateElementAudio');
    await expect(testCreateElementAudio).toHaveText('played');

    const testNewAudio = page.locator('#testNewAudio');
    const btnNewAudio = page.locator('#btnNewAudio');
    await btnNewAudio.click();
    await page.waitForSelector('.testCreateElementAudio');
    await expect(testNewAudio).toHaveText('played');
  }
});
