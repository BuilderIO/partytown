import { test, expect } from '@playwright/test';

test('node', async ({ page }) => {
  await page.goto('/platform/node/');

  await page.waitForSelector('.completed');

  const testNodeNameType = page.locator('#testNodeNameType');
  await expect(testNodeNameType).toHaveText('#text 3');

  const testCheckbox = page.locator('#testCheckbox');
  await expect(testCheckbox).toBeChecked();

  const testText = page.locator('#testText');
  await expect(testText).toHaveText('Hello World');

  const testRemove = page.locator('#testRemove');
  await expect(testRemove).toHaveText('This is awesome');

  const testHrefProp = page.locator('#testHrefProp');
  await expect(testHrefProp).toHaveText('undefined');

  const testParentNode = page.locator('#testParentNode');
  await expect(testParentNode).toHaveText('hasParentNode');

  const testComment = page.locator('#testComment');
  await expect(testComment).toHaveText('8 #comment 1.21 false');

  const testFragmentNodeType = page.locator('#testFragmentNodeType');
  await expect(testFragmentNodeType).toHaveText('11 #document-fragment');

  const testFragmentChildNodes = page.locator('#testFragmentChildNodes');
  await expect(testFragmentChildNodes).toHaveText('1 DIV SPAN fragment');
});
