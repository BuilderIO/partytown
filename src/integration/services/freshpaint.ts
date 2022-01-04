import type { PartytownForwardProperty } from 'src/lib/types';

/**
 * Forwards Freshpaint.io main window calls to Partytown's worker thread.
 *
 * https://www.freshpaint.io/
 *
 * @public
 */
export const freshpainForward = (): PartytownForwardProperty[] => [
  'freshpaint.addPageviewProperties',
  'freshpaint.identify',
  'freshpaint.track',
];
