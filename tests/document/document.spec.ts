import { test, expect } from '@playwright/test';

test('document', async ({ page }) => {
  await page.goto('/document/');

  await page.waitForSelector('.completed');

  const test0 = page.locator('#test0');
  await expect(test0).toHaveText('test0');

  const test1 = page.locator('#test1');
  await expect(test1).toHaveText('Document');

  const test2 = page.locator('#test2');
  await expect(test2).toHaveText('Document');

  const test3 = page.locator('#test3');
  await expect(test3).toHaveText('Document');

  const test4 = page.locator('#test4');
  await expect(test4).toHaveText('Document!!!');

  const test5 = page.locator('#test5');
  await expect(test5).toHaveText('mph=88');

  const test6 = page.locator('#test6');
  await expect(test6).toHaveText('/document/');

  const test7 = page.locator('#test7');
  await expect(test7).toHaveText('window');

  const test8 = page.locator('#test8');
  await expect(test8).toHaveText('HTML');

  const test9 = page.locator('#test9');
  await expect(test9).toHaveText('HEAD');

  const test10 = page.locator('#test10');
  await expect(test10).toHaveText('BODY');
});
