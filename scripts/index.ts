import type { BuildOptions } from './utils';
import { buildApi } from './build-api';
import { buildAtomics } from './build-atomics';
import { buildMainLoader } from './build-main-loader';
import { buildMainSnippet } from './build-main-snippet';
import { buildIntegration } from './build-integration';
import { buildReact } from './build-react';
import { buildServiceWorker } from './build-service-worker';
import { emptyDir, ensureDir, readJsonSync, writeFile, writeJson } from 'fs-extra';
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
    await ensureDir(opts.distDir);
    await ensureDir(opts.distTestsDir);
  } else {
    await emptyDir(opts.distDir);
    await emptyDir(opts.distTestsDir);
  }

  await ensureDir(opts.distIntegrationDir);
  await ensureDir(opts.distLibDir);
  await ensureDir(opts.distLibDebugDir);
  await ensureDir(opts.distReactDir);

  const indexJsCode = `// @builder.io/partytown`;
  const indexJsPath = join(opts.distDir, 'index.js');
  await writeFile(indexJsPath, indexJsCode);

  const rootPkg = opts.packageJson;
  const packageJson = {
    name: rootPkg.name,
    version: rootPkg.version,
    description: rootPkg.description,
    license: rootPkg.license,
    author: rootPkg.author,
    main: './index.js',
    exports: {
      './integration': {
        import: './integration/index.mjs',
        require: './integration/index.cjs',
      },
      './react': {
        import: './react/index.mjs',
        require: './react/index.cjs',
      },
      '.': {
        require: './index.js',
      },
    },
    files: ['./integration/', './lib/', './react/', './index.js'],
    homepage: rootPkg.homepage,
    keywords: rootPkg.keywords,
    repository: rootPkg.repository,
    publishConfig: rootPkg.publishConfig,
  };

  if (opts.isDev) {
    const version = `dev.0.${Date.now()}`;
    rootPkg.version = packageJson.version = version;
  }

  const packageJsonPath = join(opts.distDir, 'package.json');
  await writeJson(packageJsonPath, packageJson, { spaces: 2 });
}

function createBuildOptions(rootDir: string, isDev: boolean, generateApi: boolean) {
  const distDir = join(rootDir, 'dist');
  const distIntegrationDir = join(distDir, 'integration');
  const distLibDir = join(distDir, 'lib');
  const distLibDebugDir = join(distLibDir, 'debug');
  const distReactDir = join(distDir, 'react');

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
    distDir,
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
