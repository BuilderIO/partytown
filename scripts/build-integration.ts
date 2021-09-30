import { BuildOptions, submodulePackageJson } from './utils';
import { join } from 'path';
import type { OutputOptions, RollupOptions } from 'rollup';
import { readFile } from 'fs-extra';

export function buildIntegration(opts: BuildOptions): RollupOptions {
  const output: OutputOptions[] = [
    {
      file: join(opts.buildIntegrationDir, 'index.cjs'),
      format: 'cjs',
    },
    {
      file: join(opts.buildIntegrationDir, 'index.mjs'),
      format: 'es',
    },
  ];

  return {
    input: join(opts.tscIntegrationDir, 'index.js'),
    output,
    plugins: [
      {
        name: 'snippet',
        resolveId(id) {
          if (id === '@snippet') {
            return id;
          }
        },
        async load(id) {
          if (id === '@snippet') {
            const codeFileName = 'partytown-snippet.js';
            const codeFilePath = join(opts.buildLibDir, codeFileName);
            const code = JSON.stringify((await readFile(codeFilePath, 'utf-8')).trim());
            return `const PartytownSnippet = ${code}; export default PartytownSnippet;`;
          }
        },
      },
      submodulePackageJson(
        '@builder.io/partytown/integration',
        opts.srcIntegrationDir,
        opts.buildIntegrationDir,
        opts
      ),
    ],
  };
}
