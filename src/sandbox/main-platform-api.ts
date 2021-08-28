import { mainCtx } from './main-context';
import { PlatformApiId } from '../types';

export const getMainPlatformApiId = (instance: any) => {
  if (instance === mainCtx.$window$) {
    return PlatformApiId.window;
  } else if (instance === mainCtx.$document$) {
    return PlatformApiId.document;
  } else if (instance === mainCtx.$documentElement$) {
    return PlatformApiId.documentElement;
  } else if (instance === mainCtx.$head$) {
    return PlatformApiId.head;
  } else if (instance === mainCtx.$body$) {
    return PlatformApiId.body;
  } else if (instance === mainCtx.$localStorage$) {
    return PlatformApiId.localStorage;
  } else if (instance === mainCtx.$sessionStorage$) {
    return PlatformApiId.sessionStorage;
  } else if (instance === mainCtx.$history$) {
    return PlatformApiId.history;
  } else {
    return -1;
  }
};

export const getMainPlatformApi = (platformApiId: number) => {
  if (platformApiId === PlatformApiId.window) {
    return mainCtx.$window$;
  } else if (platformApiId === PlatformApiId.document) {
    return mainCtx.$document$;
  } else if (platformApiId === PlatformApiId.documentElement) {
    return mainCtx.$documentElement$;
  } else if (platformApiId === PlatformApiId.head) {
    return mainCtx.$head$;
  } else if (platformApiId === PlatformApiId.body) {
    return mainCtx.$body$;
  } else if (platformApiId === PlatformApiId.localStorage) {
    return mainCtx.$localStorage$;
  } else if (platformApiId === PlatformApiId.sessionStorage) {
    return mainCtx.$sessionStorage$;
  } else if (platformApiId === PlatformApiId.history) {
    return mainCtx.$history$;
  } else {
    return null;
  }
};
