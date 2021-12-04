import { test, expect } from '@playwright/test';

test('window', async ({ page }) => {
  await page.goto('/platform/window/');

  await page.waitForSelector('.completed');

  const testWindowName = page.locator('#testWindowName');
  await expect(testWindowName).toHaveText('Window');

  const testName = page.locator('#testName');
  await expect(testName).toContainText('Partytown 🎉');

  const testTop = page.locator('#testTop');
  await expect(testTop).toHaveText('true');

  const testParent = page.locator('#testParent');
  await expect(testParent).toHaveText('true');

  const testHTMLBodyElementName = page.locator('#testHTMLBodyElementName');
  await expect(testHTMLBodyElementName).toHaveText('HTMLBodyElement HTMLBodyElement');

  const testNameEquals = page.locator('#testNameEquals');
  await expect(testNameEquals).toHaveText('true');

  const testComputedStyle = page.locator('#testGetComputedStyle');
  await expect(testComputedStyle).toHaveText('rgb(128, 0, 128)');

  await page.waitForSelector('.testRaf');

  await page.waitForSelector('.testWindowRaf');

  const testBtoa = page.locator('#testBtoa');
  await expect(testBtoa).toHaveText('ODg=');
  const testAtob = page.locator('#testAtob');
  await expect(testAtob).toHaveText('88');

  page.on('dialog', (dialog) => dialog.accept('88'));
  const promptButton = page.locator('#button-prompt');
  await promptButton.click();
  const testPrompt = page.locator('#testPrompt');
  await expect(testPrompt).toHaveText('88');

  const testPostMessage = page.locator('#testPostMessage');
  await page.waitForSelector('.testPostMessage');
  await expect(testPostMessage).toHaveText('message 88');

  const testSomeWindowNumber = page.locator('#testSomeWindowNumber');
  await expect(testSomeWindowNumber).toHaveText('1885');

  const testSomeGlobalNumber = page.locator('#testSomeGlobalNumber');
  await expect(testSomeGlobalNumber).toHaveText('1985');

  const testSomeWindowObject = page.locator('#testSomeWindowObject');
  await expect(testSomeWindowObject).toHaveText('{"some":{"object":88}}');

  const testSomeGlobalObject = page.locator('#testSomeGlobalObject');
  await expect(testSomeGlobalObject).toHaveText('{"some":{"object":99}}');

  await page.waitForSelector('.testPromise');
  const testPromise = page.locator('#testPromise');
  await expect(testPromise).toHaveText('resolved');

  await page.waitForSelector('.testPromisePolyfilled');
  const testPromisePolyfilled = page.locator('#testPromisePolyfilled');
  await expect(testPromisePolyfilled).toHaveText('polyfill resolved');

  await page.waitForSelector('.testPerformance');
  const testPerformance = page.locator('#testPerformance');
  const now = await testPerformance.textContent();
  expect(!isNaN(now as any)).toBe(true);

  const testFrameElement = page.locator('#testFrameElement');
  await expect(testFrameElement).toHaveText('null');

  const testInnerWidthHeight = page.locator('#testInnerWidthHeight');
  await expect(testInnerWidthHeight).not.toHaveText('');

  const testDevicePixelRatio = page.locator('#testDevicePixelRatio');
  await expect(testDevicePixelRatio).not.toHaveText('');

  const testOrigin = page.locator('#testOrigin');
  const origin = new URL(await testOrigin.textContent());
  expect(origin.pathname).toBe('/');
  expect(origin.hostname).toBe('localhost');

  const testCrypto = page.locator('#testCrypto');
  const rand = await testCrypto.textContent();
  expect(isNaN(rand as any)).toBe(false);

  const testIndexedDB = page.locator('#testIndexedDB');
  await expect(testIndexedDB).toHaveText('true');

  const testFnNotNative = page.locator('#testFnNotNative');
  await expect(testFnNotNative).toHaveText('undefined');

  const testNotStandard = page.locator('#testNotStandard');
  await expect(testNotStandard).toHaveText('undefined');

  await page.waitForSelector('.testFetchText');
  const testFetchText = page.locator('#testFetchText');
  await expect(testFetchText).toHaveText('text');

  await page.waitForSelector('.testFetchJson');
  const testFetchJson = page.locator('#testFetchJson');
  await expect(testFetchJson).toHaveText('{"mph":88}');
});
