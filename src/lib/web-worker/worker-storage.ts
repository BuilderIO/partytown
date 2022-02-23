import { callMethod } from './worker-proxy';
import { CallType, StorageItem } from '../types';
import { EMPTY_ARRAY } from '../utils';

export const addStorageApi = (
  win: any,
  storageName: 'localStorage' | 'sessionStorage',
  storages: Map<string, StorageItem[]>
) => {
  let isOrigin = () => origin === win.origin;
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
      if (isOrigin()) {
        callMethod(win, [storageName, 'setItem'], [key, value], CallType.NonBlocking);
      }
    },

    removeItem(key) {
      index = getIndexByKey(key);
      if (index > -1) {
        getItems().splice(index, 1);
      }
      if (isOrigin()) {
        callMethod(win, [storageName, 'removeItem'], [key], CallType.NonBlocking);
      }
    },

    key(index) {
      item = getItems()[index];
      return item ? item[STORAGE_KEY] : null;
    },

    clear() {
      getItems().length = 0;
      if (isOrigin()) {
        callMethod(win, [storageName, 'clear'], EMPTY_ARRAY, CallType.NonBlocking);
      }
    },

    get length() {
      return getItems().length;
    },
  };

  win[storageName] = storage;
};

const STORAGE_KEY = 0;
const STORAGE_VALUE = 1;
