import typescript from '@rollup/plugin-typescript';
import { basename, join } from 'path';
import { createHash } from 'crypto';
import { copyFileSync, mkdirSync, readdirSync, statSync, unlinkSync, writeFileSync } from 'fs';
import { rollup } from 'rollup';
import { terser } from 'rollup-plugin-terser';

export default async function (cmdArgs) {
  const isDev = !!cmdArgs.configDev;
  const rootDir = __dirname;
  const testsDir = join(rootDir, 'tests');
  const buildDir = join(testsDir, '~partytown');
  const cacheDir = join(rootDir, '.cache');
  const cache = {};
  let sandboxHash = '';

  const minOpts = {
    compress: {
      global_defs: {
        'globalThis.partytownDebug': false,
      },
      ecma: 2018,
      passes: 2,
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
        'globalThis.partytownDebug': true,
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

  emptyDir(buildDir);

  async function getWebWorker(debug) {
    console.log('generate web worker', debug ? '(debug)' : '(minified)');

    const build = await rollup({
      input: 'src/web-worker/index.ts',
      plugins: [
        typescript({
          cacheDir: join(cacheDir, 'ww'),
          outputToFilesystem: false,
        }),
      ],
      onwarn(warning) {
        if (warning.code === 'CIRCULAR_DEPENDENCY') return;
        console.log(warning.code);
      },
      cache: cache.ww,
    });
    cache.ww = build.cache;

    const generated = await build.generate({
      format: 'es',
      exports: 'none',
      intro: `((self)=>{`,
      outro: `})(self);`,
      plugins: debug ? [terser(debugOpts)] : [managlePropsPlugin(), terser(minOpts)],
    });

    const webWorkerCode = generated.output[0].code;
    if (debug) {
      writeFileSync(join(buildDir, `partytown-ww.debug.js`), webWorkerCode);
    } else {
      writeFileSync(join(cacheDir, `partytown-ww.js`), webWorkerCode);
    }

    return webWorkerCode;
  }

  async function getSandbox(debug) {
    console.log('generate sandbox', debug ? '(debug)' : '(minified)');

    const webWorkerCode = await getWebWorker(debug);

    const build = await rollup({
      input: 'src/sandbox/index.ts',
      plugins: [
        typescript({
          cacheDir: join(cacheDir, 'sb'),
          outputToFilesystem: false,
        }),
        {
          name: 'webWorkerIntoSandbox',
          resolveId(id) {
            if (id.startsWith('@')) return id;
          },
          async load(id) {
            if (id === '@web-worker-blob') {
              return `const WebWorkerBlob = ${JSON.stringify(
                webWorkerCode
              )}; export default WebWorkerBlob;`;
            }
          },
        },
      ],
      onwarn(warning) {
        if (warning.code === 'CIRCULAR_DEPENDENCY') return;
        console.log(warning.code);
      },
    });

    const generated = await build.generate({
      format: 'es',
      exports: 'none',
      intro: `((window)=>{`,
      outro: `})(window);`,
      plugins: debug ? [terser(debugOpts)] : [managlePropsPlugin(), terser(minOpts)],
    });

    const sandboxJsCode = generated.output[0].code;
    let sandboxHtml;
    if (debug) {
      writeFileSync(join(buildDir, `partytown-sandbox.debug.js`), sandboxJsCode);

      sandboxHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><script src="./partytown-sandbox.debug.js"></script></head></html>`;
      writeFileSync(join(cacheDir, `partytown-sandbox.debug.html`), sandboxHtml);
    } else {
      sandboxHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><script type="module" async>${sandboxJsCode}</script></head></html>`;
      writeFileSync(join(cacheDir, `partytown-sandbox.html`), sandboxHtml);
    }

    return sandboxHtml;
  }

  async function serviceWorker() {
    const swDebug = {
      file: join(buildDir, 'partytown-sw.debug.js'),
      format: 'es',
      exports: 'none',
      plugins: [terser(debugOpts)],
    };

    const output = [swDebug];
    if (!isDev) {
      output.push({
        file: join(buildDir, 'partytown-sw.js'),
        format: 'es',
        exports: 'none',
        plugins: [managlePropsPlugin(), terser(minOpts), fileSize()],
      });
    }

    const sandboxCode = isDev ? '' : await getSandbox(false);

    if (!isDev) {
      sandboxHash = createHash('sha1').update(sandboxCode).digest('hex');
      sandboxHash = sandboxHash.substr(0, 6).toLowerCase();
    }

    return {
      input: 'src/service-worker/index.ts',
      output,
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
          resolveId(id) {
            if (id.startsWith('@')) return id;
          },
          async load(id) {
            if (id === '@sandbox') {
              return `const Sandbox = ${JSON.stringify(sandboxCode)}; export default Sandbox;`;
            }
            if (id === '@sandbox-hash') {
              return `const SandboxHash = ${JSON.stringify(
                sandboxHash
              )}; export default SandboxHash;`;
            }
            if (id === '@sandbox-debug') {
              return `const SandboxDebug = ${JSON.stringify(
                await getSandbox(true)
              )}; export default SandboxDebug;`;
            }
          },
          writeBundle() {
            copyBuildToRoot(buildDir, rootDir);
          },
        },
      ],
    };
  }

  function main() {
    const partytownDebug = {
      file: join(buildDir, 'partytown.debug.js'),
      format: 'es',
      exports: 'none',
      plugins: [terser(debugOpts)],
    };

    const partytownMin = {
      file: join(buildDir, 'partytown.js'),
      format: 'es',
      exports: 'none',
      plugins: [terser(minOpts), fileSize()],
    };

    const output = [partytownDebug];
    if (!isDev) {
      output.push(partytownMin);
    }

    return {
      input: 'src/main/index.ts',
      output,
      plugins: [
        typescript({
          cacheDir: join(cacheDir, 'main'),
          outputToFilesystem: false,
        }),
        {
          resolveId(id) {
            if (id.startsWith('@')) return id;
          },
          async load(id) {
            if (id === '@sandbox-hash') {
              return `const SandboxHash = ${JSON.stringify(
                sandboxHash
              )}; export default SandboxHash;`;
            }
          },
          writeBundle() {
            copyBuildToRoot(buildDir, rootDir);
          },
        },
      ],
    };
  }

  return [await serviceWorker(), main()];
}

function managlePropsPlugin() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$'.split('');
  const mangleProps = {
    $accessType$: '',
    $body$: '',
    $config$: '',
    $content$: '',
    $currentScript$: '',
    $data$: '',
    $document$: '',
    $documentCompatMode$: '',
    $documentCookie$: '',
    $documentElement$: '',
    $documentReadyState$: '',
    $documentReferrer$: '',
    $documentTitle$: '',
    $extraInstructions$: '',
    $error$: '',
    $firstScriptId$: '',
    $head$: '',
    $history$: '',
    $importScripts$: '',
    $initializeScripts$: '',
    $instanceId$: '',
    $interfaces$: '',
    $interfaceType$: '',
    $isPromise$: '',
    $localStorage$: '',
    $location$: '',
    $memberPath$: '',
    $msgId$: '',
    $onerror$: '',
    $onload$: '',
    $postMessage$: '',
    $rtnValue$: '',
    $sandboxDocument$: '',
    $sandboxWindow$: '',
    $sessionStorage$: '',
    $scopePath$: '',
    $url$: '',
    $window$: '',
    $workerName$: '',
    $workerPostMessage$: '',
  };
  if (chars.length < Object.keys(mangleProps).length) {
    throw new Error('Figure out a better property renaming plan');
  }

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

function fileSize() {
  return {
    name: 'fileSize',
    writeBundle(options) {
      const s = statSync(options.file);
      console.log(`${basename(options.file)}: ${s.size} b`);
    },
  };
}

function copyBuildToRoot(buildDir, rootDir) {
  const files = readdirSync(buildDir);
  files.forEach((file) => {
    copyFileSync(join(buildDir, file), join(rootDir, file));
  });
}

function ensureDir(dir) {
  try {
    mkdirSync(dir);
  } catch (e) {}
}

function emptyDir(dir) {
  ensureDir(dir);
  const files = readdirSync(dir);
  files.forEach((file) => {
    unlinkSync(join(dir, file));
  });
}
