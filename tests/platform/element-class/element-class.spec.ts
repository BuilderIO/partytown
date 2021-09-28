import { test, expect } from '@playwright/test';

test('element class', async ({ page }) => {
  await page.goto('/platform/element-class/');
  await page.waitForSelector('.completed');

  const test0 = page.locator('#test0');
  await expect(test0).toHaveClass('test0');
  await expect(test0).toHaveText('test0');

  const test1 = page.locator('#test1');
  await expect(test1).toHaveClass('test1');
  await expect(test1).toHaveText('test1');

  const test2 = page.locator('#test2');
  await expect(test2).toHaveClass('test2');
  await expect(test2).toHaveText('test2');

  const test3 = page.locator('#test3');
  await expect(test3).toHaveClass('test3');
  await expect(test3).toHaveText('test3');

  const test4 = page.locator('#test4');
  await expect(test4).toHaveClass('test4');
  await expect(test4).toHaveText('test4');

  const test5 = page.locator('#test5');
  await expect(test5).toHaveClass('test5');
  await expect(test5).toHaveText('test5');

  const test6 = page.locator('#test6');
  await expect(test6).toHaveText('3');
});
