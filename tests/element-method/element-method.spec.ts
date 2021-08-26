import { test, expect } from '@playwright/test';

test('element method', async ({ page }) => {
  await page.goto('/element-method/');

  await page.waitForSelector('.completed');

  const test0 = page.locator('#test0');
  await expect(test0).toHaveText('Element Method');

  const test1 = page.locator('#test1');
  await expect(test1).toHaveText('Element Method');

  const test2 = page.locator('#test2');
  await expect(test2).toHaveText('88');

  const test3 = page.locator('#test3');
  await expect(test3).toHaveText('1985');
});
