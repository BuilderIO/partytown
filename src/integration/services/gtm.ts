/**
 * https://developers.google.com/tag-manager/quickstart
 */
export const googleTagManager = (dataLayerName: string) =>
  `(window[${dataLayerName}]=window[${dataLayerName}]||[]).push({"gtm.start":new Date().getTime(),event:"gtm.js"});`;
