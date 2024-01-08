import { expect, test } from '@playwright/test';

test('iframe 1', async ({ page }) => {
  await page.goto('/tests/platform/iframe/');

  await page.waitForSelector('.testSrc');
  const testSrc = page.locator('#testSrc');
  await expect(testSrc).toHaveText('/tests/platform/iframe/content.html');

  await page.waitForSelector('.testSrcAttr');
  const testSrcAttr = page.locator('#testSrcAttr');
  await expect(testSrcAttr).toHaveText('/tests/platform/iframe/content.html');

  await page.waitForSelector('.testOnload');
  const testOnload = page.locator('#testOnload');
  await expect(testOnload).toHaveText('load');

  await page.waitForSelector('.testContentWindow');
  const testContentWindow = page.locator('#testContentWindow');
  await expect(testContentWindow).toHaveText('contentWindow');

  await page.waitForSelector('.testContentDocument');
  const testContentDocument = page.locator('#testContentDocument');
  await expect(testContentDocument).toHaveText('contentDocument');

  await page.waitForSelector('.testGetSomeGlobalVar');
  const testGetSomeGlobalVar = page.locator('#testGetSomeGlobalVar');
  await expect(testGetSomeGlobalVar).toHaveText('88');

  await page.waitForSelector('.testSetSomeGlobalVar', { state: 'attached' });
  const testSetSomeGlobalVar = page.locator('#testSetSomeGlobalVar');
  await expect(testSetSomeGlobalVar).toHaveText('99');

  await page.waitForSelector('.testSetSomeWindowVar', { state: 'attached' });
  const testSetSomeWindowVar = page.locator('#testSetSomeWindowVar');
  await expect(testSetSomeWindowVar).toHaveText('1985');

  await page.waitForSelector('.testTopSomeValue');
  const testTopSomeValue = page.locator('#testTopSomeValue');
  await expect(testTopSomeValue).toHaveText('1956.21');

  await page.waitForSelector('.testScriptWindowParent');
  const testScriptWindowParent = page.locator('#testScriptWindowParent');
  await expect(testScriptWindowParent).toHaveText('3770');

  await page.waitForSelector('.testCurrentScript');
  const testCurrentScript = page.locator('#testCurrentScript');
  await expect(testCurrentScript).toHaveText('/tests/platform/iframe/current-script.js');

  await page.waitForSelector('.testScriptOnload');
  const testScriptOnload = page.locator('#testScriptOnload');
  await expect(testScriptOnload).toHaveText('load');

  await page.waitForSelector('.testDiffDocumentCreateElement');
  const testDiffDocumentCreateElement = page.locator('#testDiffDocumentCreateElement');
  await expect(testDiffDocumentCreateElement).toHaveText('section');

  await page.waitForSelector('.testAboutBlank');
  const testAboutBlank = page.locator('#testAboutBlank');
  await expect(testAboutBlank).toHaveText('about:blank');
  const testAboutBlankSrc = page.locator('#testAboutBlankSrc');
  await expect(testAboutBlankSrc).toHaveText('');

  const testSetAboutBlankHref = page.locator('#testSetAboutBlankHref');
  const testSetAboutBlankSrc = page.locator('#testSetAboutBlankSrc');
  await expect(testSetAboutBlankSrc).toHaveText('about:blank');
  await expect(testSetAboutBlankHref).toHaveText('');

  await page.waitForSelector('.testSetCallWindowParentFn');
  const testSetCallWindowParentFn = page.locator('#testSetCallWindowParentFn');
  await expect(testSetCallWindowParentFn).toHaveText('1985 1985');

  await page.waitForSelector('.testCallWindowParentFn');
  const testCallWindowParentFn = page.locator('#testCallWindowParentFn');
  await expect(testCallWindowParentFn).toHaveText('2015');

  await page.waitForSelector('.testOnLoadNoSrc');
  const testOnLoadNoSrc = page.locator('#testOnLoadNoSrc');
  await expect(testOnLoadNoSrc).toHaveText('onload');
});
