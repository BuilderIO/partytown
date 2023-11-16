import { test, expect } from '@playwright/test';

test('image', async ({ page }) => {
  await page.goto('/tests/platform/image/');

  const resolveUrlCalled = new Promise((resolve) =>
    page.on('request', (request) => request.url().includes('resolvedUrl') && resolve(true))
  );

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

  await page.waitForSelector('.testImgListenerRemoved');
  const testImgListenerRemoved = page.locator('#testImgListenerRemoved');
  await page.waitForTimeout(100);
  await expect(testImgListenerRemoved).toHaveText('onload');

  await page.waitForSelector('.testImgListenerError');
  const testImgListenerError = page.locator('#testImgListenerError');
  await expect(testImgListenerError).toHaveText('error');

  await page.waitForSelector('.testImgStyle');
  const testImgStyle = page.locator('#testImgStyle');
  await expect(testImgStyle).toHaveText('red');

  await page.waitForSelector('.testImgSrc');
  const testImgSrc = page.locator('#testImgSrc');
  await expect(testImgSrc).toHaveText('dot.gif?imageSrcTest');

  // Making sure the network calls for the images went through the resolveUrl function
  expect(await resolveUrlCalled).toEqual(true);
});
