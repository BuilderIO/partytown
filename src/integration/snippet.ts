import type { PartytownConfig } from '../lib/types';

export const createSnippet = (config: PartytownConfig, snippetCode: string) => {
  config = config || {};
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
    Object.keys(config).length > 0
      ? `c=w[p]=Object.assign(w[p]||{},${configStr});`
      : `c=w[p]=w[p]||{};`,
    `c[f]=(c[f]||[])`,
    forward.length > 0 ? `.concat(${JSON.stringify(forward)})` : ``,
    `})(window,'partytown','forward');`,
    snippetCode,
  ].join('');
};
