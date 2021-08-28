import { test, expect } from '@playwright/test';

test('history', async ({ page }) => {
  await page.goto('/history/');

  await page.waitForSelector('.completed');

  const testPushStateStr = page.locator('#testPushStateStr');
  await expect(testPushStateStr).toHaveText('88');

  const testPushStateObj = page.locator('#testPushStateObj');
  await expect(testPushStateObj).toHaveText(JSON.stringify({ mph: 88 }));

  const buttonPushState121 = page.locator('#buttonPushState121');
  await buttonPushState121.click();
  const expected121 = new URL('/history/1.21gw', page.url());
  await expect(page).toHaveURL(expected121.href);

  const buttonReplaceState = page.locator('#buttonReplaceState');
  await buttonReplaceState.click();
  const expectedHistory = new URL('/history/', page.url());
  await expect(page).toHaveURL(expectedHistory.href);
});
