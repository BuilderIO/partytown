import { test, expect } from '@playwright/test';

test('resize-observer', async ({ page }) => {
  await page.goto('/platform/resize-observer/');

  await page.waitForSelector('.completed');

  const buttonObserve = page.locator('#buttonObserve');
  const buttonIncrease = page.locator('#buttonIncrease');
  const buttonDecrease = page.locator('#buttonDecrease');

  const testResizeObserver = page.locator('#testResizeObserver');

  await buttonIncrease.click();
  await page.waitForSelector('.step1');
  await expect(testResizeObserver).toHaveText('');

  await buttonObserve.click();
  await page.waitForSelector('.step2');
  await expect(testResizeObserver).toHaveText('Height: 50px');

  await buttonIncrease.click();
  await page.waitForSelector('.step3');
  await expect(testResizeObserver).toHaveText('Height: 60px');

  await buttonDecrease.click();
  await page.waitForSelector('.step4');
  await expect(testResizeObserver).toHaveText('Height: 50px');

  await buttonObserve.click();
  await page.waitForSelector('.step5');

  await buttonDecrease.click();
  await page.waitForSelector('.step6');
  await expect(testResizeObserver).toHaveText('Height: 50px');
});
