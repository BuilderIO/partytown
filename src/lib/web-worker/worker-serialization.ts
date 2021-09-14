import { callMethod, syncRequestToServiceWorker } from './worker-proxy';
import { debug, len, logWorker } from '../utils';
import {
  AccessType,
  InterfaceType,
  MainAccessRequest,
  MainAccessResponse,
  PlatformApiId,
  SerializedInstance,
  SerializedNodeList,
  SerializedRefTransfer,
  SerializedTransfer,
  SerializedType,
  WorkerMessageType,
} from '../types';
import {
  InstanceIdKey,
  InterfaceTypeKey,
  NodeNameKey,
  webWorkerCtx,
  WinIdKey,
} from './worker-constants';
import {
  WorkerAnchorElement,
  WorkerDocumentElementChild,
  WorkerElement,
  WorkerImageElement,
  WorkerNode,
  WorkerNodeList,
  WorkerScriptElement,
} from './worker-node';
import { WorkerDocument } from './worker-document';
import { WorkerIFrameElement } from './worker-iframe';

let refIds = 1;
const refsByRefId = new Map<number, Ref>();
const refIdsByRef = new WeakMap<Ref, number>();

export const serializeForMain = (value: any): SerializedTransfer => {
  if (value === undefined) {
    return [SerializedType.Primitive];
  }

  const type = typeof value;
  if (type === 'string' || type === 'boolean' || type === 'number' || value == null) {
    return [SerializedType.Primitive, value];
  }

  if (type === 'function') {
    return serializeRef(value);
  }

  if (Array.isArray(value)) {
    return [SerializedType.Array, value.map(serializeForMain)];
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

    const serializedObj: { [key: string]: SerializedTransfer } = {};
    for (const k in value) {
      serializedObj[k] = serializeForMain(value[k]);
    }
    return [SerializedType.Object, serializedObj];
  }

  return [];
};

export const deserializeFromMain = (
  target: any,
  memberPath: string[],
  serializedValueTransfer: SerializedTransfer,
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
      return constructInstance(serializedInstance);
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

const constructInstance = (serializedInstance: SerializedInstance): any => {
  const interfaceType = serializedInstance.$interfaceType$;
  const instanceId = serializedInstance.$instanceId$;
  const serializedNode = serializedInstance;

  if (instanceId === PlatformApiId.history) {
    return webWorkerCtx.$history$;
  }
  if (instanceId === PlatformApiId.localStorage) {
    return webWorkerCtx.$localStorage$;
  }
  if (instanceId === PlatformApiId.sessionStorage) {
    return webWorkerCtx.$sessionStorage$;
  }
  if (instanceId === PlatformApiId.window) {
    return self;
  }
  if (interfaceType === InterfaceType.Document) {
    return new WorkerDocument(serializedNode);
  }
  if (interfaceType === InterfaceType.Element) {
    const ElementConstructors: { [tagname: string]: any } = {
      A: WorkerAnchorElement,
      BODY: WorkerDocumentElementChild,
      HEAD: WorkerDocumentElementChild,
      IFRAME: WorkerIFrameElement,
      IMG: WorkerImageElement,
      SCRIPT: WorkerScriptElement,
    };
    return new (ElementConstructors[serializedNode.$nodeName$!] || WorkerElement)(serializedNode);
  }
  if (interfaceType === InterfaceType.TextNode) {
    return new WorkerNode(serializedInstance);
  }
  if (interfaceType === InterfaceType.NodeList) {
    const serializedNodeList: SerializedNodeList = serializedInstance as any;
    return new WorkerNodeList(serializedNodeList.$data$.map(constructInstance));
  }
  return {};
};

const serializeRef = (ref: any): SerializedRefTransfer => {
  let refId = refIdsByRef.get(ref);
  if (!refId) {
    refId = refIds++;
    refIdsByRef.set(ref, refId);
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

export const handleForwardedAccessRequest = (accessReq: MainAccessRequest) => {
  let accessRsp: MainAccessResponse = {
    $winId$: accessReq.$winId$,
    $msgId$: accessReq.$msgId$,
    $instanceId$: accessReq.$instanceId$,
  };
  let accessType = accessReq.$accessType$;
  let instanceId = accessReq.$instanceId$;
  let memberPath = accessReq.$memberPath$;
  let memberPathLength = len(memberPath);
  let lastMemberName = memberPath[memberPathLength - 1];
  let data = deserializeFromMain(self, memberPath, accessReq.$data$);
  let instance = getPlatformInstance(instanceId, document);
  let rtnValue: any;
  let i: number;
  let target: any;

  try {
    if (instance) {
      // platform instance, like window or document
      for (i = 0; i < memberPathLength - 1; i++) {
        instance = instance[memberPath[i]];
      }

      if (accessType === AccessType.Get) {
        rtnValue = instance[lastMemberName];
      } else if (accessType === AccessType.Set) {
        instance[lastMemberName] = data;
      } else if (accessType === AccessType.CallMethod) {
        rtnValue = instance[lastMemberName].apply(instance, data);
      }
    } else {
      // forward the request to main
      target = { [WinIdKey]: accessReq.$winId$, [InstanceIdKey]: accessReq.$instanceId$ };
      rtnValue = syncRequestToServiceWorker(
        target,
        accessReq.$accessType$,
        accessReq.$memberPath$,
        deserializeFromMain(target, accessReq.$memberPath$, accessReq.$data$),
        accessReq.$extraInstructions$
      );
    }

    accessRsp.$rtnValue$ = serializeForMain(rtnValue);
  } catch (e: any) {
    accessRsp.$error$ = String(e.stack || e);
  }

  webWorkerCtx.$postMessage$([WorkerMessageType.ForwardMainDataResponse, accessRsp]);
};

const getPlatformInstance = (instanceId: number, doc: Document): any => {
  if (instanceId === PlatformApiId.window) {
    return self;
  } else if (instanceId === PlatformApiId.document) {
    return doc;
  } else if (instanceId === PlatformApiId.documentElement) {
    return doc.documentElement;
  } else if (instanceId === PlatformApiId.head) {
    return doc.head;
  } else if (instanceId === PlatformApiId.body) {
    return doc.body;
  } else if (instanceId === PlatformApiId.history) {
    return history;
  } else if (instanceId === PlatformApiId.localStorage) {
    return localStorage;
  } else if (instanceId === PlatformApiId.sessionStorage) {
    return sessionStorage;
  } else {
    return null;
  }
};

type Ref = any;
