import React from 'react';
import type { FunctionComponent } from 'react';
import type { PartytownConfig } from '../lib/types';
import PartytownSnippet from '@snippet';

export type PartytownProps = PartytownConfig;

export const Partytown: FunctionComponent<PartytownProps> = (props?: PartytownProps) => {
  return (
    <>
      {props ? (
        <script
          dangerouslySetInnerHTML={{
            __html: `partytown=${JSON.stringify(props)}`,
          }}
        />
      ) : null}
      <script
        dangerouslySetInnerHTML={{
          __html: PartytownSnippet,
        }}
      />
    </>
  );
};
