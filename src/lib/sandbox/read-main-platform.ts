import {
  createElementFromConstructor,
  debug,
  getConstructorName,
  getNodeName,
  isValidMemberName,
  len,
  noop,
} from '../utils';
import {
  InterfaceType,
  InterfaceInfo,
  InterfaceMember,
  InitWebWorkerData,
  StorageItem,
} from '../types';
import { logMain } from '../log';
import { config, doc, libPath, mainWindow } from './main-globals';

export const readMainPlatform = () => {
  const startTime = debug ? performance.now() : 0;

  const docImpl = doc.implementation.createHTMLDocument();
  const elm = docImpl.createElement('i');
  const textNode = docImpl.createTextNode('');
  const comment = docImpl.createComment('');
  const frag = docImpl.createDocumentFragment();
  const shadowRoot = docImpl.createElement('p').attachShadow({ mode: 'open' });
  const intersectionObserver = getGlobalConstructor(mainWindow, 'IntersectionObserver');
  const mutationObserver = getGlobalConstructor(mainWindow, 'MutationObserver');
  const resizeObserver = getGlobalConstructor(mainWindow, 'ResizeObserver');
  const perf = mainWindow.performance;
  const screen = mainWindow.screen;

  // get all HTML*Element constructors on window
  // and create each element to get their implementation
  const elms = Object.getOwnPropertyNames(mainWindow)
    .map((interfaceName) => createElementFromConstructor(docImpl, interfaceName))
    .filter((elm) => elm)
    .map((elm) => [elm]);

  const impls: any[] = [
    // window implementations
    [mainWindow.history],
    [perf],
    [perf.navigation],
    [perf.timing],
    [screen],
    [screen.orientation],
    [mainWindow.visualViewport],

    // global constructors
    [intersectionObserver, InterfaceType.EnvGlobalConstructor],
    [mutationObserver, InterfaceType.EnvGlobalConstructor],
    [resizeObserver, InterfaceType.EnvGlobalConstructor],

    // dom implementations
    [textNode],
    [comment],
    [frag],
    [shadowRoot],
    [elm],
    [elm.attributes],
    [elm.classList],
    [elm.dataset],
    [elm.style],
    [docImpl],
    [docImpl.doctype!],
    ...elms,
  ]
    .filter((implData) => implData[0])
    .map((implData) => {
      const impl = implData[0];
      const interfaceType: InterfaceType = implData[1] as any;
      const cstrName = getConstructorName(impl);
      const CstrPrototype = (mainWindow as any)[cstrName].prototype;
      return [cstrName, CstrPrototype, impl, interfaceType];
    });

  const $interfaces$: InterfaceInfo[] = [
    readImplementation('Window', mainWindow),
    readImplementation('Node', textNode),
  ];

  const $config$ = JSON.stringify(config, (k, v) => {
    if (typeof v === 'function') {
      v = String(v);
      if (v.startsWith(k + '(')) {
        v = 'function ' + v;
      }
    }
    return v;
  });

  const initWebWorkerData: InitWebWorkerData = {
    $config$,
    $libPath$: new URL(libPath, mainWindow.location as any) + '',
    $interfaces$,
    $origin$: origin,
    $localStorage$: readStorage('localStorage'),
    $sessionStorage$: readStorage('sessionStorage'),
  };

  impls.map(([cstrName, CstrPrototype, impl, intefaceType]) =>
    readOwnImplementation($interfaces$, cstrName, CstrPrototype, impl, intefaceType)
  );

  addGlobalConstructorUsingPrototype($interfaces$, mainWindow, 'IntersectionObserverEntry');

  if (debug) {
    logMain(
      `Read ${$interfaces$.length} interfaces in ${(performance.now() - startTime).toFixed(1)}ms`
    );
  }

  return initWebWorkerData;
};

const readImplementation = (cstrName: string, impl: any, memberName?: string) => {
  let interfaceMembers: InterfaceMember[] = [];
  let interfaceInfo: InterfaceInfo = [cstrName, 'Object', interfaceMembers];
  for (memberName in impl) {
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
    const superCstrName = getConstructorName(SuperCstr);
    const interfaceMembers: InterfaceMember[] = [];

    readOwnImplementation(interfaces, superCstrName, SuperCstr, impl, interfaceType);

    Object.keys(Object.getOwnPropertyDescriptors(CstrPrototype)).map((memberName) =>
      readImplementationMember(interfaceMembers, impl, memberName)
    );

    interfaces.push([cstrName, superCstrName, interfaceMembers, interfaceType, getNodeName(impl)]);
  }
};

const readImplementationMember = (
  interfaceMembers: InterfaceMember[],
  implementation: any,
  memberName: string,
  value?: any,
  memberType?: string,
  cstrName?: string
) => {
  try {
    if (isValidMemberName(memberName) && isNaN((memberName as any)[0]) && memberName !== 'all') {
      value = implementation[memberName];
      memberType = typeof value;

      if (memberType === 'function') {
        if (
          String(value).includes(`[native`) ||
          Object.getPrototypeOf(implementation)[memberName]
        ) {
          interfaceMembers.push([memberName, InterfaceType.Function]);
        }
      } else if (memberType === 'object' && value != null) {
        cstrName = getConstructorName(value);
        if (cstrName !== 'Object' && (self as any)[cstrName]) {
          interfaceMembers.push([memberName, value.nodeType || cstrName]);
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
    }
  } catch (e) {
    console.warn(e);
  }
};

const readStorage = (storageName: 'localStorage' | 'sessionStorage') => {
  let items: StorageItem[] = [];
  let i = 0;
  let l = len(mainWindow[storageName]);
  let key: string;
  for (; i < l; i++) {
    key = mainWindow[storageName].key(i)!;
    items.push([key, mainWindow[storageName].getItem(key)!]);
  }
  return items;
};

const getGlobalConstructor = (mainWindow: any, cstrName: string) =>
  typeof mainWindow[cstrName] !== 'undefined' ? new mainWindow[cstrName](noop) : 0;

const addGlobalConstructorUsingPrototype = (
  $interfaces$: InterfaceInfo[],
  mainWindow: any,
  cstrName: string
) => {
  if (typeof mainWindow[cstrName] !== 'undefined') {
    // we don't have an actual implementation, only the prototype
    // so let's just read what props exist, and assume they're all values, not functions
    $interfaces$.push([
      cstrName,
      'Object',
      Object.keys(mainWindow[cstrName].prototype).map((propName) => [
        propName,
        InterfaceType.Property,
      ]),
      InterfaceType.EnvGlobalConstructor,
    ]);
  }
};
