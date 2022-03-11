import { callMethod } from './worker-proxy';
import type {
  CustomElementData,
  InstanceId,
  WinId,
  WorkerMessageType,
  WorkerNodeConstructors,
} from '../types';
import { getOrCreateNodeInstance } from './worker-constructors';

export const createCustomElementRegistry = (win: any, nodeCstrs: WorkerNodeConstructors) => {
  const customElements = 'customElements';
  const registry = new Map<string, any>();

  win[customElements] = {
    define(tagName: string, Cstr: any, opts: any) {
      registry.set(tagName, Cstr);
      nodeCstrs[tagName.toUpperCase()] = Cstr;
      const ceData: CustomElementData = [Cstr.name, Cstr.observedAttributes];
      callMethod(win, [customElements, 'define'], [tagName, ceData, opts]);
    },

    get: (tagName: string) => registry.get(tagName),

    whenDefined: (tagName: string) =>
      registry.has(tagName)
        ? Promise.resolve()
        : callMethod(win, [customElements, 'whenDefined'], [tagName]),

    upgrade: (elm: any) => callMethod(win, [customElements, 'upgrade'], [elm]),
  };
};

export const callCustomElementCallback = (
  _type: WorkerMessageType.CustomElementCallback,
  winId: WinId,
  instanceId: InstanceId,
  callbackName: string,
  args: any[]
) => {
  const elm = getOrCreateNodeInstance(winId, instanceId) as any;
  if (elm && typeof elm[callbackName] === 'function') {
    elm[callbackName].apply(elm, args);
  }
};
