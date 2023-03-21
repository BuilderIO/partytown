import { test, expect } from '@playwright/test';

test('storage', async ({ page }) => {
  await page.goto('/tests/platform/storage/');

  await page.waitForSelector('.completed');

  const testWinEquals = page.locator('#testWinEquals');
  await expect(testWinEquals).toHaveText('true');

  const testLocalStorageGet = page.locator('#testLocalStorageGet');
  await expect(testLocalStorageGet).toHaveText('12');

  const testLocalStorageSetterWithGetItem = page.locator('#testLocalStorageSetterWithGetItem');
  await expect(testLocalStorageSetterWithGetItem).toHaveText('141.622');

  const testLocalStorageGetItemWithSetter = page.locator('#testLocalStorageGetItemWithSetter');
  await expect(testLocalStorageGetItemWithSetter).toHaveText('141.622');

  const testLocalStorageDeleteOperator = page.locator('#testLocalStorageDeleteOperator');
  await expect(testLocalStorageDeleteOperator).toHaveText('true,true,false,false');

  const testLocalStorageSetGet = page.locator('#testLocalStorageSetGet');
  await expect(testLocalStorageSetGet).toHaveText('88');

  const testLocalStorageLen = page.locator('#testLocalStorageLen');
  await expect(testLocalStorageLen).toHaveText('1');

  const testLocalStorageClear = page.locator('#testLocalStorageClear');
  await expect(testLocalStorageClear).toHaveText('0');

  const testLocalStorageKey = page.locator('#testLocalStorageKey');
  await expect(testLocalStorageKey).toHaveText('gw');

  const testLocalStorageKeyGet = page.locator('#testLocalStorageKeyGet');
  await expect(testLocalStorageKeyGet).toHaveText('1.21');

  const testLocalStorageRemove = page.locator('#testLocalStorageRemove');
  await expect(testLocalStorageRemove).toHaveText('0');

  const testSessionStorageSetGet = page.locator('#testSessionStorageSetGet');
  await expect(testSessionStorageSetGet).toHaveText('88');

  const testSessionStorageLen = page.locator('#testSessionStorageLen');
  await expect(testSessionStorageLen).toHaveText('1');

  const testWinSessionStorage = page.locator('#testWinSessionStorage');
  await expect(testWinSessionStorage).toHaveText('1');
});
