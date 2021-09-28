import { test, expect } from '@playwright/test';

test('image', async ({ page }) => {
  await page.goto('/platform/image/');

  await page.waitForSelector('.testImageOnLoad');
  const testImageOnLoad = page.locator('#testImageOnLoad');
  await expect(testImageOnLoad).toHaveText('load');

  await page.waitForSelector('.testImageOnError');
  const testImageOnError = page.locator('#testImageOnError');
  await expect(testImageOnError).toHaveText('error');

  await page.waitForSelector('.testImageListenerLoad');
  const testImageListenerLoad = page.locator('#testImageListenerLoad');
  await expect(testImageListenerLoad).toHaveText('load');

  await page.waitForSelector('.testImageListenerError');
  const testImageListenerError = page.locator('#testImageListenerError');
  await expect(testImageListenerError).toHaveText('error');

  await page.waitForSelector('.testImgOnLoad');
  const testImgOnLoad = page.locator('#testImgOnLoad');
  await expect(testImgOnLoad).toHaveText('load');

  await page.waitForSelector('.testImgOnError');
  const testImgOnError = page.locator('#testImgOnError');
  await expect(testImgOnError).toHaveText('error');

  await page.waitForSelector('.testImgListenerLoad');
  const testImgListenerLoad = page.locator('#testImgListenerLoad');
  await expect(testImgListenerLoad).toHaveText('load');

  await page.waitForSelector('.testImgListenerError');
  const testImgListenerError = page.locator('#testImgListenerError');
  await expect(testImgListenerError).toHaveText('error');
});
