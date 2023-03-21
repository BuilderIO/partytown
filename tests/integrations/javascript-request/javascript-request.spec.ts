import { expect, test } from '@playwright/test';

test('javascript request execution', async ({ page }) => {
  await page.goto('/tests/integrations/javascript-request/');

  await page.waitForSelector('.completed');

  const javascriptExecutionElement = page.locator('#javascript-execution');
  await expect(javascriptExecutionElement).toHaveText('Executed the js');
});

test('text request execution', async ({ page }) => {
  await page.goto('/tests/integrations/javascript-request/');

  await page.waitForSelector('.completed');

  const textExecutionElement = page.locator('#text-execution');
  await expect(textExecutionElement).toBeEmpty();
});
