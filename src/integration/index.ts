import PartytownSnippet from '@snippet';
import type {
  PartytownConfig,
  PartytownForwardPropertyName,
  PartytownForwardPropertyType,
} from '../lib/types';

/**
 * @public
 */
export const partytownSnippet = (config: PartytownConfig) => {
  const forward = config.forward || [];
  delete config.forward;

  return [
    `!(function(w,p,f,c){`,
    config && Object.keys(config).length > 0
      ? `c=w[p]=Object.assign(w[p]||{},${JSON.stringify(config)});`
      : `c=w[p]=w[p]||{};`,
    `c[f]=(c[f]||[])`,
    forward.length > 0 ? `.concat(${JSON.stringify(forward)})` : ``,
    `})(window,'partytown','forward');`,
    PartytownSnippet,
  ].join('');
};

/**
 * Gracefully adds a forward property to the global Partytown config. This
 * first ensures the `window.partytown.foward` exists, then adds the forward
 * property.
 *
 * @public
 */
export const appendForwardProperty = (
  propertyName: PartytownForwardPropertyName,
  propertyType?: PartytownForwardPropertyType
) =>
  `!(function(w,p,f,c){c=w[p]=w[p]||{};(c[f]=c[f]||[]).push(${JSON.stringify(
    propertyType ? [propertyName, propertyType] : [propertyName]
  )})})(window,'partytown','forward');`;

export { SCRIPT_TYPE } from '../lib/utils';

export type { PartytownConfig, PartytownForwardPropertyName, PartytownForwardPropertyType };
