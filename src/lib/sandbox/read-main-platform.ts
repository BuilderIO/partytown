import { debug, getConstructorName, isValidMemberName, logMain, noop } from '../utils';
import {
  InterfaceType,
  InterfaceInfo,
  InterfaceMember,
  InitWebWorkerData,
  PartytownConfig,
} from '../types';

export const readMainPlatform = (win: any) => {
  const startTime = debug ? performance.now() : 0;

  const doc = (win as Window).document;
  const docImpl = doc.implementation.createHTMLDocument();
  const textNode = docImpl.createTextNode('');
  const comment = docImpl.createComment('');
  const frag = docImpl.createDocumentFragment();
  const elm = docImpl.createElement('i');
  const svg = docImpl.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const canvas = docImpl.createElement('canvas');
  const canvasRenderingContext2D = canvas.getContext('2d');
  const mutationObserver = new MutationObserver(noop);
  const resizeObserver = new ResizeObserver(noop);

  // get all HTML*Element constructors on window
  // and create each element to get their implementation
  const elms = Object.getOwnPropertyNames(win)
    .filter((c) => /^HTML.+Element$/.test(c))
    .map((htmlCstrName) => {
      const htmlTagName = getHtmlTagNameFromConstructor(htmlCstrName);
      return [docImpl.createElement(htmlTagName)];
    });

  const impls: any[] = [
    // window implementations
    [win.localStorage],
    [win.history],
    [win.screen],
    [win.screen.orientation],

    // global constructors
    [mutationObserver, InterfaceType.EnvGlobalConstructor],
    [resizeObserver, InterfaceType.EnvGlobalConstructor],

    // dom implementations
    [textNode],
    [comment],
    [frag],
    [elm],
    [elm.attributes],
    [elm.classList],
    [elm.dataset],
    [elm.style],
    [svg],
    [docImpl],
    [docImpl.doctype!],
    [canvasRenderingContext2D!],
    ...elms,
  ]
    .filter((implData) => implData[0])
    .map((implData) => {
      const impl = implData[0];
      const interfaceType: InterfaceType = implData[1];
      const cstrName: string = impl.constructor.name;
      const CstrPrototype = win[cstrName].prototype;
      return [cstrName, CstrPrototype, impl, interfaceType];
    });

  const $interfaces$: InterfaceInfo[] = [
    readImplementation('Window', win),
    readImplementation('Node', textNode),
  ];

  const config: PartytownConfig = win.partytown || {};
  const libPath = (config.lib || '/~partytown/') + (debug ? 'debug/' : '');

  const initWebWorkerData: InitWebWorkerData = {
    $config$: JSON.stringify(config, (_, v) => (typeof v === 'function' ? String(v) : v)) as any,
    $libPath$: new URL(libPath, win.location) + '',
    $interfaces$,
  };

  impls.map(([cstrName, CstrPrototype, impl, intefaceType]) =>
    readOwnImplementation($interfaces$, cstrName, CstrPrototype, impl, intefaceType)
  );

  if (debug) {
    logMain(
      `Read ${$interfaces$.length} interfaces in ${(performance.now() - startTime).toFixed(1)}ms`
    );
  }

  return initWebWorkerData;
};

const readImplementation = (cstrName: string, impl: any) => {
  const interfaceMembers: InterfaceMember[] = [];
  const interfaceInfo: InterfaceInfo = [cstrName, 'Object', interfaceMembers];
  for (const memberName in impl) {
    readImplementationMember(interfaceMembers, impl, memberName);
  }
  return interfaceInfo;
};

const readOwnImplementation = (
  interfaces: InterfaceInfo[],
  cstrName: string,
  CstrPrototype: any,
  impl: any,
  interfaceType: InterfaceType
) => {
  if (cstrName !== 'Object' && !interfaces.some((i) => i[0] === cstrName)) {
    const SuperCstr = Object.getPrototypeOf(CstrPrototype);
    const superCstrName = SuperCstr.constructor.name;
    const interfaceMembers: InterfaceMember[] = [];

    readOwnImplementation(interfaces, superCstrName, SuperCstr, impl, interfaceType);

    Object.keys(Object.getOwnPropertyDescriptors(CstrPrototype)).map((memberName) =>
      readImplementationMember(interfaceMembers, impl, memberName)
    );

    const interfaceInfo: InterfaceInfo = [
      cstrName,
      superCstrName,
      interfaceMembers,
      interfaceType,
      (impl as Node).nodeName,
    ];

    interfaces.push(interfaceInfo);
  }
};

const readImplementationMember = (
  interfaceMembers: InterfaceMember[],
  implementation: any,
  memberName: string,
  cstrName?: string
) => {
  if (isValidMemberName(memberName)) {
    try {
      const value = implementation[memberName];
      const memberType = typeof value;

      if (memberType === 'function') {
        if (String(value).includes(`[native`)) {
          interfaceMembers.push([memberName, InterfaceType.Function]);
        }
      } else if (
        memberType === 'object' &&
        value != null &&
        (cstrName = getConstructorName(value)) !== 'Object'
      ) {
        if (value.nodeType) {
          interfaceMembers.push([memberName, value.nodeType]);
        } else {
          interfaceMembers.push([memberName, cstrName]);
        }
      } else if (memberType !== 'symbol') {
        // everything else that's not a symbol
        if (memberName.toUpperCase() === memberName) {
          // static property, let's get its value
          interfaceMembers.push([memberName, InterfaceType.Property, value]);
        } else {
          interfaceMembers.push([memberName, InterfaceType.Property]);
        }
      }
    } catch (e) {
      console.warn(e);
    }
  }
};

const htmlConstructorToTagMap: { [key: string]: string } = {
  Anchor: 'A',
  DList: 'DL',
  Image: 'IMG',
  OList: 'OL',
  Paragraph: 'P',
  TableCaption: 'CAPTION',
  TableCell: 'TD',
  TableCol: 'COLGROUP',
  TableRow: 'TR',
  TableSection: 'TBODY',
  UList: 'UL',
};

const getHtmlTagNameFromConstructor = (t: string) => {
  t = t.substr(4).replace('Element', '');
  return htmlConstructorToTagMap[t] || t;
};
