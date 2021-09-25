import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PartytownModule } from '../../../partytown/src/lib/partytown.module';
import { PartytownGtmModule } from '../../../partytown/src/lib/partytown-gtm.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PartytownModule.forRoot(),
    PartytownGtmModule.forRoot({
      containerId: '123',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
