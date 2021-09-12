import { getter, proxy, setter } from './worker-proxy';
import { ExtraInstruction, InterfaceType, NodeName, PlatformApiId } from '../types';
import { InstanceIdKey, InterfaceTypeKey, PrivateValues, WinIdKey } from './worker-constants';
import { PT_SCRIPT, PT_SCRIPT_TYPE } from '../utils';
import { resolveUrl, WorkerSrcElement } from './worker-node';
import { WorkerDocument } from './worker-document';

export class WorkerIFrameElement extends WorkerSrcElement {
  [PrivateValues]: {
    c?: boolean;
    $url$?: string;
    $window$?: any;
    $initLoad$?: number;
    $onload$?: ((ev: any) => void)[];
    $onerror$?: ((ev: any) => void)[];
  };

  get contentDocument() {
    return this.contentWindow.document;
  }

  get contentWindow(): Window {
    if (!this[PrivateValues].$window$) {
      const partyWinId = getter(this, ['partyWinId'], [ExtraInstruction.WAIT_FOR_INSTANCE_MEMBER]);
      this[PrivateValues].$window$ = new WorkerContentWindow(partyWinId);
    }
    return this[PrivateValues].$window$;
  }

  get src() {
    return this[PrivateValues].$url$ || '';
  }
  set src(url: string) {
    const privateValues = this[PrivateValues];

    url = resolveUrl(url) + '';

    if (privateValues.$url$ !== url) {
      privateValues.$url$ = url;

      fetch(url).then((rsp) => {
        if (rsp.ok) {
          rsp.text().then((content) => {
            setter(this, ['srcdoc'], updateIframeScripts(content));
            if (privateValues.$onload$) {
              privateValues.$onload$.forEach((onload) => onload({ type: 'load' }));
            }
          });
        } else if (privateValues.$onerror$) {
          privateValues.$onerror$.forEach((onerror) => onerror({ type: 'error' }));
        }
      });
    }
  }
}

export class WorkerContentWindow {
  [WinIdKey]: number;
  [InstanceIdKey]: number;
  [InterfaceTypeKey]: number;
  document!: WorkerDocument;
  self!: WorkerContentWindow;
  window!: WorkerContentWindow;

  constructor(partyWinId: number) {
    const _this = this;
    _this[WinIdKey] = partyWinId;
    _this[InstanceIdKey] = PlatformApiId.window;
    _this[InterfaceTypeKey] = InterfaceType.Window;

    _this.document = new WorkerDocument({
      $interfaceType$: InterfaceType.Document,
      $instanceId$: PlatformApiId.document,
      $winId$: partyWinId,
      $nodeName$: NodeName.Document,
    });

    _this.window = _this.self = _this;

    return proxy(InterfaceType.Window, _this, []);
  }

  get top() {
    return new WorkerContentWindow(0);
  }
}

const updateIframeScripts = (html: string) =>
  html
    .replace(/<script>/g, `<script type="${PT_SCRIPT_TYPE}">`)
    .replace(/<script /g, `<script type="${PT_SCRIPT_TYPE}" `)
    .replace(/text\/javascript/g, PT_SCRIPT_TYPE)
    .replace(closingBody, PT_SCRIPT + closingBody);

const closingBody = `</body>`;
