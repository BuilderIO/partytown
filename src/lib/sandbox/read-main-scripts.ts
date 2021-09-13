import { MainWindowContext, InitializeScriptData, WorkerMessageType } from '../types';
import { debug, logMain, PT_INITIALIZED_EVENT, PT_SCRIPT_TYPE } from '../utils';
import { getAndSetInstanceId } from './main-instances';

export const readNextScript = (winCtx: MainWindowContext) => {
  const $winId$ = winCtx.$winId$;
  const win = winCtx.$window$;
  const doc = win.document;
  const scriptElm = doc.querySelector<HTMLScriptElement>(
    `script[type="${PT_SCRIPT_TYPE}"]:not([data-pt-error])`
  );

  if (scriptElm) {
    // read the next script found
    const $instanceId$: number = (scriptElm.dataset.ptId = getAndSetInstanceId(
      winCtx,
      scriptElm,
      $winId$
    ) as any);

    const scriptData: InitializeScriptData = {
      $winId$,
      $instanceId$,
    };

    if (scriptElm.src) {
      scriptData.$url$ = scriptElm.src;
    } else {
      scriptData.$content$ = scriptElm.innerHTML;
    }

    winCtx.$worker$!.postMessage([WorkerMessageType.InitializeNextWorkerScript, scriptData]);
  } else if (!winCtx.$isInitialized$) {
    // finished startup
    winCtx.$isInitialized$ = true;

    if (win.frameElement) {
      win.frameElement.partyWinId = $winId$;
    }
    doc.dispatchEvent(new CustomEvent(PT_INITIALIZED_EVENT));

    if (debug) {
      logMain(winCtx, `Startup ${(performance.now() - winCtx.$startTime$!).toFixed(1)}ms`);
    }
  }
};

export const initializedWorkerScript = (
  winCtx: MainWindowContext,
  doc: Document,
  initializedScriptId: number,
  errorMsg: string,
  script?: HTMLScriptElement | null
) => {
  script = doc.querySelector<HTMLScriptElement>(`[data-pt-id="${initializedScriptId}"]`);
  if (script) {
    if (errorMsg) {
      script.dataset.ptError = errorMsg;
    } else {
      script.type += '-init';
    }
  }
  readNextScript(winCtx);
};
