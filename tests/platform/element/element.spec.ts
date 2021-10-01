import { test, expect } from '@playwright/test';

test('element', async ({ page }) => {
  await page.goto('/platform/element/');

  await page.waitForSelector('.completed');

  const testElementNameType = page.locator('#testElementNameType');
  await expect(testElementNameType).toHaveText('DIV 1');

  const testGetBoundingClientRectY = page.locator('#testGetBoundingClientRectY');
  const y = await testGetBoundingClientRectY.textContent();
  const yInt = parseFloat(y);
  expect(yInt).toBeGreaterThan(4);

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

  const testAttrsNodeType = page.locator('#testAttrsNodeType');
  await expect(testAttrsNodeType).toHaveText('2 id');

  const testAttrsStyleValue = page.locator('#testAttrsStyleValue');
  await expect(testAttrsStyleValue).toHaveText('color: red');
  await expect(testAttrsStyleValue).toHaveCSS('color', 'rgb(255, 0, 0)');
});
