import { test, expect } from '@playwright/test';

test('errors', async ({ page }) => {
  await page.goto('/tests/platform/error/');

  // ReferenceError
  await page.waitForSelector('.refErrorReady');
  const attachRefErrorBtn = page.locator('#refErrorAttachHandler');
  await attachRefErrorBtn.click();
  const throwRefErrorBtn = page.locator('#refErrorThrowingButton');
  await throwRefErrorBtn.click();

  const refErrorName = await page.locator('#refErrorName');
  await expect(refErrorName).toHaveText('ReferenceError')
  const refErrorMessage = await page.locator('#refErrorMessage');
  await expect(refErrorMessage).toHaveText('blahblah is not defined')
  const refErrorStack = await page.locator('#refErrorStack');
  await expect(refErrorStack).toContainText('ReferenceError: blahblah is not defined at HTMLButtonElement')

  // CustomError
  await page.waitForSelector('.customErrorReady');
  const attachCustomErrorBtn = page.locator('#customErrorAttachHandler');
  await attachCustomErrorBtn.click();
  const throwCustomErrorBtn = page.locator('#customErrorThrowingButton');
  await throwCustomErrorBtn.click();

  const customErrorName = await page.locator('#customErrorName');
  await expect(customErrorName).toHaveText('FooError')
  const customErrorMessage = await page.locator('#customErrorMessage');
  await expect(customErrorMessage).toHaveText('custom error message')
});
