import { test, expect } from '@playwright/test';

test('NodeFilter', async ({ page }) => {
  await page.goto('/tests/platform/node-filter/');
  await page.waitForSelector('#nodeFilterProps');
  const resultDiv = page.locator('#nodeFilterProps');
  await expect(resultDiv).toContainText('FILTER_ACCEPT');
});

