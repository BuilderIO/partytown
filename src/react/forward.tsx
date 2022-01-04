import React from 'react';
import { appendForwardConfig } from '@builder.io/partytown/intergration';
import { PartytownScript } from './script';
import type { PartytownForwardProperty } from '../lib/types';

export interface PartytownForwardProps {
  id: string;
  forwards: PartytownForwardProperty[];
}

export const PartytownForward = ({ id, forwards }: PartytownForwardProps) => {
  const forwardScript = appendForwardConfig(...forwards);
  if (forwardScript) {
    return <PartytownScript id={id} innerHTML={forwardScript} />;
  }
  return null;
};
