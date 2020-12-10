import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Users } from '../models/userData';

@Component({
  selector: 'pb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isFormValid = false;
  areCredentialsInvalid = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(users: NgForm): void {
    if (!users.valid) {
      this.isFormValid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(users);

  }

  private checkCredentials(userForm: NgForm): void {
    const userData = new Users(userForm.value.login, userForm.value.password);
    if (!this.authenticationService.authenticate(userData)) {
      this.isFormValid = false;
      this.areCredentialsInvalid = true;
    }
  }
}
