// build scripts are generated after tsc runs
import { runBuild } from '../tsc/scripts/index.js';
import { join } from 'path';

export default function (cmdArgs) {
  const rootDir = join(__dirname, '..');
  const isDev = !!cmdArgs.configDev;
  const generateApi = !!cmdArgs.configApi;
  return runBuild(rootDir, isDev, generateApi);
}
