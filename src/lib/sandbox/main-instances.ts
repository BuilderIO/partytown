import { CreatedKey, InstanceIdKey, instances, winCtxs } from './main-constants';
import {
  InstanceId,
  MainWindow,
  MainWindowContext,
  NodeName,
  PlatformInstanceId,
  WinId,
} from '../types';
import { randomId } from '../utils';

export const getAndSetInstanceId = (instance: any, instanceId?: InstanceId, nodeName?: string) => {
  if (instance) {
    if (instance === (instance as any).window) {
      return PlatformInstanceId.window;
    }

    if ((nodeName = (instance as any as Node).nodeName) === NodeName.Document) {
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

    if (!(instanceId = instance[InstanceIdKey])) {
      setInstanceId(instance, (instanceId = randomId()));
    }
    return instanceId;
  }
};

export const getInstance = <T = any>(
  winId: WinId,
  instanceId: InstanceId,
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

export const setInstanceId = (instance: any, instanceId: InstanceId, now?: number) => {
  if (instance) {
    instances.set(instanceId, instance);
    instance[InstanceIdKey] = instanceId;
    instance[CreatedKey] = now = Date.now();

    if (now > lastCleanup + 5000) {
      instances.forEach((storedInstance: any, instanceId) => {
        if (storedInstance[CreatedKey] < lastCleanup) {
          if (storedInstance.nodeType && !storedInstance.isConnected) {
            instances.delete(instanceId);
          }
        }
      });
      lastCleanup = now;
    }
  }
};

let lastCleanup = 0;
