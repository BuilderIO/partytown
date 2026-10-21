import { test, expect } from '@playwright/test';

test('sw-bypass', async ({ page, baseURL }) => {
  test.skip(new URL(baseURL!).port === '4003', 'service-worker mode only');

  // the service worker is registered and activated, but its scope doesn't
  // cover the sandbox, so the sandbox navigation reaches the server, as in
  // Safari private browsing (#554)
  await page.addInitScript(() => {
    if (window === window.top) {
      const register = navigator.serviceWorker.register.bind(navigator.serviceWorker);
      navigator.serviceWorker.register = (scriptURL, options) =>
        register(scriptURL, { ...options, scope: `${options?.scope}unused/` });
    }
  });

  const proxytownRequests: string[] = [];
  page.context().on('request', (req) => {
    if (req.url().includes('proxytown')) {
      proxytownRequests.push(req.url());
    }
  });

  await page.goto('/tests/platform/sw-bypass/');

  // well before the 10s fallbackTimeout
  await page.waitForSelector('.completed', { timeout: 3000 });
  await expect(page.locator('#testBypass')).toHaveText('executed');

  expect(proxytownRequests).toEqual([]);
});
