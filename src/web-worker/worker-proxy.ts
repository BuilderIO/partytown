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

let msgIds = 0;

export class Node {
  [InstanceIdKey]: number;
  [NodeNameKey]: string;
  [NodeTypeKey]: number;

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
  baseURI?: string;
  currentScript?: string | null;
  location?: URL;

  get defaultView() {
    return self;
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

const sendRequestToServiceWorker = (accessReq: MainAccessRequest) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', webWorkerContext.$scopePath$ + PT_PROXY_URL, false);
  accessReq.$key$ = webWorkerContext.$key$;
  xhr.send(JSON.stringify(accessReq));
  const accessRsp: MainAccessResponse = JSON.parse(xhr.responseText);
  if (accessRsp.$error$) {
    throw new Error(accessRsp.$error$);
  }
  return accessRsp;
};

const createMethodProxy = (target: any, methodName: string) => {
  return (...args: any[]) => {
    const accessRsp = sendRequestToServiceWorker({
      $msgId$: msgIds++,
      $accessType$: AccessType.Apply,
      $instanceId$: target[InstanceIdKey],
      $memberName$: methodName,
      $data$: args,
    });
    const rtn = constructValue(target, methodName, accessRsp.$rtnValue$);
    if (accessRsp.$isPromise$) {
      return Promise.resolve(rtn);
    }
    return rtn;
  };
};

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

      const accessRsp = sendRequestToServiceWorker({
        $msgId$: msgIds++,
        $accessType$: AccessType.Get,
        $instanceId$: target[InstanceIdKey],
        $memberName$: memberName,
      });

      return constructValue(target, propKey, accessRsp.$rtnValue$!);
    },

    set(target, propKey, value, receiver) {
      if (Reflect.has(target, propKey)) {
        Reflect.set(target, propKey, value, receiver);
      } else {
        sendRequestToServiceWorker({
          $msgId$: msgIds++,
          $accessType$: AccessType.Set,
          $instanceId$: target[InstanceIdKey],
          $memberName$: String(propKey),
          $data$: value,
        });
      }
      return true;
    },
  });
};

export const constructValue = (
  target: any,
  memberName: any,
  serializedValueTransfer: SerializedValueTransfer
): any => {
  memberName = String(memberName);
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

  return undefined;
};

export const webWorkerContext: WebWorkerContext = {} as any;
