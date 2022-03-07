import { test, expect } from '@playwright/test';

test('no-partytown-script', async ({ page }) => {
  await page.goto('/tests/platform/no-partytown-script/');

  const testPageErrors = page.locator('#testPageErrors');
  await expect(testPageErrors).toHaveText('--');
});
