import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { snippet } from '../../src/lib/main/snippet';
import { getDocument, getWindow } from './units';

test('add script', () => {
  const win = getWindow();
  const doc = getDocument();
  snippet(win, doc);
  const script = doc.head.childNodes[0];
  assert.equal(script.async, 1);
  assert.equal(script.src, '/~partytown/partytown.js');
});

test('add debug script', () => {
  const win = getWindow();
  const doc = getDocument();
  win.partytown = {
    debug: true,
  };
  snippet(win, doc);
  const script = doc.head.childNodes[0];
  assert.equal(script.src, '/~partytown/debug/partytown.js');
});

test('config lib', () => {
  const win = getWindow();
  const doc = getDocument();
  win.partytown = {
    lib: '/my-custom-location/',
  };
  snippet(win, doc);
  const script = doc.head.childNodes[0];
  assert.equal(script.async, 1);
  assert.equal(script.src, '/my-custom-location/partytown.js');
});

test('config lib and debug', () => {
  const win = getWindow();
  const doc = getDocument();
  win.partytown = {
    lib: '/my-custom-location/',
    debug: true,
  };
  snippet(win, doc);
  const script = doc.head.childNodes[0];
  assert.equal(script.async, 1);
  assert.equal(script.src, '/my-custom-location/debug/partytown.js');
});

test.run();
