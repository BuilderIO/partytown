import type { ApplyPath, RandomId } from './types';

export const debug = !!(globalThis as any).partytownDebug;

export const isPromise = (v: any): v is Promise<unknown> => typeof v === 'object' && v && v.then;

export const noop = () => {};

export const len = (obj: { length: number }) => obj.length;

export const getConstructorName = (obj: { constructor: { name: string } } | undefined | null) => {
  try {
    return obj!.constructor.name;
  } catch (e) {}
  try {
    return obj.__zone_symbol__originalInstance.constructor.name;
  } catch (e) {}
  return '';
};

export const startsWith = (str: string, val: string) => str.startsWith(val);

export const isValidMemberName = (memberName: string) =>
  !(
    startsWith(memberName, 'webkit') ||
    startsWith(memberName, 'toJSON') ||
    startsWith(memberName, 'constructor') ||
    startsWith(memberName, 'toString') ||
    startsWith(memberName, '_')
  );

export const getLastMemberName = (applyPath: ApplyPath, i?: number) => {
  for (i = len(applyPath) - 1; i >= 0; i--) {
    if (typeof applyPath[i] === 'string') {
      return applyPath[i] as string;
    }
  }
  return applyPath[0] as string;
};

export const getNodeName = (node: Node) =>
  node.nodeType === 11 && (node as any).host ? '#s' : node.nodeName;

export const EMPTY_ARRAY = [];
if (debug) {
  /*#__PURE__*/ Object.freeze(EMPTY_ARRAY);
}

export const randomId: RandomId = () =>
  Math.round(Math.random() * Number.MAX_SAFE_INTEGER).toString(36);

/**
 * The `type` attribute for Partytown scripts, which does two things:
 *
 * 1. Prevents the `<script>` from executing on the main thread.
 * 2. Is used as a selector so the Partytown library can find all scripts to execute in a web worker.
 *
 * @public
 */
export const SCRIPT_TYPE = `text/partytown`;

export const SCRIPT_TYPE_EXEC = `-x`;

export const defineProperty = (obj: any, memberName: string, descriptor: PropertyDescriptor) =>
  Object.defineProperty(obj, memberName, { ...descriptor, configurable: true });

export const defineConstructorName = (Cstr: any, value: string) =>
  defineProperty(Cstr, 'name', {
    value,
  });

export const definePrototypeProperty = (
  Cstr: any,
  memberName: string,
  descriptor: PropertyDescriptor
) => defineProperty(Cstr.prototype, memberName, descriptor);

export const definePrototypePropertyDescriptor = (Cstr: any, propertyDescriptorMap: any) =>
  Object.defineProperties(Cstr.prototype, propertyDescriptorMap);

export const definePrototypeValue = (Cstr: any, memberName: string, value: any) =>
  definePrototypeProperty(Cstr, memberName, {
    value,
    writable: true,
  });

const htmlConstructorTags: { [key: string]: string } = {
  Anchor: 'a',
  DList: 'dl',
  Image: 'img',
  OList: 'ol',
  Paragraph: 'p',
  Quote: 'q',
  TableCaption: 'caption',
  TableCell: 'td',
  TableCol: 'colgroup',
  TableRow: 'tr',
  TableSection: 'tbody',
  UList: 'ul',
};

const svgConstructorTags: { [key: string]: string } = {
  Graphics: 'g',
  SVG: 'svg',
};

export const createElementFromConstructor = (
  doc: Document,
  interfaceName: string,
  r?: RegExpMatchArray | null,
  tag?: string
) => {
  r = interfaceName.match(/^(HTML|SVG)(.+)Element$/);
  if (r) {
    tag = r[2];
    return interfaceName[0] == 'S'
      ? doc.createElementNS(
          'http://www.w3.org/2000/svg',
          svgConstructorTags[tag] || tag.slice(0, 2).toLowerCase() + tag.slice(2)
        )
      : doc.createElement(htmlConstructorTags[tag] || tag);
  }
};
