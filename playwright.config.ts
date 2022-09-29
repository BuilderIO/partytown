import { PlaywrightTestConfig } from '@playwright/test';

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
  timeout: 20000,
  webServer: {
    command: 'npm run serve.test',
    port: 4001,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  reporter: [['html', { outputFolder: 'tests/report' }], [process.env.CI ? 'dot' : 'list']],
};

export default config;
