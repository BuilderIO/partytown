# Local Development

Welcome 🎉!! If you've found a bug, or have an idea to add a feature we'd love to hear from you. It may save time to first ping the group on [Partytown's Discord channel](https://discord.gg/hbuEtxdEZ3) to talk through any ideas or any issues that may be a bug.

## Installation

```
npm install
npm run dev
```

See the [distribution](https://github.com/BuilderIO/partytown#distribution) section about the various files created. Note that both the root directory, and the `tests` directory receive a copy of the build files, such as `tests/~partytown/partytown.js`.

## Submitting Issues And Writing Tests

We need your help! If you found a bug, it's best to create a [Pull Request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) that replicates the issue using a test page. In the [tests directory](https://github.com/BuilderIO/partytown/tree/main/tests), copy one of the directories, such as `tests/document`, and recreate the issue you've found.

Follow the [manual testing](#manual-testing) directions on how to start the local dev server. Next, the more you can describe the debug and pin-point the issue the better, and any fixes to the runtime to solve the problem would be awesome. 🎉

If the PR fixes the issue, then creating an [end-to-end test](#e2e-testing) would help ensure no regressions happen over time.

## Manual Testing

Tests to be manually ran on a browser are located in the `tests` directory. These pages can help to test out DOM apis and individual services.

```
npm run serve
```

http://localhost:4000/

## E2E Testing

E2E tests use [@playwright/test](https://playwright.dev/docs/intro#writing-assertions), which allows us to test on Chromium, Firefox and WebKit browsers.
These pages are also tested on every commit within the project's [CI Workflow](https://github.com/BuilderIO/partytown/actions/workflows/ci.yml).

```
npm test
```

[Test Results](https://github.com/BuilderIO/partytown/actions/workflows/ci.yml)

## Deployed Tests

The same pages found in `tests` are deployed to:

https://partytown.vercel.app/
