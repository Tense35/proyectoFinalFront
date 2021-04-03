// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './public/independent/inicio/inicio.component';

// Propios



const routes: Routes = 
[
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'hombres',
    loadChildren: () => import('./public/hombres/hombres.module').then( m => m.HombresModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then ( m => m.AdminModule)
  },
  {
    path:'**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes)
  ],
  exports: 
  [
    RouterModule
  ]
})
export class AppRoutingModule { }
