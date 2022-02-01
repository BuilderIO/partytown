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
  webServer: {
    command: 'cd tests/nextjs-app && npm run build && npm start',
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
};

export default config;
