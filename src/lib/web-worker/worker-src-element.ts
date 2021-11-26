import { EventHandler, StateProp } from '../types';
import { getInstanceStateValue, setInstanceStateValue } from './worker-state';
import type { Node } from './worker-node';
import { noop } from '../utils';

export const HTMLSrcElementDescriptorMap: PropertyDescriptorMap & ThisType<Node> = {
  addEventListener: {
    value(...args: any[]) {
      const eventName = args[0];
      const callbacks = getInstanceStateValue<EventHandler[]>(this, eventName) || [];
      callbacks.push(args[1]);
      setInstanceStateValue(this, eventName, callbacks);
    },
  },
  async: {
    get: noop,
    set: noop,
  },
  defer: {
    get: noop,
    set: noop,
  },
  onload: {
    get() {
      let callbacks = getInstanceStateValue<EventHandler[]>(this, StateProp.loadHandlers);
      return (callbacks && callbacks[0]) || null;
    },
    set(cb) {
      setInstanceStateValue(this, StateProp.loadHandlers, cb ? [cb] : null);
    },
  },
  onerror: {
    get() {
      let callbacks = getInstanceStateValue<EventHandler[]>(this, StateProp.errorHandlers);
      return (callbacks && callbacks[0]) || null;
    },
    set(cb) {
      setInstanceStateValue(this, StateProp.errorHandlers, cb ? [cb] : null);
    },
  },
};
