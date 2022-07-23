import * as assert from 'uvu/assert';
import { snippet } from '../../src/lib/main/snippet';
import { suite } from './utils';
import { mainForwardTrigger } from '../../src/lib/sandbox/main-forward-trigger';
import { SerializedType, WorkerMessageType } from '../../src/lib/types';
import { workerForwardedTriggerHandle } from '../../src/lib/web-worker/worker-forwarded-trigger';

const test = suite();

test('patch multiple functions on same object window.obj, queue calls', ({
  win,
  document,
  navigator,
}) => {
  win.partytown = {
    forward: ['objA.fn0', 'objA.fn1', 'objA.fn2', 'objA.objB.fn3', 'objA.objC.fn4'],
  };
  snippet(win, document, navigator, win, false);
  assert.type(win.objA, 'object');
  assert.type(win.objA.fn0, 'function');
  assert.type(win.objA.fn1, 'function');
  assert.type(win.objA.fn2, 'function');
  assert.type(win.objA.objB.fn3, 'function');
  assert.type(win.objA.objC.fn4, 'function');
  assert.equal(win._ptf, undefined);

  win.objA.fn0('a');
  win.objA.objB.fn3('b');
  win.objA.objC.fn4('c');
  assert.equal(
    JSON.stringify(win._ptf),
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
    forward: ['arr.push'],
  };
  snippet(win, document, navigator, top, false);

  mainForwardTrigger(worker, winId, win);

  win.arr.push('a', 'b');

  const wwArray = ((env.$window$ as any).arr = []);

  const msg = worker.$messages[0][0][1];
  workerForwardedTriggerHandle(msg);
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
    forward: ['fn'],
  };
  snippet(win, document, navigator, top, false);

  mainForwardTrigger(worker, winId, win);

  win.fn('a', 'b');

  let fnCallArgs: any;
  (env.$window$ as any).fn = function () {
    fnCallArgs = arguments;
  };

  const msg = worker.$messages[0][0][1];
  workerForwardedTriggerHandle(msg);
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
    forward: ['arr.push'],
  };
  snippet(win, document, navigator, top, false);

  mainForwardTrigger(worker, winId, win);

  win.arr.push('a', 'b');

  const msg = worker.$messages[0][0];
  assert.equal(msg[0], WorkerMessageType.ForwardMainTrigger);
  assert.equal(msg[1].$winId$, winId);
  assert.equal(msg[1].$forward$, ['arr', 'push']);
  assert.equal(msg[1].$args$[0], SerializedType.Array);
});

test('run queued window.arr.push() call', ({ winId, win, worker, document, navigator, top }) => {
  win.partytown = {
    forward: ['arr.push'],
  };
  snippet(win, document, navigator, top, false);
  win.arr.push('a', 'b');

  mainForwardTrigger(worker, winId, win);
  assert.equal(worker.$messages.length, 1);
  const msg = worker.$messages[0][0];
  assert.equal(msg[0], WorkerMessageType.ForwardMainTrigger);
  assert.equal(msg[1].$winId$, winId);
  assert.equal(msg[1].$forward$, ['arr', 'push']);
  assert.equal(msg[1].$args$[0], SerializedType.Array);
});

test('run queued window.fn() call', ({ winId, win, worker, document, navigator, top }) => {
  win.partytown = {
    forward: ['fn'],
  };
  snippet(win, document, navigator, win, false);
  win.fn('a', 'b');

  mainForwardTrigger(worker, winId, win);
  assert.equal(worker.$messages.length, 1);
  const msg = worker.$messages[0][0];
  assert.equal(msg[0], WorkerMessageType.ForwardMainTrigger);
  assert.equal(msg[1].$winId$, winId);
  assert.equal(msg[1].$forward$, ['fn']);
  assert.equal(msg[1].$args$[0], SerializedType.Array);
});

test('patch window.obj.arr.push(), queue calls', ({ win, document, navigator }) => {
  win.partytown = {
    forward: ['obj.arr.push', 'a.b.c'],
  };
  snippet(win, document, navigator, win, false);
  assert.type(win.obj, 'object');
  assert.equal(Array.isArray(win.obj.arr), true);
  assert.equal(win._ptf, undefined);

  win.obj.arr.push('a', 'b');
  win.a.b.c('z');
  assert.equal(
    JSON.stringify(win._ptf),
    `[["obj","arr","push"],{"0":"a","1":"b"},["a","b","c"],{"0":"z"}]`
  );
});

test('patch window.arr.push(), queue calls', ({ win, document, navigator }) => {
  win.partytown = {
    forward: ['arr.push'],
  };
  snippet(win, document, navigator, win, false);
  assert.equal(Array.isArray(win.arr), true);
  assert.type(win.arr.push, 'function');
  assert.equal(win._ptf, undefined);

  win.arr.push('a', 'b');
  assert.equal(JSON.stringify(win._ptf), `[["arr","push"],{"0":"a","1":"b"}]`);
});

test('patch window.obj.fn(), queue calls', ({ win, document, navigator }) => {
  win.partytown = {
    forward: ['obj.fn'],
  };
  snippet(win, document, navigator, win, false);
  assert.type(win.fn, 'undefined');
  assert.type(win.obj, 'object');
  assert.type(win.obj.fn, 'function');
  assert.equal(win._ptf, undefined);

  win.obj.fn('a', 'b');
  assert.equal(JSON.stringify(win._ptf), `[["obj","fn"],{"0":"a","1":"b"}]`);
});

test('patch window.fn(), queue calls', ({ win, document, navigator }) => {
  win.partytown = {
    forward: ['fn'],
  };
  snippet(win, document, navigator, win, false);
  assert.type(win.fn, 'function');
  assert.equal(win._ptf, undefined);

  win.fn('a', 'b');
  assert.equal(JSON.stringify(win._ptf), `[["fn"],{"0":"a","1":"b"}]`);

  win.fn('c');
  assert.equal(JSON.stringify(win._ptf), `[["fn"],{"0":"a","1":"b"},["fn"],{"0":"c"}]`);
});

test('no window._ptf if no forward config', ({ window, document, navigator }) => {
  snippet(window, document, navigator, window, false);
  assert.equal(window._ptf, undefined);

  window.partytown = {};
  snippet(window, document, navigator, window, false);
  assert.equal(window._ptf, undefined);

  window.partytown = { forward: [] };
  snippet(window, document, navigator, window, false);
  assert.equal(window._ptf, undefined);
});


// Test "pushBack" functionnality
test('pushBack: run window.arr.push() call after initialized', ({
  winId,
  win,
  worker,
  document,
  navigator,
  top,
}) => {
  win.partytown = {
    forward: ['arr.push', 'obj', 'extraObj.push'],
    pushBack: ['arr.push', 'extraObj.push'],
  };
  snippet(win, document, navigator, top, false);

  mainForwardTrigger(worker, winId, win);

  win.arr.push('a', 'b');
  assert.equal(win.arr, ['a', 'b']);

  win.extraObj.push('c');
  assert.equal(win.extraObj, ['c']);


  // keep checking existing functionnality
  const msg = worker.$messages[0][0];
  assert.equal(msg[0], WorkerMessageType.ForwardMainTrigger);
  assert.equal(msg[1].$winId$, winId);
  assert.equal(msg[1].$forward$, ['arr', 'push']);
  assert.equal(msg[1].$args$[0], SerializedType.Array);
});

test('pushBack: run queued window.arr.push() call', ({ winId, win, worker, document, navigator, top }) => {
  win.partytown = {
    forward: ['arr.push', 'obj', 'extraObj.push'],
    pushBack: ['arr.push', 'extraObj.push'],
  };
  snippet(win, document, navigator, top, false);
  win.arr.push('a', 'b');
  win.extraObj.push('c');

  mainForwardTrigger(worker, winId, win);

  assert.equal(win.arr, ['a', 'b']);
  assert.equal(win.extraObj, ['c']);

  // keep checking existing functionnality
  assert.equal(worker.$messages.length, 2);
  const msg = worker.$messages[0][0];
  assert.equal(msg[0], WorkerMessageType.ForwardMainTrigger);
  assert.equal(msg[1].$winId$, winId);
  assert.equal(msg[1].$forward$, ['arr', 'push']);
  assert.equal(msg[1].$args$[0], SerializedType.Array);
});


test.run();
