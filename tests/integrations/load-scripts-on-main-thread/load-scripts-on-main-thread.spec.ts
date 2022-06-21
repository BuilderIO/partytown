import { test, expect } from '@playwright/test';

test('integration window accessor', async ({ page }) => {
  await page.goto('/tests/integrations/load-scripts-on-main-thread/');
  await page.waitForSelector('.completed');

  const scriptElement = page.locator('#testScript');
  await expect(scriptElement).toHaveAttribute('type', 'text/javascript')
});
