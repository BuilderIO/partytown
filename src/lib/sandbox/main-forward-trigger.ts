import { len } from '../utils';
import {
  MainWindow,
  MainWindowContext,
  PartytownForwardProperty,
  PlatformInstanceId,
  WorkerMessageType,
} from '../types';
import { serializeForWorker } from './main-serialization';

export const mainForwardTrigger = (winCtx: MainWindowContext, win: MainWindow) => {
  let existingTriggers = win._ptf;
  let forwardTriggers: any = (win._ptf = []);
  let i = 0;

  // see src/lib/main/snippet.ts and src/lib/web-worker/worker-forwarded-trigger.ts
  (forwardTriggers as any).push = ($forward$: PartytownForwardProperty, $args$: any[]) =>
    winCtx.$worker$!.postMessage([
      WorkerMessageType.ForwardMainTrigger,
      {
        $winId$: winCtx.$winId$,
        $instanceId$: PlatformInstanceId.window,
        $forward$,
        $args$: serializeForWorker(winCtx, Array.from($args$)),
      },
    ]);

  if (existingTriggers) {
    for (; i < len(existingTriggers); i += 2) {
      forwardTriggers.push(existingTriggers[i], existingTriggers[i + 1]);
    }
  }
};
