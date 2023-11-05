import { test, expect, Page } from '@playwright/test';

const testPage = async (page: Page) => {
  const testFn = page.locator('#testFn');
  await expect(testFn).toHaveText('fnReady');

  const testFnInner = page.locator('#testFnInner');
  await expect(testFnInner).toHaveText('fnReady');  

  const testArray = page.locator('#testArray');
  await expect(testArray).toHaveText('arrayReady');

  const testArrayInner = page.locator('#testArrayInner');
  await expect(testArrayInner).toHaveText('arrayReady');  

  const kiwiSizing = page.locator('#kiwisizing');
  await expect(kiwiSizing).toHaveText('211448987800');

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
};

test('integration event forwarding', async ({ page }) => {
  await page.goto('/tests/integrations/event-forwarding/');
  await page.waitForSelector('.completed');
  await testPage(page);
});

test('integration event forwarding multiple tabs', async ({ page, context }) => {
  await page.goto('/tests/integrations/event-forwarding/');
  await page.waitForSelector('.completed');

  const page2 = await context.newPage();
  await page2.goto('/tests/integrations/event-forwarding/');
  await page2.waitForSelector('.completed');

  await page.bringToFront();
  await testPage(page);

  await page2.bringToFront();
  await testPage(page2);
});
