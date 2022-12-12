import type { OutputOptions, Plugin, RollupOptions } from 'rollup';
import { BuildOptions, jsBannerPlugin, MessageType, watchDir } from './utils';
import { join } from 'path';
import { minifyPlugin } from './minify';
import { webWorkerBlobUrlPlugin } from './build-web-worker';

export function buildIsolation(opts: BuildOptions): RollupOptions[] {
  const rollups: RollupOptions[] = [];

  rollups.push(buildIsolationIframe(opts, 'sw', true), buildIsolationIframe(opts, 'atomics', true));
  if (!opts.isDev) {
    rollups.push(
      buildIsolationIframe(opts, 'sw', false),
      buildIsolationIframe(opts, 'atomics', false)
    );
  }

  return rollups;
}

function buildIsolationIframe(
  opts: BuildOptions,
  msgType: MessageType,
  debug: boolean
): RollupOptions {
  const outName = `partytown-isolation-${msgType}.html`;
  const outDir = debug ? opts.distLibDebugDir : opts.distLibDir;
  const output: OutputOptions = {
    file: join(outDir, outName),
    format: 'es',
    exports: 'none',
    plugins: [...minifyPlugin(opts, debug)],
  };

  return {
    input: join(opts.tscLibDir, 'isolation-iframe', 'index.js'),
    output,
    plugins: [
      webWorkerBlobUrlPlugin(opts, msgType, debug),
      watchDir(opts, join(opts.tscLibDir, 'isolation-iframe')),
      watchDir(opts, join(opts.tscLibDir, 'web-worker')),
      jsBannerPlugin(opts),
      isolationIframeHtmlPlugin(),
    ],
  };
}

function isolationIframeHtmlPlugin(): Plugin {
  return {
    name: 'isolationIframeHtml',
    async generateBundle(_, bundles) {
      for (const f in bundles) {
        const bundle = bundles[f];
        if (bundle.type === 'chunk') {
          bundle.code = `<!DOCTYPE html><html><head><meta charset="utf-8"><script type="module">${bundle.code}</script></head></html>`;
        }
      }
    },
  };
}

