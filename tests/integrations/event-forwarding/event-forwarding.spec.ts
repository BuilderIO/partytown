import { test, expect } from '@playwright/test';

test('integration event forwarding', async ({ page }) => {
  await page.goto('/tests/integrations/event-forwarding/');
  await page.waitForSelector('.completed');

  const testFn = page.locator('#testFn');
  await expect(testFn).toHaveText('fnReady');

  const testArray = page.locator('#testArray');
  await expect(testArray).toHaveText('arrayReady');

  const buttonForwardEvent = page.locator('#buttonForwardEvent');
  await buttonForwardEvent.click();
  await expect(testFn).toHaveText('click1');
  await buttonForwardEvent.click();
  await expect(testFn).toHaveText('click2');

  const buttonArrayPush = page.locator('#buttonArrayPush');
  await buttonArrayPush.click();
  await expect(testArray).toHaveText(JSON.stringify({ mph: 88 }));
  await buttonArrayPush.click();
  await expect(testArray).toHaveText(JSON.stringify({ mph: 89 }));
});
