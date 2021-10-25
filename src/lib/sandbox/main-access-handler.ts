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
  const errors: string[] = [];

  for (const task of accessReq.$tasks$) {
    try {
      let winId = task.$winId$;
      let instanceId = task.$instanceId$;
      let applyPath = task.$applyPath$;
      let instance: any;
      let rtnValue: any;

      if (!winCtxs[winId]) {
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

      if (applyPath[0] === ApplyPathType.GlobalConstructor) {
        // create a new instance of a global constructor
        const constructedInstance = new (winCtxs[winId]!.$window$ as any)[applyPath[1]](
          ...deserializeFromWorker(worker, applyPath[2])
        );

        setInstanceId(constructedInstance, instanceId);
      } else {
        // get the existing instance
        instance = getInstance(winId, instanceId);
        if (instance) {
          rtnValue = applyToInstance(worker, instance, applyPath);

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
      errors.push(String(e.stack || e));
    }
  }

  if (len(errors)) {
    accessRsp.$error$ = errors.join('\n');
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
        if ($dimensionPropNames$.includes(current) && typeof instance[current] === 'number') {
          const dimensionValues: any = { ptD: 9 };
          $dimensionPropNames$.map((propName) => (dimensionValues[propName] = instance[propName]));
          return dimensionValues;
        }

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

export const $dimensionPropNames$ =
  'innerHeight,innerWidth,outerHeight,outerWidth,clientHeight,clientWidth,clientTop,clientLeft,scrollHeight,scrollWidth,scrollTop,scrollLeft,offsetHeight,offsetWidth,offsetTop,offsetLeft,height,width,availHeight,availWidth,screenLeft,screenTop,screenX,screenY'.split(
    ','
  );
