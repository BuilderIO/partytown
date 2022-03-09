import { test, expect } from '@playwright/test';

test('style', async ({ page }) => {
  await page.goto('/tests/platform/style/');

  await page.waitForSelector('.completed');

  const testSheetType = page.locator('#testSheetType');
  await expect(testSheetType).toHaveText('text/css');

  const testCssRulesLength = page.locator('#testCssRulesLength');
  await expect(testCssRulesLength).toHaveText('1');

  const testOwnerNode = page.locator('#testOwnerNode');
  await expect(testOwnerNode).toHaveText('STYLE');

  const testCssRules0 = page.locator('#testCssRules0');
  await expect(testCssRules0).toHaveText('#testCssRules0 { color: red; }');

  const testCssRulesItem0 = page.locator('#testCssRulesItem0');
  await expect(testCssRulesItem0).toHaveText('#testCssRulesItem0');

  const testInsertRule = page.locator('#testInsertRule');
  await expect(testInsertRule).toHaveText('#testInsertRule');

  const testDeleteRule = page.locator('#testDeleteRule');
  await expect(testDeleteRule).toHaveText('rgb(0, 128, 0) 2');

  const testMediaQuery = page.locator('#testMediaQuery');
  await expect(testMediaQuery).toHaveText('only screen and (min-width: 600px)');
});
