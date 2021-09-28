import { len, randomId } from '../utils';
import { mainInstanceIdByInstance, mainInstances, winCtxs } from './main-constants';
import { MainWindowContext, NodeName, PlatformInstanceId } from '../types';

export const getInstanceId = (instance: InstanceType | null | undefined) => {
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
    return mainInstanceIdByInstance.get(instance);
  }
  return -1;
};

export const getAndSetInstanceId = (
  winCtx: MainWindowContext,
  instance: InstanceType | null | undefined,
  instanceId?: number
) => {
  if (instance) {
    instanceId = getInstanceId(instance);
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
  instanceItem?: any,
  winCtx?: MainWindowContext,
  doc?: Document
): T | undefined => {
  winCtx = winCtxs.get(winId)!;
  if (winCtx) {
    doc = winCtx.$window$.document;
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
    instanceItem = mainInstances.find((i) => i[0] === instanceId);
    if (instanceItem) {
      return instanceItem[1];
    }
  }
};

export const setInstanceId = (
  winCtx: MainWindowContext,
  instance: InstanceType | null | undefined,
  instanceId: number
) => {
  if (instance) {
    mainInstances.push([instanceId, instance]);
    mainInstanceIdByInstance.set(instance, instanceId);

    winCtx.$cleanupInc$++;
    if (winCtx.$cleanupInc$ > 99) {
      winCtx.$cleanupInc$ = 0;
      while (true) {
        let disconnectedNodes = mainInstances.filter(
          (i) => (i[1] as InstanceNode).nodeType && !(i[1] as InstanceNode).isConnected
        );
        let i: number;
        let l: number;
        if (len(disconnectedNodes) > 99) {
          for (i = 0, l = len(mainInstances); i < l; i++) {
            if (!(mainInstances[i][1] as InstanceNode).isConnected) {
              mainInstances.slice(i, 1);
              break;
            }
          }
        } else {
          break;
        }
      }
    }
  }
};

interface InstanceNode extends Node {}

interface InstanceWindow extends Window {}

interface InstanceHistory extends History {}

interface InstanceStorage extends Storage {}

type InstanceType = InstanceNode | InstanceWindow | InstanceHistory | InstanceStorage;
