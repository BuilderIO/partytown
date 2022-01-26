import { test, expect } from '@playwright/test';

test('adobe-launch', async ({ page }) => {
  await page.goto('/integrations/adobe-launch/');
  await page.waitForSelector('.completed');
});
