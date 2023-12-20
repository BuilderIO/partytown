import { test, expect } from '@playwright/test';

test('gtm', async ({ page }) => {
  await page.goto('/tests/integrations/gtm/');

  await page.waitForSelector('.completed');

  const buttonDataLayerPush = page.locator('#buttonDataLayerPush');
  await buttonDataLayerPush.click();

  const testDataLayer = page.locator('#testDataLayer');
  await expect(testDataLayer).toHaveText('pushed');

  const windowHandle = await page.evaluateHandle(() => Promise.resolve(window));
  const dataLayerHandle = await page.evaluateHandle(
    (window) => window['dataLayer'] as Record<string, unknown>[],
    windowHandle
  );
  const dataLayer = await dataLayerHandle.jsonValue();
  expect(dataLayer).toStrictEqual([]);
  await dataLayerHandle.dispose();
  await windowHandle.dispose();
});

test('gtm with preserveBehavior', async ({ page }) => {
  await page.goto('/tests/integrations/gtm/preserve-behavior.html');

  await page.waitForSelector('.completed');

  const buttonDataLayerPush = page.locator('#buttonDataLayerPush');
  await buttonDataLayerPush.click();

  const testDataLayer = page.locator('#testDataLayer');
  await expect(testDataLayer).toHaveText('pushed');

  const windowHandle = await page.evaluateHandle(() => Promise.resolve(window));
  const dataLayerHandle = await page.evaluateHandle(
    (window) => window['dataLayer'] as Record<string, unknown>[],
    windowHandle
  );
  const dataLayer = await dataLayerHandle.jsonValue();
  expect(dataLayer).toStrictEqual([{ event: 'button-click', from: 'partytown' }]);
  await dataLayerHandle.dispose();
  await windowHandle.dispose();
});
