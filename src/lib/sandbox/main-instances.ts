import { instanceIds, instances, winCtxs } from './main-constants';
import { randomId } from '../utils';
import { NodeName, PlatformInstanceId } from '../types';

export const getAndSetInstanceId = (
  instance: InstanceType | null | undefined,
  instanceId?: number,
  nodeName?: string
) => {
  if (instance) {
    if (instance === (instance as any).window) {
      return PlatformInstanceId.window;
    }

    nodeName = (instance as any as Node).nodeName;
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

    instanceId = instanceIds.get(instance);
    if (typeof instanceId !== 'number') {
      setInstanceId(instance, (instanceId = randomId()));
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
  const win = winCtx.$window$;
  const doc: Document = win.document;
  if (instanceId === PlatformInstanceId.window) {
    return win as any;
  }
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
  instanceItem = instances.find((i) => i[0] === instanceId);
  if (instanceItem) {
    return instanceItem[1];
  }
};

export const setInstanceId = (instance: InstanceType | null | undefined, instanceId: number) => {
  if (instance) {
    instances.push([instanceId, instance]);
    instanceIds.set(instance, instanceId);
  }
};

interface InstanceNode extends Node {}

interface InstanceWindow extends Window {}

interface InstanceHistory extends History {}

interface InstanceStorage extends Storage {}

type InstanceType = InstanceNode | InstanceWindow | InstanceHistory | InstanceStorage;
