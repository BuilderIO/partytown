import { OutputOptions, Plugin, rollup } from 'rollup';
import {
  BuildOptions,
  getJsBanner,
  MessageType,
  onwarn,
  syncCommunicationModulesPlugin,
} from './utils';
import { join } from 'path';
import { writeFile } from 'fs-extra';
import { minifyPlugin } from './minify';

export async function buildWebWorker(opts: BuildOptions, msgType: MessageType, debug: boolean) {
  const build = await rollup({
    input: join(opts.tscLibDir, 'web-worker', 'index.js'),
    plugins: [syncCommunicationModulesPlugin(opts, msgType)],
    onwarn,
  });

  const output: OutputOptions = {
    format: 'es',
    exports: 'none',
    intro: `((self)=>{`,
    outro: `})(self);`,
    plugins: [...minifyPlugin(debug)],
  };

  const generated = await build.generate(output);

  const webWorkerCode = getJsBanner(opts, generated.output[0].code);
  if (debug) {
    const outName = `partytown-ww-${msgType}.js`;
    await writeFile(join(opts.distLibDebugDir, outName), webWorkerCode);
    await writeFile(join(opts.distTestsLibDebugDir, outName), webWorkerCode);
  }

  return webWorkerCode;
}

export function webWorkerBlobUrlPlugin(
  opts: BuildOptions,
  msgType: MessageType,
  debug: boolean
): Plugin {
  return {
    name: 'webWorkerBlobUrlPlugin',
    resolveId(id) {
      if (id === '@web-worker-blob') {
        return id;
      }
      if (id === '@web-worker-url') {
        return id;
      }
      return null;
    },
    async load(id) {
      if (id === '@web-worker-blob') {
        let code = `""`;
        if (!opts.isDev) {
          code = JSON.stringify(await buildWebWorker(opts, msgType, debug));
        }
        return `const WebWorkerBlob = ${code}; export default WebWorkerBlob;`;
      }
      if (id === '@web-worker-url') {
        return `const WebWorkerUrl = "./partytown-ww-${msgType}.js"; export default WebWorkerUrl;`;
      }
      return null;
    },
    async generateBundle() {
      if (opts.isDev) {
        const wwCode = await buildWebWorker(opts, msgType, debug);
        const wwDebugFilePath = join(opts.distLibDebugDir, `partytown-ww-${msgType}.js`);
        await writeFile(wwDebugFilePath, wwCode);
      }
    },
  };
}
