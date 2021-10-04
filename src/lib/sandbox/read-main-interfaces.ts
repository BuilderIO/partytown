import { getConstructorName, isValidMemberName, noop } from '../utils';
import { InterfaceInfo, InterfaceType, MembersInterfaceTypeInfo } from '../types';

export const readMainInterfaces = (win: Window, doc: Document) => {
  const docImpl = doc.implementation.createHTMLDocument();
  const docHead = docImpl.head;

  const implementations: MainImplementation[] = [
    [InterfaceType.Window, win],
    [InterfaceType.CSSStyleDeclaration, docHead.style],
    [InterfaceType.Document, docImpl],
    [InterfaceType.DocumentFragmentNode, docImpl.createDocumentFragment()],
    [InterfaceType.DOMStringMap, docHead.dataset],
    [InterfaceType.DOMTokenList, docHead.classList],
    [InterfaceType.Element, docHead],
    [InterfaceType.History, win.history],
    [InterfaceType.MutationObserver, new MutationObserver(noop)],
    [InterfaceType.NamedNodeMap, docHead.attributes],
    [InterfaceType.NodeList, docHead.childNodes],
    [InterfaceType.Screen, win.screen],
    [InterfaceType.Storage, win.localStorage],
    [InterfaceType.TextNode, docImpl.createTextNode('')],
  ].map((i) => [...i, getConstructorName(i[1] as any)]) as any;

  return implementations.map(([interfaceType, impl, cstrName]) => {
    let members: MembersInterfaceTypeInfo = {};
    let memberName: string;
    let value: any;
    let type: string;
    let objCstrName: string;
    let objImpl: MainImplementation | undefined;

    for (memberName in impl) {
      if (isValidMemberName(memberName)) {
        value = impl[memberName];
        type = typeof value;
        if (type === 'function') {
          members[memberName] = InterfaceType.Function;
        } else if (type === 'object') {
          objCstrName = getConstructorName(value);
          objImpl = implementations.find((i) => i[2] === objCstrName);
          if (objImpl) {
            // this object's constructor is one of the interfaces we care about
            members[memberName] = objImpl[0];
          }
        }
      }
    }

    const interfaceInfo: InterfaceInfo = [interfaceType, cstrName, members];
    return interfaceInfo;
  });
};

type MainImplementation = [InterfaceType, any, string];
