import {
  AccessType,
  MainAccessRequest,
  MainAccessResponse,
  MainWindowContext,
  WorkerMessageType,
} from '../types';
import { deserializeFromWorker, serializeForWorker } from './main-serialization';
import { EMPTY_ARRAY, isPromise, len } from '../utils';
import { forwardMsgResolves, winCtxs } from './main-constants';
import { getInstance, setInstanceId } from './main-instances';

export const mainAccessHandler = async (
  winCtx: MainWindowContext,
  accessReq: MainAccessRequest
) => {
  let accessRsp: MainAccessResponse = {
    $msgId$: accessReq.$msgId$,
    $winId$: accessReq.$winId$,
  };

  let instanceId = accessReq.$instanceId$;
  let accessType = accessReq.$accessType$;
  let memberPath = accessReq.$memberPath$;
  let memberPathLength = len(memberPath);
  let lastMemberName = memberPath[memberPathLength - 1];
  let immediateSetters = accessReq.$immediateSetters$ || EMPTY_ARRAY;
  let instance: any;
  let rtnValue: any;
  let data: any;
  let i: number;
  let count: number;
  let tmr: any;
  let immediateSetterTarget: any;
  let immediateSetterMemberPath;
  let immediateSetterMemberNameLen;

  try {
    // deserialize the data, such as a getter value or function arguments
    data = deserializeFromWorker(accessReq.$data$);

    if (accessReq.$forwardToWorkerAccess$) {
      // same as continue;
    } else if (accessType === AccessType.GlobalConstructor) {
      // create a new instance of a global constructor
      setInstanceId(winCtx, new (winCtx.$window$ as any)[lastMemberName](...data), instanceId);
    } else {
      // get the existing instance
      instance = getInstance(accessRsp.$winId$, instanceId);
      if (instance) {
        for (i = 0; i < memberPathLength - 1; i++) {
          instance = instance[memberPath[i]];
        }

        if (accessType === AccessType.Get) {
          if (lastMemberName === '_ptId') {
            await new Promise<void>((resolve) => {
              count = 0;
              tmr = setInterval(() => {
                if (isMemberInInstance(instance, memberPath) || count > 99) {
                  clearInterval(tmr);
                  resolve();
                }
                count++;
              }, 40);
            });
          }
          rtnValue = instance[lastMemberName];
        } else if (accessType === AccessType.Set) {
          instance[lastMemberName] = data;
        } else if (accessType === AccessType.CallMethod) {
          rtnValue = instance[lastMemberName].apply(instance, data);

          immediateSetters.map((immediateSetter) => {
            immediateSetterTarget = rtnValue;
            immediateSetterMemberPath = immediateSetter[0];
            immediateSetterMemberNameLen = len(immediateSetterMemberPath);

            for (i = 0; i < immediateSetterMemberNameLen - 1; i++) {
              immediateSetterTarget = immediateSetterTarget[immediateSetterMemberPath[i]];
            }

            immediateSetterTarget[immediateSetterMemberPath[immediateSetterMemberNameLen - 1]] =
              deserializeFromWorker(immediateSetter[1]);
          });

          if (accessReq.$newInstanceId$) {
            setInstanceId(winCtx, rtnValue, accessReq.$newInstanceId$);
          }
        }

        if (isPromise(rtnValue)) {
          rtnValue = await rtnValue;
          accessRsp.$isPromise$ = true;
        }
        accessRsp.$rtnValue$ = serializeForWorker(winCtx, rtnValue);
      } else {
        accessRsp.$error$ = `${instanceId} not found`;
      }
    }
  } catch (e: any) {
    accessRsp.$error$ = String(e.stack || e);
  }

  if (accessReq.$forwardToWorkerAccess$) {
    return new Promise<MainAccessResponse>((resolve) => {
      const forwardToWinId = accessReq.$contextWinId$ || accessReq.$winId$;
      const otherWinCtx = winCtxs.get(forwardToWinId);

      tmr = setTimeout(() => {
        forwardMsgResolves.delete(accessReq.$msgId$);
        accessRsp.$error$ = `Timeout`;
        resolve(accessRsp);
      }, 30000);

      forwardMsgResolves.set(accessReq.$msgId$, [resolve, tmr]);
      otherWinCtx!.$worker$!.postMessage([WorkerMessageType.ForwardWorkerAccessRequest, accessReq]);
    });
  } else {
    return accessRsp;
  }
};

const isMemberInInstance = (instance: any, memberPath: string[]) => memberPath[0] in instance;
