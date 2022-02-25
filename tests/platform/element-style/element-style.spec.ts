import { test, expect } from '@playwright/test';

test('element style', async ({ page }) => {
  await page.goto('/tests/platform/element-style/');
  await page.waitForSelector('.completed');

  const testColor = page.locator('#testColor');
  await expect(testColor).toHaveCSS('color', 'rgb(255, 0, 0)');
  await expect(testColor).toHaveText('red');

  const testBeforeAppend = page.locator('#testBeforeAppend');
  await expect(testBeforeAppend).toHaveCSS('color', 'rgb(0, 128, 0)');
  await expect(testBeforeAppend).toHaveCSS('fontWeight', '800');
  await expect(testBeforeAppend).toHaveText('green');

  const testGetExisting = page.locator('#testGetExisting');
  await expect(testGetExisting).toHaveCSS('color', 'rgb(0, 0, 255)');
  await expect(testGetExisting).toHaveText('blue');

  const testSetGetProperty = page.locator('#testSetGetProperty');
  await expect(testSetGetProperty).toHaveCSS('color', 'rgb(128, 0, 128)');
  await expect(testSetGetProperty).toHaveText('purple important');

  const testRemoveProperty = page.locator('#testRemoveProperty');
  await expect(testRemoveProperty).toHaveCSS('color', 'rgb(0, 0, 0)');
  await expect(testRemoveProperty).toHaveText('""');
});
