import { test, expect } from '@playwright/test';

test('anchor', async ({ page }) => {
  page.on('console', (msg) => console.log(msg.text()));

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

  await page.waitForSelector('.testSetHref2');
  const testSetHref2 = page.locator('#testSetHref2');
  const desiredLocalUrl = new URL(page.url());
  desiredLocalUrl.pathname = '/local-pathname';
  await expect(testSetHref2).toHaveText(desiredLocalUrl.toString());

  await page.waitForSelector('.testGetSearch');
  const testGetSearch = page.locator('#testGetSearch');
  await expect(testGetSearch).toHaveText('?a=42&b=23');
  const testGetSearchHref = page.locator('#testGetSearchHref');
  await expect(testGetSearchHref).toHaveText('https://builder.io/?a=42&b=23');

  await page.waitForSelector('.testSetSearch');
  const testSetSearch = page.locator('#testSetSearch');
  await expect(testSetSearch).toHaveText('?x=1&y=2');
  const testSetSearchHref = page.locator('#testSetSearchHref');
  await expect(testSetSearchHref).toHaveText('https://builder.io/?x=1&y=2');
});
