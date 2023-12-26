import { test, expect } from '@playwright/test';

test('integration window accessor', async ({ page }) => {
  await page.goto('/tests/integrations/load-scripts-on-main-thread/');
  await page.waitForSelector('.completed');

  const scriptElement = page.locator('#testScript');
  await expect(scriptElement).toHaveAttribute('type', 'text/javascript')

  const regexScriptElement = page.locator('#regexTestScript');
  await expect(regexScriptElement).toHaveAttribute('type', 'text/javascript')

  await page.waitForSelector('.testInlineScript');
  const testInlineScript = page.locator('#testInlineScript');
  await expect(testInlineScript).toHaveText('12');
});
