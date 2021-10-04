import { Inject, ModuleWithProviders, NgModule, Renderer2, RendererFactory2 } from '@angular/core';
import { PARTYTOWN_CONFIG, PARTYTOWN_SCRIPT_ID } from './types';
import type { PartytownConfig } from '../../../../../lib/types';
import { DOCUMENT } from '@angular/common';
import { partytownSnippet } from '../../../../../index';

@NgModule()
export class PartytownModule {
  constructor(
    @Inject(PARTYTOWN_CONFIG) config: PartytownConfig,
    @Inject(DOCUMENT) private document: Document,
    private _rendererFactory2: RendererFactory2
  ) {
    const renderer = this._rendererFactory2.createRenderer(null, null);

    const script: HTMLScriptElement = renderer.createElement('script');

    script.dataset['partytown'] = 'lib';
    script.id = PARTYTOWN_SCRIPT_ID;
    script.innerHTML = partytownSnippet(config);

    // Add the partytown script to the top of the head element
    const head = this.document.getElementsByTagName('head')[0];
    renderer.appendChild(head, script);
  }

  static forRoot(config: PartytownConfig = {}): ModuleWithProviders<PartytownModule> {
    return {
      ngModule: PartytownModule,
      providers: [
        {
          provide: PARTYTOWN_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
