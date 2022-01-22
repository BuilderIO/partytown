import { WorkerInstance } from './worker-instance';

export class Performance extends WorkerInstance {
  now() {
    // use the web worker's performance.now()
    // no need to go to main for this
    return performance.now();
  }
}
