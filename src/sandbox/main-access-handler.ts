import { AccessType, ExtraInstruction, MainAccessRequest, MainAccessResponse } from '../types';
import { deserializeFromWorker, serializeForWorker } from './main-serialization';
import { getInstance, getAndSetInstanceId } from './main-instances';
import { isPromise, len, PT_SCRIPT_TYPE } from '../utils';

export const mainAccessHandler = async (accessReq: MainAccessRequest) => {
  const accessType = accessReq.$accessType$;
  const memberPath = accessReq.$memberPath$;
  const instanceId = accessReq.$instanceId$;
  const extraInstructions = accessReq.$extraInstructions$;
  const accessRsp: MainAccessResponse = {
    $msgId$: accessReq.$msgId$,
    $instanceId$: instanceId,
  };

  try {
    const instance = getInstance(instanceId);
    const data = deserializeFromWorker(instanceId, accessReq.$data$);

    if (instance) {
      if (accessType === AccessType.Get) {
        await getInstanceMember(accessRsp, instance, memberPath);
      } else if (accessType === AccessType.CallMethod) {
        await callInstanceMethod(accessRsp, instance, memberPath, data, extraInstructions);
      } else if (accessType === AccessType.Set) {
        setInstanceMember(instance, memberPath, data);
      }
    } else {
      accessRsp.$error$ = `Instance ${instanceId} not found`;
    }
  } catch (e) {
    accessRsp.$error$ = String(e.stack || e);
  }

  return accessRsp;
};

const getInstanceMember = async (
  accessRsp: MainAccessResponse,
  instance: any,
  memberPath: string[]
) => {
  let memberPathLength = len(memberPath);
  let getterValue: any = undefined;
  if (memberPathLength === 1) {
    getterValue = instance[memberPath[0]];
  } else if (memberPathLength === 2) {
    getterValue = instance[memberPath[0]][memberPath[1]];
  }

  if (isPromise(getterValue)) {
    getterValue = await getterValue;
    accessRsp.$isPromise$ = true;
  }
  accessRsp.$rtnValue$ = serializeForWorker(getterValue, new Set());
};

const setInstanceMember = (instance: any, memberPath: string[], setterValue: any) => {
  const memberPathLength = len(memberPath);
  if (memberPathLength === 1) {
    instance[memberPath[0]] = setterValue;
  } else if (memberPathLength === 2) {
    instance[memberPath[0]][memberPath[1]] = setterValue;
  }
};

const callInstanceMethod = async (
  accessRsp: MainAccessResponse,
  instance: any,
  memberPath: string[],
  args: any[],
  extraInstructions?: ExtraInstruction[]
) => {
  const memberPathLength = len(memberPath);
  let rtnValue: any = undefined;

  if (memberPathLength === 1) {
    rtnValue = instance[memberPath[0]].apply(instance, args);
  } else if (memberPathLength === 2) {
    rtnValue = instance[memberPath[0]][memberPath[1]].apply(instance[memberPath[0]], args);
  }

  if (isPromise(rtnValue)) {
    rtnValue = await rtnValue;
    accessRsp.$isPromise$ = true;
  }

  accessRsp.$rtnValue$ = serializeForWorker(rtnValue, new Set());

  if (extraInstructions) {
    extraInstructions.forEach((extra) => {
      if (extra === ExtraInstruction.SET_INERT_IMG) {
        (rtnValue as HTMLImageElement).hidden = true;
      }
      if (extra === ExtraInstruction.SET_INERT_SCRIPT) {
        (rtnValue as HTMLScriptElement).type = PT_SCRIPT_TYPE;
      }
      if (extra === ExtraInstruction.SET_PARTYTOWN_ID) {
        rtnValue.dataset.partytownId = getAndSetInstanceId(rtnValue);
      }
    });
  }
};
