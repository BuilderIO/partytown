import { test, expect } from '@playwright/test';

test('history', async ({ page }) => {
  await page.goto('/history/');

  await page.waitForSelector('.completed');

  const testPushStateStr = page.locator('#testPushStateStr');
  await expect(testPushStateStr).toHaveText('88');

  const testPushStateObj = page.locator('#testPushStateObj');
  await expect(testPushStateObj).toHaveText(JSON.stringify({ mph: 88 }));

  const testReplaceState = page.locator('#testReplaceState');
  const buttonReplaceState121 = page.locator('#buttonReplaceState121');
  await buttonReplaceState121.click();
  const expected121 = new URL('/history/1.21gw', page.url());
  await expect(page).toHaveURL(expected121.href);
  await expect(testReplaceState).toHaveText('1955');

  const buttonReplaceState = page.locator('#buttonReplaceState');
  await buttonReplaceState.click();
  const expectedHistory = new URL('/history/', page.url());
  await expect(page).toHaveURL(expectedHistory.href);
  await expect(testReplaceState).toHaveText('1985');

  const testPatchPushState = page.locator('#testPatchPushState');
  const buttonPatchPushState = page.locator('#buttonPatchPushState');
  await buttonPatchPushState.click();
  await expect(testPatchPushState).toHaveText('Hill Valley');
});
