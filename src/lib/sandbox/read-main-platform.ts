import {
  createElementFromConstructor,
  getConstructorName,
  getNodeName,
  isValidMemberName,
  len,
  noop,
} from '../utils';
import { config, docImpl, libPath, mainWindow } from './main-globals';
import {
  InterfaceType,
  InterfaceInfo,
  InterfaceMember,
  InitWebWorkerData,
  StorageItem,
} from '../types';


type AnyObject = { [key: string]: any };

function getTag(value: any): string {
  if (value == null) {
    return value === undefined ? "[object Undefined]" : "[object Null]";
  }
  return Object.prototype.toString.call(value);
}

function isObjectLike(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isPlainObject(value: any): boolean {
  if (!isObjectLike(value) || getTag(value) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}

function isSerializable(obj: AnyObject, path: string[] = []): boolean {
  let isNestedSerializable: boolean;
  let isSerializableFlag = true;

  function isPlain(val: any): boolean {
    return (
      typeof val === "undefined" ||
      typeof val === "string" ||
      typeof val === "boolean" ||
      typeof val === "number" ||
      Array.isArray(val) ||
      isPlainObject(val)
    );
  }

  for (const property in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, property)) {
      const currentPath = [...path, property];
      const value = obj[property];

      if (!isPlain(value)) {
        console.log(
          `Non-Serializable Property: ${currentPath.join(".")} of type ${typeof value}`
        );
        if (typeof value === 'function') {
          console.log(`Function Name: ${value.name}`);
        }
        console.log(
          "Parent Object:",
          JSON.stringify(obj, (key, val) =>
            typeof val === "function" ? val.toString() : val
          )
        );
        isSerializableFlag = false;
      }

      if (isObjectLike(value)) {
        isNestedSerializable = isSerializable(value, currentPath);
        if (!isNestedSerializable) {
          isSerializableFlag = false;
        }
      }
    }
  }

  return isSerializableFlag;
}

const makeObjectSerializable = (obj: AnyObject): AnyObject => {
  while (!isSerializable(obj)) {
    const nonSerializablePaths: string[][] = [];

    const findNonSerializablePaths = (currentObj: AnyObject, currentPath: string[] = []): void => {
      for (const property in currentObj) {
        if (Object.prototype.hasOwnProperty.call(currentObj, property)) {
          const newPath = [...currentPath, property];
          const value = currentObj[property];

          if (!isSerializable(value, newPath)) {
            nonSerializablePaths.push(newPath);
          }

          if (isObjectLike(value)) {
            findNonSerializablePaths(value, newPath);
          }
        }
      }
    };

    findNonSerializablePaths(obj);

    // Find the deepest non-serializable path
    const deepestPath = nonSerializablePaths.reduce((deepest, current) =>
      current.length > deepest.length ? current : deepest,
      []
    );

    // Remove the deepest non-serializable property
    if (deepestPath.length) {
      let target = obj;
      for (let i = 0; i < deepestPath.length - 1; i++) {
        target = target[deepestPath[i]];
      }
      delete target[deepestPath[deepestPath.length - 1]];
    }
  }

  return obj;
};

export const readMainPlatform = () => {
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
  ];

  const initialInterfaces: InterfaceInfo[] = [
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

  const interfaces_res = readImplementations(impls, initialInterfaces);
  //const interfaces_filtered = interfaces_res.filter((intrfc) => {
      //if (isSerializable(intrfc)) { return true;} else { console.log("removed an interface", intrfc);return false;
    //}});
  const interfaces_cleaned = interfaces_res.map(makeObjectSerializable) as InterfaceInfo[];

  const initWebWorkerData: InitWebWorkerData = {
    $config$,
    $interfaces$: interfaces_cleaned,
    $libPath$: new URL(libPath, mainWindow.location as any) + '',
    $origin$: origin,
    $localStorage$: readStorage('localStorage'),
    $sessionStorage$: readStorage('sessionStorage'),
  };

  addGlobalConstructorUsingPrototype(
    initWebWorkerData.$interfaces$,
    mainWindow,
    'IntersectionObserverEntry'
  );

  return initWebWorkerData;
};

export const readMainInterfaces = () => {
  // get all HTML*Element constructors on window
  // and create each element to get their implementation
  const elms = Object.getOwnPropertyNames(mainWindow)
    .map((interfaceName) => createElementFromConstructor(docImpl, interfaceName))
    .filter((elm) => elm)
    .map((elm) => [elm]);

  return readImplementations(elms, []);
};

const cstrs = new Set(['Object']);

const readImplementations = (impls: any[], interfaces: InterfaceInfo[]) => {
  const cstrImpls = impls
    .filter((implData) => implData[0])
    .map((implData) => {
      const impl = implData[0];
      const interfaceType: InterfaceType = implData[1] as any;
      const cstrName = getConstructorName(impl);
      const CstrPrototype = (mainWindow as any)[cstrName].prototype;
      return [cstrName, CstrPrototype, impl, interfaceType];
    });

  cstrImpls.map(([cstrName, CstrPrototype, impl, intefaceType]) =>
    readOwnImplementation(cstrs, interfaces, cstrName, CstrPrototype, impl, intefaceType)
  );

  return interfaces;
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
