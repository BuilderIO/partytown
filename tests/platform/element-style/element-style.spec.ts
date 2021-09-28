import { test, expect } from '@playwright/test';

test('element style', async ({ page }) => {
  await page.goto('/platform/element-style/');
  await page.waitForSelector('.completed');

  const test0Label = page.locator('#test0-label');
  await expect(test0Label).toHaveCSS('color', 'rgb(255, 0, 0)');

  const test0 = page.locator('#test0');
  await expect(test0).toHaveText('red');
});
