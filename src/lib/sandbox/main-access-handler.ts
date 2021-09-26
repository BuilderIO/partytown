import { AccessType, MainAccessRequest, MainAccessResponse, MainWindowContext } from '../types';
import { deserializeFromWorker, serializeForWorker } from './main-serialization';
import { EMPTY_ARRAY, isPromise, len } from '../utils';
import { forwardToWinAccessHandler } from './messenger';
import { getInstance, setInstanceId } from './main-instances';

export const mainAccessHandler = async (
  winCtx: MainWindowContext,
  accessReq: MainAccessRequest
) => {
  if (accessReq.$forwardToWin$) {
    return forwardToWinAccessHandler(winCtx.$worker$!, accessReq);
  }

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
    let immediateSetterName: string;

    try {
      instance = getInstance(winCtx, instanceId);

      if (instance) {
        for (i = 0; i < memberPathLength - 1; i++) {
          instance = instance[memberPath[i]];
        }

        data = deserializeFromWorker(winCtx, instanceId, accessReqTask.$data$);

        if (accessType === AccessType.Get) {
          if (lastMemberName === 'partyWinId') {
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
            immediateSetterName = immediateSetter[0][0];
            rtnValue[immediateSetterName] = deserializeFromWorker(
              winCtx,
              instanceId,
              immediateSetter[1]
            );
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
    } catch (e: any) {
      accessRsp.$errors$.push(String(e.stack || e));
    }
  }
  return accessRsp;
};

const isMemberInInstance = (instance: any, memberPath: string[]) => memberPath[0] in instance;
