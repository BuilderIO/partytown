import { debug, logWorker } from '../utils';

export class Location extends URL {
  assign() {
    if (debug) {
      logWorker(`location.assign(), noop`);
    }
  }
  reload() {
    if (debug) {
      logWorker(`location.reload(), noop`);
    }
  }
  replace() {
    if (debug) {
      logWorker(`location.replace(), noop`);
    }
  }
}
