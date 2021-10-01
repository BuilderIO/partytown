import type { RollupOptions } from 'rollup';
import {
  BuildOptions,
  copyBuildToTestSite,
  fileSize,
  syncCommunicationModulesPlugin,
  watchDir,
} from './utils';
import { join } from 'path';
import { minifyPlugin } from './minify';
import { writeFile } from 'fs-extra';
import { webWorkerBlobUrlPlugin } from './build-web-worker';

export function buildAtomics(opts: BuildOptions): RollupOptions[] {
  const rollups: RollupOptions[] = [buildAtomicsDebug(opts)];

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
        {
          name: 'debugHtmlWrap',
          async generateBundle(_, bundle) {
            for (const f in bundle) {
              const b = bundle[f];
              if (b.type === 'chunk') {
                const jsCode = b.code;
                const debugJsPath = join(opts.distLibDebugDir, 'partytown-sandbox-atomics.js');
                await writeFile(debugJsPath, jsCode);
                b.code = debugHtml;
              }
            }
          },
        },
        ...minifyPlugin(true),
      ],
    },
    plugins: [
      syncCommunicationModulesPlugin(opts, 'atomics'),
      webWorkerBlobUrlPlugin(opts, 'atomics', true),
      watchDir(opts, join(opts.tscLibDir, 'atomics')),
      watchDir(opts, join(opts.tscLibDir, 'web-worker')),
      copyBuildToTestSite(opts),
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
                const jsCode = b.code;
                b.code = (minHtmlTop + jsCode.trim() + minHtmlBottom).trim();
              }
            }
          },
        },
        ...minifyPlugin(false),
        fileSize(),
      ],
    },
    plugins: [
      syncCommunicationModulesPlugin(opts, 'atomics'),
      webWorkerBlobUrlPlugin(opts, 'atomics', false),
      watchDir(opts, join(opts.tscLibDir, 'atomics')),
      watchDir(opts, join(opts.tscLibDir, 'web-worker')),
      copyBuildToTestSite(opts),
    ],
  };
}

const minHtmlTop = `<!DOCTYPE html><html><head><meta charset="utf-8"><script type="module">`;
const minHtmlBottom = `</script></head></html>`;
