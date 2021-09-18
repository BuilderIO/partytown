import { AccessType, MainAccessRequest, MainAccessResponse, WorkerMessageType } from '../types';
import {
  constructSerializedInstance,
  deserializeFromMain,
  serializeForMain,
} from './worker-serialization';
import { len } from '../utils';
import { webWorkerCtx } from './worker-constants';

export const workerAccessHandler = (accessReq: MainAccessRequest) => {
  let $winId$ = accessReq.$winId$;
  let $instanceId$ = accessReq.$instanceId$;
  let accessType = accessReq.$accessType$;
  let memberPath = accessReq.$memberPath$;
  let memberPathLength = len(memberPath);
  let lastMemberName = memberPath[memberPathLength - 1];
  let accessRsp: MainAccessResponse = {
    $msgId$: accessReq.$msgId$,
    $winId$,
    $instanceId$,
  };
  let instance: any;
  let rtnValue: any;
  let data: any;
  let i: number;

  try {
    instance = constructSerializedInstance(accessReq);

    for (i = 0; i < memberPathLength - 1; i++) {
      instance = instance[memberPath[i]];
    }

    data = deserializeFromMain(self, memberPath, accessReq.$data$);

    if (accessType === AccessType.Get) {
      rtnValue = instance[lastMemberName];
    } else if (accessType === AccessType.Set) {
      instance[lastMemberName] = data;
    } else if (accessType === AccessType.CallMethod) {
      rtnValue = instance[lastMemberName].apply(instance, data);
    }

    accessRsp.$rtnValue$ = serializeForMain(rtnValue);
  } catch (e: any) {
    accessRsp.$error$ = String(e.stack || e);
  }

  webWorkerCtx.$postMessage$([WorkerMessageType.ForwardMainDataResponse, accessRsp]);
};
