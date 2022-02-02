import type { PartytownForwardProperty } from '../lib/types';

/**
 * Forwards Facebool Pixels main window calls to Partytown's worker thread.
 *
 * https://developers.facebook.com/docs/facebook-pixel/get-started
 *
 * @public
 */
export const facebookPixelForward: PartytownForwardProperty[] = ['fbq'];
