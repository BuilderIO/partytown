import React, { useEffect } from 'react';
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
 * of the document, and after any integrations such as `<GoogleTagManager/>`.
 *
 * @public
 */
export const Partytown = (props: PartytownProps = {}): any => {
  useEffect(() => {
    if (typeof document !== 'undefined' && document.querySelector) {
      if (!document.querySelector(`script[data-pt-script="lib"]`)) {
        // Client side that should run on the document,
        // SSR/Static script does not exist, this must be client only
        // append the script script that should have run and append to the head
        const scriptElm = document.createElement('script');
        scriptElm.dataset.ptScript = 'lib';
        scriptElm.innerHTML = partytownSnippet(props);
        document.head.appendChild(scriptElm);
      }
    }
  }, []);

  // `dangerouslySetInnerHTML` only works for scripts rendered as HTML from SSR/Static.
  // Added code will set the [type="data-pt-script"] attribute with the "lib" id.
  // If this code renders as SSR/Static HTML, then it'll execute and add the attribute
  // which will tell the Client JS of the component to NOT add the same script to the head.
  const innerHTML = `document.currentScript.dataset.ptScript=lib;` + partytownSnippet(props);

  return <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: innerHTML }} />;
};
