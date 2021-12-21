import { WorkerProxy } from './worker-proxy-constructor';

export class Performance extends WorkerProxy {
  now() {
    // use the web worker's performance.now()
    // no need to go to main for this
    return performance.now();
  }
}
