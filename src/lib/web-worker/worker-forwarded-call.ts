import { deserializeFromMain } from './worker-serialization';
import { environments } from './worker-constants';
import type { ForwardMainCallData } from '../types';
import { len } from '../utils';

export const workerForwardedCallHandle = ({
  $winId$,
  $forward$,
  $callId$,
  $args$,
}: ForwardMainCallData) => {
  // see src/lib/main/snippet.ts and src/lib/sandbox/main-forward-call.ts
  try {
    const targetWindow = environments[$winId$].$window$

    let target: any = environments[$winId$].$window$;
    let i = 0;
    const l = len($forward$);

    for (; i < l; i++) {
      if (i + 1 < l) {
        target = target[$forward$[i]];
      } else {
        const $result$ = target[$forward$[i]].apply(
          target,
          deserializeFromMain(null, $winId$, [], $args$)
        );

        targetWindow.postMessage({
          $callId$,
          $result$,
        });
      }
    }
  } catch (e) {
    console.error(e);
  }
};
