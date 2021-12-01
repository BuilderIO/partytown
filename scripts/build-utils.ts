import { BuildOptions, submodulePackageJson, submodulePath } from './utils';
import { join } from 'path';
import type { RollupOptions } from 'rollup';

export function buildUtils(opts: BuildOptions): RollupOptions {
  return {
    input: join(opts.tscUtilsDir, 'index.js'),
    output: [
      {
        file: join(opts.distUtilsDir, 'index.cjs'),
        format: 'cjs',
      },
      {
        file: join(opts.distUtilsDir, 'index.mjs'),
        format: 'es',
      },
    ],
    external: ['fs', 'path', 'util'],
    plugins: [
      submodulePackageJson(
        '@builder.io/partytown/utils',
        opts.srcUtilsDir,
        opts.distUtilsDir,
        opts
      ),
    ],
  };
}
