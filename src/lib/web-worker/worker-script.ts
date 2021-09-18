import { getInstanceStateValue, setInstanceStateValue } from './worker-instance';
import { getter, setter } from './worker-proxy';
import { scriptElementSetSrc } from './worker-exec';
import { StateProp } from '../types';
import { webWorkerCtx, WinIdKey } from './worker-constants';
import { WorkerSrcElement } from './worker-element';

export class WorkerScriptElement extends WorkerSrcElement {
  get src() {
    if (this[WinIdKey] === webWorkerCtx.$winId$) {
      return getInstanceStateValue(this, StateProp.url) || '';
    }
    return getter(this, ['src']);
  }
  set src(url: string) {
    if (this[WinIdKey] === webWorkerCtx.$winId$) {
      if (getInstanceStateValue(this, StateProp.url) !== url) {
        setInstanceStateValue(this, StateProp.url, url);
        scriptElementSetSrc(this);
      }
    } else {
      setter(this, ['src'], url);
    }
  }

  get type() {
    return getter(this, ['type']);
  }
  set type(type: string) {
    if (type !== 'text/javascript') {
      setter(this, ['type'], type);
    }
  }
}
