import { InterfaceInfo, InterfaceType, MemberTypeInfo } from '../types';

export const readMainInterfaces = (win: Window, doc: Document) => {
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
    [InterfaceType.Window, win],
  ];

  return implementations.map(([interfaceType, impl]) => {
    const memberTypeInfo = readImplementationMembers(impl, {});
    const interfaceInfo: InterfaceInfo = [interfaceType, memberTypeInfo];
    return interfaceInfo;
  });
};

const readImplementationMembers = (impl: any, members: MemberTypeInfo) => {
  let memberName: string;
  let type: string;
  let interfaceType: InterfaceType;

  for (memberName in impl) {
    if (!memberName.startsWith('webkit') && impl[memberName]) {
      type = typeof impl[memberName];
      if (type === 'object' && impl[memberName].constructor) {
        interfaceType = InterfaceWhitelist[impl[memberName].constructor.name];
        if (typeof interfaceType === 'number') {
          members[memberName] = interfaceType;
        }
      } else if (type === 'function') {
        members[memberName] = InterfaceType.Method;
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
