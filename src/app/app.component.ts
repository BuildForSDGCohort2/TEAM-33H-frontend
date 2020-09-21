import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sika';
  currentUser: any;
  constructor(private authenService: AuthService, private router: Router) { }
  ngOnInit() {
    this.currentUser = this.authenService.currentUserValue;
    if (this.currentUser) {
      this.router.navigate(['/account']);
    }
  }
}
