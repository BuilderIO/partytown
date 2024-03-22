import { test, expect } from '@playwright/test';

test('multiple tabs', async ({ page }) => {
  await page.goto('/tests/platform/multiple-tabs/');

  await page.waitForSelector('.completed');

  const testNewTabs = page.locator('#testNewTabs');
  await expect(testNewTabs).toHaveText('0');

  const linkNewTab = page.locator('#openNewTab');
  await linkNewTab.click();
  await expect(testNewTabs).toHaveText('1');

  await linkNewTab.click();
  await expect(testNewTabs).toHaveText('2');
});
