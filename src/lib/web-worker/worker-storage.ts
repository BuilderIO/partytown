import { callMethod } from './worker-proxy';
import { CallType, StorageItem, WebWorkerEnvironment } from '../types';
import { EMPTY_ARRAY } from '../utils';
import { warnCrossOrgin } from '../log';

export const addStorageApi = (
  win: any,
  storageName: 'localStorage' | 'sessionStorage',
  storages: Map<string, StorageItem[]>,
  isSameOrigin: boolean,
  env: WebWorkerEnvironment
) => {
  let getItems = (items?: StorageItem[]) => {
    items = storages.get(win.origin);
    if (!items) {
      storages.set(win.origin, (items = []));
    }
    return items;
  };
  let getIndexByKey = (key: string) => getItems().findIndex((i) => i[STORAGE_KEY] === key);
  let index: number;
  let item: StorageItem;

  let storage: Storage = {
    getItem(key) {
      index = getIndexByKey(key);
      return index > -1 ? getItems()[index][STORAGE_VALUE] : null;
    },

    setItem(key, value) {
      index = getIndexByKey(key);
      if (index > -1) {
        getItems()[index][STORAGE_VALUE] = value;
      } else {
        getItems().push([key, value]);
      }
      if (isSameOrigin) {
        callMethod(win, [storageName, 'setItem'], [key, value], CallType.NonBlocking);
      } else {
        warnCrossOrgin('set', storageName, env);
      }
    },

    removeItem(key) {
      index = getIndexByKey(key);
      if (index > -1) {
        getItems().splice(index, 1);
      }
      if (isSameOrigin) {
        callMethod(win, [storageName, 'removeItem'], [key], CallType.NonBlocking);
      } else {
        warnCrossOrgin('remove', storageName, env);
      }
    },

    key(index) {
      item = getItems()[index];
      return item ? item[STORAGE_KEY] : null;
    },

    clear() {
      getItems().length = 0;
      if (isSameOrigin) {
        callMethod(win, [storageName, 'clear'], EMPTY_ARRAY, CallType.NonBlocking);
      } else {
        warnCrossOrgin('clear', storageName, env);
      }
    },

    get length() {
      return getItems().length;
    },
  };

  win[storageName] = new Proxy(storage, {
    get(target, key: string) {
      if (Reflect.has(target, key)) {
        return Reflect.get(target, key);
      } else {
        return target.getItem(key);
      }
    },
    set(target, key: string, value: string): boolean {
      target.setItem(key, value);
      return true;
    },
    has(target, key: PropertyKey | string): boolean {
      if (Reflect.has(target, key)) {
        return true;
      } else if (typeof key === 'string') {
        return target.getItem(key) !== null;
      } else {
        return false;
      }
    },
    deleteProperty(target, key: string): boolean {
      target.removeItem(key);
      return true;
    },
  });
};

const STORAGE_KEY = 0;
const STORAGE_VALUE = 1;
