import { test, expect } from '@playwright/test';

test('events', async ({ page }) => {
  await page.goto('/events/');

  await page.waitForSelector('.completed');

  const test0 = page.locator('#test0');
  const test0Btn = page.locator('#test0-button');
  await test0Btn.click();
  await expect(test0).toHaveText('1');
  await test0Btn.click();
  await expect(test0).toHaveText('2');
  const test0Target = page.locator('#test0-target');
  await expect(test0Target).toHaveText('BUTTON');
});
