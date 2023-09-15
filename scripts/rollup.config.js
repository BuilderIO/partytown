// build scripts are generated after tsc runs
import { runBuild } from '../tsc/scripts/index.js';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default function (cmdArgs) {
  const rootDir = join(__dirname, '..');
  const isDev = !!cmdArgs.configDev;
  const isReleaseBuild = !!cmdArgs.configReleaseBuild;
  return runBuild(rootDir, isDev, isReleaseBuild);
}
