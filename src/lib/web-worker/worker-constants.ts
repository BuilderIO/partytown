import type { InterfaceInfo, RefHandler, WebWorkerContext, WebWorkerEnvironment } from '../types';
import type { Node } from './worker-node';
import type { WorkerProxy } from './worker-proxy-constructor';

export const WinIdKey = Symbol();
export const InstanceIdKey = Symbol();
export const NodeNameKey = Symbol();
export const ApplyPathKey = Symbol();
export const InstanceStateKey = Symbol();

export const webWorkerInstances = new Map<number, Node>();
export const webWorkerRefsByRefId: { [refId: number]: RefHandler } = {};
export const webWorkerRefIdsByRef = new WeakMap<RefHandler, number>();
export const nodeConstructors: { [nodeName: string]: typeof Node } = {};
export const envGlobalConstructors: { [cstrName: string]: typeof WorkerProxy } = {};

export const webWorkerCtx: WebWorkerContext = {} as any;
export const webWorkerInterfaces: InterfaceInfo[] = [];

export const environments: { [winId: number]: WebWorkerEnvironment } = {};

export const cachedDimensions = new Map<string, any>();
export const cachedTree = new Map<string, any>();

export const dimensionMethodNames = 'getClientRects,getBoundingClientRect'.split(',');
export const dimensionPropNames =
  'innerHeight,innerWidth,outerHeight,outerWidth,clientHeight,clientWidth,clientTop,clientLeft,scrollHeight,scrollWidth,scrollTop,scrollLeft,offsetHeight,offsetWidth,offsetTop,offsetLeft'.split(
    ','
  );

export const nodeTreePropNames =
  'childNodes,firstChild,isConnected,lastChild,nextSibling,parentElement,parentNode,previousSibling';

export const elementTreePropNames =
  'childElementCount,children,firstElementChild,lastElementChild,nextElementSibling,previousElementSibling';
