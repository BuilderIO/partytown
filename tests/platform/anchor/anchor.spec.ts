import { test, expect } from '@playwright/test';

test('anchor', async ({ page }) => {
  await page.goto('/tests/platform/anchor/');

  await page.waitForSelector('.testAnchor');
  const testAnchor = page.locator('#testAnchor');
  await expect(testAnchor).toHaveText('/tests/platform/anchor/some/other/path');

  await page.waitForSelector('.testAnchorConstructor');
  const testAnchorConstructor = page.locator('#testAnchorConstructor');
  await expect(testAnchorConstructor).toHaveText('HTMLAnchorElement HTMLAnchorElement');

  await page.waitForSelector('.testCreateAnchorNoAppend');
  const testCreateAnchorNoAppend = page.locator('#testCreateAnchorNoAppend');
  await expect(testCreateAnchorNoAppend).toHaveText('/tests/platform/anchor/no-append-child');

  await page.waitForSelector('.testCreateAnchorAppend');
  const testCreateAnchorAppend = page.locator('#testCreateAnchorAppend');
  await expect(testCreateAnchorAppend).toHaveText('/tests/platform/anchor/append-child');

  await page.waitForSelector('.testInnerHtmlFirstChild');
  const testInnerHtmlFirstChild = page.locator('#testInnerHtmlFirstChild');
  await expect(testInnerHtmlFirstChild).toHaveText('#');

  await page.waitForSelector('.testGetHref');
  const testGetHref = page.locator('#testGetHref');
  await expect(testGetHref).toHaveText('https://builder.io/');

  await page.waitForSelector('.testSetHref');
  const testSetHref = page.locator('#testSetHref');
  await expect(testSetHref).toHaveText('/pathname');
});
