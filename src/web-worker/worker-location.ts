export class WorkerLocation extends URL {
  assign() {}
  reload() {
    console.trace(`reload()`);
  }
  replace() {
    console.trace(`replace()`);
  }
}

export const setLocation = (url: string) => console.trace(`location change: ${url}`);
