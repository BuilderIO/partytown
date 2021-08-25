import type { InitializeScriptData, WorkerGroups } from '../types';
import { getInstanceId } from './main-instances';

export const readMainScripts = (mainDocument: Document) => {
  const workerGroups: WorkerGroups = {};
  const scripts = mainDocument.querySelectorAll<HTMLScriptElement>('script[type="text/partytown"]');

  scripts.forEach((scriptElm) => {
    if (!scriptElm.dataset.partytownId) {
      const instanceId: number = (scriptElm.dataset.partytownId = getInstanceId(scriptElm) as any);
      const workerName = scriptElm.dataset.worker || 'default';
      const scriptData: InitializeScriptData = {
        $instanceId$: instanceId,
      };

      if (scriptElm.src) {
        scriptData.$url$ = scriptElm.src;
      } else {
        scriptData.$content$ = scriptElm.innerHTML;
      }

      (workerGroups[workerName] = workerGroups[workerName] || []).push(scriptData);
    }
  });

  return workerGroups;
};
