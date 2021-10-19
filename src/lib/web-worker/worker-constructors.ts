import type { HTMLElement } from './worker-element';
import { InterfaceType, NodeName } from '../types';
import { Node } from './worker-node';
import { toUpper } from '../utils';
import { WorkerProxy } from './worker-proxy-constructor';

export const constructInstance = (
  interfaceType: InterfaceType,
  instanceId: number,
  winId: number,
  nodeName?: string
) => {
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

  const Cstr = getConstructor(interfaceType, nodeName);
  return new Cstr(interfaceType, instanceId, winId, nodeName);
};

const getConstructor = (interfaceType: InterfaceType, nodeName?: string): typeof WorkerProxy => {
  if (interfaceType === InterfaceType.Element) {
    return getElementConstructor(nodeName!);
  } else if (interfaceType <= InterfaceType.DocumentFragmentNode) {
    return Node;
  } else {
    return WorkerProxy;
  }
};

export const getElementConstructor = (nodeName: string): typeof HTMLElement =>
  elementConstructors[nodeName] || elementConstructors.UNKNOWN;

export const elementConstructors: { [tagName: string]: typeof HTMLElement } = {};

export const getTagNameFromConstructor = (t: string) => {
  t = toUpper(t.substr(4).replace('Element', ''));
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
