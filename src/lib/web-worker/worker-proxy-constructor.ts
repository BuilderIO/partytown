import type { InterfaceType } from '../types';
import {
  InstanceIdKey,
  InterfaceTypeKey,
  NodeNameKey,
  ParentInstanceIdKey,
  WinIdKey,
} from './worker-constants';
import { proxy } from './worker-proxy';

export class WorkerProxy {
  [WinIdKey]: number;
  [InstanceIdKey]: number;
  [InterfaceTypeKey]: InterfaceType;
  [NodeNameKey]: string | undefined;
  [ParentInstanceIdKey]: number | undefined;

  constructor(
    interfaceType: InterfaceType,
    instanceId: number,
    winId?: number,
    nodeName?: string,
    parentInstanceId?: number
  ) {
    this[WinIdKey] = winId!;
    this[InstanceIdKey] = instanceId!;
    this[NodeNameKey] = nodeName;
    this[ParentInstanceIdKey] = parentInstanceId;

    return proxy((this[InterfaceTypeKey] = interfaceType), this, []);
  }
}
