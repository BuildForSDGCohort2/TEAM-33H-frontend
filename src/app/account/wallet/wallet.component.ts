import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  walletFormGroup: FormGroup;
  depositFormGroup: FormGroup;

  // tslint:disable-next-line: variable-name
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.walletFormGroup = this._formBuilder.group({
      cardOwner: new FormControl('', Validators.required),
      cardNumber: new FormControl('', Validators.required),
      expirationDate: new FormControl('', Validators.required),
      cvc: new FormControl('', Validators.required)
    });
    this.depositFormGroup = this._formBuilder.group({
      accountNumber: new FormControl('', Validators.required),
      stokvel: new FormControl('', Validators.required),
      reference: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required)
    });
  }
}
