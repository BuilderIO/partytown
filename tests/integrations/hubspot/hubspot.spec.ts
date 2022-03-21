import { test, expect } from '@playwright/test';

test('Hubspot', async ({ page }) => {
  await page.goto('/tests/integrations/hubspot/forms.html');
  const element = await page.waitForSelector('#pterrors');

  expect(await element.textContent()).toEqual('NO ERROR');
});
