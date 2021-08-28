import type { MainContext, MainWindow } from '../types';

export const mainCtx: MainContext = {} as any;

export const setMainContext = ($sandboxWindow$: MainWindow, $sandboxDocument$: Document) => {
  const $window$: MainWindow = $sandboxWindow$.parent!;
  const $document$ = $window$.document;
  const ctx: MainContext = {
    $body$: $document$.body,
    $config$: $window$.partytown || {},
    $document$,
    $documentElement$: $document$.documentElement,
    $head$: $document$.head,
    $history$: $window$.history,
    $localStorage$: $window$.localStorage,
    $sandboxDocument$,
    $sandboxWindow$,
    $sessionStorage$: $window$.sessionStorage,
    $url$: $window$.location + '',
    $window$,
    $workerPostMessage$: [],
  };
  Object.assign(mainCtx, ctx);
};
