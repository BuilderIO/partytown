import type { HTMLElement } from './worker-element';
import { InterfaceType, NodeName } from '../types';
import { webWorkerInstances } from './worker-constants';
import { WorkerProxy } from './worker-proxy-constructor';

export const getOrCreateInstance = (
  interfaceType: InterfaceType,
  instanceId: number,
  winId: number,
  nodeName?: string
) => {
  let instance = webWorkerInstances.get(instanceId);
  if (!instance) {
    nodeName =
      interfaceType === InterfaceType.TextNode
        ? NodeName.Text
        : interfaceType === InterfaceType.CommentNode
        ? NodeName.Comment
        : interfaceType === InterfaceType.DocumentFragmentNode
        ? NodeName.DocumentFragment
        : interfaceType === InterfaceType.DocumentTypeNode
        ? NodeName.DocumentTypeNode
        : nodeName;

    webWorkerInstances.set(
      instanceId,
      (instance = new (getConstructor(interfaceType, nodeName))(
        interfaceType,
        instanceId,
        winId,
        nodeName
      ))
    );
  }
  return instance;
};

const getConstructor = (interfaceType: InterfaceType, nodeName?: string): typeof WorkerProxy => {
  if (interfaceType === InterfaceType.Element) {
    return elementConstructors[nodeName!] || elementConstructors.UNKNOWN;
  } else if (interfaceType <= InterfaceType.DocumentFragmentNode) {
    return (self as any).Node;
  } else {
    return WorkerProxy;
  }
};

export const elementConstructors: { [tagName: string]: typeof HTMLElement } = {};

export const getTagNameFromConstructor = (t: string) => {
  t = t.substr(4).replace('Element', '').toUpperCase();
  return (
    {
      IMAGE: 'IMG',
      OLIST: 'OL',
      PARAGRAPH: 'P',
      TABLECELL: 'TD',
      TABLEROW: 'TR',
      ULIST: 'UL',
    }[t] || t
  );
};

export const constructEvent = (eventProps: any) =>
  new Proxy(new Event(eventProps.type, eventProps), {
    get: (target: any, propName) =>
      propName in eventProps ? eventProps[propName] : target[String(propName)],
  });
