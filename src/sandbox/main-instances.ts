import { len } from '../utils';
import { MainWindowContext, NodeName, PlatformApiId } from '../types';

export const getInstanceId = (
  winCtx: MainWindowContext,
  instance: InstanceType | null | undefined
) => {
  if (instance) {
    const nodeName = (instance as any as Node).nodeName;
    if (nodeName === NodeName.Document) {
      return PlatformApiId.documentElement;
    }
    if (nodeName === NodeName.DocumentElement) {
      return PlatformApiId.documentElement;
    }
    if (nodeName === NodeName.Head) {
      return PlatformApiId.head;
    }
    if (nodeName === NodeName.Body) {
      return PlatformApiId.body;
    }
    return winCtx.$instanceIdByInstance$.get(instance);
  }
};

export const getAndSetInstanceId = (
  winCtx: MainWindowContext,
  instance: InstanceType | null | undefined,
  instanceId?: number
) => {
  if (instance) {
    instanceId = getInstanceId(winCtx, instance);
    if (typeof instanceId !== 'number') {
      instanceId = winCtx.$nextId$++;
      setInstanceId(winCtx, instance, instanceId);
    }
    return instanceId;
  }
  return -1;
};

export const getInstance = <T = InstanceType | null>(
  winCtx: MainWindowContext,
  instanceId: number,
  instanceItem?: any
): T => {
  const doc = winCtx.$window$.document;
  if (instanceId === PlatformApiId.document) {
    return doc as any;
  }
  if (instanceId === PlatformApiId.documentElement) {
    return doc.documentElement as any;
  }
  if (instanceId === PlatformApiId.head) {
    return doc.head as any;
  }
  if (instanceId === PlatformApiId.body) {
    return doc.body as any;
  }
  instanceItem = winCtx.$instances$.find((i) => i[0] === instanceId);
  return instanceItem ? instanceItem[1] : null;
};

export const setInstanceId = (
  winCtx: MainWindowContext,
  instance: InstanceType | null | undefined,
  instanceId: number
) => {
  if (instance) {
    const instances = winCtx.$instances$;
    instances.push([instanceId, instance]);
    winCtx.$instanceIdByInstance$.set(instance, instanceId);

    winCtx.$cleanupInc$++;
    if (winCtx.$cleanupInc$ > 99) {
      winCtx.$cleanupInc$ = 0;
      while (true) {
        let disconnectedNodes = instances.filter(
          (i) => (i[1] as InstanceNode).nodeType && !(i[1] as InstanceNode).isConnected
        );
        let i: number;
        let l: number;
        if (len(disconnectedNodes) > 99) {
          for (i = 0, l = len(instances); i < l; i++) {
            if (!(instances[i][1] as InstanceNode).isConnected) {
              instances.slice(i, 1);
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
