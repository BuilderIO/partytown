import { test, expect } from '@playwright/test';

test('nextjs', async ({ page }) => {
  await page.goto('/');

  await page.waitForSelector('.completed');

  const h1 = page.locator('h1');
  await expect(h1).toHaveText('Next.js with 🎉');

  const outputNextScript = page.locator('#output-next-script');
  await expect(outputNextScript).toHaveText('passed');

  const outputScript = page.locator('#output-script');
  await expect(outputScript).toHaveText('passed');
});
