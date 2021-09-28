import { test, expect } from '@playwright/test';

test('script', async ({ page }) => {
  await page.goto('/platform/script/');

  await page.waitForSelector('.testJSONP');
  const testJSONP = page.locator('#testJSONP');
  await expect(testJSONP).toHaveText('88');
  expect(await page.$$('[data-testjsonp]')).toHaveLength(0);

  await page.waitForSelector('.testOnLoad');
  const testOnLoad = page.locator('#testOnLoad');
  await expect(testOnLoad).toHaveText('99');
  expect(await page.$$('[data-testonload]')).toHaveLength(0);

  await page.waitForSelector('.testOnError');
  const testOnError = page.locator('#testOnError');
  await expect(testOnError).toHaveText('error');

  await page.waitForSelector('.testAddEventListenerError');
  const testAddEventListenerError = page.locator('#testAddEventListenerError');
  await expect(testAddEventListenerError).toHaveText('error');
});
