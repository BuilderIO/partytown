import { BuildOptions, submodulePackageJson, submodulePath } from './utils';
import { join } from 'path';
import type { RollupOptions } from 'rollup';
import { readJson, writeJson } from 'fs-extra';

export function buildReact(opts: BuildOptions): RollupOptions {
  return {
    input: join(opts.tscReactDir, 'index.js'),
    output: [
      {
        file: join(opts.buildReactDir, 'index.cjs'),
        format: 'cjs',
      },
      {
        file: join(opts.buildReactDir, 'index.mjs'),
        format: 'es',
      },
    ],
    external: ['react'],
    plugins: [
      submodulePath('@builder.io/partytown/intergration', '../integration/index'),
      submodulePackageJson(
        '@builder.io/partytown/react',
        opts.srcReactDir,
        opts.buildReactDir,
        opts
      ),
    ],
  };
}
