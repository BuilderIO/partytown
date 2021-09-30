import { test, expect } from '@playwright/test';

test('gtm', async ({ page }) => {
  await page.goto('/integrations/gtm/');

  await page.waitForSelector('.completed');

  const buttonDataLayerPush = page.locator('#buttonDataLayerPush');
  await buttonDataLayerPush.click();

  const testDataLayer = page.locator('#testDataLayer');
  await expect(testDataLayer).toHaveText('pushed');
});
