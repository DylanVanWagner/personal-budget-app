import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'pb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isFormValid = false;
  areCredentialsInvalid = false;
  email: string;
  password: string;

  constructor(public authenticationService: AuthenticationService, private router: Router) { }

  signup() {
    this.authenticationService.signup(this.email, this.password);
    this.email = this.password = '';
    this.router.navigate(['dashboard'])
  }

  login() {
    this.authenticationService.login(this.email, this.password);
    this.email = this.password = '';
    this.router.navigate(['dashboard'])
  }

  logout() {
    this.authenticationService.logout();
  }

  ngOnInit(): void {
  }
}
