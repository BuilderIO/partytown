import { callMethod, getter, WorkerProxy } from './bridge';
import { defineCstr } from './utils';

export class TimeRanges extends WorkerProxy {
  start(...args: any[]) {
    return callMethod(this, ['start'], args);
  }

  end(...args: any[]) {
    return callMethod(this, ['end'], args);
  }

  get length() {
    return getter(this, ['length']);
  }
}

defineCstr('TimeRanges', TimeRanges);
