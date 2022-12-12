import { test, expect } from '@playwright/test';

test('different-origin', async ({ page }) => {
  await page.goto('/tests/platform/different-origin/');

  await page.waitForSelector('.completed');

  const testNoAccessToMainDocIndexedDb = page.locator('#testNoAccessToMainDocIndexedDb');
  await expect(testNoAccessToMainDocIndexedDb).toHaveText('No databases found');

  const testNoAccessToMainDocResources = page.locator('#testNoAccessToMainDocResources');
  await expect(testNoAccessToMainDocResources).toHaveText('Request failed');
});
