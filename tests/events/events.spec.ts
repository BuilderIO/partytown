import { test, expect } from '@playwright/test';

test('events', async ({ page }) => {
  await page.goto('/events/');

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
});
