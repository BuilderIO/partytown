import { callMethod } from './worker-proxy';
import { CallType, StorageItem } from '../types';
import { EMPTY_ARRAY } from '../utils';

export const addStorageApi = (
  win: any,
  storageName: 'localStorage' | 'sessionStorage',
  items: StorageItem[]
) => {
  let getIndexByKey = (key: string) => items.findIndex((i) => i[STORAGE_KEY] === key);
  let index: number;
  let item: StorageItem;

  let storage: Storage = {
    getItem(key) {
      index = getIndexByKey(key);
      return index > -1 ? items[index][STORAGE_VALUE] : null;
    },

    setItem(key, value) {
      index = getIndexByKey(key);
      if (index > -1) {
        items[index][STORAGE_VALUE] = value;
      } else {
        items.push([key, value]);
      }
      callMethod(win, [storageName, 'setItem'], [key, value], CallType.NonBlocking);
    },

    removeItem(key) {
      index = getIndexByKey(key);
      if (index > -1) {
        items.splice(index, 1);
      }
      callMethod(win, [storageName, 'removeItem'], [key], CallType.NonBlocking);
    },

    key(index) {
      item = items[index];
      return item ? item[STORAGE_KEY] : null;
    },

    clear() {
      items.length = 0;
      callMethod(win, [storageName, 'clear'], EMPTY_ARRAY, CallType.NonBlocking);
    },

    get length() {
      return items.length;
    },
  };

  win[storageName] = storage;
};

const STORAGE_KEY = 0;
const STORAGE_VALUE = 1;
