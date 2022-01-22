import {
  ApplyPathKey,
  cachedDimensions,
  cachedStructure,
  commaSplit,
  elementGetterDimensionMethodNames,
  elementStructurePropNames,
  envGlobalConstructors,
  getterDimensionPropNames,
  InstanceIdKey,
  nodeConstructors,
  NodeNameKey,
  nodeStructurePropNames,
  windowGetterDimensionMethodNames,
  WinIdKey,
} from './worker-constants';
import { callMethod, getter, setter } from './worker-proxy';
import { CSSStyleSheet, HTMLStyleDescriptorMap } from './worker-style';
import {
  defineConstructorName,
  definePrototypeProperty,
  definePrototypePropertyDescriptor,
  definePrototypeValue,
  EMPTY_ARRAY,
} from '../utils';
import {
  DocumentDescriptorMap,
  DocumentElementChildDescriptorMap,
  DocumentElementDescriptorMap,
} from './worker-document';
import { ElementDescriptorMap } from './worker-element';
import {
  getInstanceStateValue,
  hasInstanceStateValue,
  setInstanceStateValue,
} from './worker-state';
import { HTMLAnchorDescriptorMap } from './worker-anchor';
import { HTMLIFrameDescriptorMap } from './worker-iframe';
import { HTMLScriptDescriptorMap } from './worker-script';
import { InterfaceInfo, InterfaceType } from '../types';
import { Node } from './worker-node';
import { Window } from './worker-window';
import { WorkerEventTargetProxy, WorkerInstance, WorkerTrapProxy } from './worker-instance';

export const defineWorkerInterface = ([
  cstrName,
  superCstrName,
  members,
  interfaceType,
  nodeName,
]: InterfaceInfo) => {
  const SuperCstr = TrapConstructors[cstrName]
    ? WorkerTrapProxy
    : superCstrName === 'EventTarget'
    ? WorkerEventTargetProxy
    : superCstrName === 'Object'
    ? WorkerInstance
    : (self as any)[superCstrName];

  const Cstr = ((self as any)[cstrName] = defineConstructorName(
    (self as any)[cstrName] || class extends SuperCstr {},
    cstrName
  ));

  if (interfaceType === InterfaceType.EnvGlobalConstructor) {
    envGlobalConstructors.set(cstrName, Cstr);
  }

  if (nodeName) {
    // this is a node name, such as #text or an element's tagname, like all caps DIV
    nodeConstructors[nodeName] = Cstr;
  }

  members.map(([memberName, memberType, staticValue]) => {
    if (!(memberName in Cstr.prototype) && !(memberName in SuperCstr.prototype)) {
      // member not already in the constructor's prototype
      if (typeof memberType === 'string') {
        definePrototypeProperty(Cstr, memberName, {
          get(this: WorkerInstance) {
            if (!hasInstanceStateValue(this, memberName)) {
              const winId = this[WinIdKey];
              const instanceId = this[InstanceIdKey];
              const applyPath = [...this[ApplyPathKey], memberName];
              const nodeName = this[NodeNameKey];
              const PropCstr: typeof WorkerInstance = (self as any)[memberType];

              setInstanceStateValue(
                this,
                memberName,
                new PropCstr(winId, instanceId, applyPath, nodeName)
              );
            }
            return getInstanceStateValue(this, memberName);
          },
          set(this: WorkerInstance, value) {
            setInstanceStateValue(this, memberName, value);
          },
        });
      } else {
        // interface type
        if (memberType === InterfaceType.Function) {
          // method that should access main
          definePrototypeValue(Cstr, memberName, function (this: Node, ...args: any[]) {
            return callMethod(this, [memberName], args);
          });
        } else if (memberType > 0) {
          // property
          if (staticValue !== undefined) {
            // static property that doesn't change
            // and no need to access main
            definePrototypeValue(Cstr, memberName, staticValue);
          } else {
            // property getter/setter that should access main
            definePrototypeProperty(Cstr, memberName, {
              get(this: Node) {
                return getter(this, [memberName]);
              },
              set(this: Node, value) {
                return setter(this, [memberName], value);
              },
            });
          }
        }
      }
    }
  });
};

// Trap Constructors are ones where all properties have
// proxy traps, such as dataset.name or style.color
const TrapConstructors: { [cstrName: string]: 1 } = {
  CSSStyleDeclaration: 1,
  DOMStringMap: 1,
  NamedNodeMap: 1,
};

export const patchPrototypes = () => {
  const Document = self.Document;
  const DocumentFragment = self.DocumentFragment;
  const Element = self.Element;

  // we already assigned the same prototypes found on the main thread's Window
  // to the worker's Window, but actually it assigned a few that are already on
  // the web worker's global we can use instead. So manually set which web worker
  // globals we can reuse, instead of calling the main access.
  // These same window properties will be assigned to the window instance
  // when Window is constructed, and these won't make calls to the main thread.
  commaSplit('atob,btoa,crypto,indexedDB,setTimeout,setInterval,clearTimeout,clearInterval').map(
    (memberName) => delete (Window as any).prototype[memberName]
  );

  definePrototypePropertyDescriptor(Element, ElementDescriptorMap);
  definePrototypePropertyDescriptor(Document, DocumentDescriptorMap);
  definePrototypePropertyDescriptor(self.HTMLAnchorElement, HTMLAnchorDescriptorMap);
  definePrototypePropertyDescriptor(self.HTMLIFrameElement, HTMLIFrameDescriptorMap);
  definePrototypePropertyDescriptor(self.HTMLScriptElement, HTMLScriptDescriptorMap);
  definePrototypePropertyDescriptor(self.HTMLStyleElement, HTMLStyleDescriptorMap);
  definePrototypePropertyDescriptor(self.HTMLHeadElement, DocumentElementChildDescriptorMap);
  definePrototypePropertyDescriptor(self.HTMLBodyElement, DocumentElementChildDescriptorMap);
  definePrototypePropertyDescriptor(self.HTMLHtmlElement, DocumentElementDescriptorMap);

  constantProps(CSSStyleSheet, { type: 'text/css' });

  definePrototypeNodeType(self.Comment, 8);
  definePrototypeNodeType(self.DocumentType, 10);
  definePrototypeNodeType(DocumentFragment, 11);

  cachedTreeProps(Node, nodeStructurePropNames);
  cachedTreeProps(Element, elementStructurePropNames);
  cachedTreeProps(DocumentFragment, elementStructurePropNames);

  cachedDimensionProps(Element);
  cachedDimensionMethods(Element, elementGetterDimensionMethodNames);

  cachedDimensionProps(Window);
  cachedDimensionMethods(Window, windowGetterDimensionMethodNames);

  cachedProps(Window, 'devicePixelRatio');
  cachedProps(Document, 'compatMode,referrer');
  cachedProps(Element, 'id');
};

const definePrototypeNodeType = (Cstr: any, nodeType: number) =>
  definePrototypeValue(Cstr, 'nodeType', nodeType);

const cachedTreeProps = (Cstr: any, treeProps: string[]) =>
  treeProps.map((propName) =>
    definePrototypeProperty(Cstr, propName, {
      get(this: WorkerInstance) {
        let cacheKey = getInstanceCacheKey(this, propName);
        let result = cachedStructure.get(cacheKey);
        if (!result) {
          result = getter(this, [propName]);
          cachedStructure.set(cacheKey, result);
        }
        return result;
      },
    })
  );

const getInstanceCacheKey = (instance: WorkerInstance, memberName: string, args?: any[]) =>
  [
    instance[WinIdKey],
    instance[InstanceIdKey],
    memberName,
    ...(args || EMPTY_ARRAY).map((arg) => String(arg && arg[WinIdKey] ? arg[InstanceIdKey] : arg)),
  ].join('.');

/**
 * Properties to add to the Constructor's prototype
 * that should only do a main read once, cache the value, and
 * returned the cached value after in subsequent reads after that.
 * A setter will update the cache.
 */
const cachedProps = (Cstr: any, propNames: string) =>
  commaSplit(propNames).map((propName) =>
    definePrototypeProperty(Cstr, propName, {
      get(this: WorkerInstance) {
        if (!hasInstanceStateValue(this, propName)) {
          setInstanceStateValue(this, propName, getter(this, [propName]));
        }
        return getInstanceStateValue(this, propName);
      },
      set(this: WorkerInstance, val) {
        if (getInstanceStateValue(this, propName) !== val) {
          setter(this, [propName], val);
        }
        setInstanceStateValue(this, propName, val);
      },
    })
  );

/**
 * Properties that always return a value, without doing a main access.
 * Same as:
 * get propName() { return propValue }
 */
export const constantProps = (Cstr: any, props: { [propName: string]: any }) =>
  Object.keys(props).map((propName) => definePrototypeValue(Cstr, propName, props[propName]));

/**
 * Known dimension properties to add to the Constructor's prototype
 * that when called they'll check the dimension cache, and if it's
 * not in the cache then to get all dimensions in one call and
 * set its cache. The dimension cache is cleared when another method is called.
 */
const cachedDimensionProps = (Cstr: any) =>
  getterDimensionPropNames.map((propName) =>
    definePrototypeProperty(Cstr, propName, {
      get(this: Node) {
        const dimension = cachedDimensions.get(getInstanceCacheKey(this, propName));
        if (typeof dimension === 'number') {
          return dimension;
        }

        const groupedDimensions: { [key: string]: number } = getter(
          this,
          [propName],
          getterDimensionPropNames
        );

        if (groupedDimensions && typeof groupedDimensions === 'object') {
          Object.entries(groupedDimensions).map(([dimensionPropName, value]) =>
            cachedDimensions.set(getInstanceCacheKey(this, dimensionPropName), value)
          );

          return groupedDimensions[propName];
        }
        return groupedDimensions;
      },
    })
  );

/**
 * Methods that return dimensions that can be cached, similar to cachedDimensionProps()
 */
const cachedDimensionMethods = (Cstr: any, dimensionMethodNames: string[]) =>
  dimensionMethodNames.map((methodName) => {
    Cstr.prototype[methodName] = function (...args: any[]) {
      let cacheKey = getInstanceCacheKey(this, methodName, args);
      let dimensions = cachedDimensions.get(cacheKey);
      if (!dimensions) {
        dimensions = callMethod(this, [methodName], args);
        cachedDimensions.set(cacheKey, dimensions);
      }
      return dimensions;
    };
  });
