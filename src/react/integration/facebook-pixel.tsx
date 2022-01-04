import React, { Fragment } from 'react';
import {
  facebookPixel,
  facebookPixelForward,
  SCRIPT_TYPE,
} from '@builder.io/partytown/intergration';
import { PartytownScript } from '../script';
import { PartytownForward } from '../forward';

/**
 * https://www.facebook.com/business/help/952192354843755?id=1205376682832142
 *
 * @public
 */
export interface FacebookPixelProps {
  /**
   * Facebook Pixel Id
   */
  pixelId: string;

  /**
   * Setting to `false` will disable using Partytown and instead execute this script the traditional way.
   */
  enablePartytown?: boolean;
}

/**
 * The Facebook Pixel Partytown component should be added after the opening `<head>`
 * tag, but before the `<Partytown/>` component.
 *
 * https://www.facebook.com/business/help/952192354843755?id=1205376682832142
 *
 * @public
 */
export const FacebookPixel = ({ pixelId, enablePartytown }: FacebookPixelProps): any => {
  const usePartytown = enablePartytown !== false;
  return (
    <Fragment>
      {usePartytown ? <PartytownForward id="fbq-fw" forward={facebookPixelForward()} /> : null}
      <PartytownScript
        id="fbq-pt"
        innerHTML={facebookPixel(pixelId)}
        type={usePartytown ? SCRIPT_TYPE : 'text/javascript'}
      />
    </Fragment>
  );
};

/**
 * @public
 */
export const FacebookPixelNoScript = ({ pixelId }: FacebookPixelProps): any => (
  <noscript>
    <img
      height="1"
      width="1"
      style={{ display: 'none' }}
      src={`"https://www.facebook.com/tr?id=${encodeURIComponent(
        pixelId || ''
      )}&amp;ev=PageView&amp;noscript=1"`}
    />
  </noscript>
);
