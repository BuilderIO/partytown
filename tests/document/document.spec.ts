import { test, expect } from '@playwright/test';

test('document', async ({ page }) => {
  await page.goto('http://localhost:4000/tests/document/');

  await page.waitForSelector('.test0');
  const test0 = page.locator('#test0');
  await expect(test0).toHaveText('textContent');
});
