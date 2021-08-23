import { test, expect } from '@playwright/test';

test('element class', async ({ page }) => {
  await page.goto('http://localhost:4000/tests/element-class/');

  const test0 = page.locator('#test0');
  await page.waitForSelector('.test0');
  await expect(test0).toHaveClass('test0');
  await expect(test0).toHaveText('test0');

  const test1 = page.locator('#test1');
  await page.waitForSelector('.test1');
  await expect(test1).toHaveClass('test1');
});
