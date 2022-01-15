import { CreatedKey, InstanceIdKey, instances, winCtxs } from './main-constants';
import { MainWindow, MainWindowContext, NodeName, PlatformInstanceId } from '../types';
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

    instanceId = instance[InstanceIdKey];
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
  winCtx?: MainWindowContext,
  win?: MainWindow,
  doc?: Document
): T | undefined => {
  winCtx = winCtxs[winId]!;
  if (winCtx) {
    win = winCtx.$window$;
    if (win) {
      doc = win.document;
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
    }
  }
};

export const setInstanceId = (instance: any, instanceId: number, now?: number) => {
  if (instance) {
    instances.set(instanceId, instance);
    instance[InstanceIdKey] = instanceId;
    instance[CreatedKey] = now = Date.now();

    if (now > lastCleanup + 5000) {
      instances.forEach((storedInstance: any, instanceId) => {
        if (storedInstance[CreatedKey] < lastCleanup && storedInstance instanceof Node) {
          if (!storedInstance.isConnected) {
            instances.delete(instanceId);
          }
        }
      });
      lastCleanup = now;
    }
  }
};

let lastCleanup = 0;
