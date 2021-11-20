import type { Node } from './worker-node';
import { nodeConstructors, webWorkerInstances } from './worker-constants';

export const getOrCreateNodeInstance = (winId: number, instanceId: number, nodeName: string) => {
  let instance = webWorkerInstances.get(instanceId);
  if (!instance) {
    instance = createNodeInstance(winId, instanceId, nodeName);
    webWorkerInstances.set(instanceId, instance);
  }
  return instance;
};

export const createNodeInstance = (winId: number, instanceId: number, nodeName: string) => {
  const NodeCstr: typeof Node = nodeConstructors[nodeName!]
    ? nodeConstructors[nodeName!]
    : nodeName!.includes('-')
    ? nodeConstructors.UNKNOWN
    : (self as any).HTMLElement;
  return new NodeCstr(winId, instanceId, [], nodeName);
};

export const constructEvent = (eventProps: any) =>
  new Proxy(new Event(eventProps.type, eventProps), {
    get: (target: any, propName) =>
      propName in eventProps ? eventProps[propName] : target[String(propName)],
  });
