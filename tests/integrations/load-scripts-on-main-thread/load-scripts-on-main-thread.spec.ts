import { test, expect } from '@playwright/test';

test('integration window accessor', async ({ page }) => {
  await page.goto('/tests/integrations/load-scripts-on-main-thread/');
  await page.waitForSelector('.completed');

  const scriptElement = page.locator('#testScript');
  await expect(scriptElement).toHaveAttribute('type', 'text/javascript')

  await page.waitForSelector('.testInlineScript');
  const testInlineScript = page.locator('#testInlineScript');
  await expect(testInlineScript).toHaveText('12');

  await page.waitForSelector('.testInlineTextScript');
  const testInlineTextScript = page.locator('#testInlineTextScript');
  await expect(testInlineTextScript).toHaveText('12');
});
