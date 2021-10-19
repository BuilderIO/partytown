import { test, expect } from '@playwright/test';

test('document', async ({ page }) => {
  await page.goto('/platform/document/');

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
  await expect(testLocationGet).toHaveText('/platform/document/');

  const testDefaultView = page.locator('#testDefaultView');
  await expect(testDefaultView).toHaveText('window');

  const testDocElement = page.locator('#testDocElement');
  await expect(testDocElement).toHaveText('HTML HTMLHtmlElement');

  const testHead = page.locator('#testHead');
  await expect(testHead).toHaveText('HEAD HTMLHeadElement');

  const testBody = page.locator('#testBody');
  await expect(testBody).toHaveText('BODY HTMLBodyElement');

  const testCompatMode = page.locator('#testCompatMode');
  await expect(testCompatMode).toHaveText('CSS1Compat');

  const testCurrentScript = page.locator('#testCurrentScript');
  await expect(testCurrentScript).toHaveText('inlined');

  const testCurrentScriptSrc = page.locator('#testCurrentScriptSrc');
  const testCurrentScriptSrcLocation = page.locator('#testCurrentScriptSrcLocation');
  await expect(testCurrentScriptSrc).toHaveText('src');
  await expect(testCurrentScriptSrcLocation).toHaveText('/platform/document/current-script-src.js');

  await page.waitForSelector('.testCurrentScriptNullAsync');
  const testCurrentScriptNullAsync = page.locator('#testCurrentScriptNullAsync');
  await expect(testCurrentScriptNullAsync).toHaveText('null');

  const testHeadParentNode = page.locator('#testHeadParentNode');
  await expect(testHeadParentNode).toHaveText('HTML HTML');

  const testBodyParentNode = page.locator('#testBodyParentNode');
  await expect(testBodyParentNode).toHaveText('HTML HTML');

  const testDocumentElementParentNode = page.locator('#testDocumentElementParentNode');
  await expect(testDocumentElementParentNode).toHaveText('#document null');

  const testDocumentParentNode = page.locator('#testDocumentParentNode');
  await expect(testDocumentParentNode).toHaveText('null null');

  const testDocumentChildNodes = page.locator('#testDocumentChildNodes');
  await expect(testDocumentChildNodes).toHaveText('2 [html(10), HTML(1)]');

  const testDocType = page.locator('#testDocType');
  await expect(testDocType).toHaveText('10 html html false');

  const testDocCstrName = page.locator('#testDocCstrName');
  await expect(testDocCstrName).toHaveText('HTMLDocument');
});
