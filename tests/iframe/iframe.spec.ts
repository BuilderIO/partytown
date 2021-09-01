import { test, expect } from '@playwright/test';

test('iframe', async ({ page }) => {
  await page.goto('/iframe/');

  await page.waitForSelector('.testSrc');
  const testSrc = page.locator('#testSrc');
  await expect(testSrc).toHaveText('/iframe/content.html');

  await page.waitForSelector('.testContentWindow');
  const testContentWindow = page.locator('#testContentWindow');
  await expect(testContentWindow).toHaveText('contentWindow');

  await page.waitForSelector('.testContentDocument');
  const testContentDocument = page.locator('#testContentDocument');
  await expect(testContentDocument).toHaveText('contentDocument');

  await page.waitForSelector('.testGetSomeGlobalVar');
  const testGetSomeGlobalVar = page.locator('#testGetSomeGlobalVar');
  await expect(testGetSomeGlobalVar).toHaveText('88');

  await page.waitForSelector('.testSetSomeGlobalVar');
  const testSetSomeGlobalVar = page.locator('#testSetSomeGlobalVar');
  await expect(testSetSomeGlobalVar).toHaveText('99');

  await page.waitForSelector('.testTopSomeValue');
  const testTopSomeValue = page.locator('#testTopSomeValue');
  await expect(testTopSomeValue).toHaveText('1956.21');
});
