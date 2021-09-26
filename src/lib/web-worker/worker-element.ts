import { EventHandler, StateProp } from '../types';
import { getInstanceStateValue, setInstanceStateValue } from './worker-state';
import { toLower } from '../utils';
import { WorkerNode } from './worker-node';

export class WorkerElement extends WorkerNode {
  get localName() {
    return toLower(this.nodeName!);
  }
  get tagName() {
    return this.nodeName;
  }
}

export class WorkerSrcElement extends WorkerElement {
  addEventListener(...args: any[]) {
    let eventName = args[0];
    let callbacks = getInstanceStateValue<EventHandler[]>(this, eventName) || [];
    callbacks.push(args[1]);
    setInstanceStateValue(this, eventName, callbacks);
  }

  get async() {
    return true;
  }
  set async(_: boolean) {}

  get defer() {
    return true;
  }
  set defer(_: boolean) {}

  get onload() {
    let callbacks = getInstanceStateValue<EventHandler[]>(this, StateProp.loadHandlers);
    return (callbacks && callbacks[0]) || null;
  }
  set onload(cb: EventHandler | null) {
    setInstanceStateValue(this, 'load', cb ? [cb] : null);
  }

  get onerror() {
    let callbacks = getInstanceStateValue<EventHandler[]>(this, StateProp.errorHandlers);
    return (callbacks && callbacks[0]) || null;
  }
  set onerror(cb: EventHandler | null) {
    setInstanceStateValue(this, 'error', cb ? [cb] : null);
  }
}
