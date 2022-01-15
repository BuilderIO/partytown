import { test, expect } from '@playwright/test';

test('script', async ({ page }) => {
  await page.goto('/platform/script/');

  await page.waitForSelector('.testJSONP');
  const testJSONP = page.locator('#testJSONP');
  await expect(testJSONP).toHaveText('88');
  expect(await page.$$('[data-testjsonp]')).toHaveLength(0);

  await page.waitForSelector('.testOnLoad');
  const testOnLoad = page.locator('#testOnLoad');
  await expect(testOnLoad).toHaveText('99');
  expect(await page.$$('[data-testonload]')).toHaveLength(0);

  await page.waitForSelector('.testOnError');
  const testOnError = page.locator('#testOnError');
  await expect(testOnError).toHaveText('error');

  await page.waitForSelector('.testAddEventListenerError');
  const testAddEventListenerError = page.locator('#testAddEventListenerError');
  await expect(testAddEventListenerError).toHaveText('error');

  await page.waitForSelector('.testInnerHTML');
  const testInnerHTML = page.locator('#testInnerHTML');
  await expect(testInnerHTML).toHaveText('88');

  await page.waitForSelector('.testTextContent');
  const testTextContent = page.locator('#testTextContent');
  await expect(testTextContent).toHaveText('99');

  await page.waitForSelector('.testInnerText');
  const testInnerText = page.locator('#testInnerText');
  await expect(testInnerText).toHaveText('101');

  await page.waitForSelector('.testInnerHTMLGlobalVar');
  const testInnerHTMLGlobalVar = page.locator('#testInnerHTMLGlobalVar');
  await expect(testInnerHTMLGlobalVar).toHaveText('111');

  await page.waitForSelector('.testInnerHTMLError');
  const testInnerHTMLError = page.locator('#testInnerHTMLError');
  await expect(testInnerHTMLError).toHaveText('gahh');

  await page.waitForSelector('.testAsync');
  const testAsync = page.locator('#testAsync');
  const testAsyncText = await testAsync.innerText();
  expect(testAsyncText.startsWith('b1 b2')).toBe(true);
  expect(testAsyncText.includes('a1')).toBe(true);
  expect(testAsyncText.includes('a2')).toBe(true);
  expect(testAsyncText.includes('d1')).toBe(true);
  expect(testAsyncText.includes('d2')).toBe(true);

  await page.waitForSelector('.testSrcAttr');
  const testSrcAttr = page.locator('#testSrcAttr');
  const srcAttr = await testSrcAttr.textContent();
  const srcUrl = new URL(srcAttr);
  expect(srcUrl.pathname).toBe('/platform/script/set-get-attr.js');

  await page.waitForSelector('.testSetPropType');
  const testSetPropType = page.locator('#testSetPropType');
  await expect(testSetPropType).toHaveText('text/partytown');

  await page.waitForSelector('.testSetPropTypeEmpty');
  const testSetPropTypeEmpty = page.locator('#testSetPropTypeEmpty');
  await expect(testSetPropTypeEmpty).toHaveText('text/partytown');

  await page.waitForSelector('.testSetAttrType');
  const testSetAttrType = page.locator('#testSetAttrType');
  await expect(testSetAttrType).toHaveText('text/partytown');

  await page.waitForSelector('.testSetAttrTypeEmpty');
  const testSetAttrTypeEmpty = page.locator('#testSetAttrTypeEmpty');
  await expect(testSetAttrTypeEmpty).toHaveText('text/partytown');

  await page.waitForSelector('.testNonJsType');
  const testNonJsType = page.locator('#testNonJsType');
  await expect(testNonJsType).toHaveText('application/ld+json');
});
