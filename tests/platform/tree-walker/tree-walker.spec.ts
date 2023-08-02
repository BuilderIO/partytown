import { test, expect } from '@playwright/test';

test('TreeWalker', async ({ page }) => {
  await page.goto('/tests/platform/tree-walker/');
  await page.waitForSelector('#walkerResult');
  const resultDiv = page.locator('#walkerResult');
  await expect(resultDiv).toHaveText('BODY H1 DIV SCRIPT');
});

