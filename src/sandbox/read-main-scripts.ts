import type { InitializeScriptData, WorkerGroups } from '../types';

export const readMainScripts = (mainDocument: Document) => {
  const workerGroups: WorkerGroups = {};
  const scripts = mainDocument.querySelectorAll<HTMLScriptElement>('script[type="text/partytown"]');

  scripts.forEach((scriptElm, $id$) => {
    if (!scriptElm.dataset.partytownId) {
      const workerName = scriptElm.dataset.worker || 'default';
      const scriptData: InitializeScriptData = {
        $id$,
      };

      if (scriptElm.hasAttribute('src')) {
        scriptData.$url$ = scriptElm.src;
      } else {
        scriptData.$content$ = scriptElm.innerHTML;
      }

      scriptElm.dataset.partytownId = $id$ as any;

      (workerGroups[workerName] = workerGroups[workerName] || []).push(scriptData);
    }
  });

  return workerGroups;
};
