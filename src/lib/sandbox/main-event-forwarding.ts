import { len } from '../utils';
import { MainWindow, MainWindowContext, WorkerMessageType } from '../types';
import { serializeForWorker } from './main-serialization';

export const mainEventForwarding = (winCtx: MainWindowContext, win: MainWindow) => {
  let forwardedEvents = win._ptf;
  let i = 0;

  if (forwardedEvents) {
    (win._ptf as any).push = (forwardConfig: string, forwardArgs: any[]) =>
      winCtx.$worker$!.postMessage([
        WorkerMessageType.ForwardEvent,
        forwardConfig,
        serializeForWorker(winCtx, Array.from(forwardArgs), new Set()),
      ]);

    for (; i < len(forwardedEvents as any[]); i += 2) {
      win._ptf!.push(forwardedEvents[i], forwardedEvents[i + 1]);
    }
    forwardedEvents.length = 0;
  }
};
