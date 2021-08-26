import { test, expect } from '@playwright/test';

test('document', async ({ page }) => {
  await page.goto('/document/');

  await page.waitForSelector('.completed');

  const test0 = page.locator('#test0');
  await expect(test0).toHaveText('test0');

  const test1 = page.locator('#test1');
  await expect(test1).toHaveText('Document');

  const test2 = page.locator('#test2');
  await expect(test2).toHaveText('Document');

  const test3 = page.locator('#test3');
  await expect(test3).toHaveText('Document');

  const test4 = page.locator('#test4');
  await expect(test4).toHaveText('Document!!!');

  const test5 = page.locator('#test5');
  await expect(test5).toHaveText('mph=88');

  const test6 = page.locator('#test6');
  await expect(test6).toHaveText('/document/');
});
