import { test, expect } from '@playwright/test';

test('Mermaid', async ({ page }) => {
  await page.goto('/tests/integrations/mermaid/');
  const element = await page.waitForSelector('#pterrors');

  expect(await element.textContent()).toEqual('NO ERROR');
});
