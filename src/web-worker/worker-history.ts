import { InstanceId, InterfaceType } from '../types';
import { InstanceIdKey } from './worker-constants';
import { proxy } from './worker-proxy';

export class WorkerHistory {
  [InstanceIdKey]: number;

  constructor() {
    this[InstanceIdKey] = InstanceId.history;
    return proxy(InterfaceType.History, this, []);
  }
}
