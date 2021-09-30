import type { OutputOptions, RollupOptions } from 'rollup';
import { BuildOptions, copyBuildToTestSite, fileSize, watchDir } from './utils';
import { join } from 'path';
import { managlePropsPlugin, minifyPlugin } from './minify';
import { sandboxContentPlugin } from './build-sandbox';

export function buildServiceWorker(opts: BuildOptions): RollupOptions {
  const swDebug: OutputOptions = {
    file: join(opts.buildLibDir, 'debug', 'partytown-sw.js'),
    format: 'es',
    exports: 'none',
    plugins: [minifyPlugin(true)],
  };

  const output: OutputOptions[] = [swDebug];
  if (!opts.isDev) {
    output.push({
      file: join(opts.buildLibDir, 'partytown-sw.js'),
      format: 'es',
      exports: 'none',
      plugins: [managlePropsPlugin(), minifyPlugin(false), fileSize()],
    });
  }

  return {
    input: join(opts.tscLibDir, 'service-worker', 'index.js'),
    output,
    plugins: [
      sandboxContentPlugin(opts, 'sw'),
      watchDir(opts, join(opts.tscLibDir, 'sandbox')),
      watchDir(opts, join(opts.tscLibDir, 'web-worker')),
      copyBuildToTestSite(opts),
    ],
  };
}
