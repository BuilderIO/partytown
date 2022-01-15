import type { RollupOptions } from 'rollup';
import {
  BuildOptions,
  copyOutputToTests,
  fileSize,
  getJsBanner,
  syncCommunicationModulesPlugin,
  versionPlugin,
  watchDir,
} from './utils';
import { join } from 'path';
import { minifyPlugin } from './minify';
import { writeFile } from 'fs-extra';
import { webWorkerBlobUrlPlugin } from './build-web-worker';

export function buildAtomics(opts: BuildOptions): RollupOptions[] {
  const rollups: RollupOptions[] = [];

  rollups.push(buildAtomicsDebug(opts));
  if (!opts.isDev) {
    rollups.push(buildAtomicsMin(opts));
  }

  return rollups;
}

function buildAtomicsDebug(opts: BuildOptions): RollupOptions {
  return {
    input: join(opts.tscLibDir, 'sandbox', 'index.js'),
    output: {
      file: join(opts.distLibDebugDir, 'partytown-sandbox-atomics.html'),
      format: 'es',
      exports: 'none',
      plugins: [
        versionPlugin(opts),
        {
          name: 'debugHtmlWrap',
          async generateBundle(_, bundle) {
            for (const f in bundle) {
              const b = bundle[f];
              if (b.type === 'chunk') {
                const code = getJsBanner(opts, b.code);
                const outName = `partytown-sandbox-atomics.js`;
                await writeFile(join(opts.distLibDebugDir, outName), code);
                await writeFile(join(opts.distTestsLibDebugDir, outName), code);
                b.code = debugHtml;
              }
            }
          },
        },
        ...minifyPlugin(opts, true),
      ],
    },
    plugins: [
      versionPlugin(opts),
      syncCommunicationModulesPlugin(opts, 'atomics'),
      webWorkerBlobUrlPlugin(opts, 'atomics', true),
      watchDir(opts, join(opts.tscLibDir, 'atomics')),
      watchDir(opts, join(opts.tscLibDir, 'web-worker')),
      copyOutputToTests(opts),
    ],
  };
}

const debugHtml = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script type="module" src="./partytown-sandbox-atomics.js"></script>
  </head>
</html>
`;

function buildAtomicsMin(opts: BuildOptions): RollupOptions {
  return {
    input: join(opts.tscLibDir, 'sandbox', 'index.js'),
    output: {
      file: join(opts.distLibDir, 'partytown-sandbox-atomics.html'),
      format: 'es',
      exports: 'none',
      plugins: [
        {
          name: 'minHtmlWrap',
          async generateBundle(_, bundle) {
            for (const f in bundle) {
              const b = bundle[f];
              if (b.type === 'chunk') {
                const jsCode = getJsBanner(opts, b.code);
                b.code = (minHtmlTop + jsCode.trim() + minHtmlBottom).trim();
              }
            }
          },
        },
        ...minifyPlugin(opts, false),
        fileSize(),
      ],
    },
    plugins: [
      syncCommunicationModulesPlugin(opts, 'atomics'),
      webWorkerBlobUrlPlugin(opts, 'atomics', false),
      watchDir(opts, join(opts.tscLibDir, 'atomics')),
      watchDir(opts, join(opts.tscLibDir, 'web-worker')),
      copyOutputToTests(opts),
      versionPlugin(opts),
    ],
  };
}

const minHtmlTop = `<!DOCTYPE html><html><head><meta charset="utf-8"><script type="module">`;
const minHtmlBottom = `</script></head></html>`;
