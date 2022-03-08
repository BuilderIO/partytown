import * as assert from 'uvu/assert';
import { run } from '../../src/lib/web-worker/worker-exec';
import { suite } from './utils';

const test = suite();

test('Class this', ({ env, win }) => {
  const s = `
  class Cls {
    constructor() {
      window.result = this === window;
    }
  }
  new Cls();
  `;
  run(env, s);
  assert.is(win.result, false);
});

test.only('manually define global functions', ({ env, win, config }) => {
  config.globalFns = ['abc', 'xyz'];
  const s = `
    function abc() {
      return true;
    }
    function xyz() {
      return true;
    }
    window.result = window.abc() && window.xyz();
  `;
  run(env, s);
  assert.is(win.result, true);
});

test('this is window', ({ env, win }) => {
  const s = `window.result = this === window;`;
  run(env, s);
  assert.is(win.result, true);
});

test('window is window', ({ env, win }) => {
  const s = `window.result = window === window;`;
  run(env, s);
  assert.is(win.result, true);
});

test.run();
