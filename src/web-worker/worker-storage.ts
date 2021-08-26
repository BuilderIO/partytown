import { InstanceIdKey } from './worker-constants';
import { InterfaceType } from '../types';
import { proxy } from './worker-proxy';

export class WorkerStorage {
  [InstanceIdKey]: number;

  constructor(instanceId: number) {
    this[InstanceIdKey] = instanceId;
    return proxy(InterfaceType.Storage, this, []);
  }
}
