import { getConstructorName, isValidMemberName, noop } from '../utils';
import { InterfaceInfo, InterfaceType } from '../types';

export const readMainInterfaces = (win: Window, doc: Document) => {
  const docImpl = doc.implementation.createHTMLDocument();
  const docHead = docImpl.head;

  const implementations: [InterfaceType, any][] = [
    [InterfaceType.Window, win],
    [InterfaceType.Element, docHead],
    [InterfaceType.TextNode, docImpl.createTextNode('')],
    [InterfaceType.DocumentFragmentNode, docImpl.createDocumentFragment()],
    [InterfaceType.Document, docImpl],
    [InterfaceType.DOMTokenList, docHead.classList],
    [InterfaceType.History, win.history],
    [InterfaceType.NodeList, docHead.childNodes],
    [InterfaceType.Storage, win.sessionStorage],
    [InterfaceType.MutationObserver, new MutationObserver(noop)],
  ];

  return implementations.map(([interfaceType, impl]) => {
    let members: any = {};
    let memberName: string;
    let value: any;
    let type: string;
    let objInterfaceType: any;

    for (memberName in impl) {
      if (isValidMemberName(memberName)) {
        value = impl[memberName];
        type = typeof value;
        if (type === 'function') {
          members[memberName] = InterfaceType.Function;
        } else if (type === 'object') {
          objInterfaceType = InterfaceWhitelist[getConstructorName(value)];
          if (objInterfaceType) {
            members[memberName] = objInterfaceType;
          }
        }
      }
    }

    const interfaceInfo: InterfaceInfo = [interfaceType, members, getConstructorName(impl)];
    return interfaceInfo;
  });
};

const InterfaceWhitelist: { [key: string]: InterfaceType } = {
  CSSStyleDeclaration: InterfaceType.CSSStyleDeclaration,
  DOMStringMap: InterfaceType.DOMStringMap,
  DOMTokenList: InterfaceType.DOMTokenList,
  NamedNodeMap: InterfaceType.NamedNodeMap,
  NodeList: InterfaceType.NodeList,
};
