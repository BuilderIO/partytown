import { suite as uvuSuite } from 'uvu';
import type { MainWindow, PartytownWebWorker, WebWorkerEnvironment } from '../../src/lib/types';
import { environments } from '../../src/lib/web-worker/worker-constants';
import { createWindow } from 'domino';

export const suite = (title?: string) => {
  const s = uvuSuite<TestContext>(title);

  s.before.each((ctx) => {
    ctx.winId = Math.round(Math.random() * 10000);
    ctx.win = ctx.window = getWindow();
    ctx.top = ctx.win;
    ctx.doc = ctx.document = ctx.window.document;
    ctx.nav = ctx.navigator = getNavigator();
    ctx.worker = getWorker();
    ctx.env = createWorkerWindownEnvironment(ctx.winId);

    ctx.doc.addEventListener = (_: any, cb: any) => cb();
  });

  return s;
};

export interface TestContext {
  winId: number;
  /**
   * Same as "win", but IS typed
   */
  window: MainWindow;
  /**
   * Same as "window", but NOT typed
   */
  win: any;
  top: any;
  /**
   * Same as "doc", but IS typed
   */
  document: Document;
  /**
   * Same as "document", but NOT typed
   */
  doc: any;
  /**
   * Same as "nav", but NOT typed
   */
  navigator: TestNavigator;
  /**
   * Same as "navigator", but NOT typed
   */
  nav: any;
  worker: TestWorker;
  env: WebWorkerEnvironment;
}

function getWindow(): any {
  const win: any = createWindow();
  win.top = win.self = win.parent = win.window = win;
  win.document.readyState = 'complete';
  return win;
}

function getNavigator(): any {
  const nav: TestNavigator = {} as any;
  (nav as any).serviceWorker = {
    register(scriptUrl: string, opts: any) {
      nav.$serviceWorkerUrl = scriptUrl;
      nav.$serviceWorkerOptions = opts;
      return {
        then(cb: any) {
          cb({ active: true });
        },
      };
    },
  };
  return nav;
}

function getWorker(): TestWorker {
  const $messages: any[] = [];
  return {
    postMessage(...args: any[]) {
      $messages.push(args);
    },
    $messages,
  } as any;
}

export interface TestWorker extends PartytownWebWorker {
  $messages: any[];
}

export interface TestNavigator extends Navigator {
  $serviceWorkerUrl?: string;
  $serviceWorkerOptions?: any;
}

function createWorkerWindownEnvironment(winId: number) {
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
