import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { LoginComponent } from './login/login.component';
import { AlertsComponent } from '../shared/alerts/alerts.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [UserComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [AuthService]
})
export class UserModule { }
