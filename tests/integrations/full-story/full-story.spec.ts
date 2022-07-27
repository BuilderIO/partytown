import { test, expect } from '@playwright/test';

test('full-story', async ({ page }) => {
  await page.goto('/tests/integrations/full-story/');

  await page.waitForSelector('.completed');

  const buttonSendEvent = page.locator('#buttonSendEvent');
  await buttonSendEvent.click();

  const testFullStory = page.locator('#testIdentify');
  await expect(testFullStory).toHaveText('called');
});
