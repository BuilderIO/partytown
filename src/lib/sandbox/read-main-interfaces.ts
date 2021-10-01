import { getConstructorName, isValidMemberName } from '../utils';
import { InterfaceInfo, InterfaceType, MemberTypeInfo } from '../types';

export const readMainInterfaces = (win: Window, doc: Document) => {
  const docImpl = doc.implementation.createHTMLDocument();
  const docElement = docImpl.documentElement;

  const implementations: [InterfaceType, any][] = [
    [InterfaceType.Window, win],
    [InterfaceType.Element, docElement],
    [InterfaceType.TextNode, docImpl.createTextNode('')],
    [InterfaceType.DocumentFragmentNode, docImpl.createDocumentFragment()],
    [InterfaceType.Document, docImpl],
    [InterfaceType.DOMTokenList, docElement.classList],
    [InterfaceType.History, win.history],
    [InterfaceType.NodeList, docElement.childNodes],
    [InterfaceType.Storage, win.sessionStorage],
  ];

  return implementations.map(([interfaceType, impl]) => {
    const memberTypeInfo = readImplementationMembers(impl, {});
    const interfaceInfo: InterfaceInfo = [interfaceType, memberTypeInfo];
    return interfaceInfo;
  });
};

const readImplementationMembers = (impl: any, members: MemberTypeInfo) => {
  let memberName: string;
  let interfaceType: InterfaceType;
  let value: any;
  let type: string;

  for (memberName in impl) {
    if (isValidMemberName(memberName)) {
      value = impl[memberName];
      type = typeof value;
      if (type === 'function') {
        members[memberName] = InterfaceType.Method;
      } else if (type === 'object') {
        interfaceType = InterfaceWhitelist[getConstructorName(value)];
        if (interfaceType) {
          members[memberName] = interfaceType;
        }
      }
    }
  }

  return members;
};

const InterfaceWhitelist: { [key: string]: InterfaceType } = {
  CSSStyleDeclaration: InterfaceType.CSSStyleDeclaration,
  DOMStringMap: InterfaceType.DOMStringMap,
  DOMTokenList: InterfaceType.DOMTokenList,
  NamedNodeMap: InterfaceType.NamedNodeMap,
  NodeList: InterfaceType.NodeList,
};
