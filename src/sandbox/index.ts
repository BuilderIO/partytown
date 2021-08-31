import { createWebWorker } from './create-web-worker';
import { initSandbox } from './init-sandbox';
import { setMainContext } from './main-context';

setMainContext(window, document);
initSandbox(createWebWorker);
