import { test, expect } from '@playwright/test';

test('canvas', async ({ page }) => {
  await page.goto('/platform/canvas/');

  await page.waitForSelector('.completed');

  const testGetContext2d = page.locator('#testGetContext2d');
  await expect(testGetContext2d).toHaveText('#000000');

  const testMeasureText = page.locator('#testMeasureText');
  await expect(testMeasureText).not.toHaveText('');
});
