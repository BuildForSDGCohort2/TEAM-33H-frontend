import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{ path: '', component: UserComponent,
children: [{
  path: 'user', component: UserComponent
},
{path: 'register', component: RegisterComponent }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
