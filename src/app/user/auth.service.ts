import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  register(formValues: IUser): Observable<any> {
    const user = {
      email: formValues.email,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      mobilePhoneNumber: formValues.mobilePhoneNumber,
      password: formValues.password,
      identityNumber: formValues.identityNumber
    };
    return this.http.post('https://sikabe.herokuapp.com/api/v1/user/register', user, {observe: 'response', responseType: 'text'});
  }

}
