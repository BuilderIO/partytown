import { test, expect } from '@playwright/test';

test('svg', async ({ page }) => {
  await page.goto('/platform/svg/');

  await page.waitForSelector('.completed');

  const testCreateNS = page.locator('#testCreateNS');
  await expect(testCreateNS).toHaveText('SVG 1');
});
