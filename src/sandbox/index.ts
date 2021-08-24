import { createWebWorker } from './create-web-worker';
import { initSandbox } from './init-sandbox';

const ric = window.requestIdleCallback || setTimeout;

initSandbox(window, document, createWebWorker, ric);
