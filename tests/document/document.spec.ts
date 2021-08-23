import { test, expect } from '@playwright/test';

test('document', async ({ page }) => {
  await page.goto('/document/');

  await page.waitForSelector('.test0');
  const test0 = page.locator('#test0');
  await expect(test0).toHaveText('textContent');
});
