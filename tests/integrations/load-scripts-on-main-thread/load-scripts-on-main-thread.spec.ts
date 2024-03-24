import { test, expect } from '@playwright/test';

test('integration window accessor', async ({ page }) => {
  await page.goto('/tests/integrations/load-scripts-on-main-thread/index.html');
  await page.waitForSelector('.completed.regexp-completed.background-completed');

  const scriptElement = page.locator('#testScript');
  await expect(scriptElement).toHaveAttribute('type', 'text/javascript');
  const testScriptRanInTheBackground = page.locator('#testScriptRanInTheBackground');
  await expect(testScriptRanInTheBackground).toHaveText('false');

  const regexScriptElement = page.locator('#regexTestScript');
  await expect(regexScriptElement).toHaveAttribute('type', 'text/javascript');
  const regexTestScriptRanInTheBackground = page.locator('#regexTestScriptRanInTheBackground');
  await expect(regexTestScriptRanInTheBackground).toHaveText('false');

  const inlineTestScriptRanInTheBackground = page.locator('#inlineTestScriptRanInTheBackground');
  await expect(inlineTestScriptRanInTheBackground).toHaveText('false');

  const backgroundTestScriptRanInTheBackground = page.locator(
    '#backgroundTestScriptRanInTheBackground'
  );
  await expect(backgroundTestScriptRanInTheBackground).toHaveText('true');

  await page.waitForSelector('.testInlineScript');
  const testInlineScript = page.locator('#testInlineScript');
  await expect(testInlineScript).toHaveText('12');
  
  await page.waitForSelector('.testInlineScriptText');
  const testInlineScriptText = page.locator('#testInlineScriptText');
  await expect(testInlineScriptText).toHaveText('13');
});

test('integration window accessor with snippet', async ({ page }) => {
  await page.goto('/tests/integrations/load-scripts-on-main-thread/snippet.html');
  await page.waitForSelector('.completed.regexp-completed.background-completed');

  const scriptElement = page.locator('#testScript');
  await expect(scriptElement).toHaveAttribute('type', 'text/javascript');
  const testScriptRanInTheBackground = page.locator('#testScriptRanInTheBackground');
  await expect(testScriptRanInTheBackground).toHaveText('false');

  const regexScriptElement = page.locator('#regexTestScript');
  await expect(regexScriptElement).toHaveAttribute('type', 'text/javascript');
  const regexTestScriptRanInTheBackground = page.locator('#regexTestScriptRanInTheBackground');
  await expect(regexTestScriptRanInTheBackground).toHaveText('false');

  const inlineTestScriptRanInTheBackground = page.locator('#inlineTestScriptRanInTheBackground');
  await expect(inlineTestScriptRanInTheBackground).toHaveText('false');

  const backgroundTestScriptRanInTheBackground = page.locator(
    '#backgroundTestScriptRanInTheBackground'
  );
  await expect(backgroundTestScriptRanInTheBackground).toHaveText('true');

  await page.waitForSelector('.testInlineScript');
  const testInlineScript = page.locator('#testInlineScript');
  await expect(testInlineScript).toHaveText('12');
  
  await page.waitForSelector('.testInlineScriptText');
  const testInlineScriptText = page.locator('#testInlineScriptText');
  await expect(testInlineScriptText).toHaveText('13');
});
