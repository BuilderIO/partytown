import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    viewport: {
      width: 520,
      height: 600,
    },
    contextOptions: {
      recordVideo: {
        dir: 'tests/videos/',
      },
    },
  },
  timeout: 60000,
  webServer: {
    command: 'npm run serve.test',
    port: 4001,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
};

export default config;
