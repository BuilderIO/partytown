import { test, expect } from '@playwright/test';

test('integration config', async ({ page }) => {
  await page.goto('/integrations/config/');
  await page.waitForSelector('.completed');

  const testGetContinue = page.locator('#testGetContinue');
  await expect(testGetContinue).toHaveText('Integration Config');

  const testGetHook = page.locator('#testGetHook');
  await expect(testGetHook).toHaveText('hooked-getter');

  const testGetWindowHook = page.locator('#testGetWindowHook');
  await expect(testGetWindowHook).toHaveText('999');

  const testSetContinue = page.locator('#testSetContinue');
  await expect(testSetContinue).toHaveText('Continue Title Update');

  const testSetPrevent = page.locator('#testSetPrevent');
  await expect(testSetPrevent).toHaveText('prevented body.innerHTML');

  const testSetHook = page.locator('#testSetHook');
  await expect(testSetHook).toHaveText('hooked-SPAN-innerText-value');

  const testApplyContinue = page.locator('#testApplyContinue');
  await expect(testApplyContinue).toHaveText('88');

  const testApplyHook = page.locator('#testApplyHook');
  await expect(testApplyHook).toHaveText('prevented document.write()');

  const testApplyArgs = page.locator('#testApplyArgs');
  await expect(testApplyArgs).toHaveText('1.21');
});
