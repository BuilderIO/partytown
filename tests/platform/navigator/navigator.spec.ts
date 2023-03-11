import { test, expect } from '@playwright/test';

test('navigator', async ({ page }) => {
  await page.goto('/tests/platform/navigator/');

  const testUserAgent = await page.waitForSelector('.testUserAgent');
  const ua = await testUserAgent.textContent();
  expect(ua?.startsWith('Mozilla/5.0')).toBe(true);

  await page.waitForSelector('.testSendBeacon');
  const testSendBeacon = page.locator('#testSendBeacon');
  await expect(testSendBeacon).toContainText('true');

  await page.waitForSelector('.testNavKey');
  const testNavKey = page.locator('#testNavKey');
  await expect(testNavKey).toContainText('5');
});
