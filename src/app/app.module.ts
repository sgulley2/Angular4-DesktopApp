import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReicoModule } from './reico_module/reico.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { QuoteComponent } from './components/quote/quote.component';
import { QuoteDetailComponent } from './components/detail/quote.detail.component';
import { OnlineSalesService } from './services/onlinesales.service';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule,
    ReicoModule,
    AppRoutingModule
  ],
  providers: [
    OnlineSalesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
