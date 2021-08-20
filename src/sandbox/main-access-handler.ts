import { deserializeValue, serializeValue } from './main-serialization';
import { getInstance } from './main-instances';
import { MainAccessRequest, MainAccessResponse, AccessType } from '../types';

export const mainAccessHandler = async (key: number, accessReq: MainAccessRequest) => {
  const accessType = accessReq.$accessType$;
  const instanceId = accessReq.$instanceId$;
  const memberName = accessReq.$memberName$!;
  const data = accessReq.$data$;
  const accessRsp: MainAccessResponse = {
    $msgId$: accessReq.$msgId$,
    $instanceId$: instanceId,
  };

  try {
    if (accessReq.$key$ === key) {
      const instance = getInstance(instanceId);
      if (instance) {
        if (accessType === AccessType.Get) {
          getInstanceMember(instance, memberName, accessRsp);
        } else if (accessType === AccessType.Set) {
          setInstanceProp(instance, memberName, data);
        } else if (accessType === AccessType.Apply) {
          instanceCallMethod(instance, memberName, data, accessRsp);
        }
      } else {
        accessRsp.$error$ = `Instance ${instanceId} not found`;
      }
    } else {
      accessRsp.$error$ = `Invalid key`;
    }
  } catch (e) {
    accessRsp.$error$ = String(e.stack || e);
  }

  return accessRsp;
};

const getInstanceMember = (instance: any, memberName: string, accessRsp: MainAccessResponse) => {
  accessRsp.$rtnValue$ = serializeValue(instance[memberName], new Set());
};

const setInstanceProp = (instance: any, propName: string, propValue: any) => {
  console.log('setInstanceProp', instance, propName, propValue);
  instance[propName] = deserializeValue(propValue);
};

const instanceCallMethod = (
  instance: any,
  methodName: string,
  serializedArgs: any[],
  accessRsp: MainAccessResponse
) => {
  console.log('instanceCallMethod', instance, methodName, serializedArgs);
  const args = deserializeValue(serializedArgs);
  const rtnValue = instance[methodName].apply(instance, args);
  accessRsp.$rtnValue$ = serializeValue(rtnValue, new Set());
};
