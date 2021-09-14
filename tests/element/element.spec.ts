import { test, expect } from '@playwright/test';

test('element', async ({ page }) => {
  await page.goto('/element/');

  await page.waitForSelector('.completed');

  const test0 = page.locator('#test0');
  await expect(test0).toHaveText('H1');

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

  const testGetBoundingClientRectY = page.locator('#testGetBoundingClientRectY');
  const y = await testGetBoundingClientRectY.textContent();
  const yInt = parseFloat(y);
  expect(yInt).toBeGreaterThan(4);

  const testAnchor = page.locator('#testAnchor');
  await expect(testAnchor).toHaveText('/element/some/other/path');

  const testParentElement = page.locator('#testParentElement');
  await expect(testParentElement).toHaveText('hasParentElement');
});
