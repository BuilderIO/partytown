import type { PartytownConfig } from '../lib/types';
import { partytownSnippet } from '@builder.io/partytown/integration';

/**
 * Props for `<QwikPartytown/>`, which extends the Partytown Config.
 *
 * https://github.com/BuilderIO/partytown#config
 *
 * @public
 */
export interface PartytownProps extends PartytownConfig {}

/**
 * @public
 */
export const QwikPartytown = (props: PartytownProps = {}): any => {
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
      document.head.appendChild(scriptElm);
    }
    // should only append this script once per document, and is not dynamic
    document._partytown = true;
  }

  const innerHTML = partytownSnippet(props);

  return <script>{innerHTML}</script>;
};

interface PartytownDocument extends Document {
  _partytown?: boolean;
}

declare const document: PartytownDocument;
