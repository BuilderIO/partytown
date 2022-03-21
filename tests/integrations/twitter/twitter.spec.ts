import { test, expect } from '@playwright/test';

test('Twitter', async ({ page }) => {
  await page.goto('/tests/integrations/twitter/');
  const element = await page.waitForSelector('#pterrors');

  expect(await element.textContent()).toEqual('NO ERROR');
});
