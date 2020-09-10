import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { PasswordValidator } from '../password.validator';
import { IUser } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  options = ['Education Provider', 'Institution'];
  registrationForm: FormGroup;
  email: FormControl;
  firstName: FormControl;
  lastName: FormControl;
  mobilePhoneNumber: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  success: boolean;
  error: any;

  // getters to prevent cluttering template with repetitive code

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group(
      {
        email: this.email = new FormControl('', [Validators.required, Validators.email]),
        firstName: this.firstName = new FormControl(),
        lastName: this.lastName = new FormControl(),
        mobilePhoneNumber: this.mobilePhoneNumber = new FormControl(),
        password: this.password = new FormControl(
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
            ),
          ],
        ),
        confirmPassword: this.confirmPassword = new FormControl(''),
      },
      { validator: PasswordValidator }
    );
   }
  saveUser(formValues: IUser) {
    this.auth.register(formValues).subscribe(result => {
      if (result) { this.success = true; this.onSuccess(); }
    }, err => {this.error = err.error.error; this.onError(); });
  }
  onSuccess() {
  setTimeout(() => {
    this.success = false;
  }, 5000);
  }
  onError() {
    setTimeout(() => {
      this.error = undefined;
    }, 5000);
  }
}
