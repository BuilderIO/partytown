import { callMethod, getter, setter } from './worker-proxy';
import { getEnv } from './worker-environment';
import { getInstanceStateValue, setInstanceStateValue } from './worker-state';
import { HTMLSrcElement } from './worker-element';
import { resolveUrl } from './worker-exec';
import { StateProp } from '../types';

export class HTMLScriptElement extends HTMLSrcElement {
  get innerHTML() {
    return getInstanceStateValue<string>(this, StateProp.innerHTML) || '';
  }
  set innerHTML(scriptContent: string) {
    setInstanceStateValue(this, StateProp.innerHTML, scriptContent);
  }

  get innerText() {
    return this.innerHTML;
  }
  set innerText(content: string) {
    this.innerHTML = content;
  }

  get src() {
    return getInstanceStateValue<string>(this, StateProp.url) || '';
  }
  set src(url: string) {
    url = resolveUrl(getEnv(this), url);
    setInstanceStateValue(this, StateProp.url, url);
    setter(this, ['src'], url);
  }

  getAttribute(attrName: string) {
    if (attrName === 'src') {
      return this.src;
    }
    return callMethod(this, ['getAttribute'], [attrName]);
  }

  setAttribute(attrName: string, attrValue: any) {
    if (attrName === 'src') {
      this.src = attrValue;
    } else {
      callMethod(this, ['setAttribute'], [attrName, attrValue]);
    }
  }

  get textContent() {
    return this.innerHTML;
  }
  set textContent(content: string) {
    this.innerHTML = content;
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
