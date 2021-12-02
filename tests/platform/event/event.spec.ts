import { test, expect } from '@playwright/test';

test('events', async ({ page }) => {
  await page.goto('/platform/event/');

  await page.waitForSelector('.completed');

  const testAddEventListener = page.locator('#testAddEventListener');
  const buttonAddEventListener = page.locator('#buttonAddEventListener');
  await buttonAddEventListener.click();
  await expect(testAddEventListener).toHaveText('1');
  await buttonAddEventListener.click();
  await expect(testAddEventListener).toHaveText('2');
  const testTarget = page.locator('#testTarget');
  await expect(testTarget).toHaveText('BUTTON');

  const buttonInc = page.locator('#buttonInc');
  const buttonAdd = page.locator('#buttonAdd');
  const buttonRemove = page.locator('#buttonRemove');
  const testInc = page.locator('#testInc');
  await expect(testInc).toHaveText('0');
  await buttonInc.click();
  await expect(testInc).toHaveText('0');
  await buttonAdd.click();
  await buttonInc.click();
  await expect(testInc).toHaveText('1');
  await buttonInc.click();
  await expect(testInc).toHaveText('2');
  await buttonRemove.click();
  await buttonInc.click();
  await buttonInc.click();
  await expect(testInc).toHaveText('2');
  await buttonAdd.click();
  await buttonInc.click();
  await expect(testInc).toHaveText('3');

  const testWinAddEventListener = page.locator('#testWinAddEventListener');
  await expect(testWinAddEventListener).toHaveText('Window click');

  await page.waitForSelector('.testCreateEvent');
  const testCreateEvent = page.locator('#testCreateEvent');
  await expect(testCreateEvent).toHaveText('DOC_CREATE true false currentTarget');

  await page.waitForSelector('.testNewEvent');
  const testNewEvent = page.locator('#testNewEvent');
  await expect(testNewEvent).toHaveText('NEW_EVENT false true target');

  await page.waitForSelector('.testNewCustomEvent');
  const testNewCustomEvent = page.locator('#testNewCustomEvent');
  await expect(testNewCustomEvent).toHaveText('NEW_CUSTOM_EVENT true true 88');

  await page.waitForSelector('.testCrossOriginMessage');
  const testCrossOriginMessage = page.locator('#testCrossOriginMessage');
  await expect(testCrossOriginMessage).toHaveText('message cross origin');
});
