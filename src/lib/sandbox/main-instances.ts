import { instanceIds, instances, winCtxs } from './main-constants';
import { NodeName, PlatformInstanceId } from '../types';
import { randomId } from '../utils';

export const getAndSetInstanceId = (instance: any, instanceId?: number, nodeName?: string) => {
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

export const getInstance = <T = any>(
  winId: number,
  instanceId: number,
  instanceItem?: any
): T | undefined => {
  const winCtx = winCtxs[winId]!;
  const win = winCtx.$window$;
  const doc = win.document;
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
  return instances.get(instanceId);
};

export const setInstanceId = (instance: any, instanceId: number) => {
  if (instance) {
    instances.set(instanceId, instance);
    instanceIds.set(instance, instanceId);
    setInc++;

    if (setInc > 99999) {
      instances.forEach((instance: Node, instanceId) => {
        if (instance.nodeType && !instance.isConnected) {
          instances.delete(instanceId);
        }
      });
      setInc = 0;
    }
  }
};

let setInc = 0;
