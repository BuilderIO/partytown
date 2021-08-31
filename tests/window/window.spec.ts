import { test, expect } from '@playwright/test';

test('window', async ({ page }) => {
  await page.goto('/window/');

  await page.waitForSelector('.completed');

  const testComputedStyle = page.locator('#testGetComputedStyle');
  await expect(testComputedStyle).toHaveText('rgb(128, 0, 128)');

  await page.waitForSelector('.testRaf');

  const testBtoa = page.locator('#testBtoa');
  await expect(testBtoa).toHaveText('ODg=');
  const testAtob = page.locator('#testAtob');
  await expect(testAtob).toHaveText('88');

  page.on('dialog', (dialog) => dialog.accept('88'));
  const promptButton = page.locator('#button-prompt');
  await promptButton.click();
  const testPrompt = page.locator('#testPrompt');
  await expect(testPrompt).toHaveText('88');
});
