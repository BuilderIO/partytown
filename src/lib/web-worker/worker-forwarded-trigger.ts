import { deserializeFromMain } from './worker-serialization';
import type { ForwardMainTriggerData } from '../types';

export const workerForwardedTriggerHandle = ({
  $winId$,
  $instanceId$,
  $args$,
  $config$,
}: ForwardMainTriggerData) => {
  let args = deserializeFromMain($winId$, $instanceId$, [], $args$);
  let target = self as any;
  let fn: any;

  $config$.split('.').forEach((forwardProp, index, arr) => {
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
