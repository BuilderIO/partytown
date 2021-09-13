import typescript from '@rollup/plugin-typescript';
import { basename, join } from 'path';
import { createHash } from 'crypto';
import {
  copySync,
  emptyDir,
  readdirSync,
  readFileSync,
  readJsonSync,
  statSync,
  writeFile,
  writeJsonSync,
} from 'fs-extra';
import { rollup } from 'rollup';
import { terser } from 'rollup-plugin-terser';
import gzipSize from 'gzip-size';
import { Extractor, ExtractorConfig } from '@microsoft/api-extractor';

export default async function (cmdArgs) {
  const isDev = !!cmdArgs.configDev;
  const rootDir = __dirname;
  const srcDir = join(rootDir, 'src');
  const srcLibDir = join(srcDir, 'lib');
  const srcReactDir = join(srcDir, 'react');
  const buildDir = join(rootDir, 'lib');
  const testsDir = join(rootDir, 'tests');
  const testsBuildDir = join(testsDir, '~partytown');
  const reactBuildDir = join(rootDir, 'react');
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

  await emptyDir(buildDir);
  await emptyDir(reactBuildDir);
  await emptyDir(testsBuildDir);
  await emptyDir(join(testsDir, 'videos'));

  async function getWebWorker(debug) {
    console.log('generate web worker', debug ? '(debug)' : '(minified)');

    const build = await rollup({
      input: join(srcLibDir, 'web-worker', 'index.ts'),
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
      await writeFile(join(buildDir, `partytown-ww.debug.js`), webWorkerCode);
    } else {
      await writeFile(join(cacheDir, `partytown-ww.js`), webWorkerCode);
    }

    return webWorkerCode;
  }

  async function getSandbox(debug) {
    console.log('generate sandbox', debug ? '(debug)' : '(minified)');

    const webWorkerCode = await getWebWorker(debug);

    const build = await rollup({
      input: join(srcLibDir, 'sandbox', 'index.ts'),
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
      await writeFile(join(buildDir, `partytown-sandbox.debug.js`), sandboxJsCode);

      sandboxHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><script src="./partytown-sandbox.debug.js"></script></head></html>`;
      await writeFile(join(cacheDir, `partytown-sandbox.debug.html`), sandboxHtml);
    } else {
      sandboxHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><script type="module" async>${sandboxJsCode}</script></head></html>`;
      await writeFile(join(cacheDir, `partytown-sandbox.html`), sandboxHtml);
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
      input: join(srcLibDir, 'service-worker', 'index.ts'),
      output,
      plugins: [
        typescript({
          cacheDir: join(cacheDir, 'sw'),
          outputToFilesystem: false,
        }),
        {
          name: 'serviceWorker',
          buildStart() {
            const addWatchFile = (p) => {
              const s = statSync(p);
              if (s.isDirectory()) {
                readdirSync(p).forEach((fileName) => addWatchFile(join(p, fileName)));
              } else if (s.isFile() && p.endsWith('.ts')) {
                this.addWatchFile(p);
              }
            };

            addWatchFile(join(srcLibDir, 'sandbox'));
            addWatchFile(join(srcLibDir, 'web-worker'));
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
            copySync(buildDir, testsBuildDir);
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
      input: join(srcLibDir, 'main', 'index.ts'),
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
            copySync(buildDir, testsBuildDir);
          },
        },
      ],
    };
  }

  function snippet() {
    const partytownDebug = {
      file: join(buildDir, 'partytown-snippet.debug.js'),
      format: 'es',
      exports: 'none',
      plugins: [terser(debugOpts)],
    };

    const partytownMin = {
      file: join(buildDir, 'partytown-snippet.js'),
      format: 'es',
      exports: 'none',
      plugins: [
        terser({
          compress: { ...minOpts.compress, negate_iife: false },
          format: { ...minOpts.format },
          toplevel: false,
        }),
        {
          generateBundle(opts, b) {
            for (const fileName in b) {
              let code = b[fileName].code.trim();
              code = code.substr(0, code.length - 1);
              b[fileName].code = `(function(){${code}})();`;
            }
          },
        },
        fileSize(),
      ],
    };

    const output = [partytownDebug];
    if (!isDev) {
      output.push(partytownMin);
    }

    return {
      input: join(srcLibDir, 'main', 'snippet.ts'),
      output,
      plugins: [
        typescript({
          cacheDir: join(cacheDir, 'snippet'),
          outputToFilesystem: false,
        }),
        {
          writeBundle() {
            copySync(buildDir, testsBuildDir);
          },
        },
      ],
    };
  }

  function react() {
    if (!isDev) {
      const extractorConfig = ExtractorConfig.loadFileAndPrepare(
        join(srcReactDir, 'api-extractor.json')
      );
      extractorConfig.untrimmedFilePath;
      const result = Extractor.invoke(extractorConfig, {
        localBuild: true,
        showVerboseMessages: true,
      });
      if (!result.succeeded) {
        process.exit(1);
      }
    }

    return {
      input: join(srcReactDir, 'index.tsx'),
      output: [
        {
          file: join(reactBuildDir, 'index.cjs'),
          format: 'cjs',
        },
        {
          file: join(reactBuildDir, 'index.mjs'),
          format: 'es',
        },
      ],
      external: ['react'],
      plugins: [
        typescript({
          cacheDir: join(cacheDir, 'react'),
          outputToFilesystem: false,
        }),
        {
          name: 'reactSnippet',
          resolveId(id) {
            if (id.startsWith('@')) return id;
          },
          async load(id) {
            if (id === '@snippet') {
              return `const PartytownSnippet = ${JSON.stringify(
                readFileSync(join(buildDir, 'partytown-snippet.js'), 'utf-8').trim()
              )}; export default PartytownSnippet;`;
            }
          },
        },
        {
          writeBundle() {
            const pkg = readJsonSync(join(srcReactDir, 'package.json'));
            pkg.name = '@builder.io/partytown/react';
            writeJsonSync(join(reactBuildDir, 'package.json'), pkg, { spaces: 2 });
          },
        },
      ],
    };
  }

  return [await serviceWorker(), main(), snippet(), react()];
}

function managlePropsPlugin() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$'.split('');
  const mangleProps = {
    $accessType$: '',
    $cleanupInc$: '',
    $config$: '',
    $content$: '',
    $contextWinId$: '',
    $currentScriptId$: '',
    $currentScriptUrl$: '',
    $data$: '',
    $documentCompatMode$: '',
    $documentCookie$: '',
    $documentReadyState$: '',
    $documentReferrer$: '',
    $documentTitle$: '',
    $error$: '',
    $extraInstructions$: '',
    $firstScriptId$: '',
    $history$: '',
    $importScripts$: '',
    $instanceId$: '',
    $instanceIdByInstance$: '',
    $instances$: '',
    $interfaces$: '',
    $interfaceType$: '',
    $isInitialized$: '',
    $isPromise$: '',
    $localStorage$: '',
    $location$: '',
    $memberPath$: '',
    $msgId$: '',
    $nextId$: '',
    $nodeName$: '',
    $onerror$: '',
    $onload$: '',
    $parentWinId$: '',
    postMessage$: '',
    $rtnValue$: '',
    $sessionStorage$: '',
    $scopePath$: '',
    $url$: '',
    $window$: '',
    $winId$: '',
    $worker$: '',
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
      const gzip = gzipSize.sync(readFileSync(options.file, 'utf-8'));
      console.log(`${basename(options.file)}: ${s.size} b 🐰`);
      console.log(`${basename(options.file)}: ${gzip} b (gzip) 🗜`);
    },
  };
}
