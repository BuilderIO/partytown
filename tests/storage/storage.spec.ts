import { test, expect } from '@playwright/test';

test('storage', async ({ page }) => {
  await page.goto('/storage/');

  await page.waitForSelector('.completed');

  const test0 = page.locator('#test0');
  await expect(test0).toHaveText('88');

  const test1 = page.locator('#test1');
  await expect(test1).toHaveText('1');

  const test2 = page.locator('#test2');
  await expect(test2).toHaveText('0');

  const test3 = page.locator('#test3');
  await expect(test3).toHaveText('88');

  const test4 = page.locator('#test4');
  await expect(test4).toHaveText('1');

  const test5 = page.locator('#test5');
  await expect(test5).toHaveText('0');
});
