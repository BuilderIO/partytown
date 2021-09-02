import { InstanceIdKey } from './worker-constants';
import { InterfaceType } from '../types';
import { proxy } from './worker-proxy';

export class WorkerContentWindow {
  [InstanceIdKey]: number;

  constructor(iframeInstanceId: number) {
    this[InstanceIdKey] = iframeInstanceId;
    return proxy(InterfaceType.Window, this, ['contentWindow']);
  }
}
