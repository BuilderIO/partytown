import { createWebWorker } from './create-web-worker';
import { initSandbox } from './init-sandbox';

initSandbox(window, document, createWebWorker);
