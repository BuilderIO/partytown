import { test, expect } from '@playwright/test';

test('svg', async ({ page }) => {
  await page.goto('/tests/platform/svg/');

  await page.waitForSelector('.completed');

  const testCreateNS = page.locator('#testCreateNS');
  await expect(testCreateNS).toHaveText('svg 1 SVGSVGElement');

  const testNamespaceURI = page.locator('#testNamespaceURI');
  await expect(testNamespaceURI).toHaveText('http://www.w3.org/2000/svg');

  const testBBox = page.locator('#testBBox');
  await expect(testBBox).toHaveText('{"w":20,"h":20} SVGGElement SVGGraphicsElement');

  const testOwnerSVGElement = page.locator('#testOwnerSVGElement');
  await expect(testOwnerSVGElement).toHaveText('true null svg');

  const testGetScreenCTM = page.locator('#testGetScreenCTM');
  await expect(testGetScreenCTM).toHaveText('true');
});
