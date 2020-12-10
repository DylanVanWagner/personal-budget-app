import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'pb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-budget';

  constructor(private authenticationService: AuthenticationService) { }

  logout(): void {
    this.authenticationService.logout();
  }
}
