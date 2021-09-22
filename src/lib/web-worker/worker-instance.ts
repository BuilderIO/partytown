import { EventHandler, ImmediateSetter, InterfaceType, StateProp } from '../types';
import {
  ImmediateSettersKey,
  InstanceIdKey,
  InterfaceTypeKey,
  NodeNameKey,
  webWorkerCtx,
  WinIdKey,
} from './worker-constants';
import { nextTick } from '../utils';
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

export const instanceState = new Map<string, { [prop: string]: any }>();

export const getInstanceStateValue = (instance: WorkerInstance, propName: StateProp) =>
  getStateValue(instance[WinIdKey], instance[InstanceIdKey], propName);

export const getStateValue = (
  winId: number,
  instanceId: number,
  propName: StateProp,
  state?: { [prop: string]: any }
) => {
  state = instanceState.get(getKey(winId, instanceId));
  if (state) {
    return state[propName];
  }
};

export const setInstanceStateValue = (instance: WorkerInstance, propName: StateProp, value: any) =>
  setStateValue(instance[WinIdKey], instance[InstanceIdKey], propName, value);

export const setStateValue = (
  winId: number,
  instanceId: number,
  propName: StateProp,
  value: any,
  state?: { [prop: string]: any }
) => {
  state = instanceState.get(getKey(winId, instanceId)) || {};
  state[propName] = value;
  instanceState.set(getKey(winId, instanceId), state);
};

const getKey = (winId: number, instanceId: number) => winId + '.' + instanceId;

export const runStateHandlers = (
  winId: number,
  instanceId: number,
  handlerType: StateProp,
  handlers?: EventHandler[]
) => {
  handlers = getStateValue(winId, instanceId, handlerType);
  if (handlers) {
    nextTick(() =>
      handlers!.map((cb) =>
        cb({ type: handlerType === StateProp.errorHandlers ? 'error' : 'load' })
      )
    );
  }
  return !!handlers;
};
