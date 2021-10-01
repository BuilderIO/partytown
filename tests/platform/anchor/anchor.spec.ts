import { test, expect } from '@playwright/test';

test('anchor', async ({ page }) => {
  await page.goto('/platform/anchor/');

  await page.waitForSelector('.testAnchor');
  const testAnchor = page.locator('#testAnchor');
  await expect(testAnchor).toHaveText('/platform/anchor/some/other/path');

  await page.waitForSelector('.testCreateAnchorNoAppend');
  const testCreateAnchorNoAppend = page.locator('#testCreateAnchorNoAppend');
  await expect(testCreateAnchorNoAppend).toHaveText('/platform/anchor/no-append-child');

  await page.waitForSelector('.testCreateAnchorAppend');
  const testCreateAnchorAppend = page.locator('#testCreateAnchorAppend');
  await expect(testCreateAnchorAppend).toHaveText('/platform/anchor/append-child');

  await page.waitForSelector('.testInnerHtmlFirstChild');
  const testInnerHtmlFirstChild = page.locator('#testInnerHtmlFirstChild');
  await expect(testInnerHtmlFirstChild).toHaveText('#');
});
