import { AccessType, ExtraInstruction, MainAccessRequest, MainAccessResponse } from '../types';
import { deserializeValue, serializeValue } from './main-serialization';
import { getInstance } from './main-instances';
import { isPromise } from '../utils';

export const mainAccessHandler = async (key: number, accessReq: MainAccessRequest) => {
  const accessType = accessReq.$accessType$;
  const instanceId = accessReq.$instanceId$;
  const memberName = accessReq.$memberName$!;
  const data = accessReq.$data$;
  const extraInstructions = accessReq.$extraInstructions$;
  const accessRsp: MainAccessResponse = {
    $msgId$: accessReq.$msgId$,
    $instanceId$: instanceId,
  };

  try {
    if (accessReq.$key$ === key) {
      const instance = getInstance(instanceId);
      if (instance) {
        if (accessType === AccessType.Get) {
          await getInstanceMember(accessRsp, instance, memberName);
        } else if (accessType === AccessType.Apply) {
          await callInstanceMethod(accessRsp, instance, memberName, data, extraInstructions);
        } else if (accessType === AccessType.Set) {
          instance[memberName] = deserializeValue(data);
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

const getInstanceMember = async (
  accessRsp: MainAccessResponse,
  instance: any,
  memberName: string
) => {
  let getterValue = instance[memberName];

  if (isPromise(getterValue)) {
    getterValue = await getterValue;
    accessRsp.$isPromise$ = true;
  }
  accessRsp.$rtnValue$ = serializeValue(getterValue, new Set());
};

const callInstanceMethod = async (
  accessRsp: MainAccessResponse,
  instance: any,
  methodName: string,
  serializedArgs: any[],
  extraInstructions?: ExtraInstruction[]
) => {
  const args = deserializeValue(serializedArgs);
  let rtnValue = instance[methodName].apply(instance, args);

  if (extraInstructions) {
    extraInstructions.forEach((extra) => {
      if (extra.$setAttributeName$) {
        rtnValue.setAttribute(extra.$setAttributeName$, extra.$setAttributeValue$);
      }
    });
  }
  if (isPromise(rtnValue)) {
    rtnValue = await rtnValue;
    accessRsp.$isPromise$ = true;
  }
  accessRsp.$rtnValue$ = serializeValue(rtnValue, new Set());
};
