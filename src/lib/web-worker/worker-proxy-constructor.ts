import type { ImmediateSetter, InterfaceType } from '../types';
import {
  ImmediateSettersKey,
  InstanceIdKey,
  InterfaceTypeKey,
  NodeNameKey,
  WinIdKey,
} from './worker-constants';
import { proxy } from './worker-proxy';

export class WorkerProxy {
  [WinIdKey]: number;
  [InstanceIdKey]: number;
  [InterfaceTypeKey]: InterfaceType;
  [NodeNameKey]: string | undefined;
  [ImmediateSettersKey]: ImmediateSetter[] | undefined;

  constructor(interfaceType: InterfaceType, instanceId: number, winId?: number, nodeName?: string) {
    this[WinIdKey] = winId!;
    this[InstanceIdKey] = instanceId!;
    this[NodeNameKey] = nodeName;
    this[ImmediateSettersKey] = undefined;
    return proxy((this[InterfaceTypeKey] = interfaceType), this, []);
  }
}
