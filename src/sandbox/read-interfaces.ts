import { InterfaceInfo, InterfaceType, MemberTypeInfo } from '../types';
import { toLower } from '../utils';

export const readMainInterfaces = (win: Window, doc: Document) => {
  const docImpl = doc.implementation.createHTMLDocument();
  const documentElement = docImpl.documentElement;

  const implementations: [InterfaceType, any][] = [
    [InterfaceType.Document, docImpl],
    [InterfaceType.DOMTokenList, documentElement.classList],
    [InterfaceType.Element, docImpl.createElement('i')],
    [InterfaceType.History, win.history],
    [InterfaceType.HTMLCollection, documentElement.children],
    [InterfaceType.Storage, win.localStorage],
    [InterfaceType.TextNode, docImpl.createTextNode('')],
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
      } else if (type === 'object' && value != null && value.constructor) {
        interfaceType = InterfaceWhitelist[value.constructor.name];
        if (interfaceType > 0) {
          members[memberName] = interfaceType;
        }
      }
    }
  }

  return members;
};

const isValidMemberName = (memberName: string) => {
  if (memberName.startsWith('webkit')) {
    return false;
  } else if (memberName.startsWith('on') && toLower(memberName) === memberName) {
    return false;
  } else {
    return true;
  }
};

const InterfaceWhitelist: { [key: string]: InterfaceType } = {
  DOMStringMap: InterfaceType.DOMStringMap,
  DOMTokenList: InterfaceType.DOMTokenList,
  HTMLCollection: InterfaceType.HTMLCollection,
  NamedNodeMap: InterfaceType.NamedNodeMap,
};
