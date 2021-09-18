import { callMethod } from './worker-proxy';
import { debug, logWorker } from '../utils';
import {
  InterfaceType,
  NodeName,
  PlatformInstanceId,
  SerializedInstance,
  SerializedRefTransfer,
  SerializedTransfer,
  SerializedType,
} from '../types';
import { InstanceIdKey, InterfaceTypeKey, NodeNameKey, WinIdKey } from './worker-constants';
import { WorkerAnchorElement, WorkerDocumentElementChild, WorkerElement } from './worker-element';
import { WorkerNode, WorkerNodeList } from './worker-node';
import { WorkerContentWindow, WorkerIFrameElement } from './worker-iframe';
import { WorkerDocument } from './worker-document';
import { WorkerInstance } from './worker-instance';
import { WorkerScriptElement } from './worker-script';

export const serializeForMain = (value: any, added: Set<any>): SerializedTransfer | undefined => {
  if (value !== undefined) {
    const type = typeof value;
    if (type === 'string' || type === 'boolean' || type === 'number' || value == null) {
      return [SerializedType.Primitive, value];
    }

    if (type === 'function') {
      return serializeRef(value);
    }

    if (Array.isArray(value)) {
      if (!added.has(value)) {
        return [SerializedType.Array, value.map((v) => serializeForMain(v, added))];
      }
      return [SerializedType.Array, []];
    }

    if (type === 'object') {
      if (typeof value[InstanceIdKey] === 'number') {
        const serializeInstance: SerializedInstance = {
          $winId$: value[WinIdKey],
          $interfaceType$: value[InterfaceTypeKey],
          $instanceId$: value[InstanceIdKey],
          $nodeName$: value[NodeNameKey],
        };
        return [SerializedType.Instance, serializeInstance];
      }

      const serializedObj: { [key: string]: SerializedTransfer | undefined } = {};
      if (!added.has(value)) {
        added.add(value);
        for (const k in value) {
          serializedObj[k] = serializeForMain(value[k], added);
        }
      }

      return [SerializedType.Object, serializedObj];
    }
  }
};

export const deserializeFromMain = (
  target: any,
  memberPath: string[],
  serializedValueTransfer?: SerializedTransfer,
  serializedType?: SerializedType,
  serializedValue?: any,
  obj?: { [key: string]: any },
  key?: string
): any => {
  if (serializedValueTransfer) {
    serializedType = serializedValueTransfer[0];
    serializedValue = serializedValueTransfer[1] as any;

    if (serializedType === SerializedType.Primitive) {
      return serializedValue;
    }

    if (serializedType === SerializedType.Method) {
      return (...args: any[]) => callMethod(target, memberPath, args);
    }

    if (serializedType === SerializedType.Instance) {
      const serializedInstance: SerializedInstance = serializedValue;
      return constructSerializedInstance(serializedInstance);
    }

    if (serializedType === SerializedType.Array) {
      const serializedArray: SerializedTransfer[] = serializedValue;
      return serializedArray.map((v) => deserializeFromMain(target, memberPath, v));
    }

    if (serializedType === SerializedType.Object) {
      obj = {};
      for (key in serializedValue) {
        obj[key] = deserializeFromMain(target, [...memberPath, key], serializedValue[key]);
      }
      return obj;
    }
  }
};

export const constructSerializedInstance = ({
  $interfaceType$,
  $instanceId$,
  $winId$,
  $nodeName$,
  $items$,
}: SerializedInstance): any => {
  if ($instanceId$ === PlatformInstanceId.history) {
    return history;
  } else if ($instanceId$ === PlatformInstanceId.localStorage) {
    return localStorage;
  } else if ($instanceId$ === PlatformInstanceId.sessionStorage) {
    return sessionStorage;
  } else if ($instanceId$ === PlatformInstanceId.window) {
    return self;
  } else if ($interfaceType$ === InterfaceType.NodeList) {
    return new WorkerNodeList($items$!.map(constructSerializedInstance));
  } else {
    return constructInstance($interfaceType$, $instanceId$!, $winId$, $nodeName$!);
  }
};

export const constructInstance = (
  interfaceType: InterfaceType,
  instanceId: number,
  winId?: number,
  nodeName?: string
) => {
  nodeName =
    interfaceType === InterfaceType.Document
      ? NodeName.Document
      : interfaceType === InterfaceType.TextNode
      ? NodeName.Text
      : nodeName;

  const Cstr = getConstructor(interfaceType, nodeName);
  return new Cstr(interfaceType, instanceId, winId, nodeName);
};

const getConstructor = (interfaceType: InterfaceType, nodeName?: string): typeof WorkerInstance => {
  if (interfaceType === InterfaceType.Element) {
    const Cstrs: { [nodeName: string]: any } = {
      A: WorkerAnchorElement,
      BODY: WorkerDocumentElementChild,
      HEAD: WorkerDocumentElementChild,
      IFRAME: WorkerIFrameElement,
      SCRIPT: WorkerScriptElement,
    };
    return Cstrs[nodeName!] || WorkerElement;
  } else if (interfaceType === InterfaceType.Document) {
    return WorkerDocument;
  } else if (interfaceType === InterfaceType.Window) {
    return WorkerContentWindow;
  } else if (interfaceType === InterfaceType.TextNode) {
    return WorkerNode;
  } else {
    return WorkerInstance;
  }
};

const refsByRefId = new Map<number, Ref>();
const refIdsByRef = new WeakMap<Ref, number>();

const serializeRef = (ref: any, refId?: number): SerializedRefTransfer => {
  refId = refIdsByRef.get(ref);
  if (!refId) {
    refIdsByRef.set(ref, (refId = Math.random()));
    refsByRefId.set(refId, ref);
  }
  return [SerializedType.Ref, refId];
};

export const callRefHandler = (
  refId: number,
  serializedTarget: SerializedTransfer,
  serializedArgs: SerializedTransfer
) => {
  const ref = refsByRefId.get(refId);
  if (ref) {
    try {
      const target = deserializeFromMain(null, [], serializedTarget);
      const args = deserializeFromMain(target, [], serializedArgs);
      ref.apply(target, args);
    } catch (e) {
      console.error(e);
    }
  } else if (debug) {
    logWorker(`Unable to find callRefHandler, ref "${refId}", args: ${serializedArgs}`);
  }
};

type Ref = any;
