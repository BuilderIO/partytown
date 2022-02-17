import { isAbsolute } from 'path';
import { copyLibFiles } from './copy-lib-files';

/** @public */
export interface PartytownRollupOptions {
  /** An absolute path to the destination directory where the lib files should be copied. */
  dest: string;

  /**
   * When `debug` is set to `false`, the `lib/debug` directory will not be copied.
   * The default is that both the production and debug directories are copied to the destination.
   */
  debug?: boolean;
}

/**
 * Rollup plugin to copy Partytown `lib` directory to the given destination.
 *
 * https://partytown.builder.io/copy-library-files
 *
 * @public
 */
export function partytownRollup(opts: PartytownRollupOptions) {
  opts = opts || ({} as any);

  if (typeof opts.dest !== 'string' || opts.dest.length === 0) {
    throw new Error(`Partytown plugin must have "dest" property.`);
  }

  if (!isAbsolute(opts.dest)) {
    throw new Error(`Partytown plugin "dest" property must be an absolute path.`);
  }

  let hasCopied = false;

  const plugin = {
    name: 'rollup-plugin-partytown',
    async writeBundle() {
      if (!hasCopied) {
        await copyLibFiles(opts.dest, { debugDir: opts.debug });
        hasCopied = true;
      }
    },
  };

  return plugin as { name: string };
}
