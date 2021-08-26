import { test, expect } from '@playwright/test';

test('element method', async ({ page }) => {
  await page.goto('/element-method/');

  await page.waitForSelector('.completed');

  const test0 = page.locator('#test0');
  await expect(test0).toHaveText('H1');

  const test1 = page.locator('#test1');
  await expect(test1).toHaveText('2');

  const test2 = page.locator('#test2');
  await expect(test2).toHaveText('H1,UL');

  const test3 = page.locator('#test3');
  await expect(test3).toHaveText('H1');

  const test4 = page.locator('#test4');
  await expect(test4).toHaveText('UL');

  const test5 = page.locator('#test5');
  await expect(test5).toHaveText('H1,UL');

  const test6 = page.locator('#test6');
  await expect(test6).toHaveText('H1,UL');

  const test7 = page.locator('#test7');
  await expect(test7).toHaveText('88');

  const test8 = page.locator('#test8');
  await expect(test8).toHaveText('1985');
});
