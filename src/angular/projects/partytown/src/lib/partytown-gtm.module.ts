import { Inject, ModuleWithProviders, NgModule, Renderer2, RendererFactory2 } from '@angular/core';
import type { GoogleTagManagerProps } from './types';
import { PARTYTOWN_CONFIG, PARTYTOWN_GTM_CONFIG } from './types';
import type { PartytownConfig } from '../../../../../lib/types';
import { DOCUMENT } from '@angular/common';
import { appendForwardConfig, PT_SCRIPT_TYPE } from '../../../../../integrations/utils';
import { googleTagManager } from '../../../../../integrations/gtm';

@NgModule()
export class PartytownGtmModule {
  constructor(
    @Inject(PARTYTOWN_CONFIG) config: PartytownConfig,
    @Inject(PARTYTOWN_GTM_CONFIG) gtmConfig: GoogleTagManagerProps,
    @Inject(DOCUMENT) private document: Document,
    private _rendererFactory2: RendererFactory2
  ) {
    const renderer = this._rendererFactory2.createRenderer(null, null);
    const head = this.document.getElementsByTagName('head')[0];
    const forwardConfigScript: HTMLScriptElement = renderer.createElement('script');

    console.log(forwardConfigScript);

    forwardConfigScript.innerHTML = appendForwardConfig('dataLayer.push');

    renderer.appendChild(head, forwardConfigScript);

    const gtmScript: HTMLScriptElement = renderer.createElement('script');

    gtmScript.type = PT_SCRIPT_TYPE;
    gtmScript.innerHTML = googleTagManager(gtmConfig.containerId);

    renderer.appendChild(head, gtmScript);
  }

  static forRoot(config: GoogleTagManagerProps): ModuleWithProviders<PartytownGtmModule> {
    return {
      ngModule: PartytownGtmModule,
      providers: [
        {
          provide: PARTYTOWN_GTM_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
