import { InjectionToken } from '@angular/core';
import type { PartytownConfig } from '../../../../../lib/types';

export const PARTYTOWN_CONFIG = new InjectionToken<PartytownConfig>('partytownConfig');

/**
 * For finding the main script tag to ensure other scripts are added after
 */
export const PARTYTOWN_SCRIPT_ID = 'partytown-script';
export const PARTYTOWN_END_SCRIPT_ID = 'partytown-end-script';

// same type as the gtm.tsx file in react lib, could be moved into core
export interface GoogleTagManagerProps {
  containerId: string;
}

export const PARTYTOWN_GTM_CONFIG = new InjectionToken<GoogleTagManagerProps>('partytownGtm');
