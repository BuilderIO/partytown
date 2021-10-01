import { InterfaceType, NodeName } from '../types';
import { WorkerAnchorElement } from './worker-anchor';
import { WorkerElement } from './worker-element';
import { WorkerContentWindow, WorkerIFrameElement } from './worker-iframe';
import { WorkerDocumentElementChild, WorkerDocument } from './worker-document';
import { WorkerDocumentTypeNode, WorkerNode } from './worker-node';
import { WorkerInstance } from './worker-instance';
import { WorkerScriptElement } from './worker-script';

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
      : interfaceType === InterfaceType.DocumentTypeNode
      ? NodeName.DocumentTypeNode
      : nodeName;

  const Cstr = getConstructor(interfaceType, nodeName);
  return new Cstr(interfaceType, instanceId, winId, nodeName);
};

const getConstructor = (interfaceType: InterfaceType, nodeName?: string): typeof WorkerInstance => {
  if (interfaceType === InterfaceType.Element) {
    return getElementConstructor(nodeName!);
  } else if (interfaceType === InterfaceType.Document) {
    return WorkerDocument;
  } else if (interfaceType === InterfaceType.Window) {
    return WorkerContentWindow;
  } else if (interfaceType === InterfaceType.TextNode) {
    return WorkerNode;
  } else if (interfaceType === InterfaceType.DocumentTypeNode) {
    return WorkerDocumentTypeNode;
  } else {
    return WorkerInstance;
  }
};

export const getElementConstructor = (nodeName: string): typeof WorkerElement =>
  ({
    A: WorkerAnchorElement,
    BODY: WorkerDocumentElementChild,
    HEAD: WorkerDocumentElementChild,
    IFRAME: WorkerIFrameElement,
    SCRIPT: WorkerScriptElement,
  }[nodeName] || WorkerElement);
