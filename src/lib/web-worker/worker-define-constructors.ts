import {
  ApplyPathKey,
  cachedDimensions,
  cachedTree,
  dimensionMethodNames,
  dimensionPropNames,
  elementTreePropNames,
  envGlobalConstructors,
  InstanceIdKey,
  nodeConstructors,
  NodeNameKey,
  nodeTreePropNames,
  PropInstancesKey,
  webWorkerState,
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
import { HTMLAnchorDescriptorMap } from './worker-anchor';
import { HTMLCanvasDescriptorMap } from './worker-canvas';
import { HTMLIFrameDescriptorMap } from './worker-iframe';
import { HTMLScriptDescriptorMap } from './worker-script';
import { InterfaceInfo, InterfaceType } from '../types';
import { Node } from './worker-node';
import { patchWebWorkerWindowPrototype, Window } from './worker-window';
import { setInstanceStateValue } from './worker-state';
import { WorkerProxy, WorkerTrapProxy } from './worker-proxy-constructor';

export const defineWorkerInterface = ([
  cstrName,
  superCstrName,
  members,
  interfaceType,
  nodeName,
]: InterfaceInfo) => {
  const SuperCstr = TrapConstructors[cstrName]
    ? WorkerTrapProxy
    : superCstrName === 'Object' || superCstrName === 'EventTarget'
    ? WorkerProxy
    : (self as any)[superCstrName];

  const Cstr = ((self as any)[cstrName] = defineConstructorName(
    (self as any)[cstrName] || class extends SuperCstr {},
    cstrName
  ));

  if (interfaceType === InterfaceType.EnvGlobalConstructor) {
    envGlobalConstructors[cstrName] = Cstr;
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
          get(this: WorkerProxy) {
            if (!this[PropInstancesKey][memberName]) {
              const winId = this[WinIdKey];
              const instanceId = this[InstanceIdKey];
              const applyPath = [...this[ApplyPathKey], memberName];
              const nodeName = this[NodeNameKey];
              const PropCstr: typeof WorkerProxy = (self as any)[memberType];

              this[PropInstancesKey][memberName] = new PropCstr(
                winId,
                instanceId,
                applyPath,
                nodeName
              );
            }
            return this[PropInstancesKey][memberName];
          },
          set(this: WorkerProxy, value) {
            this[PropInstancesKey][memberName] = value;
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
  const Element = self.Element;
  const DocumentFragment = self.DocumentFragment;

  patchWebWorkerWindowPrototype();

  definePrototypePropertyDescriptor(Element, ElementDescriptorMap);
  definePrototypePropertyDescriptor(self.Document, DocumentDescriptorMap);
  definePrototypePropertyDescriptor(self.HTMLAnchorElement, HTMLAnchorDescriptorMap);
  definePrototypePropertyDescriptor(self.HTMLCanvasElement, HTMLCanvasDescriptorMap);
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

  cachedTreeProps(Node, nodeTreePropNames);
  cachedTreeProps(Element, elementTreePropNames);
  cachedTreeProps(DocumentFragment, elementTreePropNames);

  cachedDimensionProps(Element);
  cachedDimensionProps(Window);
  cachedDimensionMethods(Element);
};

const definePrototypeNodeType = (Cstr: any, nodeType: number) =>
  definePrototypeValue(Cstr, 'nodeType', nodeType);

const cachedTreeProps = (Cstr: any, treeProps: string) =>
  treeProps.split(',').map((propName) =>
    definePrototypeProperty(Cstr, propName, {
      get(this: WorkerProxy) {
        let cacheKey = getDimensionCacheKey(this, propName);
        let result = cachedTree.get(cacheKey);
        if (!result) {
          result = getter(this, [propName]);
          cachedTree.set(cacheKey, result);
        }
        return result;
      },
    })
  );

const getDimensionCacheKey = (instance: WorkerProxy, memberName: string) =>
  instance[WinIdKey] + '.' + instance[InstanceIdKey] + '.' + memberName;

/**
 * Properties to add to the Constructor's prototype
 * that should only do a main read once, cache the value, and
 * returned the cached value after in subsequent reads after that
 */
export const cachedReadonlyProps = (Cstr: any, props: string) =>
  props.split(',').map((propName) => {
    definePrototypeProperty(Cstr, propName, {
      get(this: WorkerProxy) {
        let stateRecord = webWorkerState[this[InstanceIdKey]];
        if (stateRecord && propName in stateRecord) {
          return stateRecord[propName];
        }

        let val = getter(this, [propName]);
        setInstanceStateValue(this, propName, val);
        return val;
      },
      set(this: WorkerProxy, val) {
        setInstanceStateValue(this, propName, val);
      },
    });
  });

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
 * set its cache.
 */
const cachedDimensionProps = (Cstr: any) =>
  dimensionPropNames.map((propName) => {
    definePrototypeProperty(Cstr, propName, {
      get(this: Node) {
        const dimension = cachedDimensions.get(getDimensionCacheKey(this, propName));
        if (typeof dimension === 'number') {
          return dimension;
        }

        const groupedDimensions: { [key: string]: number } = getter(
          this,
          [propName],
          dimensionPropNames
        );

        Object.entries(groupedDimensions).map(([dimensionPropName, value]) => {
          cachedDimensions.set(getDimensionCacheKey(this, dimensionPropName), value);
        });

        return groupedDimensions[propName];
      },
    });
  });

const cachedDimensionMethods = (Cstr: any) =>
  dimensionMethodNames.map((methodName) => {
    Cstr.prototype[methodName] = function () {
      let cacheKey = getDimensionCacheKey(this, methodName);
      let dimensions = cachedDimensions.get(cacheKey);
      if (!dimensions) {
        dimensions = callMethod(this, [methodName], EMPTY_ARRAY);
        cachedDimensions.set(cacheKey, dimensions);
      }
      return dimensions;
    };
  });
