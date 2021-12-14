import type { PartytownForwardProperty } from '../../lib/types';

/**
 * Facebook Pixel script.
 *
 * https://developers.facebook.com/docs/facebook-pixel/get-started
 *
 * @public
 */
export const facebookPixel = (pixelId: string) =>
  `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init',${JSON.stringify(pixelId)});fbq('track','PageView');`;

/**
 * Forwards `fbq()` calls to Partytown's worker thread.
 *
 * @public
 */
export const facebookPixelForward = (): PartytownForwardProperty => 'fbq';
