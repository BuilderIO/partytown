import type { Document } from './worker-proxy';
import type { InitializeScriptData } from '../types';
import { logWorker } from '../utils';

export const initMainScriptsInWebWorker = (initializeScripts: InitializeScriptData[]) => {
  initializeScripts.forEach((initializeScript) => {
    if (initializeScript.$url$) {
      initializeScriptUrl(initializeScript.$id$, initializeScript.$url$);
    } else if (initializeScript.$content$) {
      initializeScriptContent(initializeScript.$id$, initializeScript.$content$);
    }
  });
};

const initializeScriptContent = (id: number, content: string) => {
  try {
    logWorker(`initialize script content (${id})`);
    const runScript = new Function(content);
    runScript();
  } catch (e) {
    console.error(`party foul, script content (${id}):`, e);
    console.error(content);
  }
};

const initializeScriptUrl = (id: number, url: string) => {
  try {
    logWorker(`initialize script url (${id}): ${url}`);
  } catch (e) {
    console.error(`party foul, script url (${id}):`, e);
    console.error(`Script Url: ${url}`);
  }
};

export const importScriptUrl = (doc: Document, scriptUrl: string) => {
  doc.currentScript = scriptUrl;
  importScripts(scriptUrl);
  doc.currentScript = null;
};
