import type { PartytownForwardProperty } from '../lib/types';

/**
 * Gracefully adds a forward property to the global Partytown config. This
 * first ensures the `window.partytown.foward` exists, then adds the forward
 * property.
 *
 * @public
 */
export const appendForwardConfig = (forward: PartytownForwardProperty) => {
  if (forward) {
    return `!(function(w,p,f,c){c=w[p]=w[p]||{};(c[f]=c[f]||[]).push(${JSON.stringify(
      forward
    )})})(window,'partytown','forward');`;
  }
  return ``;
};
