import type { BuildOptions } from './utils';
import { join } from 'path';
import { Extractor, ExtractorConfig } from '@microsoft/api-extractor';

export function buildApi(opts: BuildOptions) {
  console.log('👑 Generate API types\n');

  const dirs = [opts.srcIntegrationDir, opts.srcServicesDir, opts.srcReactDir, opts.srcUtilsDir];
  dirs.forEach((dir) => {
    const extractorConfig = ExtractorConfig.loadFileAndPrepare(join(dir, 'api-extractor.json'));
    const result = Extractor.invoke(extractorConfig, {
      localBuild: true,
      showVerboseMessages: true,
    });
    if (!result.succeeded) {
      process.exit(1);
    }
  });
}
