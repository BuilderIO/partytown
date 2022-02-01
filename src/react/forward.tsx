import React from 'react';
import { appendForwardConfig } from '@builder.io/partytown/integration';
import { PartytownScript } from './script';
import type { PartytownForwardProperty } from '../lib/types';

export interface PartytownForwardProps {
  id: string;
  forward: PartytownForwardProperty[];
}

export const PartytownForward = ({ id, forward }: PartytownForwardProps) => {
  const forwardScript = appendForwardConfig(...forward);
  if (forwardScript) {
    return <PartytownScript id={id} innerHTML={forwardScript} />;
  }
  return null;
};
