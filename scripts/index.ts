import type { BuildOptions } from './utils';
import { buildApi } from './build-api';
import { buildAtomics } from './build-atomics';
import { buildMainLoader } from './build-main-loader';
import { buildMainSnippet } from './build-main-snippet';
import { buildIntegration } from './build-integration';
import { buildReact } from './build-react';
import { buildServiceWorker } from './build-service-worker';
import { emptyDir, ensureDir, readJsonSync, writeFile } from 'fs-extra';
import { join } from 'path';

export async function runBuild(rootDir: string, isDev: boolean, generateApi: boolean) {
  const opts = createBuildOptions(rootDir, isDev, generateApi);

  await createRootPackage(opts);

  if (opts.generateApi) {
    buildApi(opts);
  }

  return [
    buildMainLoader(opts),
    buildMainSnippet(opts),
    buildServiceWorker(opts),
    ...buildAtomics(opts),
    buildIntegration(opts),
    buildReact(opts),
  ];
}

async function createRootPackage(opts: BuildOptions) {
  if (opts.isDev) {
    await ensureDir(opts.distTestsDir);
    await ensureDir(opts.distIntegrationDir);
    await ensureDir(opts.distLibDir);
    await ensureDir(opts.distLibDebugDir);
    await ensureDir(opts.distReactDir);
  } else {
    await emptyDir(opts.distTestsDir);
    await emptyDir(opts.distIntegrationDir);
    await emptyDir(opts.distLibDir);
    await emptyDir(opts.distLibDebugDir);
    await emptyDir(opts.distReactDir);
  }

  await ensureDir(opts.distIntegrationDir);
  await ensureDir(opts.distLibDir);
  await ensureDir(opts.distLibDebugDir);
  await ensureDir(opts.distReactDir);

  const indexJsPath = join(opts.rootDir, 'index.js');
  await writeFile(indexJsPath, `// @builder.io/partytown\n`);
}

function createBuildOptions(rootDir: string, isDev: boolean, generateApi: boolean) {
  const distIntegrationDir = join(rootDir, 'integration');
  const distLibDir = join(rootDir, 'lib');
  const distLibDebugDir = join(distLibDir, 'debug');
  const distReactDir = join(rootDir, 'react');

  const srcDir = join(rootDir, 'src');
  const srcIntegrationDir = join(srcDir, 'integration');
  const srcLibDir = join(srcDir, 'lib');
  const srcReactDir = join(srcDir, 'react');

  const testsDir = join(rootDir, 'tests');
  const testsVideosDir = join(testsDir, 'videos');
  const distTestsDir = join(testsDir, '~partytown');

  const tscDir = join(rootDir, 'tsc');
  const tscSrcDir = join(tscDir, 'src');
  const tscIntegrationDir = join(tscSrcDir, 'integration');
  const tscLibDir = join(tscSrcDir, 'lib');
  const tscReactDir = join(tscSrcDir, 'react');

  const packageJsonPath = join(rootDir, 'package.json');
  const packageJson = readJsonSync(packageJsonPath);

  const opts: BuildOptions = {
    isDev,
    generateApi,
    rootDir,
    distIntegrationDir,
    distLibDir,
    distLibDebugDir,
    distReactDir,
    distTestsDir,
    srcDir,
    srcIntegrationDir,
    srcLibDir,
    srcReactDir,
    testsDir,
    testsVideosDir,
    tscDir,
    tscIntegrationDir,
    tscLibDir,
    tscReactDir,
    packageJson,
  };

  return opts;
}
