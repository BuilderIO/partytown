import { callMethod, getter } from './worker-proxy';
import { HTMLElement } from './worker-element';

export const SheetKey = Symbol();

export class HTMLStyleElement extends HTMLElement {
  [SheetKey]: any;

  get sheet() {
    const ownerElement = this;

    if (ownerElement[SheetKey] === undefined) {
      const sheetInfo = getter(ownerElement, ['sheet']);
      if (sheetInfo === null) {
        ownerElement[SheetKey] = sheetInfo;
      } else {
        class CSSStyleSheet {
          get cssRules() {
            return sheetInfo.cssRules;
          }
          deleteRule(index: number) {
            ownerElement[SheetKey] = undefined;
            callMethod(ownerElement, ['sheet', 'deleteRule'], [index]);
          }
          insertRule(rule: any, index: number) {
            ownerElement[SheetKey] = undefined;
            return callMethod(ownerElement, ['sheet', 'insertRule'], [rule, index]);
          }
        }

        ownerElement[SheetKey] = new CSSStyleSheet();
      }
    }
    return ownerElement[SheetKey];
  }
}
