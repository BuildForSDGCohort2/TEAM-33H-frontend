import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [UserComponent, RegisterComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [UserComponent, RegisterComponent]
})
export class UserModule { }
