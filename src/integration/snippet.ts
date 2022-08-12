import type { PartytownConfig } from '../lib/types';

export const createSnippet = (config: PartytownConfig | undefined | null, snippetCode: string) => {
  const { forward = [], forwardCall = [], ...filteredConfig } = config || {};

  const configStr = JSON.stringify(filteredConfig, (k, v) => {
    if (typeof v === 'function') {
      v = String(v);
      if (v.startsWith(k + '(')) {
        v = 'function ' + v;
      }
    }
    return v;
  });

  return [
    `!(function(w,p,f,fc,c){`,
    Object.keys(filteredConfig).length > 0
      ? `c=w[p]=Object.assign(w[p]||{},${configStr});`
      : `c=w[p]=w[p]||{};`,
    `c[f]=(c[f]||[])`,
    forward.length > 0 ? `.concat(${JSON.stringify(forward)});` : `;`,
    `c[fc]=(c[fc]||[])`,
    forwardCall.length > 0 ? `.concat(${JSON.stringify(forwardCall)})` : ``,
    `})(window,'partytown','forward','forwardCall');`,
    snippetCode,
  ].join('');
};
