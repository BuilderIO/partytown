import React from 'react';
import type { FunctionComponent } from 'react';
import type { PartytownConfig } from '../lib/types';
import PartytownSnippet from '@snippet';

/** @alpha */
export type PartytownProps = PartytownConfig;

export const Partytown: FunctionComponent<PartytownProps> = (props?: PartytownProps) => (
  <script
    dangerouslySetInnerHTML={{
      __html:
        (props && Object.keys(props).length ? `window.partytown=${JSON.stringify(props)};` : ``) +
        PartytownSnippet,
    }}
  />
);
