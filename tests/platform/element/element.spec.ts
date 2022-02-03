import { test, expect } from '@playwright/test';

test('element', async ({ page }) => {
  await page.goto('/tests/platform/element/');

  await page.waitForSelector('.completed');

  const testElementNameType = page.locator('#testElementNameType');
  await expect(testElementNameType).toHaveText('DIV 1');

  const testGetBoundingClientRectY = page.locator('#testGetBoundingClientRectY');
  const y = await testGetBoundingClientRectY.textContent();
  const yInt = parseFloat(y);
  expect(yInt).toBeGreaterThan(4);

  const testGetBoundingClientRectCached = page.locator('#testGetBoundingClientRectCached');
  await expect(testGetBoundingClientRectCached).toHaveText('true');

  const testQSH1 = page.locator('#testQSH1');
  await expect(testQSH1).toHaveText('H1');

  const testQSLength = page.locator('#testQSLength');
  await expect(testQSLength).toHaveText('2');

  const testQSForEach = page.locator('#testQSForEach');
  await expect(testQSForEach).toHaveText('H1,UL');

  const testQSIndex = page.locator('#testQSIndex');
  await expect(testQSIndex).toHaveText('H1');

  const testQSItem = page.locator('#testQSItem');
  await expect(testQSItem).toHaveText('UL');

  const testQSIterable = page.locator('#testQSIterable');
  await expect(testQSIterable).toHaveText('H1,UL');

  const testQSArrayFrom = page.locator('#testQSArrayFrom');
  await expect(testQSArrayFrom).toHaveText('H1,UL');

  const testGetAttribute = page.locator('#testGetAttribute');
  await expect(testGetAttribute).toHaveText('88');

  const testSetAttribute = page.locator('#testSetAttribute');
  await expect(testSetAttribute).toHaveText('1985');

  const testParentElement = page.locator('#testParentElement');
  await expect(testParentElement).toHaveText('hasParentElement');

  const testSyncSetters = page.locator('#testSyncSetters');
  await expect(testSyncSetters).toHaveText('101');

  const testSyncSettersCall = page.locator('#testSyncSettersCall');
  await expect(testSyncSettersCall).toHaveText('some-id');

  const testSyncSetAttr = page.locator('#testSyncSetAttr');
  const attrVal = await testSyncSetAttr.getAttribute('data-year');
  await expect(testSyncSetAttr).toHaveText('1885');
  expect(attrVal).toBe('1885');

  const testAttrsNodeType = page.locator('#testAttrsNodeType');
  await expect(testAttrsNodeType).toHaveText('2 id');

  const testAttrsStyleValue = page.locator('#testAttrsStyleValue');
  await expect(testAttrsStyleValue).toHaveText('style color: red');
  await expect(testAttrsStyleValue).toHaveCSS('color', 'rgb(255, 0, 0)');

  const testParagraphConstructor = page.locator('#testParagraphConstructor');
  await expect(testParagraphConstructor).toHaveText('HTMLParagraphElement HTMLParagraphElement');

  const testStyleElement = page.locator('#testStyleElement');
  await expect(testStyleElement).toHaveText('rgb(0, 0, 255)');

  const testNamespaceURI = page.locator('#testNamespaceURI');
  await expect(testNamespaceURI).toHaveText('http://www.w3.org/1999/xhtml');

  const testAppendChild = page.locator('#testAppendChild');
  await expect(testAppendChild).toHaveText('text');

  const testDimensions = page.locator('#testDimensions');
  const dimensions = (await testDimensions.textContent()).split('x');
  const w = parseInt(dimensions[0], 10);
  const h = parseInt(dimensions[0], 10);
  expect(w > 9).toBe(true);
  expect(h > 9).toBe(true);

  const testElementEquality = page.locator('#testElementEquality');
  await expect(testElementEquality).toHaveText('true');

  const testElementId = page.locator('#testElementId');
  await expect(testElementId).toHaveText('attrId true');
});
