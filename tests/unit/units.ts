import type { PartytownWebWorker, WebWorkerEnvironment } from '../../src/lib/types';
import { environments } from '../../src/lib/web-worker/worker-constants';

export function getWindow(): any {
  return {};
}

export function getDocument(): any {
  const doc = {
    head: {
      appendChild(node: any) {
        doc.head.childNodes.push(node);
      },
      childNodes: [] as any[],
    },
    createElement(tagName: string) {
      return { tagName: tagName.toUpperCase() };
    },
  };
  return doc;
}

export function getWorker(): TestWorker {
  const $messages: any[] = [];
  return {
    postMessage(...args: any[]) {
      $messages.push(args);
    },
    $messages,
  } as any;
}

export function createWorkerWindownEnvironment(winId: number) {
  for (const winId in environments) {
    delete environments[winId];
  }

  environments[winId] = {
    $winId$: winId,
    $parentWinId$: winId,
    $window$: {} as any,
    $document$: {} as any,
    $documentElement$: {} as any,
    $head$: {} as any,
    $body$: {} as any,
    $location$: {} as any,
  };

  return environments[winId];
}

export interface TestWorker extends PartytownWebWorker {
  $messages: any[];
}
