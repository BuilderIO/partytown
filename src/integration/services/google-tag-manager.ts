import type { PartytownForwardProperty } from '../../lib/types';

/**
 * Google Tag Manager script.
 *
 * https://developers.google.com/tag-manager/quickstart
 *
 * @public
 */
export const googleTagManager = (dataLayerName: string) =>
  `(window.${dataLayerName}=window.${dataLayerName}||[]).push({"gtm.start":new Date().getTime(),event:"gtm.js"});`;

/**
 * Forwards Google Tag Manager main window calls to Partytown's worker thread.
 *
 * @public
 */
export const googleTagManagerForward = (): PartytownForwardProperty[] => ['dataLayer.push'];
