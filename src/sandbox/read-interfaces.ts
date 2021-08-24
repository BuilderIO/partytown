import { InterfaceInfo, InterfaceType, MemberTypeInfo } from '../types';

export const readMainInterfaces = (doc: Document) => {
  const docImpl = doc.implementation.createHTMLDocument();
  const documentElement = docImpl.documentElement;
  const elmImpl = docImpl.createElement('i');
  const textNodeImpl = docImpl.createTextNode('');

  const implementations: [InterfaceType, any][] = [
    [InterfaceType.DOMTokenList, documentElement.classList],
    [InterfaceType.Document, docImpl],
    [InterfaceType.HTMLCollection, documentElement.children],
    [InterfaceType.Element, elmImpl],
    [InterfaceType.TextNode, textNodeImpl],
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
    if (!memberName.startsWith('webkit')) {
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

const InterfaceWhitelist: { [key: string]: InterfaceType } = {
  DOMStringMap: InterfaceType.DOMStringMap,
  DOMTokenList: InterfaceType.DOMTokenList,
  HTMLCollection: InterfaceType.HTMLCollection,
  NamedNodeMap: InterfaceType.NamedNodeMap,
};
