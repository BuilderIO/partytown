import * as assert from 'uvu/assert';
import { suite } from './utils';
import { createSnippet } from '../../src/integration/snippet';

const test = suite();

test('partytownSnippet overwrite existing window.partytown', ({ snippetCode, run, win }) => {
  win.partytown = { lib: 'libpath-1', forward: ['a'] };
  const code = createSnippet(
    {
      lib: 'libpath-2',
      forward: ['b'],
    },
    snippetCode
  );
  run(code);
  assert.equal(win.partytown, { lib: 'libpath-2', forward: ['a', 'b'] });
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
  assert.equal(win.partytown, { lib: 'libpath', forward: ['a', 'b'] });
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
  assert.equal(win.partytown, { forward: ['a', 'b'] });
});

test('partytownSnippet w/ config.forward', ({ snippetCode, run, win }) => {
  const code = createSnippet(
    {
      forward: ['a'],
    },
    snippetCode
  );
  run(code);
  assert.equal(win.partytown, { forward: ['a'] });
});

test('partytownSnippet w/ config', ({ snippetCode, run, win }) => {
  const code = createSnippet({}, snippetCode);
  run(code);
  assert.equal(win.partytown, { forward: [] });
});

test('partytownSnippet w/out config', ({ snippetCode, run, win }) => {
  const code = (createSnippet as any)(null, snippetCode);
  run(code);
  assert.equal(win.partytown, { forward: [] });
});

test.run();
