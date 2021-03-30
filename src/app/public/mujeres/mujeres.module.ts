import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MujeresRoutingModule } from './mujeres-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MujeresRoutingModule
  ]
})
export class MujeresModule { }
