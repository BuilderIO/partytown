import { test, expect } from '@playwright/test';

test('screen', async ({ page }) => {
  await page.goto('/platform/screen/');

  await page.waitForSelector('.completed');

  const testWidthHeight = page.locator('#testWidthHeight');
  const dimensions = (await testWidthHeight.textContent()).split('x');
  const w = parseInt(dimensions[0], 10);
  const h = parseInt(dimensions[0], 10);
  expect(w > 9).toBe(true);
  expect(h > 9).toBe(true);
});
