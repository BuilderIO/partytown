import type { BuildOptions } from './utils';
import { emptyDir } from 'fs-extra';
import { join } from 'path';
import { buildApi } from './build-api';
import { buildMainLoader } from './build-main-loader';
import { buildMainSnippet } from './build-main-snippet';
import { buildServiceWorker } from './build-service-worker';
import { buildIntegration } from './build-integration';
import { buildReact } from './build-react';

export async function runBuild(rootDir: string, isDev: boolean, generateApi: boolean) {
  const opts = createBuildOptions(rootDir, isDev, generateApi);

  if (!opts.isDev) {
    const emptyDirs = [
      opts.buildIntegrationDir,
      opts.buildLibDir,
      opts.buildReactDir,
      opts.buildTestsDir,
      opts.testsVideosDir,
    ];
    await Promise.all(emptyDirs.map(emptyDir));
  }

  if (opts.generateApi) {
    buildApi(opts);
  }

  return [
    buildMainLoader(opts),
    buildMainSnippet(opts),
    buildServiceWorker(opts),
    buildIntegration(opts),
    buildReact(opts),
  ];
}

function createBuildOptions(rootDir: string, isDev: boolean, generateApi: boolean) {
  const tscDir = join(rootDir, 'tsc');
  const tscSrcDir = join(tscDir, 'src');
  const tscIntegrationDir = join(tscSrcDir, 'integration');
  const tscLibDir = join(tscSrcDir, 'lib');
  const tscReactDir = join(tscSrcDir, 'react');

  const srcDir = join(rootDir, 'src');
  const srcIntegrationDir = join(srcDir, 'integration');
  const srcLibDir = join(srcDir, 'lib');
  const srcReactDir = join(srcDir, 'react');

  const testsDir = join(rootDir, 'tests');
  const testsVideosDir = join(testsDir, 'videos');
  const buildTestsDir = join(testsDir, '~partytown');

  const buildIntegrationDir = join(rootDir, 'integration');
  const buildLibDir = join(rootDir, 'lib');
  const buildReactDir = join(rootDir, 'react');

  const opts: BuildOptions = {
    isDev,
    generateApi,
    rootDir,
    tscDir,
    tscIntegrationDir,
    tscLibDir,
    tscReactDir,
    srcDir,
    srcIntegrationDir,
    srcLibDir,
    srcReactDir,
    buildIntegrationDir,
    buildLibDir,
    buildReactDir,
    buildTestsDir,
    testsDir,
    testsVideosDir,
  };
  return opts;
}
