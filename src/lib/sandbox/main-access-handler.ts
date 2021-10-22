import {
  ApplyPath,
  ApplyPathType,
  MainAccessRequest,
  MainAccessResponse,
  PartytownWebWorker,
} from '../types';
import { deserializeFromWorker, serializeForWorker } from './main-serialization';
import { getInstance, setInstanceId } from './main-instances';
import { getWinCtx } from './main-register-window';
import { isPromise, len } from '../utils';

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
  let applyPath = accessReq.$applyPath$;
  let immediateSetters = accessReq.$immediateSetters$;
  let winCtx = await getWinCtx($winId$);
  let instance: any;
  let rtnValue: any;

  try {
    if (applyPath[0] === ApplyPathType.GlobalConstructor) {
      // create a new instance of a global constructor
      const constructedInstance = new (winCtx.$window$ as any)[applyPath[1]](
        ...deserializeFromWorker(worker, applyPath[2])
      );

      setInstanceId(constructedInstance, instanceId);
    } else {
      // get the existing instance
      instance = getInstance($winId$, instanceId);
      if (instance) {
        rtnValue = applyToInstance(worker, instance, applyPath);

        if (immediateSetters) {
          immediateSetters.map((immediateSetter) =>
            applyToInstance(worker, rtnValue, immediateSetter)
          );
        }

        if (accessReq.$assignInstanceId$) {
          setInstanceId(rtnValue, accessReq.$assignInstanceId$);
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

const applyToInstance = (worker: PartytownWebWorker, instance: any, applyPath: ApplyPath) => {
  let i = 0;
  let l = len(applyPath);
  let next: any;
  let current: any;
  let previous: any;

  for (; i < l; i++) {
    current = applyPath[i];
    next = applyPath[i + 1];
    previous = applyPath[i - 1];

    if (!Array.isArray(next)) {
      if (typeof current === 'string') {
        // current is the member name, but not a method
        instance = instance[current];
      } else if (next === ApplyPathType.SetValue) {
        // current is the setter value
        instance[previous] = deserializeFromWorker(worker, current);
      } else if (typeof instance[previous] === 'function') {
        // current is the method args
        // previous is the method name
        instance = instance[previous].apply(instance, deserializeFromWorker(worker, current));
      }
    }
  }

  return instance;
};
