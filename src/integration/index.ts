import PartytownSnippet from '@snippet';
import { createSnippet } from './snippet';
import type { PartytownConfig } from '../lib/types';

/**
 * Function that returns the Partytown snippet as a string, which can be
 * used as the innerHTML of the inlined Partytown script in the head.
 *
 * @public
 */
export const partytownSnippet = (config: PartytownConfig) =>
  createSnippet(config, PartytownSnippet);

export { appendForwardConfig } from './forward';
export { SCRIPT_TYPE } from '../lib/utils';

export * from './services/facebook-pixel';
export * from './services/freshpaint';
export * from './services/google-tag-manager';

export type {
  PartytownConfig,
  PartytownForwardProperty,
  ApplyHook,
  GetHook,
  SetHook,
} from '../lib/types';
