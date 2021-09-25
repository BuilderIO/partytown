import { Inject, ModuleWithProviders, NgModule, Renderer2, RendererFactory2 } from '@angular/core';
// TODO this should be an import from @builder.io/partytown/core or something probably
import { PARTYTOWN_CONFIG, PARTYTOWN_SCRIPT_ID } from './types';
// TODO this import doesn't work from within the angular lib
// import PartytownSnippet from '@snippet';
import type { PartytownConfig } from '../../../../../lib/types';
import { DOCUMENT } from '@angular/common';

@NgModule()
export class PartytownModule {
  constructor(
    @Inject(PARTYTOWN_CONFIG) config: PartytownConfig,
    @Inject(DOCUMENT) private document: Document,
    private _rendererFactory2: RendererFactory2
  ) {
    const renderer = this._rendererFactory2.createRenderer(null, null);
    const { forward = [], ...props } = config;

    const script: HTMLScriptElement = renderer.createElement('script');

    script.dataset['partytown'] = 'lib';
    script.id = PARTYTOWN_SCRIPT_ID;

    // This is the same snippet as in the react partytown.tsx component, could be moved into util function
    const html = [
      `(function(w,p,f,c){`,
      Object.keys(props).length > 0
        ? `c=w[p]=Object.assign(w[p]||{},${JSON.stringify(props)});`
        : `c=w[p]=w[p]||{};`,
      `c[f]=(c[f]||[])`,
      forward.length > 0 ? `.concat(${JSON.stringify(forward)})` : ``,
      `})(window,'partytown','forward');`,
    ];

    script.innerHTML = `${html.join('')}`;
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
