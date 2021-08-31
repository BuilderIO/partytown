import { test, expect } from '@playwright/test';

test('document', async ({ page }) => {
  await page.goto('/document/');

  await page.waitForSelector('.completed');

  const testGetElementById = page.locator('#testGetElementById');
  await expect(testGetElementById).toHaveText('testGetElementById');

  const testGetElementsByTagName = page.locator('#testGetElementsByTagName');
  await expect(testGetElementsByTagName).toHaveText('Document');

  const testGetElementsByTagNameHead = page.locator('#testGetElementsByTagNameHead');
  await expect(testGetElementsByTagNameHead).toHaveText('[HEAD]');

  const testGetElementsByClassName = page.locator('#testGetElementsByClassName');
  await expect(testGetElementsByClassName).toHaveText('Document');

  const testTitleGet = page.locator('#testTitleGet');
  await expect(testTitleGet).toHaveText('Document');

  const testTitleSet = page.locator('#testTitleSet');
  await expect(testTitleSet).toHaveText('Document!!!');

  const testCookie = page.locator('#testCookie');
  await expect(testCookie).toHaveText('mph=88');

  const testLocationGet = page.locator('#testLocationGet');
  await expect(testLocationGet).toHaveText('/document/');

  const testDefaultView = page.locator('#testDefaultView');
  await expect(testDefaultView).toHaveText('window');

  const testDocElement = page.locator('#testDocElement');
  await expect(testDocElement).toHaveText('HTML');

  const testHead = page.locator('#testHead');
  await expect(testHead).toHaveText('HEAD');

  const testBody = page.locator('#testBody');
  await expect(testBody).toHaveText('BODY');

  const testCompatMode = page.locator('#testCompatMode');
  await expect(testCompatMode).toHaveText('CSS1Compat');

  const testCurrentScript = page.locator('#testCurrentScript');
  await expect(testCurrentScript).toHaveText('inlined');

  const testCurrentScriptSrc = page.locator('#testCurrentScriptSrc');
  const testCurrentScriptSrcLocation = page.locator('#testCurrentScriptSrcLocation');
  await expect(testCurrentScriptSrc).toHaveText('src');
  await expect(testCurrentScriptSrcLocation).toHaveText('/document/current-script-src.js');
});
