import React from 'react';
import type { PartytownConfig } from '../lib/types';
import { partytownSnippet } from '@builder.io/partytown/integration';

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
 * of the document. This component should work for SSR/SSG only HTML
 * (static HTML without javascript), clientside javascript only
 * (entire React app is build with clientside javascript),
 * and both SSR/SSG HTML that's then hydrated by the client.
 *
 * @public
 */
export const Partytown = ({ nonce, ...props }: PartytownProps = {}): any => {
  // purposely not using useState() or useEffect() so this component
  // can also work as a React Server Component

  // this check is only be done on the client, and skipped over on the server
  if (typeof document !== 'undefined' && !document._partytown) {
    if (!document.querySelector('script[data-partytown]')) {
      // the append script to document code should only run on the client
      // and only if the SSR'd script doesn't already exist within the document.
      // If the SSR'd script isn't found in the document, then this
      // must be a clientside only render. Append the partytown script
      // to the <head>.
      const scriptElm = document.createElement('script');
      scriptElm.dataset.partytown = '';
      scriptElm.innerHTML = partytownSnippet(props);
      scriptElm.nonce = nonce;
      document.head.appendChild(scriptElm);
    }
    // should only append this script once per document, and is not dynamic
    document._partytown = true;
  }

  // `dangerouslySetInnerHTML` only works for scripts rendered as HTML from SSR.
  // The added code will set the [type="data-pt-script"] attribute to the SSR rendered
  // <script>. If this code renders as SSR HTML, then on the client it'll execute
  // and add the attribute which will tell the Client JS of the component to NOT
  // add the same script to the <head>.
  const innerHTML = partytownSnippet(props) + 'document.currentScript.dataset.partytown="";';

  return (
    <script
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: innerHTML }}
      nonce={nonce}
    />
  );
};

interface PartytownDocument extends Document {
  _partytown?: boolean;
}

declare const document: PartytownDocument;
