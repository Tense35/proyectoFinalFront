import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndependentRoutingModule } from './independent-routing.module';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [InicioComponent],
  imports: 
  [
    CommonModule,
    IndependentRoutingModule
  ],
  exports:
  [
    IndependentRoutingModule
  ]
})
export class IndependentModule { }
