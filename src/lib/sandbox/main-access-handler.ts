import {
  AccessType,
  ExtraInstruction,
  MainAccessRequest,
  MainAccessResponse,
  MainWindowContext,
} from '../types';
import { deserializeFromWorker, serializeForWorker } from './main-serialization';
import { EMPTY_ARRAY, isPromise, len, PT_SCRIPT_TYPE } from '../utils';
import { forwardToWinAccessHandler } from './messenger';
import { getInstance } from './main-instances';

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
    let extraInstructions = accessReqTask.$extraInstructions$ || EMPTY_ARRAY;
    let instance: any;
    let rtnValue: any;
    let data: any;
    let i: number;
    let count: number;
    let tmr: any;

    try {
      instance = getInstance(winCtx, instanceId);

      if (instance) {
        for (i = 0; i < memberPathLength - 1; i++) {
          instance = instance[memberPath[i]];
        }

        data = deserializeFromWorker(winCtx, instanceId, accessReqTask.$data$);

        if (accessType === AccessType.Get) {
          if (extraInstructions.includes(ExtraInstruction.WAIT_FOR_INSTANCE_MEMBER)) {
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
          extraInstructions.forEach((extra, i) => {
            if (extra === ExtraInstruction.SET_INERT_SCRIPT) {
              (rtnValue as HTMLScriptElement).type = PT_SCRIPT_TYPE;
            }
            if (extra === ExtraInstruction.SET_IFRAME_SRCDOC) {
              (rtnValue as HTMLIFrameElement).srcdoc = extraInstructions[i + 1] as any;
            }
          });
        }

        if (isPromise(rtnValue)) {
          rtnValue = await rtnValue;
          accessRsp.$isPromise$ = true;
        }
        accessRsp.$rtnValue$ = serializeForWorker(winCtx, rtnValue, new Set());
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
