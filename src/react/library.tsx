import React from 'react';
import type { PartytownConfig } from '../lib/types';
import { partytownSnippet } from '@builder.io/partytown/intergration';
import { PartytownScript } from './script';

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
export const Partytown = (props?: PartytownProps): any => (
  <PartytownScript id="lib" innerHTML={partytownSnippet({ ...props })} />
);
