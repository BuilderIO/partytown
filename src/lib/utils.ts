import { ApplyPath, PlatformInstanceId, RandomId } from './types';

export const debug = !!(globalThis as any).partytownDebug;

export const isPromise = (v: any): v is Promise<unknown> => typeof v === 'object' && v && v.then;

export const noop = () => {};

export const len = (obj: { length: number }) => obj.length;

export const getConstructorName = (obj: { constructor: { name: string } } | undefined | null) => {
  try {
    return obj!.constructor.name;
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

export const EMPTY_ARRAY = [];
if (debug) {
  /*#__PURE__*/ Object.freeze(EMPTY_ARRAY);
}

export const PT_INITIALIZED_EVENT = `pt0`;
export const PT_IFRAME_APPENDED = `pt1`;

export const randomId: RandomId = () =>
  Math.round(Math.random() * 999999999 + PlatformInstanceId.body);

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

const elementConstructorToTagMap: { [key: string]: string } = {
  Anchor: 'a',
  DList: 'dl',
  Image: 'img',
  OList: 'ol',
  Graphics: 'g',
  Paragraph: 'p',
  Quote: 'q',
  TableCaption: 'caption',
  TableCell: 'td',
  TableCol: 'colgroup',
  TableRow: 'tr',
  TableSection: 'tbody',
  UList: 'ul',
};

export const createElementFromConstructor = (
  doc: Document,
  interfaceName: string,
  r?: RegExpMatchArray | null,
  tag?: string
) => {
  r = interfaceName.match(/^(HTML|SVG)(.+)Element$/);
  if (r) {
    tag = elementConstructorToTagMap[r[2]] || r[2];
    return interfaceName[0] == 'S'
      ? doc.createElementNS(
          'http://www.w3.org/2000/svg',
          tag == 'SVG' ? 'svg' : tag.slice(0, 2).toLowerCase() + tag.slice(2)
        )
      : doc.createElement(tag);
  }
};
