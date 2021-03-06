import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: 
  [
    CommonModule,
    AdminRoutingModule
  ],
  exports:
  [
    AdminRoutingModule
  ]
})
export class AdminModule { }
