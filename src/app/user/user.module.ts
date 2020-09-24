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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from '@app/helpers/auth.guard';
import { ErrorInterceptor } from '@app/helpers/error.interceptor';
import { JwtInterceptor } from '@app/helpers/jwt.interceptor';


@NgModule({
  declarations: [UserComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ]
})
export class UserModule { }
