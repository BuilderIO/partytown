import {
  AccessType,
  MainAccessRequest,
  MainAccessResponse,
  SerializedConstructorType,
  SerializedHTMLCollection,
  SerializedInstance,
  SerializedNode,
  SerializedValueTransfer,
  SerializedType,
  WebWorkerContext,
} from '../types';
import { CstrValues, InstanceIdKey, NodeNameKey, NodeTypeKey, ProxyKey } from './worker-symbols';
import { PT_PROXY_URL, toLower } from '../utils';

export class Node {
  [InstanceIdKey]: number;
  [NodeNameKey]: string;
  [NodeTypeKey]: SerializedConstructorType;

  constructor(nodeCstr: SerializedNode) {
    this[InstanceIdKey] = nodeCstr.$instanceId$!;
    this[NodeTypeKey] = nodeCstr.$cstr$;
    this[NodeNameKey] = nodeCstr.$nodeName$;
    return proxy(this);
  }
  get nodeName() {
    return this[NodeNameKey];
  }
  get nodeType() {
    return this[NodeTypeKey];
  }
  get ownerDocument() {
    return self.document;
  }
  toJSON(): SerializedNode {
    return {
      $cstr$: this[NodeTypeKey],
      $nodeName$: this[NodeNameKey],
      $instanceId$: this[InstanceIdKey],
    };
  }
}

export class Element extends Node {
  get localName() {
    return toLower(this[NodeNameKey]);
  }
  get tagName() {
    return this[NodeNameKey];
  }
}

export class Document extends Element {
  get currentScript() {
    const currentScriptInstanceId = webWorkerContext.$currentScript$;
    if (currentScriptInstanceId) {
      return createScript(currentScriptInstanceId);
    }
    return null;
  }

  get defaultView() {
    return self;
  }

  getElementsByTagName(tagName: string) {
    if (toLower(tagName) === 'script') {
      // always return just the first script
      return [createScript(webWorkerContext.$firstScriptId$)];
    }
    return sendSyncRequestToServiceWorker(AccessType.Apply, this, 'getElementsByTagName', [
      tagName,
    ]);
  }

  get localName() {
    return undefined as any;
  }

  get ownerDocument() {
    return null as any;
  }

  get tagName() {
    return undefined as any;
  }
}

export class HTMLCollection {
  [CstrValues]: SerializedHTMLCollection;

  constructor(serializedHtmlCollection: SerializedHTMLCollection) {
    this[CstrValues] = serializedHtmlCollection;
    serializedHtmlCollection.$items$.forEach((item, index) => {
      (this as any)[index] = constructInstance(item);
    });
  }

  item(index: number) {
    return (this as any)[index];
  }

  get length() {
    return this[CstrValues].$items$.length;
  }
}

export const createScript = ($instanceId$: number) =>
  new Element({
    $cstr$: SerializedConstructorType.Element,
    $instanceId$,
    $nodeName$: 'SCRIPT',
  });

export const constructInstance = (serializedInstance: SerializedInstance) => {
  const cstr = serializedInstance.$cstr$;

  if (cstr === SerializedConstructorType.Element) {
    return new Element(serializedInstance as any);
  }

  if (
    cstr === SerializedConstructorType.TextNode ||
    cstr === SerializedConstructorType.CommentNode ||
    cstr === SerializedConstructorType.DocumentFragmentNode
  ) {
    return new Node(serializedInstance as any);
  }

  if (cstr === SerializedConstructorType.HTMLCollection) {
    return new HTMLCollection(serializedInstance as any);
  }

  return proxy({});
};

const sendSyncRequestToServiceWorker = (
  $accessType$: AccessType,
  target: any,
  $memberName$: string,
  $data$?: any
) => {
  const accessReq: MainAccessRequest = {
    $key$: webWorkerContext.$key$,
    $msgId$: webWorkerContext.$msgId$++,
    $accessType$,
    $instanceId$: target[InstanceIdKey],
    $memberName$,
    $data$,
  };

  const xhr = new XMLHttpRequest();
  xhr.open('POST', webWorkerContext.$scopePath$ + PT_PROXY_URL, false);
  xhr.send(JSON.stringify(accessReq));

  // look ma, i'm synchronous (•‿•)

  const accessRsp: MainAccessResponse = JSON.parse(xhr.responseText);
  const error = accessRsp.$error$;
  const isPromise = accessRsp.$isPromise$;
  if (error) {
    if (isPromise) {
      return Promise.reject(error);
    }
    throw new Error(error);
  }

  const rtn = constructValue(target, $memberName$, accessRsp.$rtnValue$);
  if (isPromise) {
    return Promise.resolve(rtn);
  }
  return rtn;
};

const createMethodProxy =
  (target: any, methodName: string) =>
  (...args: any[]) =>
    sendSyncRequestToServiceWorker(AccessType.Apply, target, methodName, args);

export const proxy = <T = any>(obj: T): T => {
  if (
    !obj ||
    (typeof obj !== 'object' && typeof obj !== 'function') ||
    (obj as any)[ProxyKey] ||
    (obj + '').includes('[native')
  ) {
    return obj;
  }

  return new Proxy<any>(obj, {
    get(target, propKey) {
      if (propKey === ProxyKey) {
        return true;
      }

      if (Reflect.has(target, propKey)) {
        return Reflect.get(target, propKey);
      }

      const memberName = String(propKey);
      if (webWorkerContext.$methodNames$.includes(memberName)) {
        return createMethodProxy(target, memberName);
      }

      return sendSyncRequestToServiceWorker(AccessType.Get, target, memberName);
    },

    set(target, propKey, value, receiver) {
      if (Reflect.has(target, propKey)) {
        Reflect.set(target, propKey, value, receiver);
      } else {
        sendSyncRequestToServiceWorker(AccessType.Set, target, String(propKey), value);
      }
      return true;
    },
  });
};

const constructValue = (
  target: any,
  memberName: string,
  serializedValueTransfer: SerializedValueTransfer
): any => {
  if (Array.isArray(serializedValueTransfer)) {
    const serializedType = serializedValueTransfer[0];
    const serializedValue = serializedValueTransfer[1] as any;

    if (serializedType === SerializedType.Primitive) {
      return serializedValue;
    }

    if (serializedType === SerializedType.Method) {
      return createMethodProxy(target, memberName);
    }

    if (serializedType === SerializedType.Instance) {
      const serializedInstance: SerializedInstance = serializedValue;
      return constructInstance(serializedInstance);
    }

    if (serializedType === SerializedType.Object) {
      return proxy(serializedValue);
    }

    if (serializedType === SerializedType.Array) {
      const serializedArray: SerializedValueTransfer[] = serializedValue;
      return serializedArray.map((v) => constructValue(target, memberName, v));
    }
  }

  return undefined;
};

export const webWorkerContext: WebWorkerContext = {} as any;
