import fs from 'fs';
import { dirname, isAbsolute, resolve } from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const copyFile = promisify(fs.copyFile);
const mkdir = promisify(fs.mkdir);
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Absolute path to the Partytown lib directory within the
 * `@builder.io/partytown` package.
 *
 * https://partytown.builder.io/copy-library-files
 *
 * @public
 */
export function libDirPath() {
  return resolve(__dirname, '..', 'lib');
}

/**
 * Utility to copy the Partytown library files to a destination on the server.
 * Partytown requires its library files, such as `partytown.js` to be served
 * as static files from the same origin. By default the library assumes all the
 * files can be found at `/~partytown/`, but this can be configured.
 *
 * This utility function is to make it easier to locate the source library files
 * and copy them to your server's correct location, for example: `./public/~partytown/`.
 *
 * By default, both the production and debug builds are copied to the destination.
 * However, by setting the `debugDir` option to `false`, the debug directory will
 * not be copied.
 *
 * https://partytown.builder.io/copy-library-files
 *
 * @public
 */
export async function copyLibFiles(dest: string, opts?: CopyLibFilesOptions) {
  opts = opts || {};
  if (typeof dest !== 'string' || dest.length === 0) {
    throw new Error('Missing destination directory');
  }
  if (!isAbsolute(dest)) {
    dest = resolve(process.cwd(), dest);
  }

  const src = libDirPath();
  await copyLibDir(src, dest, opts);

  return { src, dest };
}

async function copyLibDir(srcDir: string, destDir: string, opts: CopyLibFilesOptions) {
  try {
    await mkdir(destDir, { recursive: true });
  } catch (e) {}

  const itemNames = await readdir(srcDir);

  await Promise.all(
    itemNames.map(async (srcName) => {
      if (srcName === 'debug' && opts.debugDir === false) {
        return;
      }

      const srcPath = resolve(srcDir, srcName);
      const destPath = resolve(destDir, srcName);

      const s = await stat(srcPath);
      if (s.isFile()) {
        await copyFile(srcPath, destPath);
      } else if (s.isDirectory()) {
        await copyLibDir(srcPath, destPath, opts);
      }
    })
  );
}

/**
 * @public
 */
export interface CopyLibFilesOptions {
  /**
   * When set to `false` the `lib/debug` directory will not be copied. The default is
   * that both the production and debug directories are copied to the destination.
   */
  debugDir?: boolean;
}
