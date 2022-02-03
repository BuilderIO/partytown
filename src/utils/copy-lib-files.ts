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
 * @public
 */
export async function copyLibFiles(destDir: string) {
  if (typeof destDir !== 'string' || destDir.length === 0) {
    throw new Error('Missing destDir');
  }
  if (!isAbsolute(destDir)) {
    destDir = resolve(process.cwd(), destDir);
  }
  await copyLibDir(libDirPath(), destDir);
  return {
    src: libDirPath(),
    dest: destDir,
  };
}

async function copyLibDir(srcDir: string, destDir: string) {
  try {
    await mkdir(destDir, { recursive: true });
  } catch (e) {}

  const itemNames = await readdir(srcDir);

  await Promise.all(
    itemNames.map(async (srcName) => {
      const srcPath = resolve(srcDir, srcName);
      const destPath = resolve(destDir, srcName);

      const s = await stat(srcPath);
      if (s.isFile()) {
        await copyFile(srcPath, destPath);
      } else if (s.isDirectory()) {
        await copyLibDir(srcPath, destPath);
      }
    })
  );
}
