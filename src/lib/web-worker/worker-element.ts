import { EventHandler, StateProp } from '../types';
import { getInstanceStateValue, setInstanceStateValue } from './worker-instance';
import { resolveUrl } from './worker-exec';
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

export class WorkerAnchorElement extends WorkerElement {
  get hash() {
    return getUrl(this).hash;
  }
  get host() {
    return getUrl(this).host;
  }
  get hostname() {
    return getUrl(this).hostname;
  }
  get href() {
    return getUrl(this) + '';
  }
  set href(href: string) {
    setInstanceStateValue(this, StateProp.url, href);
  }
  get origin() {
    return getUrl(this).origin;
  }
  get pathname() {
    return getUrl(this).pathname;
  }
  get port() {
    return getUrl(this).port;
  }
  get protocol() {
    return getUrl(this).protocol;
  }
  get search() {
    return getUrl(this).search;
  }
}

export class WorkerDocumentElementChild extends WorkerElement {
  get parentElement() {
    return document.documentElement;
  }
  get parentNode() {
    return document.documentElement;
  }
}

export class WorkerDocumentElement extends WorkerElement {
  get parentElement() {
    return null;
  }
  get parentNode() {
    return document;
  }
}

export class WorkerSrcElement extends WorkerElement {
  addEventListener(...args: any[]) {
    let eventName = args[0];
    let prop =
      eventName === 'load'
        ? StateProp.loadHandlers
        : eventName === 'error'
        ? StateProp.errorHandlers
        : -1;
    let callbacks: EventHandler[];

    if (prop > -1) {
      callbacks = getInstanceStateValue(this, prop) || [];
      callbacks.push(args[1]);
      setInstanceStateValue(this, prop, callbacks);
    }
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
    let callbacks: EventHandler[] = getInstanceStateValue(this, StateProp.loadHandlers);
    return (callbacks && callbacks[0]) || null;
  }
  set onload(cb: EventHandler | null) {
    setInstanceStateValue(this, StateProp.loadHandlers, cb ? [cb] : null);
  }

  get onerror() {
    let callbacks: EventHandler[] = getInstanceStateValue(this, StateProp.errorHandlers);
    return (callbacks && callbacks[0]) || null;
  }
  set onerror(cb: EventHandler | null) {
    setInstanceStateValue(this, StateProp.errorHandlers, cb ? [cb] : null);
  }
}

const getUrl = (elm: WorkerElement) => resolveUrl(getInstanceStateValue(elm, StateProp.url));
