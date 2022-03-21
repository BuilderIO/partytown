import { test, expect } from '@playwright/test';

test('Clarity', async ({ page }) => {
  await page.goto('/tests/integrations/clarity/');
  const element = await page.waitForSelector('#pterrors');

  expect(await element.textContent()).toEqual('NO ERROR');
});
