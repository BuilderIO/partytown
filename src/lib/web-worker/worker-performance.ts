import { defineConstructorName } from '../utils';
import type { WorkerConstructor } from '../types';

export const createPerformanceConstructor = (
  win: any,
  WorkerBase: WorkerConstructor,
  cstrName: string
) => {
  win[cstrName] = defineConstructorName(
    class extends WorkerBase {
      now() {
        // use the web worker's performance.now()
        // no need to go to main for this
        return performance.now();
      }
    },
    cstrName
  );
};
