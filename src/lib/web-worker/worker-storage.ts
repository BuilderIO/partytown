import { callMethod } from './worker-proxy';
import { EMPTY_ARRAY } from '../utils';
import type { StorageItem } from '../types';
import type { WorkerProxy } from './worker-proxy-constructor';

export const addStorageApi = (
  win: WorkerProxy,
  storageName: 'localStorage' | 'sessionStorage',
  items: StorageItem[]
) => {
  const getIndexByKey = (key: string) => items.findIndex((i) => i[STORAGE_KEY] === key);

  const storage: Storage = {
    getItem(key) {
      const index = getIndexByKey(key);
      return index > -1 ? items[index][STORAGE_VALUE] : null;
    },
    setItem(key, value) {
      const index = getIndexByKey(key);
      if (index > -1) {
        items[index][STORAGE_VALUE] = value;
      } else {
        items.push([key, value]);
      }
      callMethod(win, [storageName, 'setItem'], [key, value]);
    },
    removeItem(key) {
      const index = getIndexByKey(key);
      if (index > -1) {
        items.splice(index, 1);
      }
      callMethod(win, [storageName, 'removeItem'], [key]);
    },
    key(index) {
      const item = items[index];
      return item ? item[STORAGE_KEY] : null;
    },
    clear() {
      items.length = 0;
      callMethod(win, [storageName, 'clear'], EMPTY_ARRAY);
    },
    get length() {
      return items.length;
    },
  };

  (win as any)[storageName] = storage;
};

const STORAGE_KEY = 0;
const STORAGE_VALUE = 1;
