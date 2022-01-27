import React, { useEffect } from 'react';
import { SCRIPT_TYPE } from '@builder.io/partytown/intergration';

export interface PartytownScriptProps {
  /**
   * Must be a unique id, and sets the `data-pt-script` attribute
   * which is used as a selector to ensure the same script isn't executed
   * more than once.
   */
  id: string;
  innerHTML: string;
  type?: string;
}

/**
 * React script component created for these scenarios:
 * - SSR/Static rendered HTML, without Client JS running
 * - Client JS only, without starting with rendered SSR/Static HTML
 * - SSR/Static rendered HTML, that is then hydrated with Client JS
 *
 * This component ensures each scenario works, and that the script is only
 * executed once (to include not re-executing during Hot Module Reloading).
 * Also ensures it does nothing for scripts with [type="text/partytown"].
 */
export const PartytownScript = ({ id, innerHTML, type }: PartytownScriptProps): any => {
  useEffect(() => {
    if (typeof document !== 'undefined' && type !== SCRIPT_TYPE) {
      if (!document.querySelector(`script[data-pt-script="${id}"]`)) {
        // Client side, that's not a Partytown script, that should run on main
        // SSR/Static script does not exist, this must be client only
        // append the script script that should have run and append to the head
        const scriptElm = document.createElement('script');
        scriptElm.dataset.ptScript = id;
        scriptElm.innerHTML = innerHTML;
        if (type) {
          scriptElm.setAttribute('type', type);
        }
        document.head.appendChild(scriptElm);
      }
    }
  }, []);

  // `dangerouslySetInnerHTML` only works for scripts rendered as HTML from SSR/Static.
  // Added code will set the [type="data-pt-script"] attribute with the unique id.
  // If this code renders as SSR/Static HTML, then it'll execute and add the attribute
  // which will tell the Client JS of the component to NOT add the same script to the head.
  let jsxInnerHTML = innerHTML;
  if (type !== SCRIPT_TYPE) {
    jsxInnerHTML = `document.currentScript.dataset.ptScript=${JSON.stringify(id)};` + jsxInnerHTML;
  }
  return <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: jsxInnerHTML }} type={type} />;
};
