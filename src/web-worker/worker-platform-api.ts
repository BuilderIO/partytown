import { PlatformApiId } from '../types';
import { webWorkerCtx } from './worker-constants';
import type { WorkerDocument } from './worker-document';

export const getWorkerPlatformApiId = (instance: any, doc: WorkerDocument) => {
  if (instance === self) {
    return PlatformApiId.window;
  } else if (instance === doc) {
    return PlatformApiId.document;
  } else if (instance === doc.documentElement) {
    return PlatformApiId.documentElement;
  } else if (instance === doc.head) {
    return PlatformApiId.head;
  } else if (instance === doc.body) {
    return PlatformApiId.body;
  } else if (instance === webWorkerCtx.$localStorage$) {
    return PlatformApiId.localStorage;
  } else if (instance === webWorkerCtx.$sessionStorage$) {
    return PlatformApiId.sessionStorage;
  } else if (instance === webWorkerCtx.$history$) {
    return PlatformApiId.history;
  } else {
    return -1;
  }
};

export const getWorkerPlatformApi = (platformApiId: number, doc: WorkerDocument) => {
  if (platformApiId === PlatformApiId.window) {
    return self;
  } else if (platformApiId === PlatformApiId.document) {
    return doc;
  } else if (platformApiId === PlatformApiId.documentElement) {
    return doc.documentElement;
  } else if (platformApiId === PlatformApiId.head) {
    return doc.head;
  } else if (platformApiId === PlatformApiId.body) {
    return doc.body;
  } else if (platformApiId === PlatformApiId.localStorage) {
    return webWorkerCtx.$localStorage$;
  } else if (platformApiId === PlatformApiId.sessionStorage) {
    return webWorkerCtx.$sessionStorage$;
  } else if (platformApiId === PlatformApiId.history) {
    return webWorkerCtx.$history$;
  } else {
    return null;
  }
};
