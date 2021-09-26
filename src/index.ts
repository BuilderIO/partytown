import PartytownSnippet from '@snippet';
import type { PartytownConfig } from './lib/types';

export const partytownSnippet = (config: PartytownConfig) => {
  const forward = config.forward || [];
  delete config.forward;

  return [
    `(function(w,p,f,c){`,
    config && Object.keys(config).length > 0
      ? `c=w[p]=Object.assign(w[p]||{},${JSON.stringify(config)});`
      : `c=w[p]=w[p]||{};`,
    `c[f]=(c[f]||[])`,
    forward.length > 0 ? `.concat(${JSON.stringify(forward)})` : ``,
    `})(window,'partytown','forward');`,
    PartytownSnippet,
  ].join('');
};
