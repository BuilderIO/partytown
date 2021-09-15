export { PT_SCRIPT_TYPE } from '../lib/utils';

export const appendForwardConfig = (forwardConfig: string) =>
  [
    `(function(w,p,f,c){`,
    `c=w[p]=w[p]||{};`,
    `(c[f]=c[f]||[]).push(${JSON.stringify(forwardConfig)})`,
    `})(window,'partytown','forward');`,
  ].join('');
