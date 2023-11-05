import { test, expect } from '@playwright/test';

test('multiple pages', async ({ page }) => {
  await page.goto('/tests/platform/multiple-pages/');

  await page.waitForSelector('.completed');

  const testAnchorOpenNewPage = page.locator('#testAnchorOpenNewPage');
  const anchorOpenNewPage = page.locator('#anchorOpenNewPage');

  await expect(testAnchorOpenNewPage).toHaveText('0');

  await anchorOpenNewPage.click();
  await expect(testAnchorOpenNewPage).toHaveText('1');   

  await anchorOpenNewPage.click();
  await expect(testAnchorOpenNewPage).toHaveText('2');
  
  await anchorOpenNewPage.click();
  await expect(testAnchorOpenNewPage).toHaveText('3');
  
  await anchorOpenNewPage.click();
  await expect(testAnchorOpenNewPage).toHaveText('4');
  
  await anchorOpenNewPage.click();
  await expect(testAnchorOpenNewPage).toHaveText('5');  
});