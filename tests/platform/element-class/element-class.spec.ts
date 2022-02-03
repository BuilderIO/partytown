import { test, expect } from '@playwright/test';

test('element class', async ({ page }) => {
  await page.goto('/tests/platform/element-class/');
  await page.waitForSelector('.completed');

  const testClassname = page.locator('#testClassname');
  await expect(testClassname).toHaveClass('testClassname');
  await expect(testClassname).toHaveText('testClassname');

  const testClassList = page.locator('#testClassList');
  await expect(testClassList).toHaveClass('testClassList');
  await expect(testClassList).toHaveText('testClassList');

  const testClassListRemove = page.locator('#testClassListRemove');
  await expect(testClassListRemove).toHaveClass('testClassListRemove');
  await expect(testClassListRemove).toHaveText('testClassListRemove');

  const testToggleOn = page.locator('#testToggleOn');
  await expect(testToggleOn).toHaveClass('testToggleOn');
  await expect(testToggleOn).toHaveText('testToggleOn');

  const testToggleOff = page.locator('#testToggleOff');
  await expect(testToggleOff).toHaveClass('testToggleOff');
  await expect(testToggleOff).toHaveText('testToggleOff');

  const testClassListValue = page.locator('#testClassListValue');
  await expect(testClassListValue).toHaveClass('testClassListValue');
  await expect(testClassListValue).toHaveText('testClassListValue');

  const testClassListLength = page.locator('#testClassListLength');
  await expect(testClassListLength).toHaveText('3');

  const testImmediate = page.locator('#testImmediate');
  await expect(testImmediate).toHaveText('add');
  await expect(testImmediate).toHaveClass('testImmediate1 testImmediate2');
});
