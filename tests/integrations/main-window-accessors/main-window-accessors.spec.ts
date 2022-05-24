import { test, expect } from '@playwright/test';

test('integration window accessor', async ({ page }) => {
  await page.goto('/tests/integrations/main-window-accessors/');
  await page.waitForSelector('.completed');

  const element = page.locator('#testWindowAccessor');
  await expect(element).toHaveText('42');

  const child_element = page.locator('#testChildWindowAccessor');
  await expect(child_element).toHaveText('stringValue');

  const global_function = page.locator('#testGlobalFunction');
  await expect(global_function).toHaveText('{"hello":"world"}');
});
