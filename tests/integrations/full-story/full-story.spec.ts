import { test, expect } from '@playwright/test';

test('full-story', async ({ page }) => {
  await page.goto('/tests/integrations/ffull-story/');

  await page.waitForSelector('.completed');

  const buttonSendEvent = page.locator('#buttonSendEvent');
  await buttonSendEvent.click();

  const testFbq = page.locator('#testIdentify');
  await expect(testFbq).toHaveText('called');
});
