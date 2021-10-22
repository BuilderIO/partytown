import { test, expect } from '@playwright/test';

test('style', async ({ page }) => {
  await page.goto('/platform/style/');

  await page.waitForSelector('.completed');

  const testSheetNull = page.locator('#testSheetNull');
  await expect(testSheetNull).toHaveText('null');

  const testSheetInnerHtml = page.locator('#testSheetInnerHtml');
  await expect(testSheetInnerHtml).toHaveText('#testSheetInnerHtml { color: blue; }');
});
