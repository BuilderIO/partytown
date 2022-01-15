import { logWorker } from '../log';

export class Location extends URL {
  assign() {
    logWorker(`location.assign(), noop`);
  }
  reload() {
    logWorker(`location.reload(), noop`);
  }
  replace() {
    logWorker(`location.replace(), noop`);
  }
}
