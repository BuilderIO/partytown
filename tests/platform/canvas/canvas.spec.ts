import { test, expect } from '@playwright/test';

test('canvas', async ({ page }) => {
  await page.goto('/tests/platform/canvas/');

  await page.waitForSelector('.completed');

  const testGetContext2dCanvas = page.locator('#testGetContext2dCanvas');
  await expect(testGetContext2dCanvas).toHaveText('CANVAS');

  const testMeasureText = page.locator('#testMeasureText');
  await expect(testMeasureText).not.toHaveText('');

  const testFillStyle = page.locator('#testFillStyle');
  await expect(testFillStyle).toHaveText('blue');

  const testCreateRadialGradient = page.locator('#testCreateRadialGradient');
  await expect(testCreateRadialGradient).toHaveText('CanvasGradient');

  const testGetContextWebGLCanvas = page.locator('#testGetContextWebGLCanvas');
  await expect(testGetContextWebGLCanvas).toHaveText('CANVAS');

  const testWebGLRenderInfo = page.locator('#testWebGLRenderInfo');
  await expect(testWebGLRenderInfo).not.toHaveText('');
});
