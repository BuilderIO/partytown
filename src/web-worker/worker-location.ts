import { stackTrace } from '../utils';

export class WorkerLocation extends URL {
  assign() {}
  reload() {}
  replace() {}
}

export const setLocation = (url: string) =>
  console.warn(`attempted location change: ${url}\n${stackTrace()}`);
