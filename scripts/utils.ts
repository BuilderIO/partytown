import gzipSize from 'gzip-size';
import { basename, join } from 'path';
import { copy, readdirSync, readFileSync, readJson, statSync, writeJson } from 'fs-extra';
import type { Plugin, RollupWarning } from 'rollup';

export function syncCommunicationModulesPlugin(opts: BuildOptions, msgType: MessageType): Plugin {
  return {
    name: 'syncCommunicationModulesPlugin',
    resolveId(id) {
      if (id === '@sync-send-message-to-main') {
        if (msgType === 'sw') {
          return join(opts.tscLibDir, 'service-worker', `sync-send-message-to-main-sw.js`);
        }
        if (msgType === 'atomics') {
          return join(opts.tscLibDir, 'atomics', `sync-send-message-to-main-atomics.js`);
        }
      }
      if (id === '@sync-create-messenger') {
        if (msgType === 'sw') {
          return join(opts.tscLibDir, 'service-worker', `sync-create-messenger-sw.js`);
        }
        if (msgType === 'atomics') {
          return join(opts.tscLibDir, 'atomics', `sync-create-messenger-atomics.js`);
        }
      }
      return null;
    },
  };
}

export function fileSize(): Plugin {
  return {
    name: 'fileSize',
    writeBundle(options) {
      const filePath = options.file!;
      if (!filePath.includes('debug')) {
        const s = statSync(filePath);
        const gzip = gzipSize.sync(readFileSync(filePath, 'utf-8'));
        console.log(`🕺 ${basename(filePath)}: ${s.size} b`);
        console.log(`🎉 ${basename(filePath)}: ${gzip} b (gzip)`);
      }
    },
  };
}

export function submodulePath(moduleId: string, submodulePath: string): Plugin {
  return {
    name: 'resolveSubmodule',
    async resolveId(id) {
      if (id === moduleId) {
        return {
          external: true,
          id: submodulePath + '._MODULE_EXT_',
        };
      }
      return null;
    },
    generateBundle(opts, bundle) {
      const ext = opts.format === 'cjs' ? 'cjs' : 'mjs';
      for (const f in bundle) {
        const b = bundle[f];
        if (b.type === 'chunk') {
          b.code = b.code.replace(/_MODULE_EXT_/g, ext);
        }
      }
    },
  };
}

export function submodulePackageJson(
  submoduleName: string,
  submoduleSrcDir: string,
  submoduleBuildDir: string,
  opts: BuildOptions
): Plugin {
  return {
    name: 'submodulePackageJson',
    async writeBundle() {
      const pkg = await readJson(join(submoduleSrcDir, 'package.json'));
      pkg.name = submoduleName;
      pkg.version = opts.packageJson.version;
      pkg.private = true;
      await writeJson(join(submoduleBuildDir, 'package.json'), pkg, { spaces: 2 });
    },
  };
}

export function copyBuildToTestSite(opts: BuildOptions): Plugin {
  return {
    name: 'copyBuildToTestSite',
    async writeBundle() {
      await copy(opts.distLibDir, opts.distTestsDir);
    },
  };
}

export function watchDir(opts: BuildOptions, dir: string): Plugin {
  return {
    name: 'watchDir',
    buildStart() {
      const addWatch = (p: string) => {
        const s = statSync(p);
        if (s.isDirectory()) {
          readdirSync(p).forEach((fileName) => addWatch(join(p, fileName)));
        } else if (s.isFile() && p.endsWith('.js')) {
          this.addWatchFile(p);
        }
      };
      if (opts.isDev) {
        addWatch(dir);
      }
    },
  };
}

export function onwarn(warning: RollupWarning) {
  if (warning.code === 'CIRCULAR_DEPENDENCY') return;
  console.log(warning.code);
}

export interface BuildOptions {
  isDev: boolean;
  generateApi: boolean;
  rootDir: string;
  distIntegrationDir: string;
  distLibDir: string;
  distLibDebugDir: string;
  distReactDir: string;
  distTestsDir: string;
  srcDir: string;
  srcIntegrationDir: string;
  srcLibDir: string;
  srcReactDir: string;
  testsDir: string;
  testsVideosDir: string;
  tscDir: string;
  tscIntegrationDir: string;
  tscLibDir: string;
  tscReactDir: string;
  packageJson: any;
}

export type MessageType = 'sw' | 'atomics';
