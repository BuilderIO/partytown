import { getMainPlatformApi } from './main-platform-api';
import { len } from '../utils';
import { MainWindow, PlatformApiId } from '../types';

let instanceIds = PlatformApiId.body + 1;
let cleanupInc = 0;

const instances: [number, InstanceType][] = [];
const instanceIdByInstance = new WeakMap<InstanceType, number>();

export const getInstanceId = (instance: InstanceType | null | undefined, instanceId?: number) => {
  if (instance) {
    instanceId = instanceIdByInstance.get(instance);
    if (typeof instanceId !== 'number') {
      instanceId = instanceIds++;
      setInstanceId(instance, instanceId);
    }
    return instanceId;
  }
  return -1;
};

export const getInstance = <T = InstanceType | null>(instanceId: number, instanceItem?: any): T => {
  instanceItem = instances.find((i) => i[0] === instanceId);
  return instanceItem ? instanceItem[1] : getMainPlatformApi(instanceId);
};

const setInstanceId = (instance: InstanceType | null | undefined, instanceId: number) => {
  if (instance) {
    instances.push([instanceId, instance]);
    instanceIdByInstance.set(instance, instanceId);

    cleanupInc++;
    if (cleanupInc > 99) {
      cleanupInc = 0;
      while (true) {
        let disconnectedNodes = instances.filter(
          (i) => (i[1] as InstanceNode).nodeType && !(i[1] as InstanceNode).isConnected
        );
        let i: number;
        let l: number;
        if (len(disconnectedNodes) > 99) {
          for (i = 0, l = len(instances); i < l; i++) {
            if (!(instances[i][1] as InstanceNode).isConnected) {
              instances.slice(i, 1);
              break;
            }
          }
        } else {
          break;
        }
      }
    }
  }
};

interface InstanceNode extends Node {}

interface InstanceWindow extends Window {}

interface InstanceHistory extends History {}

interface InstanceStorage extends Storage {}

type InstanceType = InstanceNode | InstanceWindow | InstanceHistory | InstanceStorage;
