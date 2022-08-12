import * as assert from 'uvu/assert';
import { suite } from './utils';
import { createSnippet } from '../../src/integration/snippet';

const test = suite();

test('partytownSnippet overwrite existing window.partytown', ({ snippetCode, run, win }) => {
  win.partytown = { lib: 'libpath-1', forward: ['a'], forwardCall: ['c'] };
  const code = createSnippet(
    {
      lib: 'libpath-2',
      forward: ['b'],
      forwardCall: ['d'],
    },
    snippetCode
  );
  run(code);
  assert.equal(win.partytown, { lib: 'libpath-2', forward: ['a', 'b'], forwardCall: ['c', 'd'] });
});

test('partytownSnippet merge existing window.partytown', ({ snippetCode, run, win }) => {
  win.partytown = { lib: 'libpath', forward: ['a'] };
  const code = createSnippet(
    {
      forward: ['b'],
    },
    snippetCode
  );
  run(code);
  assert.equal(win.partytown, { lib: 'libpath', forward: ['a', 'b'], forwardCall: [] });
});

test('partytownSnippet w/ existing window.partytown.forward', ({ snippetCode, run, win }) => {
  win.partytown = { forward: ['a'] };
  const code = createSnippet(
    {
      forward: ['b'],
    },
    snippetCode
  );
  run(code);
  assert.equal(win.partytown, { forward: ['a', 'b'], forwardCall: [] });
});

test('partytownSnippet w/ existing window.partytown.forwardCall', ({ snippetCode, run, win }) => {
  win.partytown = { forwardCall: ['a'] };
  const code = createSnippet(
    {
      forwardCall: ['b'],
    },
    snippetCode
  );
  run(code);
  assert.equal(win.partytown, { forward: [], forwardCall: ['a', 'b'] });
});

test('partytownSnippet w/ config.forward', ({ snippetCode, run, win }) => {
  const code = createSnippet(
    {
      forward: ['a'],
    },
    snippetCode
  );
  run(code);
  assert.equal(win.partytown, { forward: ['a'], forwardCall: [] });
});

test('partytownSnippet w/ config.forward', ({ snippetCode, run, win }) => {
  const code = createSnippet(
    {
      forwardCall: ['a'],
    },
    snippetCode
  );
  run(code);
  assert.equal(win.partytown, { forward: [], forwardCall: ['a'] });
});

test('partytownSnippet w/ config', ({ snippetCode, run, win }) => {
  const code = createSnippet({}, snippetCode);
  run(code);
  assert.equal(win.partytown, { forward: [], forwardCall: [] });
});

test('partytownSnippet w/out config', ({ snippetCode, run, win }) => {
  const code = (createSnippet as any)(null, snippetCode);
  run(code);
  assert.equal(win.partytown, { forward: [], forwardCall: [] });
});

test.run();
