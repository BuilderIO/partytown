import { OutputOptions, Plugin, rollup, RollupOptions } from 'rollup';
import {
  BuildOptions,
  copyOutputToTests,
  fileSize,
  jsBannerPlugin,
  MessageType,
  onwarn,
  syncCommunicationModulesPlugin,
  versionPlugin,
  watchDir,
} from './utils';
import { join } from 'path';
import { minifyPlugin } from './minify';
import { writeFile } from 'fs-extra';
import { webWorkerBlobUrlPlugin } from './build-web-worker';

export function buildServiceWorker(opts: BuildOptions): RollupOptions {
  const swDebug: OutputOptions = {
    file: join(opts.distLibDebugDir, 'partytown-sw.js'),
    format: 'es',
    exports: 'none',
    plugins: [...minifyPlugin(true), versionPlugin(opts)],
  };

  const output: OutputOptions[] = [swDebug];
  if (!opts.isDev) {
    output.push({
      file: join(opts.distLibDir, 'partytown-sw.js'),
      format: 'es',
      exports: 'none',
      plugins: [...minifyPlugin(false), fileSize()],
    });
  }

  return {
    input: join(opts.tscLibDir, 'service-worker', 'index.js'),
    output,
    plugins: [
      sandboxContentPlugin(opts, 'sw'),
      watchDir(opts, join(opts.tscLibDir, 'sandbox')),
      watchDir(opts, join(opts.tscLibDir, 'web-worker')),
      copyOutputToTests(opts),
      jsBannerPlugin(opts),
    ],
  };
}

async function buildSandboxServiceWorker(opts: BuildOptions, msgType: MessageType, debug: boolean) {
  const build = await rollup({
    input: join(opts.tscLibDir, 'sandbox', 'index.js'),
    plugins: [
      syncCommunicationModulesPlugin(opts, msgType),
      webWorkerBlobUrlPlugin(opts, msgType, debug),
      versionPlugin(opts),
    ],
    onwarn,
  });

  const generated = await build.generate({
    format: 'es',
    exports: 'none',
    intro: `((window)=>{`,
    outro: `})(window);`,
    plugins: [...minifyPlugin(debug), jsBannerPlugin(opts)],
  });

  const sandboxJsCode = generated.output[0].code;

  let sandboxHtml: string;
  if (debug) {
    const outName = `partytown-sandbox-${msgType}.js`;
    await writeFile(join(opts.distLibDebugDir, outName), sandboxJsCode);
    await writeFile(join(opts.distTestsLibDebugDir, outName), sandboxJsCode);
    sandboxHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><script src="./partytown-sandbox-${msgType}.js"></script></head></html>`;
  } else {
    sandboxHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><script type="module">${sandboxJsCode}</script></head></html>`;
  }

  return sandboxHtml;
}

function sandboxContentPlugin(opts: BuildOptions, msgType: MessageType): Plugin {
  return {
    name: 'sandboxContentPlugin',
    resolveId(id) {
      if (id === '@sandbox' || id === '@sandbox-debug') {
        return id;
      }
      return null;
    },
    async load(id) {
      if (id === '@sandbox') {
        let code = `""`;
        if (!opts.isDev) {
          code = JSON.stringify(await buildSandboxServiceWorker(opts, msgType, false));
        }
        return `const Sandbox = ${code}; export default Sandbox;`;
      }
      if (id === '@sandbox-debug') {
        const code = JSON.stringify(await buildSandboxServiceWorker(opts, msgType, true));
        return `const SandboxDebug = ${code}; export default SandboxDebug;`;
      }
    },
  };
}
