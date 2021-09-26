import { test, expect } from '@playwright/test';

test('anchor', async ({ page }) => {
  await page.goto('/anchor/');

  await page.waitForSelector('.testAnchor');
  const testAnchor = page.locator('#testAnchor');
  await expect(testAnchor).toHaveText('/anchor/some/other/path');

  await page.waitForSelector('.testCreateAnchorNoAppend');
  const testCreateAnchorNoAppend = page.locator('#testCreateAnchorNoAppend');
  await expect(testCreateAnchorNoAppend).toHaveText('/anchor/no-append-child');

  await page.waitForSelector('.testCreateAnchorAppend');
  const testCreateAnchorAppend = page.locator('#testCreateAnchorAppend');
  await expect(testCreateAnchorAppend).toHaveText('/anchor/append-child');
});
