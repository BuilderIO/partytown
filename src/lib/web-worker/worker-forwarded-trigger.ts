import { deserializeFromMain } from './worker-serialization';
import { environments } from './worker-constants';
import type { ForwardMainTriggerData } from '../types';

export const workerForwardedTriggerHandle = ({
  $winId$,
  $instanceId$,
  $forward$,
  $args$,
}: ForwardMainTriggerData) => {
  // see src/lib/main/snippet.ts and src/lib/sandbox/main-forward-trigger.ts
  try {
    const win = environments[$winId$].$window$;
    const target = $forward$[0] in win ? win : $forward$[0] in self ? (self as any) : {};
    const args = deserializeFromMain($instanceId$, [], $args$);
    const globalProperty = target[$forward$[0]];

    if (Array.isArray(globalProperty)) {
      globalProperty.push(...args);
    } else if (typeof globalProperty === 'function') {
      globalProperty.apply(target, args);
    }
  } catch (e) {
    console.error(e);
  }
};
