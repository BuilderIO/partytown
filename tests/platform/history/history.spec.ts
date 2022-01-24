import { test, expect } from '@playwright/test';

test('history', async ({ page }) => {
  await page.goto('/platform/history/');

  await page.waitForSelector('.completed');

  const testWinEquals = page.locator('#testWinEquals');
  await expect(testWinEquals).toHaveText('true');

  const testPushStateStr = page.locator('#testPushStateStr');
  await expect(testPushStateStr).toHaveText('88');

  const buttonPushState = page.locator('#buttonPushState');
  await buttonPushState.click();
  const testPushStateObj = page.locator('#testPushStateObj');
  await expect(testPushStateObj).toHaveText(JSON.stringify({ mph: 88 }));

  await page.waitForSelector('.testPushStateUrl');
  const testPushStateUrl = page.locator('#testPushStateUrl');
  await expect(testPushStateUrl).toHaveText('/platform/history/push-state');

  const buttonGoBack = page.locator('#buttonGoBack');
  await buttonGoBack.click();
  await page.waitForSelector('.testGoBack');
  const testGoBack = page.locator('#testGoBack');
  await expect(testGoBack).toHaveText('/platform/history/');

  const buttonGoForward = page.locator('#buttonGoForward');
  await buttonGoForward.click();
  await page.waitForSelector('.testGoForward');
  const testGoForward = page.locator('#testGoForward');
  await expect(testGoForward).toHaveText('/platform/history/push-state');

  const testReplaceState = page.locator('#testReplaceState');
  const buttonReplaceState121 = page.locator('#buttonReplaceState121');
  await buttonReplaceState121.click();
  const expected121 = new URL('/platform/history/1.21gw', page.url());
  await expect(page).toHaveURL(expected121.href);
  await expect(testReplaceState).toHaveText('1955');

  await page.waitForSelector('.testReplaceStateUrl');
  const testReplaceStateUrl = page.locator('#testReplaceStateUrl');
  await expect(testReplaceStateUrl).toHaveText('/platform/history/1.21gw');

  const buttonReplaceState = page.locator('#buttonReplaceState');
  await buttonReplaceState.click();
  const expectedHistory = new URL('/platform/history/', page.url());
  await expect(page).toHaveURL(expectedHistory.href);
  await expect(testReplaceState).toHaveText('1985');

  const testPatchPushState = page.locator('#testPatchPushState');
  const buttonPatchPushState = page.locator('#buttonPatchPushState');
  await buttonPatchPushState.click();
  await expect(testPatchPushState).toHaveText('Hill Valley');

  const testIframeReplaceState = page.locator('#testIframeReplaceState');
  const buttonIframeReplaceState = page.locator('#buttonIframeReplaceState');
  await buttonIframeReplaceState.click();
  await expect(testIframeReplaceState).toHaveText('88');
});
