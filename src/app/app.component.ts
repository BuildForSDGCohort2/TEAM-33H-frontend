import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from './models/user.model';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'Sika';
  hide: boolean;
  constructor(private authenService: AuthService, private router: Router) {
  }
  ngOnInit() {
  }
  ngDoCheck() {
    this.authenService.currentUserValue ? this.hide = false : this.hide = true;
  }
}
