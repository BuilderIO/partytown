import type { BuildOptions, PackageJson } from './utils.js';
import { buildApi } from './build-api.js';
import { buildAtomics } from './build-atomics.js';
import { buildIntegration } from './build-integration.js';
import { buildMediaImplementation } from './build-media-implementations.js';
import { buildMainSnippet } from './build-main-snippet.js';
import { buildReact } from './build-react.js';
import { buildServiceWorker } from './build-service-worker.js';
import { buildServices } from './build-services.js';
import { buildUtils } from './build-utils.js';
import fsExtra from 'fs-extra';
import { join } from 'node:path';

const { emptyDir, ensureDir, readJsonSync, writeFile } = fsExtra;

export async function runBuild(rootDir: string, isDev: boolean, isReleaseBuild: boolean) {
  const opts = createBuildOptions(rootDir, isDev, isReleaseBuild);

  await createRootPackage(opts);

  if (opts.isReleaseBuild) {
    buildApi(opts);
  }

  return [
    buildMainSnippet(opts),
    buildServiceWorker(opts),
    ...buildAtomics(opts),
    buildMediaImplementation(opts),
    buildIntegration(opts),
    buildServices(opts),
    buildReact(opts),
    buildUtils(opts),
  ];
}

async function createRootPackage(opts: BuildOptions) {
  if (opts.isDev) {
    await ensureDir(opts.distIntegrationDir);
    await ensureDir(opts.distServicesDir);
    await ensureDir(opts.distLibDir);
    await ensureDir(opts.distReactDir);
  } else {
    await emptyDir(opts.distIntegrationDir);
    await emptyDir(opts.distServicesDir);
    await emptyDir(opts.distLibDir);
    await emptyDir(opts.distReactDir);
  }
  await ensureDir(opts.distLibDebugDir);

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

function createBuildOptions(rootDir: string, isDev: boolean, isReleaseBuild: boolean) {
  const distIntegrationDir = join(rootDir, 'integration');
  const distServicesDir = join(rootDir, 'services');
  const distLibDir = join(rootDir, 'lib');
  const distLibDebugDir = join(distLibDir, 'debug');
  const distReactDir = join(rootDir, 'react');
  const distUtilsDir = join(rootDir, 'utils');

  const srcDir = join(rootDir, 'src');
  const srcIntegrationDir = join(srcDir, 'integration');
  const srcServicesDir = join(srcDir, 'services');
  const srcLibDir = join(srcDir, 'lib');
  const srcReactDir = join(srcDir, 'react');
  const srcUtilsDir = join(srcDir, 'utils');

  const testsDir = join(rootDir, 'tests');
  const testsVideosDir = join(testsDir, 'videos');

  const tscDir = join(rootDir, 'tsc');
  const tscSrcDir = join(tscDir, 'src');
  const tscIntegrationDir = join(tscSrcDir, 'integration');
  const tscServicesDir = join(tscSrcDir, 'services');
  const tscLibDir = join(tscSrcDir, 'lib');
  const tscReactDir = join(tscSrcDir, 'react');
  const tscUtilsDir = join(tscSrcDir, 'utils');

  const packageJsonPath = join(rootDir, 'package.json');
  const packageJson: PackageJson = readJsonSync(packageJsonPath);

  if (!isReleaseBuild) {
    packageJson.version += '-dev' + Date.now();
  }

  const opts: BuildOptions = {
    isDev,
    isReleaseBuild,
    packageJson,
    rootDir,

    distIntegrationDir,
    distServicesDir,
    distLibDir,
    distLibDebugDir,
    distReactDir,
    distUtilsDir,

    srcDir,
    srcIntegrationDir,
    srcServicesDir,
    srcLibDir,
    srcReactDir,
    srcUtilsDir,

    testsDir,
    testsVideosDir,

    tscDir,
    tscIntegrationDir,
    tscServicesDir,
    tscLibDir,
    tscReactDir,
    tscUtilsDir,
  };

  return opts;
}
