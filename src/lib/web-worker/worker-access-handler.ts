import { AccessType, MainAccessRequest, MainAccessResponse, WorkerMessageType } from '../types';
import {
  constructSerializedInstance,
  deserializeFromMain,
  serializeForMain,
} from './worker-serialization';
import { len } from '../utils';
import { webWorkerCtx } from './worker-constants';

export const workerAccessHandler = (accessReq: MainAccessRequest) => {
  const accessRsp: MainAccessResponse = {
    $msgId$: accessReq.$msgId$,
    $winId$: accessReq.$winId$,
    $errors$: [],
  };

  for (const accessReqTask of accessReq.$tasks$) {
    let accessType = accessReqTask.$accessType$;
    let memberPath = accessReqTask.$memberPath$;
    let memberPathLength = len(memberPath);
    let lastMemberName = memberPath[memberPathLength - 1];

    let instance: any;
    let rtnValue: any;
    let data: any;
    let i: number;

    try {
      instance = constructSerializedInstance({ ...accessReqTask, $winId$: accessReq.$winId$ });

      for (i = 0; i < memberPathLength - 1; i++) {
        instance = instance[memberPath[i]];
      }

      data = deserializeFromMain(self, memberPath, accessReqTask.$data$);

      if (accessType === AccessType.Get) {
        rtnValue = instance[lastMemberName];
      } else if (accessType === AccessType.Set) {
        instance[lastMemberName] = data;
      } else if (accessType === AccessType.CallMethod) {
        rtnValue = instance[lastMemberName].apply(instance, data);
      }

      accessRsp.$rtnValue$ = serializeForMain(rtnValue, new Set());
    } catch (e: any) {
      accessRsp.$errors$.push(String(e.stack || e));
    }
  }

  webWorkerCtx.$postMessage$([WorkerMessageType.ForwardMainDataResponse, accessRsp]);
};
