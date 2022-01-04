import type { PartytownForwardProperty } from '../lib/types';

/**
 * Gracefully adds a forward property to the global Partytown config. This
 * first ensures the `window.partytown.foward` exists, then adds the forward
 * property.
 *
 * @public
 */
export const appendForwardConfig = (...forwards: PartytownForwardProperty[]) => {
  if (forwards.length > 0) {
    const str = forwards.map((f) => JSON.stringify(f)).join(',');
    return `!(function(w,p,f,c){c=w[p]=w[p]||{};(c[f]=c[f]||[]).push(${str})})(window,'partytown','forward');`;
  }
  return ``;
};
