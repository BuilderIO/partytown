import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'http://localhost:5000/',
    viewport: {
      width: 520,
      height: 600,
    },
    launchOptions: {
      args: ['--enable-features=SharedArrayBuffer'],
    },
    contextOptions: {
      recordVideo: {
        dir: 'tests/videos/',
      },
    },
    geolocation: { latitude: 88, longitude: 99 },
    permissions: ['geolocation'],
  },
};

export default config;
