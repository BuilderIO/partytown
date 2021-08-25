import { test, expect } from '@playwright/test';

test('image', async ({ page }) => {
  await page.goto('/image/');

  await page.waitForSelector('.test0');
  const test0 = page.locator('#test0');
  await expect(test0).toHaveText('load');

  await page.waitForSelector('.test1');
  const test1 = page.locator('#test1');
  await expect(test1).toHaveText('error');

  await page.waitForSelector('.test2');
  const test2 = page.locator('#test2');
  await expect(test2).toHaveText('load');

  await page.waitForSelector('.test3');
  const test3 = page.locator('#test3');
  await expect(test3).toHaveText('error');

  await page.waitForSelector('.test4');
  const test4 = page.locator('#test4');
  await expect(test4).toHaveText('load');

  await page.waitForSelector('.test5');
  const test5 = page.locator('#test5');
  await expect(test5).toHaveText('error');

  await page.waitForSelector('.test6');
  const test6 = page.locator('#test6');
  await expect(test6).toHaveText('load');

  await page.waitForSelector('.test7');
  const test7 = page.locator('#test7');
  await expect(test7).toHaveText('error');
});
