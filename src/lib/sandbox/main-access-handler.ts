import { AccessType, MainAccessRequest, MainAccessResponse, MainWindowContext } from '../types';
import { deserializeFromWorker, serializeForWorker } from './main-serialization';
import { EMPTY_ARRAY, isPromise, len } from '../utils';
import { forwardToWorkerAccessHandler } from './messenger';
import { getInstance, setInstanceId } from './main-instances';

export const mainAccessHandler = async (
  winCtx: MainWindowContext,
  accessReq: MainAccessRequest
) => {
  const accessRsp: MainAccessResponse = {
    $msgId$: accessReq.$msgId$,
    $winId$: accessReq.$winId$,
    $errors$: [],
  };

  for (const accessReqTask of accessReq.$tasks$) {
    let instanceId = accessReqTask.$instanceId$;
    let accessType = accessReqTask.$accessType$;
    let memberPath = accessReqTask.$memberPath$;
    let memberPathLength = len(memberPath);
    let lastMemberName = memberPath[memberPathLength - 1];
    let immediateSetters = accessReqTask.$immediateSetters$ || EMPTY_ARRAY;
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
      data = deserializeFromWorker(accessReqTask.$data$);

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

            if (accessReqTask.$newInstanceId$) {
              setInstanceId(winCtx, rtnValue, accessReqTask.$newInstanceId$);
            }
          }

          if (isPromise(rtnValue)) {
            rtnValue = await rtnValue;
            accessRsp.$isPromise$ = true;
          }
          accessRsp.$rtnValue$ = serializeForWorker(winCtx, rtnValue);
        } else {
          accessRsp.$errors$.push(`Instance ${instanceId} not found`);
        }
      }
    } catch (e: any) {
      accessRsp.$errors$.push(String(e.stack || e));
    }
  }

  if (accessReq.$forwardToWorkerAccess$) {
    return forwardToWorkerAccessHandler(winCtx.$worker$!, accessReq);
  } else {
    return accessRsp;
  }
};

const isMemberInInstance = (instance: any, memberPath: string[]) => memberPath[0] in instance;
