import { InterfaceType, NodeName } from '../types';
import { HTMLAnchorElement } from './worker-anchor';
import { HTMLElement } from './worker-element';
import { HTMLScriptElement } from './worker-script';
import { Node } from './worker-node';
import { Window, HTMLIFrameElement } from './worker-iframe';
import { WorkerDocumentElementChild, HTMLDocument } from './worker-document';
import { WorkerProxy } from './worker-instance';

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
  } else if (interfaceType === InterfaceType.Document) {
    return HTMLDocument;
  } else if (interfaceType === InterfaceType.Window) {
    return Window;
  } else if (interfaceType <= InterfaceType.DocumentFragmentNode) {
    return Node;
  } else {
    return WorkerProxy;
  }
};

export const getElementConstructor = (nodeName: string): typeof HTMLElement =>
  ({
    A: HTMLAnchorElement,
    BODY: WorkerDocumentElementChild,
    HEAD: WorkerDocumentElementChild,
    IFRAME: HTMLIFrameElement,
    SCRIPT: HTMLScriptElement,
  }[nodeName] || HTMLElement);
