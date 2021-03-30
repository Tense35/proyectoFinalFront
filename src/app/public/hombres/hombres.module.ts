import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HombresRoutingModule } from './hombres-routing.module';
import { MainComponent } from './main/main.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { PantalonesComponent } from './pantalones/pantalones.component';
import { ZapatosComponent } from './zapatos/zapatos.component';
import { CamisasComponent } from './camisas/camisas.component';


@NgModule({
  declarations: 
  [
    AccesoriosComponent, 
    CamisasComponent,
    MainComponent, 
    PantalonesComponent, 
    ZapatosComponent 
  ],
  imports: 
  [
    CommonModule,
    HombresRoutingModule
  ],
  exports:
  [
    HombresRoutingModule
  ]
})
export class HombresModule { }
