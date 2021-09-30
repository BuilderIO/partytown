import { debug, logMain, PT_INITIALIZED_EVENT, SCRIPT_TYPE } from '../utils';
import { getAndSetInstanceId } from './main-instances';
import { MainWindowContext, InitializeScriptData, WorkerMessageType } from '../types';
import { mainForwardTrigger } from './main-forward-trigger';

export const readNextScript = (winCtx: MainWindowContext) => {
  const $winId$ = winCtx.$winId$;
  const win = winCtx.$window$;
  const doc = win.document;
  const scriptElm = doc.querySelector<HTMLScriptElement>(
    `script[type="${SCRIPT_TYPE}"]:not([data-pt-id]):not([data-pt-error])`
  );

  if (scriptElm) {
    // read the next script found
    const $instanceId$ = getAndSetInstanceId(winCtx, scriptElm, $winId$);

    const scriptData: InitializeScriptData = {
      $winId$,
      $instanceId$,
    };

    scriptElm.dataset.ptId = $winId$ + '.' + $instanceId$;

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
      win.frameElement._ptId = $winId$;
    }

    mainForwardTrigger(winCtx, win);

    doc.dispatchEvent(new CustomEvent(PT_INITIALIZED_EVENT));

    if (debug) {
      logMain(winCtx, `Startup ${(performance.now() - winCtx.$startTime$!).toFixed(1)}ms`);
    }
  }
};

export const initializedWorkerScript = (
  winCtx: MainWindowContext,
  doc: Document,
  instanceId: number,
  errorMsg: string,
  script?: HTMLScriptElement | null
) => {
  script = doc.querySelector<HTMLScriptElement>(
    '[data-pt-id="' + winCtx.$winId$ + '.' + instanceId + '"]'
  );
  if (script) {
    if (errorMsg) {
      script.dataset.ptError = errorMsg;
    } else {
      script.type += '-init';
    }
  }
  readNextScript(winCtx);
};
