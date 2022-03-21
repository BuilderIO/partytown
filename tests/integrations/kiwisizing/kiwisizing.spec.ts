import { test, expect } from '@playwright/test';

test('Kiwi sizing', async ({ page }) => {
  await page.goto('/tests/integrations/kiwisizing/');
  // Needed to ensure files are served from cache
  await page.reload();
  const element = await page.waitForSelector('#pterrors');

  expect(await element.textContent()).toEqual('NO ERROR');
});
