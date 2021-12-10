import { test, expect } from '@playwright/test';

test('facebook-pixel', async ({ page }) => {
  await page.goto('/integrations/facebook-pixel/');

  await page.waitForSelector('.completed');

  const buttonSendEvent = page.locator('#buttonSendEvent');
  await buttonSendEvent.click();

  const testFbq = page.locator('#testFbq');
  await expect(testFbq).toHaveText('called');
});
