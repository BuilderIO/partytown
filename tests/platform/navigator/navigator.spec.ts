import { test, expect, Request } from '@playwright/test';

test('navigator', async ({ page }) => {
  const sendBeaconWithParamsRequest = new Promise<Request>((resolve) => {
    page.on('request', (request) => {
      if (request.url().includes('api.js?withParams=1')) {
        resolve(request);
      }
    });
  });

  await page.goto('/tests/platform/navigator/');

  const testUserAgent = await page.waitForSelector('.testUserAgent');
  const ua = await testUserAgent.textContent();
  expect(ua?.startsWith('Mozilla/5.0')).toBe(true);

  await page.waitForSelector('.testSendBeacon');
  const testSendBeacon = page.locator('#testSendBeacon');
  await expect(testSendBeacon).toContainText('true');

  await page.waitForSelector('.testSendBeaconResolveParams');
  const testSendBeaconResolveParams = page.locator('#testSendBeaconResolveParams');
  await expect(testSendBeaconResolveParams).toContainText('true');
  const beaconWithParamsRequest = await sendBeaconWithParamsRequest;
  const headers = await beaconWithParamsRequest.allHeaders();
  expect(headers['cache-control']).toBe('max-age=0');
  expect(headers['custom-header']).toBe('custom-value');
  expect(headers['sec-fetch-mode']).toBe('same-origin');
  expect(headers['sec-fetch-site']).toBe('same-origin');

  await page.waitForSelector('.testNavKey');
  const testNavKey = page.locator('#testNavKey');
  await expect(testNavKey).toContainText('5');

  await page.waitForSelector('.testMainNavigatorProperties');
  const testMainNavigatorProperties = page.locator('#testMainNavigatorProperties');
  await expect(testMainNavigatorProperties).toContainText(
    '{"javaEnabled":false,"cookieEnabled":true,"undefinedProp":"is_undefined","nullProp":null,"falseProp":false,"emptyStringProp":"","newProperty":"is_undefined","pdfViewerEnabled":"available","plugins":"available"}'
  );
});
