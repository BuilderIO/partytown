import { test, expect } from '@playwright/test';

test('mutation-observer', async ({ page }) => {
  await page.goto('/platform/mutation-observer/');

  const buttonObserve = page.locator('#buttonObserve');
  const buttonAttr = page.locator('#buttonAttr');
  const buttonChildList = page.locator('#buttonChildList');

  const testMutationObserver = page.locator('#testMutationObserver');

  await buttonAttr.click();
  await expect(testMutationObserver).toHaveText('');

  await buttonChildList.click();
  await expect(testMutationObserver).toHaveText('');

  await buttonObserve.click();

  await buttonAttr.click();
  await expect(testMutationObserver).toHaveText('attributes');

  await buttonChildList.click();
  await expect(testMutationObserver).toHaveText('childList');

  await buttonObserve.click();
  await expect(testMutationObserver).toHaveText('');

  await buttonAttr.click();
  await expect(testMutationObserver).toHaveText('');

  await buttonChildList.click();
  await expect(testMutationObserver).toHaveText('');
});
