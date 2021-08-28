import { test, expect } from '@playwright/test';

test('node', async ({ page }) => {
  await page.goto('/node/');

  await page.waitForSelector('.completed');

  const testCheckbox = page.locator('#test-checkbox');
  await expect(testCheckbox).toBeChecked();

  const testText = page.locator('#test-text');
  await expect(testText).toHaveText('Hello World');

  const testRemove = page.locator('#test-remove');
  await expect(testRemove).toHaveText('This is awesome');
});
