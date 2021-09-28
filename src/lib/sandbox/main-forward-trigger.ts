import { len } from '../utils';
import { MainWindow, MainWindowContext, PlatformInstanceId, WorkerMessageType } from '../types';
import { serializeForWorker } from './main-serialization';

export const mainForwardTrigger = (winCtx: MainWindowContext, win: MainWindow) => {
  let forwardedTriggers = win._ptf;
  let i = 0;

  if (forwardedTriggers) {
    (win._ptf as any).push = ($config$: string, $args$: any[]) =>
      winCtx.$worker$!.postMessage([
        WorkerMessageType.ForwardMainTrigger,
        {
          $winId$: winCtx.$winId$,
          $instanceId$: PlatformInstanceId.window,
          $config$,
          $args$: serializeForWorker(winCtx, Array.from($args$)),
        },
      ]);

    for (; i < len(forwardedTriggers as any[]); i += 2) {
      win._ptf!.push(forwardedTriggers[i], forwardedTriggers[i + 1]);
    }
    forwardedTriggers.length = 0;
  }
};
