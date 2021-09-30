import { deserializeFromMain } from './worker-serialization';
import type { ForwardMainTriggerData } from '../types';

export const workerForwardedTriggerHandle = ({
  $winId$,
  $instanceId$,
  $forward$,
  $args$,
}: ForwardMainTriggerData) => {
  let args = deserializeFromMain($winId$, $instanceId$, [], $args$);
  let target = self as any;
  let globalProperty = target[$forward$[0]];

  // see src/lib/main/snippet.ts and src/lib/sandbox/main-forward-trigger.ts
  try {
    if (Array.isArray(globalProperty)) {
      globalProperty.push(...args);
    } else if (typeof globalProperty === 'function') {
      globalProperty.apply(target, args);
    }
  } catch (e) {
    console.error(e);
  }
};
