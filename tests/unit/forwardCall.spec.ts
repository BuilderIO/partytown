import * as assert from 'uvu/assert';
import { snippet } from '../../src/lib/main/snippet';
import { suite } from './utils';
import { mainForwardCall } from '../../src/lib/sandbox/main-forward-call';
import { SerializedType, WorkerMessageType } from '../../src/lib/types';
import { workerForwardedCallHandle } from '../../src/lib/web-worker/worker-forwarded-call';

const test = suite();

const queuedCallsWithoutCallId = (queuedCalls: any[]) => {
  return queuedCalls.filter((queuedCall) => {
    return typeof queuedCall !== 'string';
  });
};

test('patch multiple functions on same object window.obj, queue calls', ({
  win,
  document,
  navigator,
}) => {
  win.partytown = {
    forwardCall: ['objA.fn0', 'objA.fn1', 'objA.fn2', 'objA.objB.fn3', 'objA.objC.fn4'],
  };
  snippet(win, document, navigator, win, false);
  assert.type(win.objA, 'object');
  assert.type(win.objA.fn0, 'function');
  assert.type(win.objA.fn1, 'function');
  assert.type(win.objA.fn2, 'function');
  assert.type(win.objA.objB.fn3, 'function');
  assert.type(win.objA.objC.fn4, 'function');
  assert.equal(win._ptfc, undefined);

  win.objA.fn0('a').catch(() => {});
  win.objA.objB.fn3('b').catch(() => {});
  win.objA.objC.fn4('c').catch(() => {});
  assert.equal(
    JSON.stringify(queuedCallsWithoutCallId(win._ptfc)),
    `[["objA","fn0"],{"0":"a"},["objA","objB","fn3"],{"0":"b"},["objA","objC","fn4"],{"0":"c"}]`
  );
});

test('run window.arr.push() in the web worker', ({
  winId,
  win,
  env,
  worker,
  document,
  navigator,
  top,
}) => {
  win.partytown = {
    forwardCall: ['arr.push'],
  };
  snippet(win, document, navigator, top, false);

  mainForwardCall(worker, winId, win);

  win.arr.push('a', 'b').catch(() => {});

  const wwArray = ((env.$window$ as any).arr = []);

  const msg = worker.$messages[0][0][1];
  workerForwardedCallHandle(msg);
  assert.equal(wwArray[0], 'a');
  assert.equal(wwArray[1], 'b');
});

test('run window.fn() in the web worker', ({
  winId,
  win,
  env,
  worker,
  document,
  navigator,
  top,
}) => {
  win.partytown = {
    forwardCall: ['fn'],
  };
  snippet(win, document, navigator, top, false);

  mainForwardCall(worker, winId, win);

  win.fn('a', 'b').catch(() => {});

  let fnCallArgs: any;
  (env.$window$ as any).fn = function () {
    fnCallArgs = arguments;
  };

  const msg = worker.$messages[0][0][1];
  workerForwardedCallHandle(msg);
  assert.equal(fnCallArgs[0], 'a');
  assert.equal(fnCallArgs[1], 'b');
});

test('run window.arr.push() call after initialized', ({
  winId,
  win,
  worker,
  document,
  navigator,
  top,
}) => {
  win.partytown = {
    forwardCall: ['arr.push'],
  };
  snippet(win, document, navigator, top, false);

  mainForwardCall(worker, winId, win);

  win.arr.push('a', 'b').catch(() => {});

  const msg = worker.$messages[0][0];
  assert.equal(msg[0], WorkerMessageType.ForwardMainCall);
  assert.equal(msg[1].$winId$, winId);
  assert.equal(msg[1].$forward$, ['arr', 'push']);
  assert.equal(msg[1].$args$[0], SerializedType.Array);
});

test('run queued window.arr.push() call', async ({
  winId,
  win,
  worker,
  document,
  navigator,
  top,
}) => {
  win.partytown = {
    forwardCall: ['arr.push'],
  };
  snippet(win, document, navigator, top, false);

  win.arr.push('a', 'b').catch(() => {});

  mainForwardCall(worker, winId, win);

  assert.equal(worker.$messages.length, 1);
  const msg = worker.$messages[0][0];
  assert.equal(msg[0], WorkerMessageType.ForwardMainCall);
  assert.equal(msg[1].$winId$, winId);
  assert.equal(msg[1].$forward$, ['arr', 'push']);
  assert.equal(msg[1].$args$[0], SerializedType.Array);
});

test('run queued window.fn() call', ({ winId, win, worker, document, navigator, top }) => {
  win.partytown = {
    forwardCall: ['fn'],
  };
  snippet(win, document, navigator, win, false);
  win.fn('a', 'b').catch(() => {});

  mainForwardCall(worker, winId, win);
  assert.equal(worker.$messages.length, 1);
  const msg = worker.$messages[0][0];
  assert.equal(msg[0], WorkerMessageType.ForwardMainCall);
  assert.equal(msg[1].$winId$, winId);
  assert.equal(msg[1].$forward$, ['fn']);
  assert.equal(msg[1].$args$[0], SerializedType.Array);
});

test('patch window.obj.arr.push(), queue calls', ({ win, document, navigator }) => {
  win.partytown = {
    forwardCall: ['obj.arr.push', 'a.b.c'],
  };
  snippet(win, document, navigator, win, false);
  assert.type(win.obj, 'object');
  assert.equal(Array.isArray(win.obj.arr), true);
  assert.equal(win._ptfc, undefined);

  win.obj.arr.push('a', 'b').catch(() => {});
  win.a.b.c('z').catch(() => {});
  assert.equal(
    JSON.stringify(queuedCallsWithoutCallId(win._ptfc)),
    `[["obj","arr","push"],{"0":"a","1":"b"},["a","b","c"],{"0":"z"}]`
  );
});

test('patch window.arr.push(), queue calls', ({ win, document, navigator }) => {
  win.partytown = {
    forwardCall: ['arr.push'],
  };
  snippet(win, document, navigator, win, false);
  assert.equal(Array.isArray(win.arr), true);
  assert.type(win.arr.push, 'function');
  assert.equal(win._ptfc, undefined);

  win.arr.push('a', 'b').catch(() => {});
  assert.equal(
    JSON.stringify(queuedCallsWithoutCallId(win._ptfc)),
    `[["arr","push"],{"0":"a","1":"b"}]`
  );
});

test('patch window.obj.fn(), queue calls', ({ win, document, navigator }) => {
  win.partytown = {
    forwardCall: ['obj.fn'],
  };
  snippet(win, document, navigator, win, false);
  assert.type(win.fn, 'undefined');
  assert.type(win.obj, 'object');
  assert.type(win.obj.fn, 'function');
  assert.equal(win._ptfc, undefined);

  win.obj.fn('a', 'b').catch(() => {});
  assert.equal(
    JSON.stringify(queuedCallsWithoutCallId(win._ptfc)),
    `[["obj","fn"],{"0":"a","1":"b"}]`
  );
});

test('patch window.fn(), queue calls', ({ win, document, navigator }) => {
  win.partytown = {
    forwardCall: ['fn'],
  };
  snippet(win, document, navigator, win, false);
  assert.type(win.fn, 'function');
  assert.equal(win._ptfc, undefined);

  win.fn('a', 'b').catch(() => {});
  assert.equal(JSON.stringify(queuedCallsWithoutCallId(win._ptfc)), `[["fn"],{"0":"a","1":"b"}]`);

  win.fn('c').catch(() => {});
  assert.equal(
    JSON.stringify(queuedCallsWithoutCallId(win._ptfc)),
    `[["fn"],{"0":"a","1":"b"},["fn"],{"0":"c"}]`
  );
});

test('no window._ptfc if no forward config', ({ window, document, navigator }) => {
  snippet(window, document, navigator, window, false);
  assert.equal(window._ptfc, undefined);

  window.partytown = {};
  snippet(window, document, navigator, window, false);
  assert.equal(window._ptfc, undefined);

  window.partytown = { forwardCall: [] };
  snippet(window, document, navigator, window, false);
  assert.equal(window._ptfc, undefined);
});

test.run();
