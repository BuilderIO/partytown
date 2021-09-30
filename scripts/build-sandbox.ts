import { writeFile } from 'fs-extra';
import { buildWebWorker } from './build-web-worker';
import { BuildOptions, MessageType, onwarn, syncCommunicationModulesPlugin } from './utils';
import { join } from 'path';
import { Plugin, rollup } from 'rollup';
import { managlePropsPlugin, minifyPlugin } from './minify';

async function buildSandbox(opts: BuildOptions, msgType: MessageType, debug: boolean) {
  const build = await rollup({
    input: join(opts.tscLibDir, 'sandbox', 'index.js'),
    plugins: [
      syncCommunicationModulesPlugin(opts, msgType),
      webWorkerBlobPlugin(opts, msgType, debug),
    ],
    onwarn,
  });

  const generated = await build.generate({
    format: 'es',
    exports: 'none',
    intro: `((window)=>{`,
    outro: `})(window);`,
    plugins: debug ? [minifyPlugin(debug)] : [managlePropsPlugin(), minifyPlugin(debug)],
  });

  const sandboxJsCode = generated.output[0].code;

  let sandboxHtml: string;
  if (debug) {
    await writeFile(
      join(opts.buildLibDir, 'debug', `partytown-sandbox-${msgType}.js`),
      sandboxJsCode
    );
    sandboxHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><script src="./partytown-sandbox-${msgType}.js"></script></head></html>`;
  } else {
    sandboxHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><script type="module">${sandboxJsCode}</script></head></html>`;
  }

  return sandboxHtml;
}

function webWorkerBlobPlugin(opts: BuildOptions, msgType: MessageType, debug: boolean): Plugin {
  return {
    name: 'webWorkerBlobPlugin',
    resolveId(id) {
      if (id === '@web-worker-blob') return id;
    },
    async load(id) {
      if (id === '@web-worker-blob') {
        const webWorkerCode = JSON.stringify(await buildWebWorker(opts, msgType, debug));
        return `const WebWorkerBlob = ${webWorkerCode}; export default WebWorkerBlob;`;
      }
    },
  };
}

export function sandboxContentPlugin(opts: BuildOptions, msgType: MessageType): Plugin {
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
        const sandboxCode = JSON.stringify(await buildSandbox(opts, msgType, false));
        return `const Sandbox = ${sandboxCode}; export default Sandbox;`;
      }
      if (id === '@sandbox-debug') {
        const sandboxDebugCode = JSON.stringify(await buildSandbox(opts, msgType, true));
        return `const SandboxDebug = ${sandboxDebugCode}; export default SandboxDebug;`;
      }
    },
  };
}
