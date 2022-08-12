import { test, expect } from '@playwright/test';

test('integration call forwarding', async ({ page }) => {
  await page.goto('/tests/integrations/call-forwarding/');
  await page.waitForSelector('.completed');

  const testStandardCallQueued = page.locator('#testStandardCallQueued');
  const testNestedCallQueued = page.locator('#testNestedCallQueued');

  await expect(testStandardCallQueued).toHaveText('16');
  await expect(testNestedCallQueued).toHaveText('25');

  const buttonStandardCall = page.locator('#buttonStandardCall');
  const testStandardCall = page.locator('#testStandardCall');

  await buttonStandardCall.click();
  await expect(testStandardCall).toHaveText('0');
  await buttonStandardCall.click();
  await expect(testStandardCall).toHaveText('1');
  await buttonStandardCall.click();
  await expect(testStandardCall).toHaveText('4');

  const buttonNestedCall = page.locator('#buttonNestedCall');
  const testNestedCall = page.locator('#testNestedCall');

  await buttonNestedCall.click();
  await expect(testNestedCall).toHaveText('0');
  await buttonNestedCall.click();
  await expect(testNestedCall).toHaveText('1');
  await buttonNestedCall.click();
  await expect(testNestedCall).toHaveText('4');

  const buttonTimeout = page.locator('#buttonTimeout');
  const testTimeout = page.locator('#testTimeout');

  await buttonTimeout.click();
  await page.waitForTimeout(1000);
  await expect(testTimeout).toHaveText('Timeout');
});
