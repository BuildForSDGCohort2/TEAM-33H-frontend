import { Injectable } from '@angular/core';
import { IUser, User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginStatus = new BehaviorSubject<boolean>(false);
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<User>; // declare the observable with User classs
  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  register(formValues: IUser): Observable<any> {
    const user = {
      email: formValues.email,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      mobilePhoneNumber: formValues.mobilePhoneNumber,
      password: formValues.password,
      identityNumber: formValues.identityNumber
    };
    return this.http.post(`${environment.apiUrl}/api/v1/user/register`, user);
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  get isLoggedIn() {
    return this.loginStatus.asObservable();
  }

  login(formValues: any) {
    const userData = {
      email: formValues.email,
      password: formValues.password
    };
    return this.http.post<any>(`${environment.apiUrl}/api/v1/user/signin`, userData)
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.loginStatus.next(true);
        return user;
      }));
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.loginStatus.next(false);
    this.router.navigate(['/user/signin']);
  }
  checkLoginStatus(): boolean {
    if (1 === 1) {
      return true;
    }
    return false;
  }

}
