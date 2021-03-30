// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Propios

import { AccesoriosComponent } from './accesorios/accesorios.component';
import { CamisasComponent } from './camisas/camisas.component';
import { MainComponent } from '../mujeres/main/main.component';
import { PantalonesComponent } from './pantalones/pantalones.component';
import { ZapatosComponent } from './zapatos/zapatos.component';

const routes: Routes = 
[
  {
    path: '',
    children:
    [
      { path: 'todos', component: MainComponent },
      { path: 'accesorios', component: AccesoriosComponent },
      { path: 'camisas', component: CamisasComponent },
      { path: 'pantalones', component: PantalonesComponent },
      { path: 'zapatos', component: ZapatosComponent },
      { path: '**', redirectTo: 'todos' },
    ]
  }
];

@NgModule({
  imports: 
  [
    RouterModule.forChild(routes)
  ],
  exports: 
  [
    RouterModule
  ]
})
export class HombresRoutingModule { }
