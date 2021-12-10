import React from 'react';
import { appendForward } from '@builder.io/partytown/intergration';
import { PartytownScript } from './script';
import type { PartytownForwardProperty } from '../lib/types';

export interface PartytownForwardProps {
  id: string;
  forward: PartytownForwardProperty;
}

export const PartytownForward = ({ id, forward }: PartytownForwardProps) => {
  const forwardScript = appendForward(forward);
  if (forwardScript) {
    return <PartytownScript id={id} innerHTML={forwardScript} />;
  }
  return null;
};
