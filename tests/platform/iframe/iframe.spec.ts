import { test, expect } from '@playwright/test';

test('iframe', async ({ page }) => {
  await page.goto('/platform/iframe/');

  await page.waitForSelector('.testSrc');
  const testSrc = page.locator('#testSrc');
  await expect(testSrc).toHaveText('/platform/iframe/content.html');

  await page.waitForSelector('.testSrcAttr');
  const testSrcAttr = page.locator('#testSrcAttr');
  await expect(testSrcAttr).toHaveText('/platform/iframe/content.html');

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
  await expect(testCurrentScript).toHaveText('/platform/iframe/current-script.js');

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

  await page.waitForSelector('.testSetCallWindowParentFn');
  const testSetCallWindowParentFn = page.locator('#testSetCallWindowParentFn');
  await expect(testSetCallWindowParentFn).toHaveText('1985 1985');

  await page.waitForSelector('.testCallWindowParentFn');
  const testCallWindowParentFn = page.locator('#testCallWindowParentFn');
  await expect(testCallWindowParentFn).toHaveText('2015');

  await page.waitForSelector('.testOnLoadNoSrc');
  const testOnLoadNoSrc = page.locator('#testOnLoadNoSrc');
  await expect(testOnLoadNoSrc).toHaveText('onload');

  await page.waitForSelector('.testMemberNames');
  const testMemberNames = page.locator('#testMemberNames');
  await expect(testMemberNames).toHaveText('1985');

  await page.waitForSelector('.testParentMemberNames');
  const testParentMemberNames = page.locator('#testParentMemberNames');
  await expect(testParentMemberNames).toHaveText('1985 1885');

  await page.waitForSelector('.testNoDeadlock');
  const testNoDeadlock = page.locator('#testNoDeadlock');
  await expect(testNoDeadlock).toHaveText('99');

  await page.waitForSelector('.testWWGlobalNotShared');
  const testWWGlobalNotShared = page.locator('#testWWGlobalNotShared');
  await expect(testWWGlobalNotShared).toHaveText('true');

  await page.waitForSelector('.testFrameElement');
  const testFrameElement = page.locator('#testFrameElement');
  await expect(testFrameElement).toHaveText('frameElement');

  await page.waitForSelector('.testSyncSetAttr');
  const testSyncSetAttr = page.locator('#testSyncSetAttr');
  await expect(testSyncSetAttr).toHaveText('88');

  await page.waitForSelector('.testNativeFetch');
  const testNativeFetch = page.locator('#testNativeFetch');
  await expect(testNativeFetch).toHaveText('true');

  await page.waitForSelector('.testPostMessage');
  const testPostMessage = page.locator('#testPostMessage');
  await expect(testPostMessage).toHaveText('message 99 true');

  await page.waitForSelector('.testCrossOrigin');
  const testCrossOrigin = page.locator('#testCrossOrigin');
  await expect(testCrossOrigin).toHaveText('message 88 https://partytown.builder.io');

  await page.waitForSelector('.testLocation');
  const testLocation = page.locator('#testLocation');
  await expect(testLocation).toHaveText('/platform/iframe/location2.html');

  await page.waitForSelector('.testSrcChange');
  const testSrcChange1 = page.locator('#testSrcChange1');
  await expect(testSrcChange1).toHaveText('src-change1');
  const testSrcChange2 = page.locator('#testSrcChange2');
  await expect(testSrcChange2).toHaveText('src-change2');
});
