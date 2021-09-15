import React from 'react';
import type { PartytownConfig } from '../lib/types';
import PartytownSnippet from '@snippet';

/**
 * Props for `<Partytown/>`, which extends the Partytown Config.
 *
 * https://github.com/BuilderIO/partytown#config
 *
 * @public
 */
export interface PartytownProps extends PartytownConfig {}

/**
 * The React `<Partytown/>` component should be placed within the `<head>`
 * of the document, and after any integrations such as `<GoogleTagManager/>`.
 *
 * @public
 */
export const Partytown = (props?: PartytownProps): any => {
  props = { ...props };
  const forward = props.forward || [];
  delete props.forward;

  const config = [
    `(function(w,p,f,c){`,
    Object.keys(props).length > 0
      ? `c=w[p]=Object.assign(w[p]||{},${JSON.stringify(props)});`
      : `c=w[p]=w[p]||{};`,
    `c[f]=(c[f]||[])`,
    forward.length > 0 ? `.concat(${JSON.stringify(forward)})` : ``,
    `})(window,'partytown','forward');`,
  ];

  return (
    <script
      data-partytown="lib"
      dangerouslySetInnerHTML={{
        __html: config.join('') + PartytownSnippet,
      }}
    />
  );
};
