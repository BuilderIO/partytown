import { test, expect } from '@playwright/test';

test('adobe-launch', async ({ page }) => {
  await page.goto('/integrations/adobe-launch/');

  const btnTrack = page.locator('#track');
  await btnTrack.click();

  await page.waitForSelector('.completed');

  const result = page.locator('#result');
  await expect(result).toHaveText('tracked');
});
