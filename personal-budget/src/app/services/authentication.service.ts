import { Injectable } from '@angular/core';
import { Users } from '../models/userData';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockUser: Users = new Users('user', 'test');
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(userData: Users): boolean {
    if (this.checkCredentials(userData)) {
      this.isAuthenticated = true;
      this.router.navigate(['dashboard']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(userData: Users): boolean {
    return this.checkLogin(userData.getLogin()) && this.checkPassword(userData.getPassword());
  }

  private checkLogin(login: string): boolean {
    return login === this.mockUser.getLogin();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockUser.getPassword();
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
