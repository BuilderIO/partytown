import React, { Fragment } from 'react';
import {
  googleTagManager,
  googleTagManagerForward,
  SCRIPT_TYPE,
} from '@builder.io/partytown/intergration';
import { PartytownScript } from '../script';
import { PartytownForward } from '../forward';

/**
 * https://developers.google.com/tag-manager/quickstart
 *
 * @public
 */
export interface GoogleTagManagerProps {
  /**
   * Google Tag Manager Container ID, formatted as GTM-XXXXXX
   */
  containerId: string;

  /**
   * The default name of the data layer object initiated by the global site tag or Tag Manager is `dataLayer`.
   * Use this prop to use a different name for your data layer.
   */
  dataLayerName?: string;

  /**
   * Setting to `false` will disable using Partytown and instead execute this script the traditional way.
   */
  enablePartytown?: boolean;
}

/**
 * The Google Tag Manager Partytown component should be added after the opening `<head>`
 * tag, but before the `<Partytown/>` component. This component will add the
 * [Data Layer](https://developers.google.com/tag-manager/devguide) to the main thread
 * window, and will load GTM within the web worker. Any updates to `dataLayer.push(...)`
 * will be forwarded to the Partytown web worker.
 *
 * https://developers.google.com/tag-manager/quickstart
 *
 * @public
 */
export const GoogleTagManager = ({
  containerId,
  dataLayerName,
  enablePartytown,
}: GoogleTagManagerProps): any => {
  let src = `https://www.googletagmanager.com/gtm.js?id=` + containerId;

  if (typeof dataLayerName !== 'string') {
    dataLayerName = 'dataLayer';
  }
  if (dataLayerName !== 'dataLayer') {
    src += '&l=' + dataLayerName;
  }
  const usePartytown = enablePartytown !== false;

  return (
    <Fragment>
      {usePartytown ? <PartytownForward id="gtm-fw" forwards={googleTagManagerForward()} /> : null}
      <script async src={src} type={SCRIPT_TYPE} />
      <PartytownScript
        id="gtm-pt"
        innerHTML={googleTagManager(dataLayerName)}
        type={usePartytown ? SCRIPT_TYPE : 'text/javascript'}
      />
    </Fragment>
  );
};

/**
 * The GTM No Script component should be added immediately after the opening `<body>` tag.
 *
 * https://developers.google.com/tag-manager/quickstart
 *
 * @public
 */
export const GoogleTagManagerNoScript = ({ containerId }: GoogleTagManagerProps): any => (
  <noscript>
    <iframe
      src={'https://www.googletagmanager.com/ns.html?id=' + encodeURIComponent(containerId || '')}
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    ></iframe>
  </noscript>
);
