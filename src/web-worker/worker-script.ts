import { Document, setDocumentCurrentScript, webWorkerContext } from './worker-proxy';
import type { InitializeScriptData } from '../types';
import { logWorker } from '../utils';

export const initMainScriptsInWebWorker = (
  doc: Document,
  initializeScripts: InitializeScriptData[]
) => {
  initializeScripts.forEach((initializeScript) => {
    if (initializeScript.$url$) {
      initializeScriptUrl(doc, initializeScript.$id$, initializeScript.$url$);
    } else if (initializeScript.$content$) {
      initializeScriptContent(doc, initializeScript.$id$, initializeScript.$content$);
    }
  });
};

const initializeScriptContent = (doc: Document, id: number, scriptContent: string) => {
  try {
    logWorker(`initialize script content (${id})`);
    setDocumentCurrentScript(doc, null, scriptContent);
    const runScript = new Function(scriptContent);
    runScript();
    webWorkerContext.$currentScript$ = null;
  } catch (e) {
    console.error(`Party foul, content (${id}):`, e, '\n' + scriptContent);
  }
};

const initializeScriptUrl = (doc: Document, id: number, scriptUrl: string) => {
  try {
    logWorker(`initialize script url (${id}): ${scriptUrl}`);
    importScriptUrl(doc, scriptUrl);
  } catch (e) {
    console.error(`Party foul, url "${scriptUrl}", (${id}):`, e);
  }
};

export const importScriptUrl = (doc: Document, scriptUrl: string) => {
  setDocumentCurrentScript(doc, scriptUrl);
  webWorkerContext.$importScripts$(scriptUrl);
  webWorkerContext.$currentScript$ = null;
};
