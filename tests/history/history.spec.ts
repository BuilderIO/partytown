import { test, expect } from '@playwright/test';

test('history', async ({ page }) => {
  await page.goto('/history/');

  await page.waitForSelector('.completed');

  const test0 = page.locator('#test0');
  await expect(test0).toHaveText('88');

  const test1 = page.locator('#test1');
  await expect(test1).toHaveText(JSON.stringify({ mph: 88 }));

  const test2 = page.locator('#test2');
  await expect(test2).toHaveText(JSON.stringify({ year: 1955 }));
});
