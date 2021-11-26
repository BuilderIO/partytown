import { callMethod, getter } from './worker-proxy';
import { getInstanceStateValue, setInstanceStateValue } from './worker-state';
import type { Node } from './worker-node';
import { StateProp } from '../types';

export const HTMLStyleDescriptorMap: PropertyDescriptorMap & ThisType<Node> = {
  sheet: {
    get() {
      return new CSSStyleSheet(this);
    },
  },
};

export class CSSStyleSheet {
  ownerNode: Node;

  constructor(ownerNode: Node) {
    this.ownerNode = ownerNode;
  }

  get cssRules() {
    const ownerNode = this.ownerNode;
    return new Proxy(
      {},
      {
        get(target: any, propKey) {
          const propName = String(propKey);
          if (propName === 'item') {
            return (index: number) => getCssRule(ownerNode, index);
          }
          if (propName === 'length') {
            return getCssRules(ownerNode).length;
          }
          if (!isNaN(propName as any)) {
            return getCssRule(ownerNode, propName);
          }
          return target[propKey];
        },
      }
    );
  }

  insertRule(ruleText: string, index: number | undefined) {
    const cssRules = getCssRules(this.ownerNode);
    index = index === undefined ? 0 : index;
    if (index >= 0 && index <= cssRules.length) {
      callMethod(this.ownerNode, ['sheet', 'insertRule'], [ruleText, index]);
      // insert bogus data so the array/length is correct
      // but later on, if we ever want to "read" this inserted rule
      // we do a real lookup to get the dom correct data
      cssRules.splice(index, 0, 0);
    }
    return index;
  }

  deleteRule(index: number) {
    callMethod(this.ownerNode, ['sheet', 'deleteRule'], [index]);
    const cssRules = getCssRules(this.ownerNode);
    cssRules.splice(index, 1);
  }
}

const getCssRules = (ownerNode: Node): any[] => {
  let cssRules = getInstanceStateValue(ownerNode, StateProp.cssRules);
  if (!cssRules) {
    cssRules = getter(ownerNode, ['sheet', 'cssRules']);
    setInstanceStateValue(ownerNode, StateProp.cssRules, cssRules);
  }
  return cssRules;
};

const getCssRule = (ownerNode: Node, index: any) => {
  let cssRules = getCssRules(ownerNode);
  if (cssRules[index] === 0) {
    cssRules[index] = getter(ownerNode, ['sheet', 'cssRules', parseInt(index, 10)]);
  }
  return cssRules[index];
};
