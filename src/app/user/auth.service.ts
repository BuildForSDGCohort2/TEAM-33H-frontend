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
    return this.http.post('https://sikabe.herokuapp.com/api/user/register', formValues, {observe: 'response', responseType: 'text'});
  }

}
