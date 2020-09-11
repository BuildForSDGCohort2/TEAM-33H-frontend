import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: '', component: UserComponent,
  children: [
    { path: 'user', component: UserComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'signin', component: LoginComponent },
    { path: '', redirectTo: 'signin', pathMatch: 'full'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
