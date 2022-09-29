import {
  getConstructorName,
  getNodeName,
  isValidMemberName,
  len,
  noop,
  tagNameFromConstructor,
} from '../utils';
import { config, docImpl, libPath, mainWindow } from './main-globals';
import {
  InterfaceType,
  InterfaceInfo,
  InterfaceMember,
  InitWebWorkerData,
  StorageItem,
} from '../types';

export const initMainPlatform = (cb: (data?: InitWebWorkerData) => void) => {
  const interfaces = initState.$interfaces$;
  const elementTags = initState.$elementTags$;
  const impls = initState.$impls$;
  const win = initState.$window$;

  if (!win) {
    initState.$window$ = readImplementation('Window', mainWindow);
  } else if (!interfaces) {
    initState.$interfaces$ = [win, readImplementation('Node', docImpl.createTextNode(''))];
  } else if (!impls) {
    initState.$impls$ = readMainImplementations();
    initState.$elementTags$ = getElementTags();
  } else if (elementTags) {
    createElementFromTagNames(elementTags, impls);
  } else if (readImplementations(impls, interfaces, initState.$doneCstrs$!)) {
    initState = {};
    addGlobalConstructorUsingPrototype(interfaces, mainWindow, 'IntersectionObserverEntry');

    return cb({
      $config$: JSON.stringify(config, (k, v) => {
        if (typeof v === 'function') {
          v = String(v);
          if (v.startsWith(k + '(')) {
            v = 'function ' + v;
          }
        }
        return v;
      }),
      $interfaces$: interfaces,
      $libPath$: new URL(libPath, mainWindow.location as any) + '',
      $origin$: origin,
      $localStorage$: readStorage('localStorage'),
      $sessionStorage$: readStorage('sessionStorage'),
    });
  }
  cb();
};

const readMainImplementations = () => {
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

  return [
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
  ];
};

const getElementTags = () =>
  Object.getOwnPropertyNames(mainWindow)
    .map((cstrName) => tagNameFromConstructor(cstrName)!)
    .filter((d) => d);

const createElementFromTagNames = (
  tagNames: [isSvg: boolean, tagName: string][],
  impls: any[],
  elementData?: [isSvg: boolean, tagName: string]
) => {
  const start = Date.now();

  while ((elementData = tagNames.pop())) {
    if (Date.now() - start > 5) {
      return;
    }
    impls.push([
      elementData[0]
        ? docImpl.createElementNS('http://www.w3.org/2000/svg', elementData[1])
        : docImpl.createElement(elementData[1]),
    ]);
  }
  initState.$elementTags$ = undefined;
};

const cstrs = new Set(['Object']);

const readImplementations = (impls: any[], interfaces: InterfaceInfo[], doneCstrs: Set<string>) => {
  const start = Date.now();
  impls = impls.filter((implData) => implData[0]);

  for (const implData of impls) {
    if (Date.now() - start > 5) {
      return false;
    }
    const impl = implData[0];
    const interfaceType: InterfaceType = implData[1] as any;
    const cstrName = getConstructorName(impl);
    if (!doneCstrs.has(cstrName)) {
      doneCstrs.add(cstrName);
      const CstrPrototype = (mainWindow as any)[cstrName].prototype;
      readOwnImplementation(cstrs, interfaces, cstrName, CstrPrototype, impl, interfaceType);
    }
  }

  return true;
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
  cstrs: Set<string>,
  interfaces: InterfaceInfo[],
  cstrName: string,
  CstrPrototype: any,
  impl: any,
  interfaceType: InterfaceType
) => {
  if (!cstrs.has(cstrName)) {
    cstrs.add(cstrName);
    const SuperCstr = Object.getPrototypeOf(CstrPrototype);
    const superCstrName = getConstructorName(SuperCstr);
    const interfaceMembers: InterfaceMember[] = [];
    const propDescriptors = Object.getOwnPropertyDescriptors(CstrPrototype);

    readOwnImplementation(cstrs, interfaces, superCstrName, SuperCstr, impl, interfaceType);

    for (const memberName in propDescriptors) {
      readImplementationMember(interfaceMembers, impl, memberName);
    }

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

let initState: {
  $doneCstrs$?: Set<string>;
  $elementTags$?: [isSvg: boolean, tagName: string][];
  $impls$?: any[];
  $interfaces$?: any;
  $window$?: any;
} = {
  $doneCstrs$: new Set(),
};
