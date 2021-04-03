// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Propios
import { LoginComponent } from './login/login.component';

const routes: Routes = 
[
  {
    path: '',
    children:
    [
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: 'login' },
    ]
  }

];

@NgModule({
  imports: 
  [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
