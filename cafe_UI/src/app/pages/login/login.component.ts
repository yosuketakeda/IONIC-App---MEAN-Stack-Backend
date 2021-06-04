import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService) { }

  ngOnInit() {
      // reset login status
      this.authenticationService.logout();

      this.returnUrl = '/appOwner/dashboard';
  }

  login() {
      this.loading = true;
      this.authenticationService.login(this.model.username, this.model.password)
          .subscribe(
              data => {
                  if((localStorage.getItem('currentUser')).match('admin')){
                    this.router.navigate([this.returnUrl]);
                  }else{
                    this.router.navigate(['/cafeOwner/dashboard']);
                  }
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
}
