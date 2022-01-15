import { ApplyPath, CallType } from '../types';
import {
  ApplyPathKey,
  InstanceIdKey,
  NodeNameKey,
  InstanceStateKey,
  WinIdKey,
  NamespaceKey,
  eventTargetMethods,
} from './worker-constants';
import { callMethod, getter, setter } from './worker-proxy';

export class WorkerProxy {
  [WinIdKey]: number;
  [InstanceIdKey]: number;
  [ApplyPathKey]: string[];
  [NodeNameKey]: string | undefined;
  [NamespaceKey]: string | undefined;
  [InstanceStateKey]: { [key: string]: any };

  constructor(
    winId: number,
    instanceId: number,
    applyPath?: ApplyPath,
    nodeName?: string,
    namespace?: string
  ) {
    this[WinIdKey] = winId!;
    this[InstanceIdKey] = instanceId!;
    this[ApplyPathKey] = applyPath || [];
    this[NodeNameKey] = nodeName;
    this[InstanceStateKey] = {};
    if (namespace) {
      this[NamespaceKey] = namespace;
    }
  }
}

export class WorkerEventTargetProxy extends WorkerProxy {}
eventTargetMethods.map(
  (methodName) =>
    ((WorkerEventTargetProxy as any).prototype[methodName] = function (...args: any[]) {
      return callMethod(this, [methodName], args, CallType.NonBlocking);
    })
);

export class WorkerTrapProxy extends WorkerProxy {
  constructor(winId: number, instanceId: number, applyPath?: ApplyPath, nodeName?: string) {
    super(winId, instanceId, applyPath, nodeName);

    return new Proxy(this, {
      get(instance, propName) {
        return getter(instance, [propName]);
      },
      set(instance, propName, propValue) {
        setter(instance, [propName], propValue);
        return true;
      },
    });
  }
}
