import type { PartytownForwardProperty } from '../../lib/types';

/**
 * Google Tag Manager script.
 *
 * https://developers.google.com/tag-manager/quickstart
 *
 * @public
 */
export const googleTagManager = (opts: { containerId: string; dataLayerName?: string }) =>
  `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script',${JSON.stringify(opts.dataLayerName || 'dataLayer')},${JSON.stringify(
    opts.containerId
  )});`;

/**
 * Forwards Google Tag Manager main window calls to Partytown's worker thread.
 *
 * @public
 */
export const googleTagManagerForward = (): PartytownForwardProperty[] => ['dataLayer.push'];
