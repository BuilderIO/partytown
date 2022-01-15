import type { BuildOptions } from './utils';
import { buildApi } from './build-api';
import { buildAtomics } from './build-atomics';
import { buildIntegration } from './build-integration';
import { buildMediaImplementation } from './build-media-implementations';
import { buildMainSnippet } from './build-main-snippet';
import { buildReact } from './build-react';
import { buildServiceWorker } from './build-service-worker';
import { buildUtils } from './build-utils';
import { emptyDir, ensureDir, readJsonSync, writeFile } from 'fs-extra';
import { join } from 'path';

export async function runBuild(rootDir: string, isDev: boolean, generateApi: boolean) {
  const opts = createBuildOptions(rootDir, isDev, generateApi);

  await createRootPackage(opts);

  if (opts.generateApi) {
    buildApi(opts);
  }

  return [
    buildMainSnippet(opts),
    buildServiceWorker(opts),
    ...buildAtomics(opts),
    buildMediaImplementation(opts),
    buildIntegration(opts),
    buildReact(opts),
    buildUtils(opts),
  ];
}

async function createRootPackage(opts: BuildOptions) {
  if (opts.isDev) {
    await ensureDir(opts.distIntegrationDir);
    await ensureDir(opts.distLibDir);
    await ensureDir(opts.distTestsLibDir);
    await ensureDir(opts.distReactDir);
  } else {
    await emptyDir(opts.distIntegrationDir);
    await emptyDir(opts.distLibDir);
    await emptyDir(opts.distTestsLibDir);
    await emptyDir(opts.distReactDir);
  }

  await ensureDir(opts.distLibDebugDir);
  await ensureDir(opts.distTestsLibDebugDir);
  await ensureDir(opts.distIntegrationDir);
  await ensureDir(opts.distLibDir);
  await ensureDir(opts.distLibDebugDir);
  await ensureDir(opts.distReactDir);

  const indexCjsPath = join(opts.rootDir, 'index.cjs');
  const indexMjsPath = join(opts.rootDir, 'index.mjs');
  const indexDtsPath = join(opts.rootDir, 'index.d.ts');
  await writeFile(indexCjsPath, `exports.version = ${JSON.stringify(opts.packageJson.version)};\n`);
  await writeFile(
    indexMjsPath,
    `export const version = ${JSON.stringify(opts.packageJson.version)};\n`
  );
  await writeFile(indexDtsPath, `export declare const version: string;\n`);
}

function createBuildOptions(rootDir: string, isDev: boolean, generateApi: boolean) {
  const distIntegrationDir = join(rootDir, 'integration');
  const distLibDir = join(rootDir, 'lib');
  const distLibDebugDir = join(distLibDir, 'debug');
  const distReactDir = join(rootDir, 'react');
  const distUtilsDir = join(rootDir, 'utils');

  const srcDir = join(rootDir, 'src');
  const srcIntegrationDir = join(srcDir, 'integration');
  const srcLibDir = join(srcDir, 'lib');
  const srcReactDir = join(srcDir, 'react');
  const srcUtilsDir = join(srcDir, 'utils');

  const testsDir = join(rootDir, 'tests');
  const testsVideosDir = join(testsDir, 'videos');
  const distTestsLibDir = join(testsDir, '~partytown');
  const distTestsLibDebugDir = join(distTestsLibDir, 'debug');

  const tscDir = join(rootDir, 'tsc');
  const tscSrcDir = join(tscDir, 'src');
  const tscIntegrationDir = join(tscSrcDir, 'integration');
  const tscLibDir = join(tscSrcDir, 'lib');
  const tscReactDir = join(tscSrcDir, 'react');
  const tscUtilsDir = join(tscSrcDir, 'utils');

  const packageJsonPath = join(rootDir, 'package.json');
  const packageJson = readJsonSync(packageJsonPath);

  const opts: BuildOptions = {
    isDev,
    generateApi,
    packageJson,
    rootDir,

    distIntegrationDir,
    distLibDir,
    distLibDebugDir,
    distTestsLibDir,
    distTestsLibDebugDir,
    distReactDir,
    distUtilsDir,

    srcDir,
    srcIntegrationDir,
    srcLibDir,
    srcReactDir,
    srcUtilsDir,

    testsDir,
    testsVideosDir,

    tscDir,
    tscIntegrationDir,
    tscLibDir,
    tscReactDir,
    tscUtilsDir,
  };

  return opts;
}
