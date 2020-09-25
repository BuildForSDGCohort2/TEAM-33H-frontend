import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '@app/models/user.model';
import { ICard, IDeposit } from '@app/models/wallet.model';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }
  createWallet(user: IUser) {
    return this.http.post(`${environment.apiUrl}/api/v1/wallet/create`, user)
    .pipe(map(wallet => {
      this.storeCard(wallet);
      console.log(wallet);
    }));
  }
  deposit(deposit: IDeposit) {
    return this.http.post(`${environment.apiUrl}/api/v1/wallet/deposit`, deposit, { observe: 'response' });
  }
  retrieveBalance() {
    return this.http.get(`${environment.apiUrl}/api/v1/wallet/balance`, { observe: 'response' });
  }
  storeCard(card: any) {
    localStorage.setItem('card', JSON.stringify(card));
  }
}
