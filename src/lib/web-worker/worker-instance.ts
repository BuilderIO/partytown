import type { ImmediateSetter, InterfaceType } from '../types';
import {
  ImmediateSettersKey,
  InstanceIdKey,
  InterfaceTypeKey,
  NodeNameKey,
  webWorkerCtx,
  WinIdKey,
} from './worker-constants';
import { proxy } from './worker-proxy';

export class WorkerInstance {
  [WinIdKey]: number;
  [InstanceIdKey]: number;
  [InterfaceTypeKey]: number;
  [NodeNameKey]: string | undefined;
  [ImmediateSettersKey]: ImmediateSetter[] | undefined;

  constructor(interfaceType: InterfaceType, instanceId: number, winId?: number, nodeName?: string) {
    this[WinIdKey] = winId || webWorkerCtx.$winId$;
    this[InstanceIdKey] = instanceId!;
    this[NodeNameKey] = nodeName;
    this[ImmediateSettersKey] = undefined;
    return proxy((this[InterfaceTypeKey] = interfaceType), this, []);
  }
}
