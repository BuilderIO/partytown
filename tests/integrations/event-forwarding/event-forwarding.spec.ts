import { test, expect, Page } from '@playwright/test';

const testPage = async (page: Page) => {
  const testFn = page.locator('#testFn');
  await expect(testFn).toHaveText('fnReady');

  const testFnInner = page.locator('#testFnInner');
  await expect(testFnInner).toHaveText('fnReady');  

  const testArray = page.locator('#testArray');
  await expect(testArray).toHaveText('arrayReady');

  const testPreservedArray = page.locator('#testPreservedArray');
  await expect(testPreservedArray).toHaveText('arrayReady');

  const testArrayInner = page.locator('#testArrayInner');
  await expect(testArrayInner).toHaveText('arrayReady');  

  const kiwiSizing = page.locator('#kiwisizing');
  await expect(kiwiSizing).not.toBeEmpty();
  await expect(JSON.parse(await kiwiSizing.textContent() as string).collections).toEqual('211448987800');

  const buttonForwardEvent = page.locator('#buttonForwardEvent');
  await buttonForwardEvent.click();
  await expect(testFn).toHaveText('click1');
  await buttonForwardEvent.click();
  await expect(testFn).toHaveText('click2');

  const windowHandle = await page.evaluateHandle(() => Promise.resolve(window));

  const superArrayHandle = await page.evaluateHandle(
    (window) => window['superArray'] as Record<string, unknown>[],
    windowHandle
  );
  const buttonArrayPush = page.locator('#buttonArrayPush');
  await buttonArrayPush.click();
  await expect(testArray).toHaveText(JSON.stringify({ mph: 88 }));
  await buttonArrayPush.click();
  await expect(testArray).toHaveText(JSON.stringify({ mph: 89 }));
  const superArray = await superArrayHandle.jsonValue();
  await superArrayHandle.dispose();
  await expect(superArray).toStrictEqual([]);

  const superPreservedArrayHandle = await page.evaluateHandle(
    (window) => window['superPreservedArray'] as Record<string, unknown>[],
    windowHandle
  );
  const buttonPreservedArrayPush = page.locator('#buttonPreservedArrayPush');
  const label = page.locator('#testPreservedArrayReturnValue');
  await buttonPreservedArrayPush.click();
  await expect(testPreservedArray).toHaveText(JSON.stringify({ mph: 88 }));
  await expect(label).toHaveText('2');
  await buttonPreservedArrayPush.click();
  await expect(testPreservedArray).toHaveText(JSON.stringify({ mph: 89 }));
  await expect(label).toHaveText('3');
  const superPreservedArray = await superPreservedArrayHandle.jsonValue();
  await superPreservedArrayHandle.dispose();
  await expect(superPreservedArray).toStrictEqual([{ mph: 89 }, { mph: 88 }, 'arrayReady']);

  await windowHandle.dispose();
};

test('integration event forwarding', async ({ page }) => {
  await page.goto('/tests/integrations/event-forwarding/');
  await page.waitForSelector('.completed');
  await testPage(page);
});

test('integration event forwarding multiple tabs', async ({ page, context }) => {
  await page.goto('/tests/integrations/event-forwarding/');
  await page.waitForSelector('.completed');

  const page2 = await context.newPage();
  await page2.goto('/tests/integrations/event-forwarding/');
  await page2.waitForSelector('.completed');

  await page.bringToFront();
  await testPage(page);

  await page2.bringToFront();
  await testPage(page2);
});
