import { AccessType, MainAccessRequest, MainAccessResponse, PartytownWebWorker } from '../types';
import { deserializeFromWorker, serializeForWorker } from './main-serialization';
import { EMPTY_ARRAY, isPromise, len } from '../utils';
import { getInstance, setInstanceId } from './main-instances';
import { getWinCtx } from './main-register-window';

export const mainAccessHandler = async (
  worker: PartytownWebWorker,
  accessReq: MainAccessRequest
) => {
  let $winId$ = accessReq.$winId$;
  let accessRsp: MainAccessResponse = {
    $msgId$: accessReq.$msgId$,
    $winId$,
  };
  let instanceId = accessReq.$instanceId$;
  let accessType = accessReq.$accessType$;
  let memberPath = accessReq.$memberPath$;
  let memberPathLength = len(memberPath);
  let lastMemberName = memberPath[memberPathLength - 1];
  let immediateSetters = accessReq.$immediateSetters$ || EMPTY_ARRAY;
  let winCtx = await getWinCtx($winId$);
  let instance: any;
  let rtnValue: any;
  let data: any;
  let i: number;
  let immediateSetterTarget: any;
  let immediateSetterAccessType: AccessType;
  let immediateSetterMemberPath: string[];

  try {
    // deserialize the data, such as a getter value or function arguments
    data = deserializeFromWorker(worker, accessReq.$data$);

    if (accessType === AccessType.GlobalConstructor) {
      // create a new instance of a global constructor
      setInstanceId(new (winCtx!.$window$ as any)[lastMemberName](...data), instanceId);
    } else {
      // get the existing instance
      instance = getInstance($winId$, instanceId);
      if (instance) {
        for (i = 0; i < memberPathLength - 1; i++) {
          instance = instance[memberPath[i]];
        }

        if (accessType === AccessType.Get) {
          rtnValue = instance[lastMemberName];
        } else if (accessType === AccessType.Set) {
          instance[lastMemberName] = data;
        } else if (accessType === AccessType.CallMethod) {
          rtnValue = instance[lastMemberName].apply(instance, data);

          immediateSetters.map((immediateSetter) => {
            immediateSetterTarget = rtnValue;
            immediateSetterAccessType = immediateSetter[0];
            immediateSetterMemberPath = immediateSetter[1];

            for (i = 0; i < len(immediateSetterMemberPath) - 1; i++) {
              immediateSetterTarget = immediateSetterTarget[immediateSetterMemberPath[i]];
            }

            if (immediateSetterAccessType === AccessType.Set) {
              immediateSetterTarget[immediateSetterMemberPath[len(immediateSetterMemberPath) - 1]] =
                deserializeFromWorker(worker, immediateSetter[2]);
            } else {
              immediateSetterTarget[
                immediateSetterMemberPath[len(immediateSetterMemberPath) - 1]
              ].apply(immediateSetterTarget, deserializeFromWorker(worker, immediateSetter[2]));
            }
          });

          if (accessReq.$assignInstanceId$) {
            setInstanceId(rtnValue, accessReq.$assignInstanceId$);
          }
        }

        if (isPromise(rtnValue)) {
          rtnValue = await rtnValue;
          accessRsp.$isPromise$ = true;
        }
        accessRsp.$rtnValue$ = serializeForWorker($winId$, rtnValue);
      } else {
        accessRsp.$error$ = instanceId + ' not found';
      }
    }
  } catch (e: any) {
    accessRsp.$error$ = String(e.stack || e);
  }

  return accessRsp;
};
