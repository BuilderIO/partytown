import {
  ApplyPath,
  ApplyPathType,
  MainAccessRequest,
  MainAccessResponse,
  PartytownWebWorker,
} from '../types';
import { deserializeFromWorker, serializeForWorker } from './main-serialization';
import { getInstance, setInstanceId } from './main-instances';
import { isPromise, len } from '../utils';
import { winCtxs } from './main-constants';

export const mainAccessHandler = async (
  worker: PartytownWebWorker,
  accessReq: MainAccessRequest
) => {
  const accessRsp: MainAccessResponse = {
    $msgId$: accessReq.$msgId$,
  };
  const totalTasks = len(accessReq.$tasks$);

  for (let i = 0; i < totalTasks; i++) {
    try {
      let task = accessReq.$tasks$[i];
      let winId = task.$winId$;
      let instanceId = task.$instanceId$;
      let applyPath = task.$applyPath$;
      let instance: any;
      let rtnValue: any;

      if (!winCtxs[winId]) {
        // window (iframe) hasn't finished loading yet
        await new Promise<void>((resolve) => {
          let i = 0;
          let callback = () => {
            if (winCtxs[winId] || i++ > 999) {
              resolve();
            } else {
              setTimeout(callback, 9);
            }
          };
          callback();
        });
      }

      if (
        applyPath[0] === ApplyPathType.GlobalConstructor &&
        applyPath[1] in winCtxs[winId]!.$window$
      ) {
        // create a new instance of a global constructor
        const constructedInstance = new (winCtxs[winId]!.$window$ as any)[applyPath[1]](
          ...deserializeFromWorker(worker, applyPath[2])
        );
        setInstanceId(constructedInstance, instanceId);
      } else {
        // get the existing instance
        instance = getInstance(winId, instanceId);
        if (instance) {
          rtnValue = applyToInstance(worker, instance, applyPath, task.$groupedGetters$);

          if (task.$assignInstanceId$) {
            setInstanceId(rtnValue, task.$assignInstanceId$);
          }

          if (isPromise(rtnValue)) {
            rtnValue = await rtnValue;
            accessRsp.$isPromise$ = true;
          }
          accessRsp.$rtnValue$ = serializeForWorker(winId, rtnValue);
        } else {
          accessRsp.$error$ = instanceId + ' not found';
        }
      }
    } catch (e: any) {
      if (i === totalTasks - 1) {
        // last task is the only one we can throw a sync error
        accessRsp.$error$ = String(e.stack || e);
      } else {
        // this is an error from an async setter, but we're
        // not able to throw a sync error, just console.error
        console.error(e);
      }
    }
  }

  return accessRsp;
};

const applyToInstance = (
  worker: PartytownWebWorker,
  instance: any,
  applyPath: ApplyPath,
  groupedGetters?: string[]
) => {
  let i = 0;
  let l = len(applyPath);
  let next: any;
  let current: any;
  let previous: any;
  let args: any[];

  for (; i < l; i++) {
    current = applyPath[i];
    next = applyPath[i + 1];
    previous = applyPath[i - 1];

    try {
      if (!Array.isArray(next)) {
        if (typeof current === 'string' || typeof current === 'number') {
          // getter
          if (i + 1 === l && groupedGetters) {
            // instead of getting one property, we actually want to get many properties
            // This is useful for getting all dimensions of an element in one call
            const groupedRtnValues: any = {};
            groupedGetters.map((propName) => (groupedRtnValues[propName] = instance[propName]));
            return groupedRtnValues;
          }

          // current is the member name, but not a method
          instance = instance[current];
        } else if (next === ApplyPathType.SetValue) {
          // setter
          // previous is the setter name
          // current is the setter value
          // next tells us this was a setter
          instance[previous] = deserializeFromWorker(worker, current);

          // setters never return a value
          return;
        } else if (typeof instance[previous] === 'function') {
          // method call
          // current is the method args
          // previous is the method name
          args = deserializeFromWorker(worker, current);

          if (previous === 'insertRule') {
            // possible that the async insertRule has thrown an error
            // and the subsequent async insertRule's have bad indexes
            if (args[1] > len(instance.cssRules)) {
              args[1] = len(instance.cssRules);
            }
          }
          instance = instance[previous].apply(instance, args);
        }
      }
    } catch (err) {
      console.warn(err)
    }
  }

  return instance;
};
