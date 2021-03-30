// Angular

import { NgModule } from '@angular/core';

// Terceros

import { AccordionModule } from 'primeng/accordion';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  exports:
  [
    AccordionModule,
    MenubarModule
  ]
})
export class PrimeNGModule { }
