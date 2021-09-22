import { getInstanceStateValue, setInstanceStateValue } from './worker-instance';
import { getter, setter } from './worker-proxy';
import { ImmediateSettersKey, webWorkerCtx, WinIdKey } from './worker-constants';
import { resolveUrl } from './worker-exec';
import { serializeForMain } from './worker-serialization';
import { StateProp } from '../types';
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
      url = resolveUrl(url) + '';
      setInstanceStateValue(this, StateProp.url, url);
      if (this[ImmediateSettersKey]) {
        this[ImmediateSettersKey]!.push([['src'], serializeForMain(url)]);
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
