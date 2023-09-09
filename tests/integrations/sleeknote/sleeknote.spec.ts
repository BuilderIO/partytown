import { test, expect } from '@playwright/test';

test('Sleeknote', async ({ page, browser }) => {
  await page.goto('/tests/integrations/sleeknote/');
  await page.waitForFunction(() => document.cookie.length > 0);

  expect((await browser.contexts()[0].cookies()).find((o) => o.name === 'SNS')?.value).toEqual('1');
});
