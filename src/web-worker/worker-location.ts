export class WorkerLocation extends URL {
  assign() {}
  reload() {}
  replace() {}
}

export const setLocation = (url: string) => console.trace(`attempted location change: ${url}`);
