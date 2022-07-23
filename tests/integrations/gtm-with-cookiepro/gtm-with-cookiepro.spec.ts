import { test, expect } from '@playwright/test';

test('gtm', async ({ page }) => {
  await page.goto('/tests/integrations/gtm-with-cookiepro/');

  const domainScript = await page.locator('script[data-domain-script]');
  const src = await domainScript.first().getAttribute('src');
  const type = await domainScript.first().getAttribute('type');

  expect(src).toBe('https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js');
  expect(type).toBe('text/partytown');
});
