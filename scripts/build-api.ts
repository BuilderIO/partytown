import type { BuildOptions } from './utils';
import { join } from 'path';
import { Extractor, ExtractorConfig } from '@microsoft/api-extractor';

export function buildApi(opts: BuildOptions) {
  console.log('👑 Generate API types\n');
  buildIntegrationApi(opts);
  buildReactApi(opts);
}

function buildIntegrationApi(opts: BuildOptions) {
  const extractorConfig = ExtractorConfig.loadFileAndPrepare(
    join(opts.srcIntegrationDir, 'api-extractor.json')
  );
  extractorConfig.untrimmedFilePath;
  const result = Extractor.invoke(extractorConfig, {
    localBuild: true,
    showVerboseMessages: true,
  });
  if (!result.succeeded) {
    process.exit(1);
  }
}

function buildReactApi(opts: BuildOptions) {
  const extractorConfig = ExtractorConfig.loadFileAndPrepare(
    join(opts.srcReactDir, 'api-extractor.json')
  );
  extractorConfig.untrimmedFilePath;
  const result = Extractor.invoke(extractorConfig, {
    localBuild: true,
    showVerboseMessages: true,
  });
  if (!result.succeeded) {
    process.exit(1);
  }
}
