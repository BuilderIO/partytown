import { test, expect } from '@playwright/test';

test('storage access', async ({ page }) => {
  await page.goto('/tests/platform/storage/storage-access.html');

  await page.waitForSelector('.completed');

  const testLocalStorageSize = page.locator('#localStorageSize');
  await expect(testLocalStorageSize).toHaveText('13');

  const testLocalStorageGetItem = page.locator('#localStorageItem');
  await expect(testLocalStorageGetItem).toHaveText('mocked localStorage.getItem');

  // @ts-expect-error localStorage exists on the page
  const realLocalStorageItem = await page.evaluate(() => localStorage.getItem('dmc'))
  expect(realLocalStorageItem).toBe('12');

  const testLocalStorageKey = page.locator('#localStorageKey');
  await expect(testLocalStorageKey).toHaveText('mocked localStorage.key');

  const testSessionStorageSize = page.locator('#sessionStorageSize');
  await expect(testSessionStorageSize).toHaveText('10');

  const testSessionStorageGetItem = page.locator('#sessionStorageItem');
  await expect(testSessionStorageGetItem).toHaveText('mocked sessionStorage.getItem');

  // @ts-expect-error sessionStorage exists on the page
  const realSessionStorageItem = await page.evaluate(() => sessionStorage.getItem('mph'))
  expect(realSessionStorageItem).toBe('88');

  const testSessionStorageKey = page.locator('#sessionStorageKey');
  await expect(testSessionStorageKey).toHaveText('mocked sessionStorage.key');
});
