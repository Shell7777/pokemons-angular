import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeViewComponent } from './poke-view/poke-view.component';
import { PokeDetailsViewComponent } from './poke-details-view/poke-details-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeViewComponent,
    PokeDetailsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
