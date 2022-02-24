import { test, expect } from '@playwright/test';

test('fetch', async ({ page }) => {
  await page.goto('/tests/platform/fetch/');

  await page.waitForSelector('.completed');

  await page.waitForSelector('.testFetchText');
  const testFetchText = page.locator('#testFetchText');
  await expect(testFetchText).toHaveText('text');

  await page.waitForSelector('.testFetchJson');
  const testFetchJson = page.locator('#testFetchJson');
  await expect(testFetchJson).toHaveText('{"mph":88}');

  await page.waitForSelector('.testXMLHttpRequest');
  const testXMLHttpRequest = page.locator('#testXMLHttpRequest');
  await expect(testXMLHttpRequest).toHaveText('text');

  const testXMLHttpRequestNative = page.locator('#testXMLHttpRequestNative');
  await expect(testXMLHttpRequestNative).toHaveText('true');

  const testXMLHttpRequestCstrNative = page.locator('#testXMLHttpRequestCstrNative');
  await expect(testXMLHttpRequestCstrNative).toHaveText('true');
});
