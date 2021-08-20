import typescript from '@rollup/plugin-typescript';
import { join } from 'path';
import { readdirSync, statSync } from 'fs';
import { rollup } from 'rollup';
import { terser } from 'rollup-plugin-terser';

export default function (cmdArgs) {
  const isDev = !!cmdArgs.configDev;
  const buildDir = join(__dirname, '~partytown');
  const cacheDir = join(__dirname, '.cache');
  const cache = {};

  const minOpts = {
    compress: {
      global_defs: {
        'globalThis.partyTownDebug': false,
      },
      ecma: 2018,
      passes: isDev ? 1 : 2,
      unsafe_symbols: true,
    },
    format: {
      comments: false,
      ecma: 2018,
    },
  };

  const debugOpts = {
    compress: {
      global_defs: {
        'globalThis.partyTownDebug': true,
      },
      inline: false,
      join_vars: false,
      loops: false,
      sequences: false,
      passes: isDev ? 1 : 2,
      drop_debugger: false,
    },
    format: {
      comments: false,
      beautify: true,
      braces: true,
    },
    mangle: false,
  };

  function inlinedWebWorker(debug) {
    return {
      name: 'inlinedWebWorker',
      async generateBundle(opts, bundles) {
        console.log('generate inlined web worker', debug ? '(debug)' : '(minified)');
        const build = await rollup({
          input: 'src/web-worker/index.ts',
          plugins: [
            typescript({
              cacheDir: join(cacheDir, 'ww'),
              outputToFilesystem: false,
            }),
          ],
          cache: cache.ww,
        });
        cache.ww = build.cache;

        const generated = await build.generate({
          format: 'es',
          exports: 'none',
          plugins: debug ? [terser(debugOpts)] : [managlePropsPlugin(), terser(minOpts)],
        });
        const webWorkerCode = generated.output[0].code;

        for (const b in bundles) {
          bundles[b].code = bundles[b].code.replace(
            'globalThis.WEB_WORKER_BLOB',
            JSON.stringify(webWorkerCode)
          );
          bundles[b].code = createSandboxHtml(bundles[b].code);
        }
      },
    };
  }

  function createSandboxHtml(jsCode) {
    const htmlIntro = `<!DOCTYPE html><html><head><meta charset="utf-8"><script type="module" async>`;
    const htmlOutro = `</script></head></html>`;
    return htmlIntro + jsCode + htmlOutro;
  }

  function inlinedSandbox(debug) {
    return {
      name: 'inlinedSandbox',
      async generateBundle(opts, bundles) {
        console.log('generate inlined sandbox', debug ? '(debug)' : '(minified)');
        const build = await rollup({
          input: 'src/sandbox/index.ts',
          plugins: [
            typescript({
              cacheDir: join(cacheDir, 'sb'),
              outputToFilesystem: false,
            }),
          ],
          cache: cache.sb,
        });
        cache.sb = build.cache;

        const generated = await build.generate({
          format: 'es',
          exports: 'none',
          plugins: debug
            ? [terser(debugOpts), inlinedWebWorker(true)]
            : [managlePropsPlugin(), terser(minOpts), inlinedWebWorker(false)],
        });
        const sandboxCode = generated.output[0].code;

        for (const b in bundles) {
          bundles[b].code = bundles[b].code.replace(
            'globalThis.SANDBOX',
            JSON.stringify(sandboxCode)
          );
        }
      },
    };
  }

  function serviceWorker() {
    return {
      input: 'src/service-worker/index.ts',
      output: [
        {
          file: join(buildDir, 'partytown-sw.js'),
          format: 'es',
          exports: 'none',
          plugins: [managlePropsPlugin(), terser(minOpts), inlinedSandbox(false)],
        },
        {
          file: join(buildDir, 'partytown-sw.debug.js'),
          format: 'es',
          exports: 'none',
          plugins: [terser(debugOpts), inlinedSandbox(true)],
        },
      ],
      plugins: [
        typescript({
          cacheDir: join(cacheDir, 'sw'),
          outputToFilesystem: false,
        }),
        {
          name: 'serviceWorker',
          buildStart() {
            const srcDir = join(__dirname, 'src');

            const addWatchFile = (p) => {
              const s = statSync(p);
              if (s.isDirectory()) {
                readdirSync(p).forEach((fileName) => addWatchFile(join(p, fileName)));
              } else if (s.isFile() && p.endsWith('.ts')) {
                this.addWatchFile(p);
              }
            };

            addWatchFile(join(srcDir, 'sandbox'));
            addWatchFile(join(srcDir, 'web-worker'));
          },
        },
      ],
    };
  }

  function main() {
    return {
      input: 'src/main/index.ts',
      output: [
        {
          file: join(buildDir, 'partytown.js'),
          format: 'es',
          exports: 'none',
          plugins: [terser(minOpts)],
        },
        {
          file: join(buildDir, 'partytown.debug.js'),
          format: 'es',
          exports: 'none',
        },
      ],
      plugins: [
        typescript({
          cacheDir: join(cacheDir, 'main'),
          outputToFilesystem: false,
        }),
      ],
    };
  }

  return [serviceWorker(), main()];
}

function managlePropsPlugin() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const mangleProps = {
    $accessType$: '',
    $content$: '',
    $cstr$: '',
    $data$: '',
    $error$: '',
    $id$: '',
    $instanceId$: '',
    $initializeScripts$: '',
    $isPromise$: '',
    $items$: '',
    $key$: '',
    $memberName$: '',
    $methodNames$: '',
    $msgId$: '',
    $nodeName$: '',
    $resolve$: '',
    $rtnValue$: '',
    $scopePath$: '',
    $timeoutId$: '',
    $url$: '',
    $workerName$: '',
  };
  Object.keys(mangleProps).forEach((key, i) => {
    mangleProps[key] = chars[i];
  });

  return {
    name: 'mangleProps',
    generateBundle(_opts, bundle) {
      for (const fileName in bundle) {
        Object.keys(mangleProps).forEach((key) => {
          const rg = new RegExp(key.replace(/\$/g, '\\$'), 'g');
          const replaceWith = mangleProps[key];
          bundle[fileName].code = bundle[fileName].code.replace(rg, replaceWith);
        });
      }
    },
  };
}
