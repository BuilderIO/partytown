import { debug, getConstructorName, isValidMemberName, logMain, noop } from '../utils';
import { InitWebWorkerData, InterfaceType, MainWindow } from '../types';

export const readMainInterfaces = (win: MainWindow) => {
  // web worker has requested data from the main thread
  const doc = win.document;
  const $config$ = win.partytown || {};
  const $libPath$ = ($config$.lib || '/~partytown/') + (debug ? 'debug/' : '');
  const $url$ = win.location + '';

  const docImpl = doc.implementation.createHTMLDocument();
  const inputElm = docImpl.createElement('input');

  const implementations: MainImplementation[] = [
    [InterfaceType.Window, win],
    [InterfaceType.CSSStyleDeclaration, inputElm.style],
    [InterfaceType.Document, docImpl],
    [InterfaceType.DocumentFragmentNode, docImpl.createDocumentFragment()],
    [InterfaceType.DOMStringMap, inputElm.dataset],
    [InterfaceType.DOMTokenList, inputElm.classList],
    [InterfaceType.Element, inputElm],
    [InterfaceType.Element, docImpl.createElement('canvas')],
    [InterfaceType.History, win.history],
    [InterfaceType.Location, win.location],
    [InterfaceType.MutationObserver, new MutationObserver(noop)],
    [InterfaceType.NamedNodeMap, inputElm.attributes],
    [InterfaceType.NodeList, inputElm.childNodes],
    [InterfaceType.Screen, win.screen],
    [InterfaceType.Storage, win.localStorage],
    [InterfaceType.TextNode, docImpl.createTextNode('')],
  ].map((i) => [...i, getConstructorName(i[1] as any)]) as any;

  const initWebWorkerData: InitWebWorkerData = {
    $config$,
    $htmlConstructors$: Object.getOwnPropertyNames(win).filter((c) => /^HT.*t$/i.test(c)),
    $interfaces$: [],
    $libPath$: new URL($libPath$, $url$) + '',
  };

  implementations.map(([interfaceType, impl, cstrName]) => {
    let memberName: string;
    let value: any;
    let type: string;
    let objCstrName: string;
    let objImpl: MainImplementation | undefined;
    let interfaceInfo = initWebWorkerData.$interfaces$.find((i) => i[0] === interfaceType);

    if (!interfaceInfo) {
      initWebWorkerData.$interfaces$.push((interfaceInfo = [interfaceType, cstrName, {}]));
    }

    for (memberName in impl) {
      if (isValidMemberName(memberName)) {
        value = impl[memberName];
        type = typeof value;
        if (type === 'function') {
          interfaceInfo[2][memberName] = InterfaceType.Function;
        } else if (type === 'object') {
          objCstrName = getConstructorName(value);
          objImpl = implementations.find((i) => i[2] === objCstrName);
          if (objImpl) {
            // this object's constructor is one of the interfaces we care about
            interfaceInfo[2][memberName] = objImpl[0];
          }
        }
      }
    }
  });

  if (debug) {
    logMain(
      `Read main window, interfaces: ${initWebWorkerData.$interfaces$.length}, HTML Constructors: ${initWebWorkerData.$htmlConstructors$.length}`
    );
  }

  return initWebWorkerData;
};

type MainImplementation = [InterfaceType, any, string];
