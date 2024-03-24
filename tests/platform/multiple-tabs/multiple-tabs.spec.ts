import { test, expect } from '@playwright/test';

test('multiple tabs', async ({ page, context }) => {
  await page.goto('/tests/platform/multiple-tabs/');

  await page.waitForSelector('.completed');

  const testNewTabs = page.locator('#testNewTabs');
  await expect(testNewTabs).toHaveText('0');

  const linkNewTab = page.locator('#openNewTab');
  const newPagePromise = context.waitForEvent('page');
  await linkNewTab.click();
  const newPage = await newPagePromise;
  await newPage.waitForSelector('.completed');
  await expect(testNewTabs).toHaveText('1');

  const newPagePromise2 = context.waitForEvent('page');
  await linkNewTab.click();
  const newPage2 = await newPagePromise2;
  await newPage2.waitForSelector('.completed');
  await expect(testNewTabs).toHaveText('2');
});
