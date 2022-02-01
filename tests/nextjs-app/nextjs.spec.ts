import { test, expect } from '@playwright/test';

test('nextjs', async ({ page }) => {
  await page.goto('/');

  const h1 = page.locator('h1');
  await expect(h1).toHaveText('Next.js with 🎉');
});
