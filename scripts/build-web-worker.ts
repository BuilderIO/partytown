import { OutputOptions, rollup } from 'rollup';
import { BuildOptions, MessageType, onwarn, syncCommunicationModulesPlugin } from './utils';
import { join } from 'path';
import { writeFile } from 'fs-extra';
import { managlePropsPlugin, minifyPlugin } from './minify';

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
    plugins: [minifyPlugin(debug)],
  };
  if (!debug) {
    output.plugins!.unshift(managlePropsPlugin());
  }

  const generated = await build.generate(output);

  const webWorkerCode = generated.output[0].code;
  if (debug) {
    await writeFile(join(opts.buildLibDir, 'debug', 'partytown-ww.js'), webWorkerCode);
  }

  return webWorkerCode;
}
