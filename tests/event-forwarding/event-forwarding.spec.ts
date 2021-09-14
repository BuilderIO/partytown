import { test, expect } from '@playwright/test';

test('event forwarding', async ({ page }) => {
  await page.goto('/event-forwarding/');
  await page.waitForSelector('.completed');

  const beforeReady = page.locator('#beforeReady');
  await expect(beforeReady).toHaveText('ready');

  const buttonForwardEvent = page.locator('#buttonForwardEvent');
  await buttonForwardEvent.click();
  const testForwardEventInc = page.locator('#testForwardEventInc');
  await expect(testForwardEventInc).toHaveText('1');
  await buttonForwardEvent.click();
  await expect(testForwardEventInc).toHaveText('2');
  const testForwardEvent = page.locator('#testForwardEvent');
  await expect(testForwardEvent).toHaveText('click');

  const buttonDataLayer = page.locator('#buttonDataLayer');
  await buttonDataLayer.click();
  const testDataLayer = page.locator('#testDataLayer');
  await expect(testDataLayer).toHaveText(JSON.stringify({ mph: 88 }));
  await buttonDataLayer.click();
  await expect(testDataLayer).toHaveText(JSON.stringify({ mph: 89 }));
});
