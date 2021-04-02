// Angular

import { NgModule } from '@angular/core';

// Terceros

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';

@NgModule({
  exports:
  [
    AccordionModule,
    ButtonModule,
    MenubarModule,
    OverlayPanelModule,
    TableModule
  ]
})
export class PrimeNGModule { }
