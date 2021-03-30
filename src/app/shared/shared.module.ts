// Importaciones de Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Importaciones propias
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: 
  [
    HeaderComponent, 
    FooterComponent
  ],
  imports: 
  [
    CommonModule,
    PrimeNGModule
  ],
  exports:
  [
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
