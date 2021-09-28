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
import { len } from '../utils';
import { webWorkerCtx } from './worker-constants';

export const workerAccessHandler = (accessReq: MainAccessRequest) => {
  const $winId$ = accessReq.$winId$;
  const accessRsp: MainAccessResponse = {
    $msgId$: accessReq.$msgId$,
    $winId$,
    $errors$: [],
  };

  for (const accessReqTask of accessReq.$tasks$) {
    let instanceId = accessReqTask.$instanceId$;
    let accessType = accessReqTask.$accessType$;
    let memberPath = accessReqTask.$memberPath$;
    let memberPathLength = len(memberPath);
    let lastMemberName = memberPath[memberPathLength - 1];

    let instance: any;
    let rtnValue: any;
    let data: any;
    let i: number;

    try {
      instance = constructSerializedInstance({ ...accessReqTask, $winId$ });

      for (i = 0; i < memberPathLength - 1; i++) {
        instance = instance[memberPath[i]];
      }

      data = deserializeFromMain($winId$, instanceId, memberPath, accessReqTask.$data$);

      if (accessType === AccessType.Get) {
        rtnValue = instance[lastMemberName];
      } else if (accessType === AccessType.Set) {
        instance[lastMemberName] = data;
      } else if (accessType === AccessType.CallMethod) {
        if (instanceId === PlatformInstanceId.document && lastMemberName === 'createElement') {
          rtnValue = callMethod(
            instance,
            memberPath,
            data,
            accessReqTask.$immediateSetters$,
            accessReqTask.$newInstanceId$
          );
        } else {
          rtnValue = instance[lastMemberName].apply(instance, data);
        }
      }

      accessRsp.$rtnValue$ = serializeForMain($winId$, instanceId, rtnValue);
    } catch (e: any) {
      accessRsp.$errors$.push(String(e.stack || e));
    }
  }

  webWorkerCtx.$postMessage$([WorkerMessageType.ForwardWorkerAccessResponse, accessRsp]);
};
