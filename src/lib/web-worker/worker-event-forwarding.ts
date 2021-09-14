import { deserializeFromMain } from './worker-serialization';

export const workerEventForwarding = (forwardConfig: string, forwardArgs: any) => {
  let args = deserializeFromMain({}, [], forwardArgs);
  let target = self as any;
  let fn: any;

  forwardConfig.split('.').forEach((forwardProp, index, arr) => {
    if (target) {
      fn = target[forwardProp];
      if (index === arr.length - 1 && typeof fn === 'function') {
        fn.apply(target, args);
      } else {
        target = target[forwardProp];
      }
    }
  });
};
