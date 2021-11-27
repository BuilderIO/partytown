import config from './playwright.config';

config.use.launchOptions = {
  args: ['--enable-features=SharedArrayBuffer'],
};
config.use.contextOptions.recordVideo = undefined;
config.webServer.command = 'npm run serve.atomics.test';
config.webServer.port = 4003;

export default config;
