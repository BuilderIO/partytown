import { BuildOptions, fileSize } from './utils';
import { join } from 'path';
import { minifyPlugin } from './minify';
import type { OutputOptions, RollupOptions } from 'rollup';

export function buildMainLoader(opts: BuildOptions): RollupOptions {
  const partytownDebug: OutputOptions = {
    file: join(opts.distLibDebugDir, 'partytown.js'),
    format: 'es',
    exports: 'none',
    plugins: [...minifyPlugin(true)],
  };

  const partytownMin: OutputOptions = {
    file: join(opts.distLibDir, 'partytown.js'),
    format: 'es',
    exports: 'none',
    plugins: [...minifyPlugin(false), fileSize()],
  };

  const output = [partytownDebug];
  if (!opts.isDev) {
    output.push(partytownMin);
  }

  return {
    input: join(opts.tscLibDir, 'main', 'loader-entry.js'),
    output,
    plugins: [],
  };
}
