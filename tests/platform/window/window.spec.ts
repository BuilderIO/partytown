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

  const testBtoa = page.locator('#testBtoa');
  await expect(testBtoa).toHaveText('ODg=');
  const testAtob = page.locator('#testAtob');
  await expect(testAtob).toHaveText('88');

  page.on('dialog', (dialog) => dialog.accept('88'));
  const promptButton = page.locator('#button-prompt');
  await promptButton.click();
  const testPrompt = page.locator('#testPrompt');
  await expect(testPrompt).toHaveText('88');

  const wwHTMLConstructors = page.locator('#wwHTMLConstructors');
  const ww = await wwHTMLConstructors.innerText();
  const mainHTMLConstructors = page.locator('#mainHTMLConstructors');
  const main = await mainHTMLConstructors.innerText();
  expect(ww).toBe(main);

  const testScreenHasWidth = page.locator('#testScreenHasWidth');
  await expect(testScreenHasWidth).toHaveText('true');

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
});
