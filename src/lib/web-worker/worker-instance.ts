import {
  InstanceIdKey,
  InterfaceTypeKey,
  NodeNameKey,
  webWorkerCtx,
  WinIdKey,
} from './worker-constants';
import { EventHandler, InterfaceType, StateProp } from '../types';
import { proxy } from './worker-proxy';

export class WorkerInstance {
  [WinIdKey]: number;
  [InstanceIdKey]: number;
  [InterfaceTypeKey]: number;
  [NodeNameKey]?: string;

  constructor(interfaceType: InterfaceType, instanceId: number, winId?: number, nodeName?: string) {
    this[WinIdKey] = winId || webWorkerCtx.$winId$;
    this[InstanceIdKey] = instanceId!;
    this[NodeNameKey] = nodeName;
    return proxy((this[InterfaceTypeKey] = interfaceType), this, []);
  }
}

export const instanceState = new Map<string, { [prop: string]: any }>();

export const getInstanceStateValue = (instance: WorkerInstance, propName: StateProp) =>
  getStateValue(instance[WinIdKey], instance[InstanceIdKey], propName);

const getStateValue = (
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

export const runStateProp = (
  winId: number,
  instanceId: number,
  stateProp: StateProp,
  value?: any
) => {
  value = getStateValue(winId, instanceId, stateProp);
  if (value) {
    (value as EventHandler[]).forEach((cb) =>
      cb({ type: stateProp === StateProp.errorHandlers ? 'error' : 'load' })
    );
  }
};
