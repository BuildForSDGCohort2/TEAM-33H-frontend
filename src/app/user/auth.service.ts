import { Injectable } from '@angular/core';
import { IUser, User } from './user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<User>; // declare the observable with User classs
  constructor(private http: HttpClient) {
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
    return this.http.post('https://sikabe.herokuapp.com/api/v1/user/register', user, { observe: 'response' });
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  login(formValues: any) {
    const userData = {
      email: formValues.email,
      password: formValues.password
    };
    return this.http.post('https://sikabe.herokuapp.com/api/v1/user/signin', userData, { observe: 'response' })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        console.log(user);
        return user;
      }));
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
