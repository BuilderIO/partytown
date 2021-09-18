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
  let instanceId = accessReq.$instanceId$;
  let accessType = accessReq.$accessType$;
  let memberPath = accessReq.$memberPath$;
  let memberPathLength = len(memberPath);
  let lastMemberName = memberPath[memberPathLength - 1];
  let extraInstructions = accessReq.$extraInstructions$ || EMPTY_ARRAY;
  let accessRsp: MainAccessResponse = {
    $winId$: accessReq.$winId$,
    $msgId$: accessReq.$msgId$,
    $instanceId$: instanceId,
  };
  let instance: any;
  let rtnValue: any;
  let data: any;
  let i: number;
  let count: number;
  let tmr: any;

  try {
    if (accessReq.$forwardToWin$) {
      return forwardToWinAccessHandler(winCtx.$worker$!, accessReq);
    }

    instance = getInstance(winCtx, instanceId);

    if (instance) {
      for (i = 0; i < memberPathLength - 1; i++) {
        instance = instance[memberPath[i]];
      }

      data = deserializeFromWorker(winCtx, instanceId, accessReq.$data$);

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
      accessRsp.$error$ = `Instance ${instanceId} not found`;
    }
  } catch (e: any) {
    accessRsp.$error$ = String(e.stack || e);
  }

  return accessRsp;
};

const isMemberInInstance = (instance: any, memberPath: string[]) => memberPath[0] in instance;
