import { snippet } from './snippet';

console.log('snippet', location.href);
snippet(window as any, document, navigator, top!, window!.crossOriginIsolated);
