import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Propios

import { SharedModule } from './shared/shared.module';
import { PrimeNGModule } from './prime-ng/prime-ng.module';

@NgModule({
  declarations: 
  [
    AppComponent
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PrimeNGModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
