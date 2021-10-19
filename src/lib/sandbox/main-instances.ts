import { randomId } from '../utils';
import { MainWindowContext, NodeName, PlatformInstanceId } from '../types';
import { winCtxs } from './main-constants';

const getInstanceId = (winCtx: MainWindowContext, instance: InstanceType | null | undefined) => {
  if (instance) {
    const nodeName = (instance as any as Node).nodeName;
    if (nodeName === NodeName.Document) {
      return PlatformInstanceId.document;
    }
    if (nodeName === NodeName.DocumentElement) {
      return PlatformInstanceId.documentElement;
    }
    if (nodeName === NodeName.Head) {
      return PlatformInstanceId.head;
    }
    if (nodeName === NodeName.Body) {
      return PlatformInstanceId.body;
    }
    return winCtx.$instanceIds$.get(instance);
  }
  return -1;
};

export const getAndSetInstanceId = (
  winCtx: MainWindowContext,
  instance: InstanceType | null | undefined,
  instanceId?: number
) => {
  if (instance) {
    instanceId = getInstanceId(winCtx, instance);
    if (typeof instanceId !== 'number') {
      setInstanceId(winCtx, instance, (instanceId = randomId()));
    }
    return instanceId;
  }
  return -1;
};

export const getInstance = <T = InstanceType | null>(
  winId: number,
  instanceId: number,
  instanceItem?: any
): T | undefined => {
  const winCtx = winCtxs[winId]!;
  const doc: Document = winCtx.$window$.document;
  if (instanceId === PlatformInstanceId.document) {
    return doc as any;
  }
  if (instanceId === PlatformInstanceId.documentElement) {
    return doc.documentElement as any;
  }
  if (instanceId === PlatformInstanceId.head) {
    return doc.head as any;
  }
  if (instanceId === PlatformInstanceId.body) {
    return doc.body as any;
  }
  instanceItem = winCtx.$instances$.find((i) => i[0] === instanceId);
  if (instanceItem) {
    return instanceItem[1];
  }
};

export const setInstanceId = (
  winCtx: MainWindowContext,
  instance: InstanceType | null | undefined,
  instanceId: number
) => {
  if (instance) {
    winCtx.$instances$.push([instanceId, instance]);
    winCtx.$instanceIds$.set(instance, instanceId);
  }
};

interface InstanceNode extends Node {}

interface InstanceWindow extends Window {}

interface InstanceHistory extends History {}

interface InstanceStorage extends Storage {}

type InstanceType = InstanceNode | InstanceWindow | InstanceHistory | InstanceStorage;
