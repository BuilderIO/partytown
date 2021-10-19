import { len } from '../utils';
import {
  MainWindow,
  PartytownForwardProperty,
  PartytownWebWorker,
  PlatformInstanceId,
  WorkerMessageType,
} from '../types';
import { serializeForWorker } from './main-serialization';

export const mainForwardTrigger = (
  worker: PartytownWebWorker,
  $winId$: number,
  win: MainWindow
) => {
  let existingTriggers = win._ptf;
  let forwardTriggers: any = (win._ptf = []);
  let i = 0;

  // see src/lib/main/snippet.ts and src/lib/web-worker/worker-forwarded-trigger.ts
  (forwardTriggers as any).push = ($forward$: PartytownForwardProperty, $args$: any[]) =>
    worker.postMessage([
      WorkerMessageType.ForwardMainTrigger,
      {
        $winId$,
        $instanceId$: PlatformInstanceId.window,
        $forward$,
        $args$: serializeForWorker($winId$, Array.from($args$)),
      },
    ]);

  if (existingTriggers) {
    for (; i < len(existingTriggers); i += 2) {
      forwardTriggers.push(existingTriggers[i], existingTriggers[i + 1]);
    }
  }
};
