import * as assert from 'uvu/assert';
import { snippet } from '../../src/lib/main/snippet';
import { suite } from './utils';
import { mainForwardTrigger } from '../../src/lib/sandbox/main-forward-trigger';
import { SerializedType, WorkerMessageType } from '../../src/lib/types';
import { workerForwardedTriggerHandle } from '../../src/lib/web-worker/worker-forwarded-trigger';

const test = suite();

test('run window.arr.push() in the web worker', ({
  winId,
  win,
  env,
  worker,
  document,
  navigator,
}) => {
  win.partytown = {
    forward: ['arr.push'],
  };
  snippet(win, document, navigator, false);

  mainForwardTrigger(worker, winId, win);

  win.arr.push('a', 'b');

  const wwArray = ((env.$window$ as any).arr = []);

  const msg = worker.$messages[0][0][1];
  workerForwardedTriggerHandle(msg);
  assert.equal(wwArray[0], 'a');
  assert.equal(wwArray[1], 'b');
});

test('run window.fn() in the web worker', ({ winId, win, env, worker, document, navigator }) => {
  win.partytown = {
    forward: ['fn'],
  };
  snippet(win, document, navigator, false);

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
}) => {
  win.partytown = {
    forward: ['arr.push'],
  };
  snippet(win, document, navigator, false);

  mainForwardTrigger(worker, winId, win);

  win.arr.push('a', 'b');

  const msg = worker.$messages[0][0];
  assert.equal(msg[0], WorkerMessageType.ForwardMainTrigger);
  assert.equal(msg[1].$winId$, winId);
  assert.equal(msg[1].$forward$, ['arr', 'push']);
  assert.equal(msg[1].$args$[0], SerializedType.Array);
});

test('run queued window.arr.push() call', ({ winId, win, worker, document, navigator }) => {
  win.partytown = {
    forward: ['arr.push'],
  };
  snippet(win, document, navigator, false);
  win.arr.push('a', 'b');

  mainForwardTrigger(worker, winId, win);
  assert.equal(worker.$messages.length, 1);
  const msg = worker.$messages[0][0];
  assert.equal(msg[0], WorkerMessageType.ForwardMainTrigger);
  assert.equal(msg[1].$winId$, winId);
  assert.equal(msg[1].$forward$, ['arr', 'push']);
  assert.equal(msg[1].$args$[0], SerializedType.Array);
});

test('run queued window.fn() call', ({ winId, win, worker, document, navigator }) => {
  win.partytown = {
    forward: ['fn'],
  };
  snippet(win, document, navigator, false);
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
  snippet(win, document, navigator, false);
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
  snippet(win, document, navigator, false);
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
  snippet(win, document, navigator, false);
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
  snippet(win, document, navigator, false);
  assert.type(win.fn, 'function');
  assert.equal(win._ptf, undefined);

  win.fn('a', 'b');
  assert.equal(JSON.stringify(win._ptf), `[["fn"],{"0":"a","1":"b"}]`);

  win.fn('c');
  assert.equal(JSON.stringify(win._ptf), `[["fn"],{"0":"a","1":"b"},["fn"],{"0":"c"}]`);
});

test('no window._ptf if no forward config', ({ window, document, navigator }) => {
  snippet(window, document, navigator, false);
  assert.equal(window._ptf, undefined);

  window.partytown = {};
  snippet(window, document, navigator, false);
  assert.equal(window._ptf, undefined);

  window.partytown = { forward: [] };
  snippet(window, document, navigator, false);
  assert.equal(window._ptf, undefined);
});

test.run();
