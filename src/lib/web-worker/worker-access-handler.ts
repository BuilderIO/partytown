import {
  AccessType,
  MainAccessRequest,
  MainAccessResponse,
  PlatformInstanceId,
  WorkerMessageType,
} from '../types';
import { callMethod } from './worker-proxy';
import {
  constructSerializedInstance,
  deserializeFromMain,
  serializeForMain,
} from './worker-serialization';
import { getStateValue } from './worker-state';
import { len, logWorkerCall, logWorkerGetter, logWorkerSetter } from '../utils';
import { webWorkerCtx } from './worker-constants';

export const workerAccessHandler = (accessReq: MainAccessRequest) => {
  let $winId$ = accessReq.$winId$;
  let instanceId = accessReq.$instanceId$;
  let accessType = accessReq.$accessType$;
  let memberPath = accessReq.$memberPath$;

  let accessRsp: MainAccessResponse = {
    $msgId$: accessReq.$msgId$,
    $winId$,
  };

  let memberPathLength = len(memberPath);
  let lastMemberName = memberPath[memberPathLength - 1];

  let instance: any;
  let rtnValue: any;
  let data: any;
  let i: number;
  let stateValue: any;

  try {
    instance = constructSerializedInstance({ ...accessReq, $winId$ });

    stateValue = getStateValue(instanceId, memberPath[0]);
    if (stateValue) {
      instance[memberPath[0]] = deserializeFromMain($winId$, instanceId, memberPath, stateValue);
    }

    for (i = 0; i < memberPathLength - 1; i++) {
      instance = instance[memberPath[i]];
    }

    data = deserializeFromMain($winId$, instanceId, memberPath, accessReq.$data$);

    if (accessType === AccessType.Get) {
      rtnValue = instance[lastMemberName];
      logWorkerGetter(instance, memberPath, rtnValue, false);
    } else if (accessType === AccessType.Set) {
      logWorkerSetter(instance, memberPath, data, false);
      instance[lastMemberName] = data;
    } else if (accessType === AccessType.CallMethod) {
      if (instanceId === PlatformInstanceId.document && lastMemberName === 'createElement') {
        rtnValue = callMethod(
          instance,
          memberPath,
          data,
          accessReq.$immediateSetters$,
          accessReq.$newInstanceId$
        );
      } else {
        rtnValue = instance[lastMemberName].apply(instance, data);
      }
      logWorkerCall(instance, memberPath, data, rtnValue, false);
    }

    accessRsp.$rtnValue$ = serializeForMain($winId$, instanceId, rtnValue);
  } catch (e: any) {
    accessRsp.$error$ = String(e.stack || e);
  }

  webWorkerCtx.$postMessage$([WorkerMessageType.ForwardWorkerAccessResponse, accessRsp]);
};
