export class WorkerLocation extends URL {
  assign() {}

  reload() {
    console.trace(`reload()`);
  }

  replace() {
    console.trace(`replace()`);
  }
}
