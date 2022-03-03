import { test, expect } from '@playwright/test';

test('form', async ({ page }) => {
  await page.goto('/tests/platform/form/');

  await page.waitForSelector('.completed');

  const testFormMethod = page.locator('#testFormMethod');
  await expect(testFormMethod).toHaveText('get');

  const testFormElements = page.locator('#testFormElements');
  await expect(testFormElements).toHaveText('1');
});
