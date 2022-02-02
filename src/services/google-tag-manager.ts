import type { PartytownForwardProperty } from '../lib/types';

/**
 * Forwards Google Tag Manager main window calls to Partytown's worker thread.
 *
 * @public
 */
export const googleTagManagerForward: PartytownForwardProperty[] = ['dataLayer.push'];
