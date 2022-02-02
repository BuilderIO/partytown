import type { PartytownForwardProperty } from '../lib/types';

/**
 * Forwards Freshpaint.io main window calls to Partytown's worker thread.
 *
 * https://www.freshpaint.io/
 *
 * @public
 */
export const freshpaintForward: PartytownForwardProperty[] = [
  'freshpaint.addPageviewProperties',
  'freshpaint.identify',
  'freshpaint.track',
];
