import PartytownSnippet from '@snippet';
import type { PartytownConfig, PartytownForwardPropertyName } from '../lib/types';

/**
 * @public
 */
export const partytownSnippet = (config: PartytownConfig) => {
  const forward = config.forward || [];
  delete config.forward;

  const configStr = JSON.stringify(config, (k, v) => {
    if (typeof v === 'function') {
      v = String(v);
      if (v.startsWith(k + '(')) {
        v = 'function ' + v;
      }
    }
    return v;
  });

  return [
    `!(function(w,p,f,c){`,
    config && Object.keys(config).length > 0
      ? `c=w[p]=Object.assign(w[p]||{},${configStr});`
      : `c=w[p]=w[p]||{};`,
    `c[f]=(c[f]||[])`,
    forward.length > 0 ? `.concat(${JSON.stringify(forward)})` : ``,
    `})(window,'partytown','forward');`,
    PartytownSnippet,
  ].join('');
};

export { SCRIPT_TYPE } from '../lib/utils';

export type { PartytownConfig, PartytownForwardPropertyName };

export { appendForwardConfig } from './forward';
export * from './services/facebook-pixel';
export * from './services/google-tag-manager';
