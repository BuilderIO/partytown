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
export function rollupPartytownCopyLib(opts: PartytownRollupOptions) {
  opts = opts || {};

  if (typeof opts.dest !== 'string') {
    throw new Error(`Partytown copylib plugin must have "dest" property.`);
  }

  if (!isAbsolute(opts.dest)) {
    throw new Error(`Partytown copylib plugin "dest" property must be an absolute path.`);
  }

  let hasCopied = false;

  return {
    name: 'partytown-copylib',
    async writeBundle() {
      if (!hasCopied) {
        await copyLibFiles(opts.dest, { debugDir: opts.debug });
        hasCopied = true;
      }
    },
  };
}

/**
 * Vite plugin to copy Partytown `lib` directory to the given destination.
 *
 * https://partytown.builder.io/copy-library-files
 *
 * @public
 */
export { rollupPartytownCopyLib as vitePartytownCopyLib };
